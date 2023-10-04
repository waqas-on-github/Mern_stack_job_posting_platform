import Wrapper from "./assets/wrappers/SmallSidebar";
import Logo from './components/Logo'
import Navlinks from "./components/Navlinks";
import { DashBoardContext } from "./components/pages/DashboardLayout";
import { useContext } from "react";

const Smallsidebar = () => {

  const ctx = useContext(DashBoardContext)
  return (
    <Wrapper>
      <div
        className={
          ctx?.showsidebar
            ? "sidebar-container show-sidebar"
            : "sidebar-container"
        }
      >
        <div className="content">
          <button
            onClick={() => ctx.toggleSideBar()}
            type="button"
            className="close-btn"
          >
            X
          </button>
          <header>
            <Logo />
          </header>
           <Navlinks/>
         
        </div>
      </div>
    </Wrapper>
  );
};
export default Smallsidebar;
