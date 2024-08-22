import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Common from "../components/Common.jsx";
import Hero from "../pages/Hero.jsx";
import { AboutUs } from "../components/AboutUs.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [{
        path : '',
        element : <Hero/>
    },{
        path : 'common',
        element : <Common/>
    },
  {
    path:'aboutLunarEdge/aboutUs',
    element:<AboutUs/>
  }]
  },
]);

export default router;
