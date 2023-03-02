import { Outlet } from "react-router-dom";

import { Register, Signin } from "../pages/pages";

export const AuthRoutes = {
  element: (
    <>
      <Outlet />
    </>
  ),

  children: [
    { path: "/", element: <Signin /> },
    { path: "/register", element: <Register /> },
  ],
};
export function errorForAuthRoutes() {
  return <div>Error Auth Routing</div>;
}
