// import DashBoard from './components/DashBoard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import LeftNav from './components/LeftNav'
import RightNavBar from './components/RightNavBar'
import DashBoard from './components/DashBoard'
import Clinets from './components/client/Clinets'
import { useEffect } from 'react'

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
      <Header/>
      <BrowserRouter>
        <div className='h-[103vh] w-full flex justify-between overflow-auto'>
          <div className='flex w-full'>
            <LeftNav/>
            <div className='w-full max-h-full overflow-auto'>
            <Routes>
              <Route path='/' element={<DashBoard/>}/>
              <Route path='/settings' element={<DashBoard/>}/>
              <Route path='/services' element={<DashBoard/>}/>
              <Route path='/payRoll' element={<DashBoard/>}/>
              <Route path='/professionals' element={<DashBoard/>}/>
              <Route path='/consultants' element={<DashBoard/>}/>
              <Route path='/clients' element={<Clinets/>}/>
              <Route path='/tasks' element={<DashBoard/>}/>
              <Route path='/inward-outward' element={<DashBoard/>}/>
              <Route path='/requests' element={<DashBoard/>}/>
              <Route path='/calls' element={<DashBoard/>}/>
              <Route path='/chats' element={<DashBoard/>}/>
              <Route path='/whatsup' element={<DashBoard/>}/>
              <Route path='/email' element={<DashBoard/>}/>
              <Route path='/accounts' element={<DashBoard/>}/>
              <Route path='/reports' element={<DashBoard/>}/>
            </Routes>
            </div>
          </div>
          <RightNavBar />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
