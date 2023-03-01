import StoreUser from "./StoreUser";
export default interface UserDto {
  acces_token: string;
  refresh_token: string;

  user: StoreUser;
}
