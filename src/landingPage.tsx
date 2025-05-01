import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function LoginWithCarousel() {
    const [haveAccount, setHaveAccount] = useState(false)
    const navigate = useNavigate();

    const NextArrow = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLDivElement> }) => (
      <div
        onClick={onClick}
        className="absolute top-1/2 right-10 z-10 transform -translate-y-1/2 bg-gray-100 p-3 rounded-full hover:bg-gray-300 transition-all cursor-pointer text-2xl text-gray-600 hover:text-black"
      >
        <FaArrowRightLong/>
      </div>
    );
    
    const PrevArrow = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLDivElement> }) => (
      <div
        onClick={onClick}
        className="absolute top-1/2 left-10 z-10 transform -translate-y-1/2 bg-gray-100 p-3 rounded-full hover:bg-gray-300 cursor-pointer text-2xl text-gray-600 hover:text-black"
      >
        <FaArrowLeftLong/>
      </div>
    );

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    

    
     
  return (
    <div className='h-screen'>
      <nav className="bg-blue-600 shadow px-6 py-4 flex justify-between items-center h-[9vh]">
        <div className="text-xl font-bold text-white">N SHIVA PRASAD CO.</div>
        <ul className="hidden sm:flex space-x-8 text-gray-700">
          <li><a href="#" className="hover:text-gray-700 font-bold text-white">Home</a></li>
          <li><a href="#" className="hover:text-gray-300 font-bold text-white">Services</a></li>
          <li><a href="#" className="hover:text-gray-300 font-bold text-white">Forms</a></li>
          <li><a href="#" className="hover:text-gray-300 font-bold text-white">Knowledge Base</a></li>
          <li><a href="#" className="hover:text-gray-300 font-bold text-white">Contact us</a></li>
        </ul>
      </nav>
    <div className='w-full flex flex-col justify-center items-center'>
    <div className="grid grid-cols-12 px-6">
      <div className="my-auto mx-auto w-full col-span-8">
      <Slider {...settings}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="p-2">
            <img alt={`img-${i}`} className="object-cover mx-auto"  src="https://img.freepik.com/free-vector/colleagues-analyzing-growth-charts_23-2148856191.jpg?uid=R186072259&ga=GA1.1.2048056236.1743224566&semt=ais_hybrid&w=740"/>
          </div>
        ))}
      </Slider>
      </div>
      <div className=" col-span-4 flex flex-col items-center justify-center self-end p-8 ">
        <form className="w-full max-w-sm space-y-2 border p-3 border-gray-300 shadow-md  rounded-lg">
          <h2 className="text-2xl font-semibold text-center">Login</h2>
          <label>{haveAccount ? "Mobile No" : "ID"}</label>
          <input
            type="email"
            placeholder={haveAccount ? "Mobile No / PAN No / " : "ID"}
            className="w-full px-2 py-1 border rounded"
            />
          <label>{haveAccount? "Create Password": "Password"}</label>
          <input
            type="password"
            placeholder={haveAccount? "Create Password": "Password"}
            className="w-full px-2 py-1 border rounded"
            />
          <div className="text-blue-500 flex items-center justify-between">
          <a href="/forgot-verify" className="underline">Forgot Password?</a>
          <a href="/sign-up">Create New</a>  
          </div>  
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
            onClick={() => navigate('/crm', { replace: true })}
            >
            Sign In
          </button>
        </form>
        <form className="w-full mt-5 max-w-sm space-y-2 border p-3 border-gray-300 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-center">Query</h2>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-2 py-1 border rounded"
            />
          <label>Mobile</label>
          <input
            type="text"
            placeholder="Enter Your Mobile Number"
            className="w-full px-2 py-1 border rounded"
            />
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter Your Mail id"
            className="w-full px-2 py-1 border rounded"
            />
          <label>Query</label>
          <textarea className='w-full px-2 py-1 border rounded' placeholder="Write Your Query here " name="" id=""></textarea>
          <label>Attachments</label>
          <div className="flex gap-2">
            <input 
                type="file" 
                className="border px-2 py-0.5 w-full text-sm file:border-2 file:border-[#8a8a8a] 
                    file:py-[0.2em] file:px-[0.4em] 
                    file:rounded-[0.2em] 
                    file:bg-gray-300 
                    file:transition-all file:duration-1000 hover:file:bg-[#757575]  rounded"
              />
              <input type="text" className="border px-2 p rounded" placeholder="Description"/> 

          </div>
          
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


        