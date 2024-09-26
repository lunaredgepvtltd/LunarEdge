import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Common from "../components/Common.jsx";

import { AboutUs } from "../pages/AboutUs.jsx";
// import { Career } from "../pages/Career.jsx";
import AdminLoginForm from "../components/AdminLoginForm.jsx";
import Services from "../pages/Services.jsx";
import Hero2 from "../pages/Hero2.jsx";
import ContactPage from "../components/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero2 />,
      },
      {
        path: "common",
        element: <Common />,
      },
      {
        path: "AboutLunarEdge/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "career",
        element: <Common />,
      },
      {
        path: "admin",
        element: <AdminLoginForm />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path:"contactus",
        element: <ContactPage/>,
      }
    ],
  },
]);

export default router;
