import { FormEvent, useState } from "react";

const Label =({children}) => {
  return (
    <label className="text-sm">{children}</label>
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
    name: "mobile :",
  },
  {
    name: "email :",
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
      placeholder={placeholder}
      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 px-2 py-0.5 border-2 outline-none w-30"
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
    
    // Update the form state
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
    <div className="mt-2 border-2 border-gray-200 rounded-2xl">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
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
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
              Group Details
            </h2>

            <div className="flex flex-wrap">
              <div className="flex flex-col w-34">
                <Label className="text-neutral-500">Client ID :</Label>
                <Input 
                  placeholder="Client ID" 
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-34">
                <Label>Branch :</Label>
                <Input 
                  placeholder="Branch" 
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-34">
                <Label>File No :</Label>
                <Input 
                  placeholder="File No" 
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-34">
                <Label>Group :</Label>
                <Input 
                  placeholder="Group" 
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-34">
                <Label>Referrence :</Label>
                <Input 
                  placeholder="Referrence" 
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-34">
                <Label>Preferrence :</Label>
                <Input 
                  placeholder="Preferrence" 
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>
            </div>
         </div>   

          <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
            Personal Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            <div className="md:col-span-10 space-y-2">
              
              <div className="grid grid-cols-5 gap-2">
                <h1></h1>
                <h1 className="font-semibold w-[60px]">Prefix</h1>
                <h1 className="font-semibold">First Name</h1>
                <h1 className="font-semibold">Middle Name</h1>
                <h1 className="font-semibold">Last Name</h1>
              </div>

              {personalDetails.map(person => (
                <div className="grid grid-cols-5 gap-2 items-center">
                <p  className="font-semibold w-[50px]">{person.name}:</p>

                
                <div className="flex flex-col w-[60px]">
                  <select className="border ">
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                  </select>
                </div>
                <input type="text" className="border" />
                <input type="text" className="border " />
                <input type="text" className="border " />
              </div>
              ))}
            </div>

            {/* Child-2: Image Upload Section */}
            <div className="md:col-span-2 flex flex-col items-center justify-center space-y-2">
              <img 
                src="http://ranjithsolutions.in/nspnco/2/assets/img/user/userd.png" 
                alt="User Avatar"
                className="w-24 h-24 rounded-full object-cover" 
              />
              <input 
                type="file" 
                className="border p-2 w-full text-sm"
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
            Identity Information
            </h2>
            <ul className="flex flex-wrap">
              {identityInformation.map(eachId => (
                <li className="flex flex-col">
                  <label>{eachId.name}</label>
                  <input className="border-solid border-1 border-neutral-400 w-30 mr-1" type="text" />
                </li>
              ))}
            </ul>

          </div>
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
          Communication
          </h2>
          <ul className="flex flex-wrap">
            {communication.map(each => (
              <li className="flex flex-col">
                <label>{each.name}</label>
                <input className="border-solid border-1 border-neutral-400 w-30 mr-1" type="text" />
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
            Residential Address
          </h2>
            <ul className="flex flex-wrap">
              {residentialAddress.map(address => (
                <li className="flex flex-col">
                  <label>{address.name}</label>
                  <input className="border-solid border-1 border-neutral-400 w-30 mr-1" type="text" />
              </li>
              ))}
            </ul>
          
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
          Business / Office Address
          </h2>
          <ul className="flex flex-wrap">
          {residentialAddress.map(address => (
                <li className="flex flex-col">
                  <label>{address.name}</label>
                  <input className="border-solid border-1 border-neutral-400 w-30 mr-1" type="text" />
              </li>
              ))}
          </ul>
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
          MSME Info
          </h2>
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
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
          Bank Info
          </h2>
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