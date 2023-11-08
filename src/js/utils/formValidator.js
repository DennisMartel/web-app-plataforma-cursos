export const formValidator = (regex, value) => {
  let valid = true;
  if (regex) {
    if (!regex.test(value)) {
      valid = false;
    }
  }
  return valid;
}