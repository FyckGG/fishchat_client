import validator from "validator";

const validateEmail = (email: string) => {
  //console.log("vaild " + validator.isEmail(email));
  return validator.isEmail(email);
};

export default validateEmail;
