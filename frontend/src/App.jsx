import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomeLayout from "./components/pages/HomeLayout"
import Landing from "./components/pages/Landing"
import Register from "./components/pages/Register"
import Login from "./components/pages/Login"




const router = createBrowserRouter([
  {
    path: '/', 
    element: <HomeLayout />,
    errorElement : <h1> error happen </h1> , 
    children: [
      {
        index: true, 
        element : <Landing/>
      }, 
      {
        path: "register", 
        element : <Register/>
      }, 
      {
        path: 'login', 
        element: <Login/>
      }
    ]
  }, 
  {
    path: "/about", 
    element : <h1> about</h1>
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App


