import { useContext } from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import { DashBoardContext } from './pages/DashboardLayout';
import Navlinks from './Navlinks';

const Bigsidebar = () => {
  const ctx = useContext(DashBoardContext);
  console.log(ctx);

  return (
    <Wrapper> 
    <Navlinks/>

    </Wrapper>
  )
}
export default Bigsidebar