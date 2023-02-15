import { Navigate } from "react-router-dom";

export type UnauthRouteProps = {
  isAuthenticated: boolean;
  navigatePath: string;
  outlet: JSX.Element;
};

export default function UnauthRoute({
  isAuthenticated,
  navigatePath,
  outlet,
}: UnauthRouteProps) {
  if (!isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: navigatePath }} />;
  }
}
