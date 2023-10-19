import Smallsidebar from "../../Smallsidebar"
import Wrapper from "../../assets/wrappers/Dashboard"
import { Outlet } from "react-router-dom"
import Bigsidebar from "../Bigsidebar"
import Navbar from "../Navbar"
import { createContext, useState } from "react"


export const DashBoardContext = createContext()

const DashboardLayout = () => {
  // creating context for dashboard 
  

  // temp 
  const  user ={name :"john"}

  const [showsidebar, setshowsidebar] = useState(false)
  const [isDarkTheme, setisDarkTheme] = useState(false)
  
  const toggleDarktheme = () => {
    console.log("toggled dark");
  }
  const toggleSideBar = () => {
    setshowsidebar(!showsidebar)
    console.log("toggleld ");
  }

  const logout = async () => {
    console.log("logging out");
  }
 
const value = {user , toggleDarktheme , toggleSideBar , logout , isDarkTheme , setisDarkTheme , showsidebar }




  return (
    <DashBoardContext.Provider value={value}>
      <Wrapper>
        <main className="dashboard">
          <Smallsidebar />
          <Bigsidebar />
          <div>
            <Navbar />
            <div>
              <Outlet className="dashboard-page" />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashBoardContext.Provider>
  );
}
export default DashboardLayout

