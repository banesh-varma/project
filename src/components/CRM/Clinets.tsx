import { useState } from "react";
import IndividualForm from "./IndividualForm";
import { MdAppRegistration, MdChevronLeft, MdChevronRight, MdMedicalInformation } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneBank } from "react-icons/ai";
import { IoMdContact, IoMdHome } from "react-icons/io";
import { IoBusiness, IoSettings } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setChildActiveBtn, setChildOPenClose } from "../../redux/slices/rightClientNavBar";


const all = [
  {
    id: 1,
    name: "Alpha Industries",
    contactNumber: "111-222-3333",
    address: "1 Innovation Street, Tech Park, TP 500001",
  },
  {
    id: 2,
    name: "Beta Solutions",
    contactNumber: "444-555-6666",
    address: "2 Business Avenue, Financial District, FD 500002",
  },
  {
    id: 3,
    name: "Gamma Corp",
    contactNumber: "777-888-9999",
    address: "3 Cyber Towers, IT Hub, IH 500003",
  },
  {
    id: 4,
    name: "Delta Systems",
    contactNumber: "000-111-2222",
    address: "4 Software Colony, Electronic City, EC 500004",
  },
  {
    id: 5,
    name: "Epsilon Group",
    contactNumber: "999-000-1111",
    address: "5 Global Village, Outer Ring Road, OR 500005",
  },
  {
    id: 6,
    name: "Zeta Enterprises",
    contactNumber: "222-333-4444",
    address: "6 Knowledge City, Hi-Tech City, HT 500006",
  },
  {
    id: 7,
    name: "Eta Innovations",
    contactNumber: "555-666-7777",
    address: "7 Startup Zone, Kondapur, KD 500007",
  },
  {
    id: 8,
    name: "Theta Holdings",
    contactNumber: "888-999-0000",
    address: "8 Growth Corridor, Gachibowli, GB 500008",
  },
  {
    id: 9,
    name: "Iota Ventures",
    contactNumber: "123-456-7890",
    address: "9 Progress Enclave, Madhapur, MH 500009",
  },
  {
    id: 10,
    name: "Kappa Ltd.",
    contactNumber: "321-654-0987",
    address: "10 Synergy Park, Jubilee Hills, JH 500010",
  },
];

const forms = ["Add New?", "Individual", "Firm", "HUF"]

let childNavItem = [
  {icon: <MdMedicalInformation/>, name:"G.Info"},
  {name: "P.Info", icon: <CgProfile />},
  {name: "I.Info", icon:<AiTwotoneBank />}, 
  {name:"C.Info", icon:<IoMdContact />}, 
  {name:"R.Info", icon:<IoMdHome/>}, 
  {name:"B.Info", icon:<IoBusiness/>},
  {name: "MSME", icon:<MdAppRegistration/>}, 
  {name:"Bank", icon:<IoBusiness/>}]


const Clinets = () => {
  const dispath = useDispatch()
  const [isFormsBtnActive, setFormsBtnActive] = useState("Add New?")
  const {childActiveBtn, childOPenClose} = useSelector((state: any) => state.rightCLientsNavbar)


  return (
      <div className="flex gap-2 ">
        <div className="w-full h-[103vh] overflow-y-auto">
          <div className="flex items-center justify-between px-3">
            <h1 className="text-2xl font-semibold">Clients : <span className="text-lg">{isFormsBtnActive === "Add New?" ? "All Clients" : isFormsBtnActive}</span></h1>
            <div className="flex items-center justify-between">
              <select  onChange={(e)=>{setFormsBtnActive(e.target.value)}} value={isFormsBtnActive} title="Add New Client Form" className="w-100 !border-2 !border-gray-400 !rounded-lg px-4 py-1 my-2">
                {
                  forms.map((each, id) => <option key={id} value={each}>{each}</option>)
                }
              </select>
              <button type="button" title="Add New Client Form" className="ml-3 text-xl cursor-pointer"><IoSettings className="mt-1"/></button>
            </div>
          </div>
          <hr className=""/>
          <div className="flex gap-2">
            <div className="mx-2">
                {
                  isFormsBtnActive === "Add New?" && 
                  <div className="flex w-full">
                  <table className="w-full mt-5 text-center">
                    <thead>
                      <tr>
                        <th className="border-2 border-gray-300 !w-[384px] font-bold text-xl py-3">Name</th>
                        <th className="border-2 border-gray-300 !w-[384px] font-bold text-xl py-3">Contact Number</th>
                        <th className="border-2 border-gray-300 !w-[384px] font-bold text-xl py-3">Address</th>
                      </tr>
                    </thead>
                    <tbody>
                  {
                    all.map((client) => (
                      <tr key={client.id} className="p-4">
                        <td scope="col" className="border-2 border-gray-300 py-2">
                          <h2 className="text-lg font-semibold">{client.name}</h2>
                        </td>
                        <td  scope="col" className="border-2 border-gray-300">
                          <p className="text-sm text-gray-600"><strong>{client.contactNumber}</strong></p>
                        </td>
                        <td  scope="col" className="border-2 border-gray-300"> 
                          <p className="text-sm text-gray-600"><strong>{client.address}</strong></p>
                        </td>
                      </tr>
                    ))  
                  }
                  </tbody>
                  </table>
                  </div>
                }
                {
                  isFormsBtnActive === "Individual" && 
                  <IndividualForm/>
                }
                {
                  isFormsBtnActive === "Firm" && 
                  <div>Firm</div>
                }
                {
                  isFormsBtnActive === "HUF" && 
                  <div>HUF</div>
                }
            </div>  
          </div>
        </div>

        {
          isFormsBtnActive === "Individual" &&  
            <ul className={`${!childOPenClose ? "min-w-28" : "min-w-14"} bg-white flex flex-col gap-2 border-l-1 min-h-100 pt-2 transition-all duration-300 ease-in-out`}>
              <button type="button" onClick={()=>dispath(setChildOPenClose(!childOPenClose))} className={`ml-auto mr-2.5 bg-blue-800 p-1 text-white outline-0 rounded hover:bg-blue-600 hover:scale-105 text-2xl transition-all duration-300 ease-in-out`}>{childOPenClose ? <MdChevronLeft/> : <MdChevronRight/>}</button>
              <hr className="!mx-1"/>
              {
                childNavItem.map((eachNav, id) => <li onClick={()=> dispath(setChildActiveBtn(eachNav.name))} title={eachNav.name}  className={`${childActiveBtn === eachNav?.name ? "text-black bg-blue-300/50 hover:text-black hover:bg-white scale-105 " : ""}  transition-all mx-1.5 hover:text-black hover:bg-blue-300/50 px-2.5 py-2 border-b-2 border-amber-950 hover:scale-105 `} key={id}>
                  <a href={`#${eachNav.name}`} className="flex gap-2 items-center">
                    <span className="text-xl size-6 cursor-pointer">{eachNav?.icon}</span> <span className={`${childOPenClose && "hidden"} text-sm transition-all duration-700 ease-in-out`}>{eachNav.name}</span>
                  </a>
                </li>
                )
              }
            </ul>
        }

      </div>
  )
}

export default Clinets