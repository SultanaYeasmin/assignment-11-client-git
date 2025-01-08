import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Queries from "../pages/Queries";
import RecommendationsForMe from "../pages/RecommendationsForMe";

import MyRecommendations from "../pages/MyRecommendations";
import Registration from "../pages/Registration";
import LogIn from "../pages/LogIn";
import AddQueries from "../pages/AddQueries";
import MyQueries from "../pages/MyQueries";
import QueryDetailsCard from "../pages/QueryDetailsCard";
import QueryUpdate from "../pages/QueryUpdate";






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
              path: "/addQueries",
              element: <AddQueries/>,
            },
            {
              path: "/recommendationsForMe",
              element: <RecommendationsForMe />,
            },
            {
              path: "/myQueries",
              element: <MyQueries/>,
            },
            {
              path: "/query/:id",
              element: <QueryDetailsCard/>,
              loader: ({params}) => fetch(`http://localhost:5000/query/${params.id}`)
            },
            {
              path: "/query/update/:id",
              element: <QueryUpdate/>,
              loader: ({params}) => fetch(`http://localhost:5000/query/${params.id}`)
            },

            // {
            //   path: "/queryDetails",
            //   element: <QueryDetailsCard/>,
            // },
            {
              path: "/myRecommendations",
              element: <MyRecommendations />,
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