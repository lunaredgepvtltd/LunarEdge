import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Common from "../components/Common.jsx";
import Hero from "../pages/Hero.jsx";
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
    }]
  },
]);

export default router;
