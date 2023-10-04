import { Home } from "../pages/Home";
import { Access } from "../pages/Access";

export const Routes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/access",
    exact: false,
    children: <Access />
  }
];
