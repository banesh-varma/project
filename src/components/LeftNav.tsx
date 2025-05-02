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
        link: "/crm",
    },
    {
        name: "Settings",
        icon: <MdOutlineSettings/>,
        link: "crm/settings",
    },
    {
        name: "Services",
        icon: <MdDesignServices/>,
        link: "crm/services",
    },
    {
        name: "PayRoll",
        icon: <SlPaypal/>,
        link: "crm/payRoll",
    },
    {
        name: "Professionals",
        icon: <SiLinuxprofessionalinstitute/>,
        link: "crm/professionals",
    },
    {
        name: "Consultants",
        link: "crm/consultants",
        icon: <MdOutlineDashboard />
    },
    {
        name: "Clients",
        link: "crm/clients",
        icon: <MdOutlineSettings />
    },
    {
        name: "Tasks",
        link: "crm/tasks",
        icon: <MdDesignServices />
    },
    {
        name: "Inward/Outward",
        link: "crm/inward-outward",
        icon: <MdOutlineDashboard />
    },
    {
        name: "Requests",
        link: "crm/requests",
        icon: <SlPaypal />
    },
    {
        name: "Calls",
        link: "crm/calls",
        icon: <MdOutlineDashboard />
    },
    {
        name: "Chats",
        link: "crm/chats",
        icon: <SiLinuxprofessionalinstitute />
    },
    {
        name: "Whatsup",
        link: "crm/whatsup",
        icon: <MdOutlineDashboard />
    },
    {
        name: "Email",
        link: "crm/email",
        icon: <MdOutlineSettings />
    },
    {
        name: "Accounts",
        link: "crm/accounts",
        icon: <SlPaypal />
    },
    {
        name: "Reports",
        link: "crm/reports",
        icon: <SiLinuxprofessionalinstitute />
    },
]

const LeftNav = () => {
    const [isOpen, changeIsOpen] = useState(false)

    function useWindowWidth() {
        useEffect(() => {
          function handleResize() {
            let x = window.innerWidth
            console.log(x)
            if(x <= 1000) {
                changeIsOpen(false)
            }
            else {  
                changeIsOpen(true)
            }
          }
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []); 
      }

    useWindowWidth() 

    return (
        <div className={`${isOpen? "min-w-50": "min-w-18"} h-[103vh] overflow-y-auto bg-gray-50 p-2 border-gr border-r-1 transition-all duration-200 ease-in-out`}>
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