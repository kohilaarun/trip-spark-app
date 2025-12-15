export const validateName = (value) => {
  let error = "";

  if (value === "") {
    error = "User Name is required";
  } else if (value.length < 4) {
    error = "Must be atleast 4 characters long";
  } else if (/[!@#$%^&*-+]/.test(value)) {
    error = "Special characters not allowed";
  }

  return error;
};

export const validateEmail = (value) => {
  let error = "";

  if (value === "") {
    error = "Email is required";
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/.test(value)) {
    error = "Enter a valid email";
  }
  return error;
};

export const validatePassword = (value) => {
  let error = "";

  if (value === "") {
    error = "Email is requried";
  } else if (/[0-9]/.test(value)) {
    error = "Enter a valid password";
  }
  return error;
};
