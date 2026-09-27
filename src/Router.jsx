
import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./components/NotFound/NotFound";
import BlogDetails from "./pages/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
       {
        path: "blog/:slug",
        element: <BlogDetails />,
      },
    ],
  },
]);

export default router;

