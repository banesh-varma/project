import { useState } from "react";
import { AiTwotoneBank } from "react-icons/ai";
import { GiBank } from "react-icons/gi";
import { IoMdContact, IoMdTrash } from "react-icons/io";
import { MdChevronLeft, MdChevronRight, MdEdit, MdMedicalInformation } from "react-icons/md";
import { RiInfoCardFill } from "react-icons/ri";

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

const clients = [
  {
    id: 11,
    name: "Lambda Corp",
    contactNumber: "654-321-7890",
    address: "11 Silicon Valley, Banjara Hills, BH 500011",
  },
  {
    id: 12,
    name: "Mu Solutions",
    contactNumber: "987-654-3210",
    address: "12 Diamond Towers, Somajiguda, SJ 500012",
  },
  {
    id: 13,
    name: "Nu Enterprises",
    contactNumber: "109-876-5432",
    address: "13 Emerald Plaza, Punjagutta, PJ 500013",
  },
  {
    id: 14,
    name: "Xi Innovations",
    contactNumber: "432-109-8765",
    address: "14 Ruby Center, Ameerpet, AP 500014",
  },
  {
    id: 15,
    name: "Omicron Holdings",
    contactNumber: "765-432-1098",
    address: "15 Sapphire Point, Begumpet, BP 500015",
  },
  {
    id: 16,
    name: "Pi Ventures",
    contactNumber: "876-543-2109",
    address: "16 Pearl Arcade, Secunderabad, SD 500016",
  },
  {
    id: 17,
    name: "Rho Ltd.",
    contactNumber: "210-987-6543",
    address: "17 Coral Heights, Bowenpally, BW 500017",
  },
  {
    id: 18,
    name: "Golden Age Corp",
    contactNumber: "888-999-0000",
    address: "18 Legacy Lane, Heritage City, RR 500018",
  },
];

const firms = [
  {
    id: 19,
    name: "Sigma Solutions",
    contactNumber: "345-678-9012",
    address: "19 Titanium Towers, Manikonda, MK 500019",
  },
  {
    id: 20,
    name: "Tau Enterprises",
    contactNumber: "678-901-2345",
    address: "20 Platinum Plaza, Nallagandla, NG 500020",
  },
  {
    id: 21,
    name: "Upsilon Innovations",
    contactNumber: "901-234-5678",
    address: "21 Silver Springs, Miyapur, MP 500021",
  },
  {
    id: 22,
    name: "Phi Holdings",
    contactNumber: "012-345-6789",
    address: "22 Bronze Enclave, Chandanagar, CN 500022",
  },
  {
    id: 23,
    name: "Chi Ventures",
    contactNumber: "567-890-1234",
    address: "23 Copper Crest, Lingampally, LP 500023",
  },
];


let childNavItem = [{icon: <MdMedicalInformation/>, name:"All"},{name: "Client", icon: <RiInfoCardFill />},{name: "Firm", icon:<AiTwotoneBank />}, {name:"Personal", icon:<IoMdContact />}, {name:"Bank", icon:<GiBank/>},{ name:"Edit", icon:<MdEdit/>}, { name:"Delete", icon:<IoMdTrash/>}]
const Clinets = () => {
  const [childOPenClose, setChildOPenClose] = useState(true)
  const [childActiveBtn, setChildActiveBtn] = useState("All")
  return (
    <div>
      <div className="flex">
        <ul className={`${!childOPenClose ? "min-w-28" : "min-w-14"} relative flex flex-col gap-2  border-r-1 h-screen pt-12 transition-all duration-300 ease-in-out`}>
          <button type="button" onClick={()=>setChildOPenClose(!childOPenClose)} className={`${!childOPenClose ? "left-24"  : "left-10"} absolute top-2 bg-blue-800 p-1 text-white outline-0 rounded hover:bg-blue-600 hover:scale-105 text-2xl transition-all duration-300 ease-in-out`}>{!childOPenClose ? <MdChevronLeft/> : <MdChevronRight/>}</button>
          {
            childNavItem.map((eachNav, id) => <li onClick={()=>setChildActiveBtn(eachNav.name)} title={eachNav.name}  className={`${childActiveBtn === eachNav?.name ? "text-black bg-blue-300/50 hover:text-black hover:bg-white scale-105 " : ""} flex gap-2 items-center transition-all mx-1.5 hover:text-black hover:bg-blue-300/50 px-2.5 py-2 border-b-2 border-amber-950 hover:scale-105 `} key={id}><span className="text-xl size-6 cursor-pointer">{eachNav?.icon}</span> <span className={`${childOPenClose && "hidden"} text-sm transition-all duration-700 ease-in-out`}>{eachNav.name}</span></li>)
          }
        </ul>
      <div className="mt-12 mx-5">
      {
          childActiveBtn === childNavItem[0].name && 
          <>
          <h1 className="text-3xl font-bold">All Clients</h1>
          <div className="flex  place-self-center">
          <table className="mt-5 text-center">
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
          </>
        }
        {
          childActiveBtn === childNavItem[1].name && 
          <>
          <h1 className="text-3xl font-bold">{childNavItem[1].name}</h1>
          <div className="flex  place-self-center">
          <table className="mt-5 text-center">
            <thead>
              <tr>
                <th className="border-2 border-gray-300 !w-[384px] font-bold text-xl py-3">Name</th>
                <th className="border-2 border-gray-300 !w-[384px] font-bold text-xl py-3">Contact Number</th>
                <th className="border-2 border-gray-300 !w-[384px] font-bold text-xl py-3">Address</th>
              </tr>
            </thead>
            <tbody>
          {
            clients.map((client) => (
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
          </>
        }
        {
          childActiveBtn === childNavItem[2].name && 
          <>
          <h1 className="text-3xl font-bold">{childNavItem[2].name}</h1>
          <div className="flex  place-self-center">
          <table className="mt-5 text-center">
            <thead>
              <tr>
                <th className="border-2 border-gray-300 !w-[384px] font-bold text-xl py-3">Name</th>
                <th className="border-2 border-gray-300 !w-[384px] font-bold text-xl py-3">Contact Number</th>
                <th className="border-2 border-gray-300 !w-[384px] font-bold text-xl py-3">Address</th>
              </tr>
            </thead>
            <tbody>
          {
            firms.map((client) => (
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
          </>
        }
        {
          childActiveBtn === childNavItem[3].name && <h1 className="text-3xl font-bold">{childActiveBtn}</h1>
        }
                {
          childActiveBtn === childNavItem[4].name && <h1 className="text-3xl font-bold">{childActiveBtn}</h1>
        }
        {
          childActiveBtn === childNavItem[5].name && <h1 className="text-3xl font-bold">{childActiveBtn}</h1>
        }
        {
          childActiveBtn === childNavItem[6].name && <h1 className="text-3xl font-bold">{childActiveBtn}</h1>
        }

        
        
      </div>  
      </div>
    </div>
  )
}

export default Clinets