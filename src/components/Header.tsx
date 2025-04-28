const Header = () => {
  return(
    <div className="bg-blue-800 font-medium text-white flex justify-between items-center border-solid border-black border-b-1 px-3 fixed-top min-h-[6vh]">
      <div className="w-130 flex justify-between items-center">
      <h1 className="font-bold text-shadow-md text-shadow-blue-900">N SHIVA PRASAD CO.</h1>
        <div className="bg-white mx-4 text-black border-1 border-solid border-black px-4 border-b-0">
          <select className=" p-4 px-5 rounded-md outline-0" name="" id="">
            <option value="">CRM</option>
            <option value="">ACC</option>
            <option value="">GST</option>
            <option value="">TDS</option>
            <option value="">ITR</option>
            <option value="">ROC</option>
            <option value="">CMA</option>
          </select>
        </div>
      </div>
      <div className="font-medium">
        <h1>3:20 hrs</h1>
        <p>Nshiva@gmail.com</p>
      </div>
    </div>
  )
}
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