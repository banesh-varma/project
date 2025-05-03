import Header from "../Header";
import LeftNav from "./LeftNav";
import RightNavBar from "../RightNavBar";
import { Outlet } from 'react-router-dom';

const CmaLayout = () => (
  <div className="">
      <Header/>
      <h1 className="border font-semibold px-1">Heading selected project report name</h1>
    <div className='h-[103vh] w-full flex justify-between overflow-auto'>
      <LeftNav />
      <div className='w-full max-h-full overflow-auto'>
        <Outlet />
      </div>
    </div>
  </div>
  );
  
  export default CmaLayout;