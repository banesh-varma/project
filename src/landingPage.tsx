import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginWithCarousel() {
    const [haveAccount, setHaveAccount] = useState(false)
    const navigate = useNavigate();
  return (
    <div className='h-full w-full'>
      <nav className="bg-blue-600 shadow px-6 py-4 flex justify-between items-center h-[9vh]">
        <div className="text-xl font-bold text-white">N SHIVA PRASAD CO.</div>
        <ul className="hidden sm:flex space-x-6 text-gray-700">
          <li><a href="#" className="text-neutral-300 hover:text-white">Home</a></li>
          <li><a href="#" className="text-neutral-300 hover:text-white">Services</a></li>
          <li><a href="#" className="text-neutral-300 hover:text-white">Forms</a></li>
          <li><a href="#" className="text-neutral-300 hover:text-white">Knowledge Base</a></li>
          <li><a href="#" className="text-neutral-300 hover:text-white">Contact us</a></li>
        </ul>
      </nav>
    <div className='h-screen w-full flex flex-col justify-center items-center'>
    <div className="flex items-center shadow-md">
      {/* Carousel */}
      <div className="w-full max-w-6xl hidden md:block h-[60vh] mt-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
        >
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-vector/colleagues-analyzing-growth-charts_23-2148856191.jpg?uid=R186072259&ga=GA1.1.2048056236.1743224566&semt=ais_hybrid&w=740"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg?uid=R186072259&ga=GA1.1.2048056236.1743224566&semt=ais_hybrid&w=740"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg?uid=R186072259&ga=GA1.1.2048056236.1743224566&semt=ais_hybrid&w=740"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Login Form */}
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center self-end p-8 ">
        <form className="w-full max-w-sm space-y-2">
          <h2 className="text-2xl font-semibold text-center">Login</h2>
          <label>{haveAccount ? "Mobile No" : "ID"}</label>
          <input
            type="email"
            placeholder={haveAccount ? "Mobile No / PAN No" : "ID"}
            className="w-full px-4 py-1 border rounded"
            />
          <label>{haveAccount? "Create Password": "Password"}</label>
          <input
            type="password"
            placeholder={haveAccount? "Create Password": "Password"}
            className="w-full px-4 py-1 border rounded"
            />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
            onClick={() => navigate('/crm', { replace: true })}
            >
            Sign In
          </button>
          <p className='text-center'>{haveAccount? "have an account?" : "dont have account"} <a onClick={() => setHaveAccount(!haveAccount)} className='underline ml-2 text-blue-400 cursor-pointer'>{haveAccount ? "Sign in" : "create account" }</a></p>
        </form>
        <form className="w-full mt-5 max-w-sm space-y-2">
          <h2 className="text-2xl font-semibold text-center">Query</h2>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-1 border rounded"
            />
          <label>Mobile</label>
          <input
            type="text"
            placeholder="Enter Your Mobile Number"
            className="w-full px-4 py-1 border rounded"
            />
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter Your Mail id"
            className="w-full px-4 py-1 border rounded"
            />
          <label>Query</label>
          <textarea className='w-full px-4 py-1 border rounded' placeholder="Write Your Query here " name="" id=""></textarea>
          <label>Attachments</label>
          <input 
                  type="file" 
                  className="border px-2 py-0.5 w-full text-sm file:border-2 file:border-[#8a8a8a] 
                    file:py-[0.2em] file:px-[0.4em] 
                    file:rounded-[0.2em] 
                    file:bg-gray-300 
                    file:transition-all file:duration-1000 hover:file:bg-[#757575]"
                />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
    </div>
  )
}


        