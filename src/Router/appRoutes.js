import { Outlet } from "react-router-dom";
import FooterComponent from "../component/footer";
import NavbarComponent from "../component/navbar";
import { HomePageComponent, Homestay, Location } from "../pages/pages";

export const AppRoutes = {
  element: (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  ),

  children: [
    { path: "/", element: <HomePageComponent /> },
    { path: "/homestay", element: <Homestay /> },
    { path: "/location", element: <Location /> },
  ],
};

export function errorForAppRoutes() {
  return <div>Error App Routing</div>;
}
