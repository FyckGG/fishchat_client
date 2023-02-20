import React from "react";
import { MainPage } from "../pages/MainPage/MainPage";
import { ChatsPage } from "../pages/ChatsPage/ChatsPage";

export interface UIRoute {
  path: string;
  page: JSX.Element;
}

export enum RouteNames {
  MAIN = "/",
  CHATS = "/chats",
}

export const UnauthorizedRoutes: UIRoute[] = [
  { path: RouteNames.MAIN, page: <MainPage /> },
];

export const AuthorizedRoutes: UIRoute[] = [
  { path: RouteNames.CHATS, page: <ChatsPage /> },
];
