import { MainPage } from "../pages/MainPage/MainPage";
import { ChatsPage } from "../pages/ChatsPage/ChatsPage";
import { DialogPage } from "../pages/DialogPage/DialogPage";

export interface UIRoute {
  path: string;
  page: JSX.Element;
}

export enum RouteNames {
  MAIN = "/",
  CHATS = "/chats",
  DIALOG = "/dialog",
}

export const UnauthorizedRoutes: UIRoute[] = [
  { path: RouteNames.MAIN, page: <MainPage /> },
];

export const AuthorizedRoutes: UIRoute[] = [
  { path: RouteNames.CHATS, page: <ChatsPage /> },
  { path: RouteNames.DIALOG, page: <DialogPage /> },
];
