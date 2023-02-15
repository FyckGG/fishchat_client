export default interface UserDto {
  acces_token: string;
  refresh_token: string;
  // user: {
  //   id: string;
  //   email: string;
  //   login: string;
  // };
  user: object;
}
