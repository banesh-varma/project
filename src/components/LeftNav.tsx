//arrows
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

//navItems icons
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { SlPaypal } from "react-icons/sl";
import { SiLinuxprofessionalinstitute } from "react-icons/si";
import NavItems from "./NavItems";
import { useEffect, useState } from "react";

const navItems = [
    {
        name: "Dashboard",
        icon: <MdOutlineDashboard/>,
        link: "/",
    },
    {
        name: "Settings",
        icon: <MdOutlineSettings/>,
        link: "/settings",
    },
    {
        name: "Services",
        icon: <MdDesignServices/>,
        link: "/services",
    },
    {
        name: "PayRoll",
        icon: <SlPaypal/>,
        link: "/payRoll",
    },
    {
        name: "Professionals",
        icon: <SiLinuxprofessionalinstitute/>,
        link: "/professionals",
    },
    {
        name: "Consultants",
        link: "/consultants",
        icon: <MdOutlineDashboard />
    },
    {
        name: "Clients",
        link: "/clients",
        icon: <MdOutlineSettings />
    },
    {
        name: "Tasks",
        link: "/tasks",
        icon: <MdDesignServices />
    },
    {
        name: "Inward/Outward",
        link: "/inward-outward",
        icon: <MdOutlineDashboard />
    },
    {
        name: "Requests",
        link: "/requests",
        icon: <SlPaypal />
    },
    {
        name: "Calls",
        link: "/calls",
        icon: <MdOutlineDashboard />
    },
    {
        name: "Chats",
        link: "/chats",
        icon: <SiLinuxprofessionalinstitute />
    },
    {
        name: "Whatsup",
        link: "/whatsup",
        icon: <MdOutlineDashboard />
    },
    {
        name: "Email",
        link: "/email",
        icon: <MdOutlineSettings />
    },
    {
        name: "Accounts",
        link: "/accounts",
        icon: <SlPaypal />
    },
    {
        name: "Reports",
        link: "/reports",
        icon: <SiLinuxprofessionalinstitute />
    },
]

const LeftNav = () => {
    const [isOpen, changeIsOpen] = useState(false)

    function useWindowWidth() {
        useEffect(() => {
          function handleResize() {
            let x = window.innerWidth
            if(x <= 1000) {
                changeIsOpen(false)
            }
            else {  
                changeIsOpen(true)
            }
          }
      
          window.addEventListener('resize', handleResize);
      
          // Cleanup function to remove the event listener when the component unmounts
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []); // Empty dependency array means this effect runs only once on mount and once on unmount
      }

    useWindowWidth() 

    return (
        <div className={`${isOpen? "min-w-50": "min-w-15"} bg-gray-50 p-2 border-gr border-r-1 transition-all duration-200 ease-in-out`}>
            <button onClick={() => changeIsOpen(!isOpen)}  className={`${isOpen ? "left-46" : "left-11"} ml-2 cursor-pointer outline-0  bg-blue-800 text-white rounded-md p-1 hover:bg-blue-600 hover:scale-105 transition-all duration-200 ease-in-out mb-2`}>
                {isOpen ? <MdChevronLeft className="text-xl size-6 cursor-pointer"/> : <MdChevronRight className="text-xl size-6 cursor-pointer"/>}
            </button>
                <hr />
            <ul className={`flex flex-col gap-2 mt-1`}>
                {navItems.map(eachItem => (<NavItems isOpen={isOpen} key={eachItem.name} itemDetails={eachItem} />))}
            </ul>
        </div>
    )
}

export default LeftNav