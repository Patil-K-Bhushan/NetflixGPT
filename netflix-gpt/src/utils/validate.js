export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const isNameValid =
    /^(?=.{2,50}$)(?=.*\p{L})[\p{L} .'-]+$/u;

  if (!isEmailValid.test(email))
    return "Email ID is not valid.";

  if (!isPasswordValid.test(password))
    return "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.";

  // Validate name only when provided
  if (name && !isNameValid.test(name))
    return "Please enter a valid name using letters, spaces, apostrophes ('), hyphens (-), or periods (.).";

  return null;
};