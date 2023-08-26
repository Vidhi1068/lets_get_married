// const GuestRoute = ({ children }) => {};

import { Suspense } from "react";
import Navbar from "../components/Navbar/Navbar";

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
];

export default routes;
