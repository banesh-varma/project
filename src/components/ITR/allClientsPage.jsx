import { useNavigate } from "react-router-dom";
import Header from "../Header"
import { all } from "../../dummyClinets";


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
                    <th className="border-2 border-gray-300 font-bold text-xl py-3">Profile</th>

                    <th className="border-2 border-gray-300 font-bold text-xl py-3">Group Details</th>
                    <th className="border-2 border-gray-300 fnt-bold text-xl py-3">Personal Details</th>
                    <th className="border-2 border-gray-300 font-bold text-xl py-3">ID Details</th>
                    <th className="border-2 border-gray-300 font-bold text-xl py-3">Residence Address</th>
                    <th className="border-2 border-gray-300 font-bold text-xl py-3">Bussiness Address</th>
                    <th className="border-2 border-gray-300 font-bold text-xl py-3">Communitcation</th>
                  </tr>
                </thead>
                <tbody>
              {
                all.map((client) => (
                  <tr onClick={() => navigate(`/clients/${client?.id}`)}  key={client.id} className="p-4 cursor-pointer hover:bg-gray-50">
                    <td scope="col" className="border-2 border-gray-300 py-2 px-5">
                      <h2 className="text-lg font-semibold">{client.id}</h2>
                    </td>
                    <td scope="col" className="border-2 border-gray-300 py-2 px-5">
                      <div className="flex items-center justify-center">
                          <img 
                          src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?t=st=1745915434~exp=1745919034~hmac=89d8e5fb7f21d63740f5756552c34d302b9e03051cfd33e7273eea04ad870f7f&w=740" 
                          className="h-20" 
                          alt={client.name} 
                          />
                      </div>
                    </td>
                    <td scope="col" className="border-2 border-gray-300 py-2 px-5">
                      <h2 className="text-lg font-semibold">{client.name}</h2>
                    </td>
                    <td  scope="col" className="border-2 border-gray-300 px-5">
                      <p className="text-sm text-gray-600"><strong>{client.contactNumber}</strong></p>
                    </td>
                    <td  scope="col" className="border-2 border-gray-300 px-5"> 
                      <p className="text-sm text-gray-600"><strong>{client.address}</strong></p>
                    </td>
                    <td  scope="col" className="border-2 border-gray-300 px-5"> 
                      <p className="text-sm text-gray-600"><strong>{client.address}</strong></p>
                    </td>
                    <td  scope="col" className="border-2 border-gray-300 px-5"> 
                      <p className="text-sm text-gray-600"><strong>{client.address}</strong></p>
                    </td>
                    <td  scope="col" className="border-2 border-gray-300 px-5"> 
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