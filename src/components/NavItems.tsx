import { useEffect, useState } from 'react';
import {Link, useLocation } from 'react-router-dom';

interface ItemDetails {
  name: string;
  link: string;
  icon: React.ReactNode;
}


const NavItems = (props: { itemDetails: ItemDetails; isOpen?: boolean; onNavItemClick?: () => void; }) => {
  const [location, setLocation] = useState(false)
    const {itemDetails, isOpen} = props
    const l = useLocation()

    useEffect(()=>{
      let r = l.pathname === itemDetails?.link
      setLocation(r)
    },[l.pathname])

    

  return (
    <li className={`flex gap-2 items-center  hover:scale-105 transition-all mx-1.5 hover:text-black hover:bg-neutral-50 px-2.5 py-2 rounded-xl ${location && "bg-neutral-50 scale-105"}`} >
      <Link to={itemDetails?.link} relative="path" className="w-full flex gap-3 items-center">
        <span className={`${isOpen? "": "text-md py-1 p-0"}`}>{itemDetails.icon}</span>
        <p className={`${isOpen? "" : "hidden"} transition-all duration-100 ease-in-out`}>{itemDetails.name}</p>
      </Link>
    </li>
  )
}

export default NavItems
