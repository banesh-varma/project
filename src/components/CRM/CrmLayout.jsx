import LeftNav from "../LeftNav";
import RightNavBar from "../RightNavBar";
import { Outlet } from 'react-router-dom';

const CrmLayout = () => (
    <div className='h-[103vh] w-full flex justify-between overflow-auto'>
      <LeftNav />
      <div className='w-full max-h-full overflow-auto'>
        <Outlet />
      </div>
      <RightNavBar />
    </div>
  );
  
  export default CrmLayout;