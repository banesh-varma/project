// import DashBoard from './components/DashBoard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import DashBoard from './components/DashBoard'
import Clinets from './components/CRM/Clinets'
import { useEffect } from 'react'
import AllClients from './components/ITR/allClientsPage'
import CrmLayout from './components/CRM/CrmLayout'
import EachClientData from './components/ITR/eachClientData'
import LoginWithCarousel from './landingPage'
import ItrLayout from './components/ITR/ItrLayout'
import GSThome from './components/GST/GSThome'

function App() {
  useEffect(() => {
    // Set zoom level when the component mounts
    document.body.style.zoom = "90%";

    // Optional: Cleanup if necessary
    return () => {
      document.body.style.zoom = "100%"; // Reset on unmount
    };
  }, []);
  return (
    <div className='h-screen w-full'>
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
            <Route path='/gst' element={<GSThome/>}>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
