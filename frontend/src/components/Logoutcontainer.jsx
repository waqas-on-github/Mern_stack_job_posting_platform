import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { useContext } from "react";
import { DashBoardContext } from "./pages/DashboardLayout";
const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
   const ctx =useContext(DashBoardContext)
   

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {ctx.user.avatar ? (
          <img src={ctx.user.avatar} alt="avatar" className="img" />
        ) : (
          <FaUserCircle />
        )}
        {ctx.user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={ctx.logout}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
