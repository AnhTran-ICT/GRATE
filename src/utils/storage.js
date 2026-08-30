import AsyncStorage from "@react-native-async-storage/async-storage";
import defaultUsers from "../data/users";
const USERS_KEY = "grate_users";
const CURRENT_USER_KEY = "grate_current_user";
const REVIEWS_KEY = "grate_reviews";

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
        return JSON.parse(
            storedUser
        );
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
        return JSON.parse(
            storedReviews
        );
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