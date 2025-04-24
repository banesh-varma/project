// import DashBoard from './components/DashBoard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import LeftNav from './components/LeftNav'
import RightNavBar from './components/RightNavBar'
import DashBoard from './components/DashBoard'
import Clinets from './components/Clinets'



function App() {
  return (
    <div className='h-dvh'>
      <Header/>
      <div className='flex justify-between'>
        <LeftNav/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/Clinets' element={<Clinets/>}/>
          </Routes>
        </BrowserRouter>
        <RightNavBar />
      </div>
    </div>
  )
}

export default App
