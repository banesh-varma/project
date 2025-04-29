import { useNavigate } from "react-router-dom";
import Header from "../Header"

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

const AllClients = () => {
    const navigate = useNavigate()

    return (
        <div className="px-5 py-3">
            <h1 className="font-bold underline !text-3xl">List of Clinets:-</h1>
            <div className="flex w-full">
                  <table className="w-full mt-5 text-center">
                    <thead>
                      <tr>
                        <th className="border-2 border-gray-300 !w-[100px] font-bold text-xl py-3">Sl.No</th>
                        <th className="border-2 border-gray-300 !w-[184px] font-bold text-xl py-3">Profile</th>

                        <th className="border-2 border-gray-300 !w-[384px] font-bold text-xl py-3">Group Details</th>
                        <th className="border-2 border-gray-300 !w-[384px] font-bold text-xl py-3">Personal Details</th>
                        <th className="border-2 border-gray-300 !w-[384px] font-bold text-xl py-3">ID Details</th>
                        <th className="border-2 border-gray-300 !w-[384px] font-bold text-xl py-3">Residence Address</th>
                      </tr>
                    </thead>
                    <tbody>
                  {
                    all.map((client) => (
                      <tr onClick={() => navigate(`/clients/${client?.id}`)}  key={client.id} className="p-4 cursor-pointer hover:bg-gray-100">
                        <td scope="col" className="border-2 border-gray-300 py-2">
                          <h2 className="text-lg font-semibold">{client.id}</h2>
                        </td>
                        <td scope="col" className="border-2 border-gray-300 py-2">
                            <div className="flex items-center justify-center">
                                <img 
                                src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?t=st=1745915434~exp=1745919034~hmac=89d8e5fb7f21d63740f5756552c34d302b9e03051cfd33e7273eea04ad870f7f&w=740" 
                                className="h-20" 
                                alt={client.name} 
                                />
                            </div>
                        </td>
                        <td scope="col" className="border-2 border-gray-300 py-2">
                          <h2 className="text-lg font-semibold">{client.name}</h2>
                        </td>
                        <td  scope="col" className="border-2 border-gray-300">
                          <p className="text-sm text-gray-600"><strong>{client.contactNumber}</strong></p>
                        </td>
                        <td  scope="col" className="border-2 border-gray-300"> 
                          <p className="text-sm text-gray-600"><strong>{client.address}</strong></p>
                        </td><td  scope="col" className="border-2 border-gray-300"> 
                          <p className="text-sm text-gray-600"><strong>{client.address}</strong></p>
                        </td>
                      </tr>
                    ))  
                  }
                  </tbody>
                  </table>
                  </div>
        </div>
    )
}

export default AllClients