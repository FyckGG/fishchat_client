import validator from "validator";

const validatePassword = (password: string) => {
  //console.log(validator.isStrongPassword(password, { minLowercase: 1 }));
  return validator.isStrongPassword(password, { minLowercase: 1 });
};

export default validatePassword;
