import { useNavigate } from "react-router-dom"

const listRoutings = ["CRM", "ACC", "GST", "TDS", "ITR", "ROC", "CMA"]

const Header = () => {
  const {pathname} = window.location
  const navigate = useNavigate();

  const currentPath = pathname.split("/")[1];

//   const [selectedOption, setSelectedOption] = useState(currentPath);

    
//   let r = listRoutings.find(each => each === "GST")
// console.log(r)  

//   useEffect(() => {
    
//     setSelectedOption(r ? [r] : [])
//   }, [pathname]);

  return (
    <div className="bg-blue-800 font-medium text-white flex justify-between items-center border-solid border-black border-b-1 px-3 fixed-top py-3">
      <div className="w-130 flex justify-between">
      <h1 className="font-bold text-shadow-md text-shadow-blue-900">N SHIVA PRASAD CO.</h1>
          <select
            className="rounded outline-0 bg-white text-black px-3"
            onChange={(e) => {
              let selectedValue : string | undefined = undefined
              selectedValue = e.target.value;
              navigate(`/${selectedValue.toLowerCase()}`);
            }}
            value={currentPath.toUpperCase()}
          >
            {listRoutings.map(each => (
              <option key={each} value={each}>{each}</option>
            ))}
          </select>
        </div>
      </div>
  );
};

export default Header






















// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { RiContractRightLine } from "react-icons/ri";
// import { RiContractLeftLine } from "react-icons/ri";
// import { HiOutlineHome } from "react-icons/hi2";
// import { AiOutlineTeam } from "react-icons/ai";
// import { FaRegFolderClosed } from "react-icons/fa6";
// import { IoCalendarClearOutline } from "react-icons/io5";
// import { TbReport } from "react-icons/tb";
// import { HiOutlineClipboardDocument } from "react-icons/hi2";

// const navItems = [
//   {
//     name: "Dashboard",
//     link: "/dashboard",
//     logo: <HiOutlineHome/>,
//   },
//   {
//     name: "Teams",
//     link: "/teams",
//     logo: <AiOutlineTeam/>,
//   },
//   {
//     name: "Projects",
//     link: "/projects",
//     logo: <FaRegFolderClosed/>,
//   },
//   {
//     name: "Calendar",
//     link: "/calendar",
//     logo: <IoCalendarClearOutline/>,
//   },
//   {
//     name: "Documents",
//     link: "/documents",
//     logo: <HiOutlineClipboardDocument/>,
//   },
//   {
//     name: "Reoprts",
//     link: "/reoprts",
//     logo: <TbReport/>,
//   },
// ]

// const NavBar = () => {
//   const [status, updateStatus] = useState(false)

//   const onButton = () => {
//     console.log(status)
//     updateStatus(!status)
//   }

//   // const onNavItem = () => {
//   // }

//   const navStatus = status ? 'hidden' : ''
//   const secondNavStatus = !status ? 'hidden' : ''
//   // const maxWidth = status ? 5/10 : 5/10
//   const logBtn = status? <RiContractRightLine onClick={onButton} className="size-6 text-amber-50 rou"/> : <RiContractLeftLine onClick={onButton} className="size-6 text-amber-50"/>
//   return(
//     <div className={`bg-blue-500 max-w- p-2 min-h-dvh`}>
//       <div className={`${navStatus}`}>
//         <div className="flex justify-between">
//           <a href="#">
//             <img className='w-7' src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white" alt="logo" />
//           </a>
//           <span>
//             {logBtn }
//           </span>
//         </div>
//         <ul className="my-2">
//           {navItems.map(each => <li key={each.name} className="flex items-center gap-4 text-amber-50 font-normal mb-1 hover:bg-blue-400"><a className="text-xl">{each.logo}</a><Link to={each.link}>{each.name}</Link></li>)}
//         </ul>
//       </div>
      
//       <div className={`${secondNavStatus}`}>
//         <div className="flex justify-between">
//           <a href="#" className="hidden">
//             <img className='w-7' src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white" alt="logo" />
//           </a>
//           <span>
//           {logBtn }
//           </span>
//         </div>
//         <ul className="my-2">
//           {navItems.map(each => <li key={each.name} className="flex items-center gap-6 text-amber-50 size-9 mb-1 hover: "><a className="text-xl">{each.logo}</a></li>)}
//         </ul>
//         </div>
//     </div>
//   )
// }

// export default NavBar