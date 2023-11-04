import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import About from "../About/About";

import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Details from "../Services/Details";
import Login from "../Login/Login";
import Register from "../Register/Register";
import CheckOut from "../CheckOut/CheckOut";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/details',
          element: <Details></Details>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;