export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username Required";
  }

  if (!values.email) {
    errors.email = "Email Required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = "Invalid Email";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (!values.password.length < 6) {
    errors.password = "Password needs 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Passwords is required";
  } else if (!values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}
