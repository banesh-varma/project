import { useState } from "react"
import RightNavItems from "./RightNavItems"
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { BsChatSquareText } from "react-icons/bs";

const rightNav = [
    {
        name: "Calender",
        icon: <IoCalendarNumberOutline />,
        inputType: "date"
    },
    {
        name: "Updates",
        icon: <MdOutlineTipsAndUpdates />,
        inputType: "textarea"
        
    },
    {
        name: "Chats",
        icon: <BsChatSquareText />,
        inputType: "textarea"
    }
]

const RightNavBar = () => {
    const [isOpen, changeIsOpen] = useState(true)
    
    const displayIcon = isOpen ? <MdChevronRight className="text-xl size-6 cursor-pointer" onClick={() => changeIsOpen(!isOpen)} />
    : <MdChevronLeft className="text-xl size-6 cursor-pointer" onClick={() => changeIsOpen(!isOpen)} />
  return (
    <div className={`${isOpen? "w-50": "w-10"} bg-neutral-100 p-2 border-l-1`}>
        <div className="border-solid border-b-1 py-2 ">
            {displayIcon}
        </div>
        <ul className="">
            {rightNav.map(eachNav => (<RightNavItems key={eachNav.name} isOpen={isOpen} itemDetails={eachNav} />))}
        </ul>
    </div>
  )
}

export default RightNavBar