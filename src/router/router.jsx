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
import PrivateRoute from "../components/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        element: <PrivateRoute><AddQueries /></PrivateRoute>,
      },
      {
        path: "/recommendationsForMe",
        element: <PrivateRoute><RecommendationsForMe /></PrivateRoute>,
      },
      {
        path: "/myQueries",
        element: <PrivateRoute><MyQueries /></PrivateRoute>,
      },
      {
        path: "/query/:id",
        element: <PrivateRoute><QueryDetailsCard /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/query/${params.id}`)
      },
      {
        path: "/query/update/:id",
        element:<PrivateRoute> <QueryUpdate /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/query/${params.id}`)
      },

      // {
      //   path: "/queryDetails",
      //   element: <QueryDetailsCard/>,
      // },
      {
        path: "/myRecommendations",
        element: <PrivateRoute><MyRecommendations /></PrivateRoute>,
      },

      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;