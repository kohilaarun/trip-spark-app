export const validateName = (value) => {
  let error = "";

  if (value === "") {
    error = "User Name is required";
  } else if (value.length < 4) {
    error = "Must be atleast 4 characters long";
  } else if (
    /[^a-zA-Z\s]/.test(value) // set la irukkathu thavira vera ethavathu vantha error varum
  ) {
    error = "Special characters are not allowed";
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
    error = "Password is requried";
  } else if (value.length < 8) {
    error = "Must be atleast 8 characters long";
  } else if (
    !/[!@#$%^&*+-]/.test(value) || //set la irukkathu value la illana error varum
    !/[A-Z]/.test(value) ||
    !/[0-9]/.test(value)
  ) {
    error =
      "Enter atleast one capital letter, one special character (!@#$%^&*+-) and one number";
  }
  return error;
};

export const validateAddress = (value) => {
  let error = "";
  if (value === "") {
    error = "Address is requried";
  } else if (/[^a-zA-Z0-9\s,./:-]/.test(value)) {
    error = "Special characters are not allowed";
  }

  return error;
};

export const validateLogInPasswod = (value) => {
  let error = "";
  if (value === "") {
    error = "Password is requried";
  }

  return error;
};

export const validatePhone = (value) => {
  let error = "";
  if (value === "") {
    error = "Phone number is required";
  } else if (value.length > 10) {
    error = "only 10 characters are allowed";
  } else if (/[^0-9]/.test(value)) {
    error = "only numbers are allowed";
  }

  return error;
};
export const validateMessage = (value) => {
  let error = "";
  if (value === "") {
    error = "Message is requried";
  } else if (value.length >= 100) {
    error = "only 100 words are  allowed";
  } else if (/[^a-zA-Z0-9\s,./:;@#$!%'&-]/.test(value)) {
    error = "Special characters are not allowed";
  }

  return error;
};
