import { useEffect, useState } from "react"
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
    
    const displayIcon = isOpen ? <MdChevronRight className="text-xl size-6 cursor-pointer"  />
    : <MdChevronLeft className="text-xl size-6 cursor-pointer"/>
  return (
    <div onMouseEnter={()=>changeIsOpen(true)} onMouseLeave={()=>changeIsOpen(false)}  className={`${isOpen? "min-w-50": "min-w-15"} z-10 bg-gray-50 p-2 border-gr border-l-1 transition-all duration-200 ease-in-out`}>
        <div className="flex justify-end mr-2">
            <button onClick={() => changeIsOpen(!isOpen)}  className={`${isOpen ? "left-46" : "left-11"} cursor-pointer outline-0  bg-blue-800 text-white rounded-md p-1 hover:bg-blue-600 hover:scale-105 transition-all duration-200 ease-in-out mb-2`}>
                    {displayIcon}
            </button>
        </div>
        <ul className="flex flex-col gap-2 ">
            <hr/>
            {rightNav.map(eachNav => (<RightNavItems key={eachNav.name} isOpen={isOpen} itemDetails={eachNav} />))}
        </ul>
    </div>
  )
}

export default RightNavBar