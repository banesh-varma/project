// import DashBoard from './components/DashBoard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import DashBoard from './components/DashBoard'
import Clinets from './components/CRM/Clinets'
import { useEffect, useState } from 'react'
import AllClients from './components/ITR/allClientsPage'
import CrmLayout from './components/CRM/CrmLayout'
import EachClientData from './components/ITR/eachClientData'
import LoginWithCarousel from './landingPage'
import ItrLayout from './components/ITR/ItrLayout'
import GstLayout from './components/GST/GSThome'
import GstFInancial from './components/GST/gstFinancial'
import CmaLayout from './components/CMA/CmaLayout'
import Project from './components/CMA/Project'
import Workings from './components/CMA/Workings'
import { Profile } from './components/CMA/Profile'

function App() {
  useEffect(() => {
    // Set zoom level when the component mounts
    document.body.style.zoom = "90%";

    // Optional: Cleanup if necessary
    return () => {
      document.body.style.zoom = "100%"; // Reset on unmount
    };
  }, []);

  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return width;
  }

  const width = useWindowWidth();
  return (
    <div className='h-screen w-full'>
      {
        width < 1000 ? <div className='h-screen w-full flex flex-col justify-center items-center'>
        <h1 className='text-2xl text-center'>Please use a larger screen</h1>
        <h1 className='text-2xl text-center'>This application is not supported on smaller screens</h1>
      </div> :
      
      <BrowserRouter>
        <Routes>
            {/* CRM routes wrapped in layout */}
            <Route path='/' element={<LoginWithCarousel />} />
            <Route path='/crm' element={<CrmLayout />}>
              <Route index element={<DashBoard />} />
              <Route path='settings' element={<DashBoard />} />
              <Route path='services' element={<DashBoard />} />
              <Route path='payRoll' element={<DashBoard />} />
              <Route path='professionals' element={<DashBoard />} />
              <Route path='consultants' element={<DashBoard />} />
              <Route path='clients' element={<Clinets />} />
              <Route path='tasks' element={<DashBoard />} />
              <Route path='inward-outward' element={<DashBoard />} />
              <Route path='requests' element={<DashBoard />} />
              <Route path='calls' element={<DashBoard />} />
              <Route path='chats' element={<DashBoard />} />
              <Route path='whatsup' element={<DashBoard />} />
              <Route path='email' element={<DashBoard />} />
              <Route path='accounts' element={<DashBoard />} />
              <Route path='reports' element={<DashBoard />} />
            </Route>
            <Route path='/itr' element={<ItrLayout/>}>
              <Route path="" element={<AllClients/>}/>
              <Route path="clients/:id" element={<EachClientData/>}/>
            </Route>          
            <Route path='/gst' element={<GstLayout/>}>
              <Route path="" element={<GstFInancial/>}/>
            </Route>
            <Route path='/cma' element={<CmaLayout/>}>
              <Route path='' element={<DashBoard />} />
              <Route path='project' element={<Project />} />
              <Route path='workings' element={<Workings />} />
              <Route path='profile' element={<Profile />} />
            </Route>
        </Routes>
      </BrowserRouter>
      }
    </div>
  )
}

export default App
