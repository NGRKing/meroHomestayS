import { createBrowserRouter } from "react-router-dom";
import { AppRoutes, errorForAppRoutes } from "./appRoutes";
import { AuthRoutes, errorForAuthRoutes } from "./authRoutes";

const loginStatus = true;
let errorType = null;
const filterRouts = loginStatus ? AppRoutes : AuthRoutes;
loginStatus
  ? (errorType = errorForAppRoutes())
  : (errorType = errorForAuthRoutes());

const allRouter = createBrowserRouter([
  {
    children: [filterRouts],
    errorElement: errorType,
  },
]);

export default allRouter;
