import { useState } from 'react'
import NavItems from '../NavItems'
import { SiLinuxprofessionalinstitute } from 'react-icons/si'
import { MdChevronLeft, MdChevronRight, MdDesignServices, MdOutlineDashboard, MdOutlineSettings } from 'react-icons/md'
import { SlPaypal } from 'react-icons/sl'

const navItems = [
    {
        name: "Dashboard",
        icon: <MdOutlineDashboard/>,
        link: "cma",
    },
    {
        name: "Project",
        icon: <MdOutlineSettings/>,
        link: "cma/project",
    },
    {
        name: "Workings",
        icon: <MdDesignServices/>,
        link: "cma/workings",
    },
    {
        name: "Profile",
        icon: <SlPaypal/>,
        link: "cma/profile",
    },
    {
        name: "Project details",
        icon: <SiLinuxprofessionalinstitute/>,
        link: "cma/projectdetails",
    },
    {
        name: "Existing Limits",
        link: "cma/existinglimits",
        icon: <MdOutlineDashboard />
    },
    {
        name: "Manufacturing",
        link: "cma/manufacturing",
        icon: <MdOutlineSettings />
    },
    {
        name: "Profit and Loss Ac",
        link: "cma/profit-and-loss-ac",
        icon: <MdDesignServices />
    },
    {
        name: "Balance Sheet",
        link: "cma/balance-sheet",
        icon: <MdOutlineDashboard />
    },
    {
        name: "FM Tools",
        link: "cma/fm-tools",
        icon: <SlPaypal />
    },
    {
        name: "Reports",
        link: "cma/reports",
        icon: <MdOutlineDashboard />
    },
]

const GSTLeftNav = () => {
  const [isOpen, changeIsOpen] = useState(false)
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
export default GSTLeftNav