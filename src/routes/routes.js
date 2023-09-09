// const GuestRoute = ({ children }) => {};

import { Suspense } from "react";
import Navbar from "../components/Navbar/Navbar";
import Login from "../views/Login/Login";

// const ProtectedRoute = ({ children }) => {};

const routes = [
  {
    path: "",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
];

export default routes;
