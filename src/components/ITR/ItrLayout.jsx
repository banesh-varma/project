import Header from "../Header";
import LeftNav from "../LeftNav";
import RightNavBar from "../RightNavBar";
import { Outlet } from 'react-router-dom';

const ItrLayout = () => (
  <div className='h-[111vh]' >
      <Header/>
    <div>
        <Outlet />
    </div>
  </div>
  );
  
  export default ItrLayout;