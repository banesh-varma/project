const residentialAddress = [
  {
    name: "Pincode :",
  },
  {
    name: "Country :",
    inputType: "select",
  },
  {
    name: "State :",
    inputType: "select",
  },
  {
    name: "District :",
    inputType: "select",
  },
  {
    name: "H.No :"
  },
  {
    name: "Building Name :",
  },
  {
    name: "Street :",
  },
  {
    name: "Area :"
  },
  {
    name: "LandMark :"
  },
  {
    name: "City/Town :"
  },
]

export const Profile = () => {
  return (
  <div>
    <div className="border-b-1 border-neutral-300 px-1.5 mt-2">
      <h1>Applicant Details</h1>
    </div>
    <div className="grid grid-cols-12 space-x-4 p-1.5">
      <div className="lg:col-span-6 col-span-12 grid gap-y-1">
      <div className="flex col-span-6">
        <label htmlFor="" className="min-w-30">Name of Person</label>
        <input className="w-full px-1.5 border" type="text" />
      </div>
      <div className="flex col-span-6">
        <label htmlFor="" className="min-w-30">Father Name</label>
        <input className="w-full px-1.5 border" type="text" />
      </div>
      <div className="flex col-span-6">
        <label htmlFor="" className="min-w-30">Spouce Name</label>
        <input className="w-full px-1.5 border" type="text" />
      </div>
      <div className="flex col-span-6">
        <label htmlFor="" className="min-w-30">Date of Birth</label>
        <input className="w-full px-1.5 border" type="text" />
      </div>
      <div className="flex col-span-6">
        <label htmlFor="" className="min-w-30">PAN</label>
        <input className="w-full px-1.5 border" type="text" />
      </div>
      <div className="flex col-span-6">
        <label htmlFor="" className="min-w-30">Aadhar</label>
        <input className="w-full px-1.5 border" type="text" />
      </div>
      </div>
    </div >
    <div className="border-b-1 border-neutral-300 px-1.5 mt-2">
      <h1 className="">Residential Address</h1>
    </div>
    <div className="mt-2 grid col-span-12 lg:grid-cols-8">
      <ul className="mt-2 grid px-1.5 grid-cols-6 col-span-2 lg:col-span-4 gap-1 gap-x-5">
        {residentialAddress.map(address => (
          <li className="flex col-span-3">
            <label className="min-w-30">{address.name}</label>
            {address?.inputType? (
              <select className="w-full px-1.5 border">
                <option>Select</option>
                {address.name === "Address Type:"&&
                <>
                <option>Head Office/ Principle place of Business</option>
                <option>Registered Office</option>
                <option>Business</option>
                <option>Present Address (Correspondence)</option>
                <option>Godown</option>
                <option>Factory</option>
                <option>Branch Address</option>
                <option>Other Address</option>
                </>}
              </select>
            ) : 
              (<input className="w-full px-1.5 border" type="text" />)
            }
          </li>
        ))}
      </ul>
    </div>
    <div className="border-b-1 border-neutral-300 px-1.5 mt-3">
      <h1 className="">Business Details</h1>
    </div>
    <div className="mt-2 grid col-span-12 lg:grid-cols-8">
      <ul className="mt-2 px-1.5 grid grid-cols-6 col-span-2 lg:col-span-4 gap-1 gap-x-5">
      <div className="flex col-span-6">
        <label htmlFor="" className="min-w-30">Business Name</label>
        <input className="w-full px-1.5 border" type="text" />
      </div>
      <div className="flex col-span-6">
        <label htmlFor="" className="min-w-30">GST No.</label>
        <input className="w-full px-1.5 border" type="text" />
      </div>
      <div className="flex col-span-6">
        <label htmlFor="" className="min-w-30">Labour Licence</label>
        <input className="w-full px-1.5 border" type="text" />
      </div>
      <div className="flex col-span-6">
        <label htmlFor="" className="min-w-30">FSSCI</label>
        <input className="w-full px-1.5 border" type="text" />
      </div>
      <div className="flex col-span-6">
        <label htmlFor="" className="min-w-30">MSME</label>
        <input className="w-full px-1.5 border" type="text" />
      </div>
        {residentialAddress.map(address => (
          <li className="flex col-span-3">
            <label className="min-w-30">{address.name}</label>
            {address?.inputType? (
              <select className="w-full px-1.5 border">
                <option>Select</option>
                {address.name === "Address Type:"&&
                <>
                <option>Head Office/ Principle place of Business</option>
                <option>Registered Office</option>
                <option>Business</option>
                <option>Present Address (Correspondence)</option>
                <option>Godown</option>
                <option>Factory</option>
                <option>Branch Address</option>
                <option>Other Address</option>
                </>}
              </select>
            ) : 
              (<input className="w-full px-1.5 border" type="text" />)
            }
          </li>
        ))}
      </ul>
    </div>
    
  </div>
  )
}
