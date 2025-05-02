// const gstNav = [
//     {
//         name: "Settings",
//         link: "crm/settings",
//     },
// ]

// const GSThome = () => {
//   return (
//     <div>GSThome</div>
//   )
// }

// export default GSThome
//arrows
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

//navItems icons
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { SlPaypal } from "react-icons/sl";
import { SiLinuxprofessionalinstitute } from "react-icons/si";
import Header from "../Header";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const GSTNavItems = [
    {
        name: "Financial Year",
        icon: <MdOutlineSettings/>,
    },
    {
        name: "Dashboard",
        icon: <MdDesignServices/>,
    },
    {
        name: "Returns Dashboard",
        icon: <SlPaypal/>,
    },
    {
        name: "Registration",
        icon: <SiLinuxprofessionalinstitute/>,
    },
    {
        name: "Profile",
        icon: <MdOutlineDashboard />
    },
    {
        name: "Inventory",
        icon: <MdOutlineSettings />
    },
    {
        name: "Purchases",
        icon: <MdDesignServices />
    },
    {
        name: "Sales",
        icon: <MdOutlineDashboard />
    },
    {
        name: "Returns",
        icon: <SlPaypal />
    },
    {
        name: "Challans",
        // link: "crm/calls",
        icon: <MdOutlineDashboard />
    },
    {
        name: "Other Forms",
        icon: <SiLinuxprofessionalinstitute />
    },
    {
        name: "Notices",
        icon: <MdOutlineDashboard />
    },
    {
        name: "Orders",
        icon: <MdOutlineSettings />
    },
    {
        name: "Reports",
        icon: <SlPaypal />
    },
    {
        name: "Accountants",
        icon: <SiLinuxprofessionalinstitute />
    },
]

const GstLayout = () => {
    const [isOpen, changeIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState('')
    const {pathname} = window.location

    useEffect(()=>{
        
        const name = pathname.split("/")[1]
        if(name !== 'gst'){
            setSelectedItem(name)
        }else{
            setSelectedItem("Financial Year")
        }
    },[pathname])

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
        <div className="h-screen w-full">
        <Header/>
        <div className="flex">
            <div className={`${isOpen? "min-w-52": "min-w-15"} h-[103vh] bg-gray-50 p-2 border-gr border-r-1 transition-all duration-200 ease-in-out`}>
                <button onClick={() => changeIsOpen(!isOpen)}  className={`${isOpen ? "left-46" : "left-11"} ml-2 cursor-pointer outline-0  bg-blue-800 text-white rounded-md p-1 hover:bg-blue-600 hover:scale-105 transition-all duration-200 ease-in-out mb-2`}>
                    {isOpen ? <MdChevronLeft className="text-xl size-6 cursor-pointer"/> : <MdChevronRight className="text-xl size-6 cursor-pointer"/>}
                </button>
                    <hr />
                    <ul className="flex flex-col gap-2 mt-1">
                        {GSTNavItems.map(eachItem => (
                            <li
                            key={eachItem.name}
                            title={eachItem.name}
                            className={`${
                                selectedItem === eachItem.name ? "bg-blue-400" : ""
                            } flex gap-2 items-center transition-all mx-1 hover:text-black bg-gray-50 hover:bg-blue-300/50 px-2.5 py-1 border-b-2 border-amber-950 scale-105 hover:scale-105`}
                            >
                            <Link to={`/${eachItem.name}`} relative="path" className="w-full flex gap-3 items-center">
                                <span className={`${isOpen ? "" : "text-md"}`}>{eachItem.icon}</span>

                                {/* Here's the fix: use opacity and width/overflow to hide text smoothly */}
                                <p
                                className={`transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden ${
                                    isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
                                }`}
                                >
                                {eachItem.name}
                                </p>
                            </Link>
                            </li>
                        ))}
                        </ul>

            </div>
            <div className="w-full h-full">
                <Outlet/>
            </div>
            <div className="min-w-50 max-w-52 h-[103vh] overflow-y-auto bg-gray-50 p-2 border-gr border-l-1 transition-all duration-200 ease-in-out">
                hai good morning have a great day
            </div>
        </div>
    </div>
    )
}

export default GstLayout