import { FormEvent, useState } from "react";

const Label =({children}) => {
  return (
    <label className="text-base font-semibold">{children}</label>
  )
}

const personalDetails = [
  {
    name : "Client",
  },
  {
    name : "Father",
  },
  {
    name : "Mother",
  },
  {
    name : "Spouse",
  },
  {
    name : "Child",
  },
]

const identityInformation = [
  {
    name: "PAN :",
  },
  {
    name: "TAN :",
  },
  {
    name: "DIN :",
  },
  {
    name: "Aadhar :",
  },
  {
    name: "Passport :",
  },
  {
    name: "Drivers License :",
  },
  {
    name: "Voter ID :",
  },
  {
    name: "House Hold Card :",
  },
]
const communication = [
  {
    name: "Mobile :",
  },
  {
    name: "Email :",
  },
]
const residentialAddress = [
  {
    name: "Set Status :"
  },
  {
    name: "Address Type :"
  },
  {
    name: "Pincode :"
  },
  {
    name: "State :"
  },
  {
    name: "H.No :"
  },
  {
    name: "Street :"
  },
  {
    name: "Area :"
  },
  {
    name: "Country :"
  },
  {
    name: "District :"
  },
  {
    name: "Building Name :"
  },
  {
    name: "Colony :"
  },
  {
    name: "LandMark :"
  },
  {
    name: "Colony :"
  },
]

const msmeInfo = [
  {
    name: "Registration No :"
  },
  {
    name: "Regn Date :"
  },
  {
    name: "Type of Activity :"
  },
  {
    name: "Major Activity :"
  },
]
const bankInfo = [
  {
    name: "Account Type :"
  },
  {
    name: "Business Name :"
  },
  {
    name: "Opening Date :"
  },
  {
    name: "Closing Date :"
  },
  {
    name: "IFSC Code :"
  },
  {
    name: "Account No :"
  },
  {
    name: "Bank Name :"
  },
  {
    name: "Branch Name :"
  },
  {
    name: "Bank Address :"
  },
  {
    name: "Set Status :"
  },
]

