import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Common from "../components/Common.jsx";
import Hero from "../pages/Hero.jsx";
import { AboutUs } from "../pages/AboutUs.jsx"
import { Career } from "../pages/Career.jsx";
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
    path:'AboutLunarEdge/AboutUs',
    element:<AboutUs/>
  },
  {
    path:'career',
    element:<Career/>
  }
]
  },
]);

export default router;
