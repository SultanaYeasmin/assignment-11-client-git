import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Queries from "../pages/Queries";
import RecommendationsForMe from "../pages/RecommendationsForMe";
import MyQueries from "../pages/MyQueries";
import MyRecommendations from "../pages/MyRecommendations";
import Registration from "../pages/Registration";
import LogIn from "../pages/LogIn";
import LogOut from "../pages/LogOut";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        // element:  <p className="text-3xl text-red-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum, distinctio dicta obcaecati officia deserunt libero voluptates praesentium voluptatibus amet, quas officiis natus nulla ut autem ratione eum rerum adipisci.</p>
        errorElement: <ErrorPage />,
        children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/queries",
              element: <Queries />,
            },
            {
              path: "/recommendationsForMe",
              element: <RecommendationsForMe />,
            },
            {
              path: "/myQueries",
              element: <MyQueries />,
            },
            {
              path: "/myRecommendations",
              element: <MyRecommendations />,
            },
            {
              path: "/logout",
              element: <LogOut/>,
            },
            {
              path: "/login",
              element: <LogIn></LogIn>,
            },
            {
              path: "/registration",
              element: <Registration/>,
            },
          ],
    },
]);

export default router;