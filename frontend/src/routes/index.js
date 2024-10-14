import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Common from "../components/Common/Common.jsx";


// import { Career } from "../pages/Career.jsx";
// import Services from "../pages/Services.jsx";
import Hero2 from "../pages/Hero2.jsx";
import ContactPage from "../components/ContactPage/ContactPage.jsx";
import ServicesNewTheme from "../components/ServicesNewTheme/ServicesNewTheme.jsx";
// import { Career } from "../pages/Career.jsx";


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
        path: "career",
        element: <Common />,
      },
      {
        path: "services",
        element: <ServicesNewTheme />,
      },
      {
        path:"contactus",
        element: <ContactPage/>,
      }
    ],
  },
]);

export default router;