const Input = ({ children,placeholder,onChange, value, ...props }) => {
  return (
    <input
      className="border w-32 mt-1 "
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

const IndividualForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    parentName: "",
    nationality: "Indian",
    aadhaar: "",
    pan: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    qualification: "",
    isAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
      setFormData({
      ...formData,          // Spread the existing form data
      [name]: type === "checkbox" ? checked : value,  // Update the specific field
    });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API submission logic here
  };

  return (
    <div className="mt-2 p-2 shadow-2xl border-2 border-gray-100 rounded-2xl">
      <div className="bg-white rounded-2xl  overflow-hidden">
        {/* <div className="bg-blue-600 py-4 px-6">
          <h1 className="text-2xl font-bold text-white">
            Individual Registration Form
          </h1>
          <p className="text-blue-100 mt-1">
            Please fill in your details.
          </p>
        </div> */}

        <form onSubmit={handleSubmit} className="p-2 space-y-3">

        <div className="space-y-1">
          <div className="border-1 border-neutral-600 rounded-xl px-3 py-3 shadow-2xs">

            <h1 className="font-semibold border-b border-gray-400 pb-1">
              Group Details
            </h1>

            <div className="flex flex-wrap gap-3 mt-2">
              <div className="flex flex-col w-34">
                <Label>Client ID :</Label>
                <Input 
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-34">
                <Label>Branch :</Label>
                <Input 
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-34">
                <Label>File No :</Label>
                <Input 
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-34">
                <Label>Group :</Label>
                <Input 
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-34">
                <Label>Referrence :</Label>
                <Input 
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-34">
                <Label>Preferrence :</Label>
                <Input 
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>
            </div>
         </div> 
         </div>


          <h1 className="font-semibold text-gray-800 border-b border-gray-400 pb-1">
            Personal Details
          </h1>
          <div className=" mt-2 grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-10 space-y-2">
              
              <div className="grid grid-cols-8 gap-2">
                <h1></h1>
                <h2 className="font-semibold ">Prefix</h2>
                <h2 className="font-semibold col-span-2">First Name</h2>
                <h2 className="font-semibold col-span-2">Middle Name</h2>
                <h2 className="font-semibold col-span-2">Last Name</h2>
              </div>

              {personalDetails.map(person => (
                <div className="grid grid-cols-8 gap-2 items-center">
                <h2 className="font-semibold">{person.name}:</h2>

                
                <div className="flex flex-col">
                  <select className="border ">
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                  </select>
                </div>
                <input type="text" className="border col-span-2" />
                <input type="text" className="border col-span-2" />
                <input type="text" className="border col-span-2" />
              </div>
              ))}
            </div>

            <div className="border-1 mt-8  px-3 py-3=1.5  rounded-2xl md:col-span-2 flex flex-col items-center justify-center space-y-2">
              <img 
                src="http://ranjithsolutions.in/nspnco/2/assets/img/user/userd.png" 
                alt="User Avatar"
                className="w-24 h-24 rounded-full object-cover" 
              />
              <input 
                type="file" 
                className="border px-2 py-0.5 w-full text-sm file:border-2 file:border-[#8a8a8a] 
         file:py-[0.2em] file:px-[0.4em] 
         file:rounded-[0.2em] 
         file:bg-gray-300 
         file:transition-all file:duration-1000 hover:file:bg-[#757575]"
              />
            </div>
          </div>

          <div>
            <h1 className=" font-semibold text-gray-800 border-b border-gray-400 pb-1">
            Identity Information
            </h1>
            <ul className=" mt-2 grid grid-cols-8 gap-2">
              {identityInformation.map(eachId => (
                <li className="flex flex-col">
                  <label className="font-semibold">{eachId.name}</label>
                  <input className="mr-1  mt-2 border" type="text" />
                </li>
              ))}
            </ul>

          </div>
          <h1 className=" font-semibold text-gray-800 border-b border-gray-400 pb-1">
          Communication
          </h1>
          <ul className="mt-2 flex gap-4">
            {communication.map(each => (
              <li className="flex items-start gap-3">
                <label >{each.name}</label>
                <input className="border w-40 " type="text" />
              </li>
            ))}
          </ul>
          <h1 className=" font-semibold text-gray-800 border-b border-gray-400 pb-1">
            Residential Address
          </h1>
            <ul className="mt-2 flex flex-wrap">
              {residentialAddress.map(address => (
                <li className="flex flex-col">
                  <label>{address.name}</label>
                  <input className="border-solid border-1 border-neutral-400 w-30 mr-1" type="text" />
              </li>
              ))}
            </ul>
          
          <h1 className=" font-semibold text-gray-800 border-b border-gray-400 pb-1">
          Business / Office Address
          </h1>
          <ul className="flex flex-wrap">
          {residentialAddress.map(address => (
                <li className="flex flex-col">
                  <label>{address.name}</label>
                  <input className="border-solid border-1 border-neutral-400 w-30 mr-1" type="text" />
              </li>
              ))}
          </ul>
          <h1 className=" font-semibold text-gray-800 border-b border-gray-400 pb-1">
          MSME Info
          </h1>
          <div>
            <ul className="flex flex-wrap">
              {msmeInfo.map(each => (
                <li className="flex flex-col">
                <label>{each.name}</label>
                <input className="border-solid border-1 border-neutral-400 w-30 mr-1" type="text" />
            </li>
              ))}
            </ul>
          </div>
          <h1 className=" font-semibold text-gray-800 border-b border-gray-400 pb-1">
          Bank Info
          </h1>
            <ul className="flex flex-wrap">
              {bankInfo.map(each => (
                <li className="flex flex-col">
                <label>{each.name}</label>
                <input className="border-solid border-1 border-neutral-400 w-30 mr-1" type="text" />
            </li>
              ))}
            </ul>

            <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IndividualForm;