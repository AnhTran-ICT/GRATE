import {getUsers,saveCurrentUser,getCurrentUser,clearCurrentUser} from "./storage";

export async function loginUser(
    email,
    password
) {
    try {
        const users =
            await getUsers();

        const user =
            users.find(
                existingUser =>
                    existingUser.email &&
                    existingUser.email
                        .toLowerCase() ===
                        email.trim().toLowerCase() &&
                    existingUser.password ===
                        password
            );
        if (!user) {
            return null;
        }
        await saveCurrentUser(
            user
        );
        return user;
    }
    catch (error) {
        console.error(
            "Login error:",
            error
        );
        return null;
    }
}

export async function logoutUser() {
    await clearCurrentUser();
}

export async function getLoggedInUser() {
    return await getCurrentUser();
}