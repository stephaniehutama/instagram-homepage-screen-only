import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import Layout from "../views/Layout";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
    ],
  },
]);
