import { useContext } from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import { DashBoardContext } from './pages/DashboardLayout';
import Navlinks from './Navlinks';
import Logo from './Logo';

const Bigsidebar = () => {
  const ctx = useContext(DashBoardContext);
  console.log(ctx);

  return (
    <Wrapper>
      <div
        className={
          !ctx?.showsidebar
            ? "sidebar-container show-sidebar"
            : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks isbigsidebar={true}  />
        </div>
      </div>
    </Wrapper>
  );
}
export default Bigsidebar