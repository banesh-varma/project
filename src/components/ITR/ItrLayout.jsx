import Header from "../Header";
import LeftNav from "../LeftNav";
import RightNavBar from "../RightNavBar";
import { Outlet } from 'react-router-dom';

const ItrLayout = () => (
  <>
      <Header/>
    <div className='h-[103vh] w-full'>
        <Outlet />
    </div>
  </>
  );
  
  export default ItrLayout;