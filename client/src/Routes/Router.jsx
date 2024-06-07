import { createBrowserRouter } from "react-router-dom";
import Layout from './../Layout/Layout';
import Home from './../pages/Home';
import About from './../pages/About';
import Contact from './../pages/Contact';
import Policy from './../pages/Policy';
import PageNotFound from './../pages/PageNotFound';
import Register from './../pages/Auth/Register';
import Login from './../pages/Auth/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout title="Home - UVX Systems" description="Home page description" keywords="home, uvx systems" author="John Doe" />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/about",
    element: <Layout title="About Us - UVX Systems" description="About us page description" keywords="about, uvx systems" author="John Doe" />,
    children: [
      {
        path: "",
        element: <About />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Layout title="Contact - UVX Systems" description="Contact page description" keywords="contact, uvx systems" author="John Doe" />,
    children: [
      {
        path: "",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/policy",
    element: <Layout title="Policy - UVX Systems" description="Policy page description" keywords="policy, uvx systems" author="John Doe" />,
    children: [
      {
        path: "",
        element: <Policy />,
      },
    ],
  },
  {
    path: "*",
    element: <Layout title="Page Not Found - UVX Systems" description="404 page not found" keywords="404, not found" author="John Doe" />,
    children: [
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "/register",
    element: <Layout title="Register - UVX Systems" description="Register" keywords="register" author="John Doe" />,
    children: [
      {
        path: "",
        element: <Register />,
      },
    ],
  },
  {
    path: "/login",
    element: <Layout title="Login - UVX Systems" description="Login Page" keywords="login" author="John Doe" />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
]);

export default router;
