
export function validateEmail(emailInput) {
    const email = emailInput.value;
    if (email === "") {
        return false;
    }
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return regex.test(email);
}