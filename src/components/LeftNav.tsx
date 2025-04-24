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
import { useState } from "react";

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
        link: "/inwardOutward",
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
    const [isOpen, changeIsOpen] = useState(true)

    const displayIcon = isOpen ? <MdChevronLeft className="text-xl size-6 cursor-pointer" onClick={() => changeIsOpen(!isOpen)} />
    : <MdChevronRight className="text-xl size-6 cursor-pointer" onClick={() => changeIsOpen(!isOpen)} />

    return (
        <div className={`${isOpen? "w-50": "w-10"} bg-neutral-100 p-2 border-r-1`}>
            <div className="border-solid border-b-1 py-2 ">
                {displayIcon}
            </div>
            <ul>
                {navItems.map(eachItem => (<NavItems isOpen={isOpen} key={eachItem.name} itemDetails={eachItem} />))}
            </ul>
        </div>
    )
}

export default LeftNav