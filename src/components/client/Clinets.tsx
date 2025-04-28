import { useState } from "react";
import IndividualForm from "./IndividualForm";


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

const Clinets = () => {
  const [isFormsBtnActive, setFormsBtnActive] = useState("Add New?")
  return (
      <div className="w-full">
        <div className="mx-2 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Clients : <span className="text-lg">{isFormsBtnActive === "Add New?" ? "All Clients" : isFormsBtnActive}</span></h1>
          <div className="flex items-center justify-between">
            <select  onChange={(e)=>{setFormsBtnActive(e.target.value)}} value={isFormsBtnActive} title="Add New Client Form" className="w-100 !border-2 !border-gray-400 !rounded-lg px-4 py-1 my-2">
              {
                forms.map((each, id) => <option key={id} value={each}>{each}</option>)
              }
            </select>
            {/* <button onClick={()=>{setFormsBtnActive(!isFormsBtnActive)}} type="button" title="Add New Client Form" className="flex place-items-center gap-2 text-xl bg-blue-800 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 hover:scale-105 transition-all outline-none"><BiPlusMedical className="mt-1"/> Add New</button> */}
          </div>
        </div>
        <hr className=""/>
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
              isFormsBtnActive === "Individual" && <IndividualForm/>
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
  )
}

export default Clinets