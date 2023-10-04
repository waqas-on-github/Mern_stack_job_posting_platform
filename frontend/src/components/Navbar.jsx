import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import { DashBoardContext } from "./pages/DashboardLayout";
import { useContext } from "react";

const Navbar = () => {
  const { toggleSideBar } = useContext(DashBoardContext);

  return (
    <Wrapper>
      <div className="nav-center">
        <button  onClick={toggleSideBar} type="button" className="toggle-btn">
          <FaAlignLeft />
        </button>
        <div>
          <img src={logo} alt="logo" />
          <h4 className="logo-text">Dashboard </h4>
        </div>
        <div className="btn-container">login/logout</div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
