import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomeLayout from "./components/pages/HomeLayout"
import Landing from "./components/pages/Landing"
import Register from "./components/pages/Register"
import Login from "./components/pages/Login"
import Error from "./components/pages/Error"
import DashboardLayout from "./components/pages/DashboardLayout"
import AddJob from './components/pages/AddJob'
import AllJobs from "./components/pages/AllJobs";
import Stats from './components/pages/Stats'
import Profile from './components/pages/Profile'
import Admin from "./components/pages/Admin";
import EditJob from "./components/pages/EditJob";





const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/about",
    element: <h1> about</h1>,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AddJob />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "all-jobs",
        element: <AllJobs />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "edit-job/:id",
        element: <EditJob />,
      }
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />
}

export default App


