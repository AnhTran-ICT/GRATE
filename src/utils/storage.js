import AsyncStorage from "@react-native-async-storage/async-storage";
import defaultUsers from "../data/users";

const USERS_KEY = "grate_users";
const CURRENT_USER_KEY = "grate_current_user";
const REVIEWS_KEY = "grate_reviews";
const REPORTS_KEY = "grate_reports";

export async function getUsers() {
    try {
        const storedUsers =
            await AsyncStorage.getItem(
                USERS_KEY
            );

        let users = storedUsers
            ? JSON.parse(storedUsers)
            : [];

        defaultUsers.forEach(defaultUser => {
            const exists =
                users.some(
                    user =>
                        user.email &&
                        user.email.toLowerCase() ===
                        defaultUser.email.toLowerCase()
                );

            if (!exists) {
                users.push(defaultUser);
            }
        });

        await AsyncStorage.setItem(
            USERS_KEY,
            JSON.stringify(users)
        );

        return users;
    }
    catch (error) {
        console.error(
            "Error loading users:",
            error
        );

        return defaultUsers;
    }
}

export async function saveUsers(users) {
    try {
        await AsyncStorage.setItem(
            USERS_KEY,
            JSON.stringify(users)
        );
    }
    catch (error) {
        console.error(
            "Error saving users:",
            error
        );
    }
}

export async function saveCurrentUser(user) {
    try {
        await AsyncStorage.setItem(
            CURRENT_USER_KEY,
            JSON.stringify(user)
        );
    }
    catch (error) {
        console.error(
            "Error saving current user:",
            error
        );
    }
}

export async function getCurrentUser() {
    try {
        const storedUser =
            await AsyncStorage.getItem(
                CURRENT_USER_KEY
            );

        if (!storedUser) {
            return null;
        }

        return JSON.parse(storedUser);
    }
    catch (error) {
        console.error(
            "Error loading current user:",
            error
        );

        return null;
    }
}

export async function clearCurrentUser() {
    try {
        await AsyncStorage.removeItem(
            CURRENT_USER_KEY
        );
    }
    catch (error) {
        console.error(
            "Error clearing current user:",
            error
        );
    }
}

/* =========================
   REVIEWS
========================= */

export async function getReviews() {
    try {
        const storedReviews =
            await AsyncStorage.getItem(
                REVIEWS_KEY
            );

        if (!storedReviews) {
            return [];
        }

        return JSON.parse(storedReviews);
    }
    catch (error) {
        console.error(
            "Error loading reviews:",
            error
        );

        return [];
    }
}

export async function saveReviews(reviews) {
    try {
        await AsyncStorage.setItem(
            REVIEWS_KEY,
            JSON.stringify(reviews)
        );
    }
    catch (error) {
        console.error(
            "Error saving reviews:",
            error
        );
    }
}

export async function getReviewsForGame(gameId) {
    const reviews =
        await getReviews();

    return reviews.filter(
        review =>
            review.gameId === gameId
    );
}

export async function getReviewsByUser(userId) {
    const reviews =
        await getReviews();

    return reviews.filter(
        review =>
            review.userId === userId
    );
}

export async function addReview(review) {
    const reviews =
        await getReviews();

    const duplicate =
        reviews.find(
            existingReview =>
                existingReview.gameId === review.gameId &&
                existingReview.userId === review.userId
        );

    if (duplicate) {
        return {
            success: false,
            reason: "duplicate"
        };
    }

    const updatedReviews = [
        ...reviews,
        review
    ];

    await saveReviews(
        updatedReviews
    );

    return {
        success: true
    };
}

export async function updateReview(
    reviewId,
    userId,
    updatedData
) {
    const reviews =
        await getReviews();

    const reviewIndex =
        reviews.findIndex(
            review =>
                review.id === reviewId &&
                review.userId === userId
        );

    if (reviewIndex === -1) {
        return {
            success: false,
            reason: "not_found"
        };
    }

    reviews[reviewIndex] = {
        ...reviews[reviewIndex],
        rating: updatedData.rating,
        reviewText: updatedData.reviewText,
        updatedAt: new Date().toISOString()
    };

    await saveReviews(
        reviews
    );

    return {
        success: true
    };
}

export async function deleteReview(
    reviewId,
    userId
) {
    const reviews =
        await getReviews();

    const review =
        reviews.find(
            existingReview =>
                existingReview.id === reviewId &&
                existingReview.userId === userId
        );

    if (!review) {
        return {
            success: false,
            reason: "not_found"
        };
    }

    const updatedReviews =
        reviews.filter(
            existingReview =>
                existingReview.id !== reviewId
        );

    await saveReviews(
        updatedReviews
    );

    return {
        success: true
    };
}

/* =========================
   REPORTS
========================= */

export async function getReports() {
    try {
        const storedReports =
            await AsyncStorage.getItem(
                REPORTS_KEY
            );

        if (!storedReports) {
            return [];
        }

        return JSON.parse(storedReports);
    }
    catch (error) {
        console.error(
            "Error loading reports:",
            error
        );

        return [];
    }
}

export async function getPendingReports() {
    const reports = await getReports();

    return reports.filter(
        report => report.status === "PENDING"
    );
}

export async function getReviewById(reviewId) {
    const reviews = await getReviews();

    return reviews.find(
        review => review.id === reviewId
    ) || null;
}

export async function saveReports(reports) {
    try {
        await AsyncStorage.setItem(
            REPORTS_KEY,
            JSON.stringify(reports)
        );
    }
    catch (error) {
        console.error(
            "Error saving reports:",
            error
        );
    }
}

export async function addReport(report) {
    const reports =
        await getReports();

    const duplicate =
        reports.find(
            existingReport =>
                existingReport.reviewId === report.reviewId &&
                existingReport.reporterUserId === report.reporterUserId &&
                existingReport.status === "PENDING"
        );

    if (duplicate) {
        return {
            success: false,
            reason: "duplicate"
        };
    }

    const updatedReports = [
        ...reports,
        report
    ];

    await saveReports(
        updatedReports
    );

    return {
        success: true
    };
}