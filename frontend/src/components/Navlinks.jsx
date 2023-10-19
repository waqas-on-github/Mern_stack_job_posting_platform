/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { links } from "../links";
import { useContext } from "react";
import { DashBoardContext } from "./pages/DashboardLayout";


const Navlinks = ({ isbigsidebar }) => {
  const ctx = useContext(DashBoardContext);
    const handleclick = () => {
      !isbigsidebar?ctx.toggleSideBar() :null
  };
  return (
    <div className="nav-links">
      {links?.map((link) => {
        return (
          <div key={link.path}>
            <NavLink
              onClick={handleclick}
              className="nav-link"
              to={link?.path}
            >
              {link?.name}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};
export default Navlinks