import { NavLink } from "react-router-dom";
import { links } from "../links";
import { useContext } from "react";
import { DashBoardContext } from "./pages/DashboardLayout";


const Navlinks = () => {
    
 const ctx = useContext(DashBoardContext)

  return (
    <div className="nav-links">
      {links?.map((link) => {
        return (
          <>
            <NavLink
              onClick={() => ctx.toggleSideBar()}
              className="nav-link"
              to={link?.path}
            >
              {" "}
              {link?.name}
            </NavLink>
          </>
        );
      })}
    </div>
  );
}
export default Navlinks