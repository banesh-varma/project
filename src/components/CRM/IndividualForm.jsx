import { FormEvent, useState } from "react";

import { IoMdContact, IoMdHome, IoMdTrash } from "react-icons/io";
import { AiTwotoneBank } from "react-icons/ai";
import { RiInfoCardFill } from "react-icons/ri";
import { MdAppRegistration, MdChevronLeft, MdChevronRight, MdEdit, MdLocalPostOffice, MdMedicalInformation } from "react-icons/md";
import { GiBank } from "react-icons/gi";
import { IoBusiness, IoMail } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

const Label =({children}) => {
  return (
    <label className="">{children}</label>
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
    name: "Address Title:",
  },
  {
    name: "Address Type :",
    radioType: "residentialType",
  },
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
  {
    name: "Longitude :"
  },
  {
    name: "Latitude :"
  },
]
const BusinessAddress = [
  {
    name: "Business Name :",
  },
  {
    name: "GSTN :",
  },
  {
    name: "Address Title :",
  },
  {
    name: "Address Type :",
    radioType: "BusinessStatus",
  },
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
  {
    name: "Longitude :"
  },
  {
    name: "Latitude :"
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
  const {childActiveBtn, childOPenClose} = useSelector((state) => state?.rightCLientsNavbar)
  console.log(childActiveBtn, childOPenClose);
  
  
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
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={`mt-2 p-2 shadow-2xl border-2 border-gray-100 rounded-2xl flex gap-3`} >
      <div className="bg-white rounded-2xl  overflow-hidden">
        <form onSubmit={handleSubmit} className="p-2 space-y-3">
        <div className="space-y-1">
          <div id="G.Info" className={`border-1 ${childActiveBtn === "G.Info" ? "border-gray-200 bg-slate-50":"border-gray-100"}  rounded-xl px-3 py-3 shadow-2xs`}>
            <h1 className="font-semibold border-b border-gray-400 pb-1">
              Group Information (G.Info)
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

          <div id="P.Info"  className={`${childActiveBtn === "P.Info" ? "border-gray-200 bg-slate-50":"border-gray-100"} rounded-xl px-3 py-3 shadow-2xs`}> 
            <h1 className={`font-semibold text-gray-800 border-b border-gray-400 pb-1 `}>
              Personal Information (P.Info)
            </h1>
            <div className=" mt-2 grid grid-cols-1 md:grid-cols-12 gap-5">
              <div className="md:col-span-10 space-y-1">
                
                <div className="grid grid-cols-11 gap-2">
                  <h1></h1>
                  <h2 className="">Prefix</h2>
                  <h2 className="col-span-3">First Name</h2>
                  <h2 className="col-span-3">Middle Name</h2>
                  <h2 className="col-span-3">Last Name</h2>
                </div>

                {personalDetails.map(person => (
                  <div className="grid grid-cols-11 gap-1 mb-1 items-center">
                  <h2 className="">{person.name}:</h2>

                  <div className="flex flex-col">
                    <select className="border p-1">
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                    </select>
                  </div>
                  <input type="text" className="border p-1 col-span-3" />
                  <input type="text" className="border p-1 col-span-3" />
                  <input type="text" className="border p-1 col-span-3" />
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
          </div>
          
          <div id="I.Info"   className={`${childActiveBtn === "I.Info" ? "border-gray-200 bg-slate-50":"border-gray-100"} rounded-xl px-3 py-3 shadow-2xs`}> 
            <h1 className=" font-semibold text-gray-800 border-b border-gray-400 pb-1">
            Identity Information (I.Info)
            </h1>
            <ul className=" mt-2 ">
              {identityInformation.map(eachId => (
                <li className="items-center w-80 flex flex-row">
                  <label className="min-w-30">{eachId.name}</label>
                  <input className="w-full p-1 mt-1 border" type="text" />
                </li>
              ))}
            </ul>

          </div>
          <div id="C.Info"   className={`${childActiveBtn === "C.Info" ? "border-gray-200 bg-slate-50":"border-gray-100"} rounded-xl px-3 py-3 shadow-2xs`}>
          <h1 className=" font-semibold text-gray-800 border-b border-gray-400 pb-1">
          Communication Information (C.Info)
          </h1>
          
          <ul className="mt-2 gap-4">
            {communication.map(each => (
              <li className="flex flex-col items-start">
                <label >{each.name}</label>
                <input className="border w-40 p-1 " type="text" />
              </li>
            ))}
          </ul>
          </div>
          <div id="R.Info"   className={`${childActiveBtn === "R.Info" ? "border-gray-200 bg-slate-50":"border-gray-100"} rounded-xl px-3 py-3 shadow-2xs`}>
            <div className="border-b border-gray-400 flex justify-between">
              <h1 className=" font-semibold text-gray-800  pb-1">
                Residential Information (R.Info)
              </h1>
              <div className="flex gap-2">
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 hover:border text-sm">Active</button>
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Inactive</button>
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Add</button>
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Edit</button>
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Delete</button>
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Save</button>
              </div>
            </div>
            <div className="grid grid-cols-12 w-full">
              <ul className="mt-2 grid grid-cols-2 col-span-6 gap-1 gap-x-5">
                {residentialAddress.map(address => (
                  <li className="flex">
                    <label className="min-w-30">{address.name}</label>
                    {address?.inputType? (
                      <select className="w-full p-1 border">
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
                    ) : address?.radioType ? (
                      <div className="flex gap-4 text-center">
                      <div>
                        <input type="radio" name={address.radioType} id={address.radioType} />
                        <label htmlFor={address.radioType}>Active</label>
                      </div>
                      <div>
                        <input type="radio" name={address.radioType} id={`address.radioType1`} />
                        <label htmlFor={`address.radioType1`}>Inactive</label>
                      </div>
                      </div>
                    ) : 
                      (<input className="w-full p-1 border" type="text" />)
                    }
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div id="B.Info"   className={`${childActiveBtn === "B.Info" ? "border-gray-200 bg-slate-50":"border-gray-100"} rounded-xl px-3 py-3 shadow-2xs`}>
          <div className="border-b border-gray-400 flex justify-between">
            <h1 className="font-semibold text-gray-800 border-b border-gray-400 pb-1">
              Business / Office Information (B.Info)
            </h1>
            <div className="flex gap-2">
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 hover:border text-sm">Active</button>
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Inactive</button>
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Add</button>
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Edit</button>
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Delete</button>
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Save</button>
              </div>
            </div>
            <div className="grid grid-cols-12 w-full">
              <ul className="mt-2 grid grid-cols-2 col-span-6 gap-1 gap-x-5">
              {BusinessAddress.map(address => (
                    <li className="flex">
                      <label className="min-w-30">{address.name}</label>
                      {address?.inputType? (
                      <select className="w-full p-1 border">
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
                    ) : address?.radioType ? (
                      <div className="flex gap-1 text-center">
                      <div>
                        <input type="radio" name="radioGroup" id="activeAddressType" />
                        <label htmlFor="activeAddressType">Active</label>
                      </div>
                      <div>
                        <input type="radio" name="radioGroup" id="InactiveAddressType" />
                        <label htmlFor="InactiveAddressType">Inactive</label>
                      </div>
                      </div>
                    ) : 
                      (<input className="w-full p-1 border" type="text" />)}
                  </li>
                  ))}
              </ul>
            </div>
          </div>

          <div id="MSME"   className={`${childActiveBtn === "MSME" ? "border-gray-200 bg-slate-50":"border-gray-100"} rounded-xl px-3 py-3 shadow-2xs`}>

            <h1 className=" font-semibold text-gray-800 border-b border-gray-400 pb-1">
              MSME Information 
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
          </div>
          <div id="Bank" className={`${childActiveBtn === "Bank" ? "border-gray-200 bg-slate-50":"border-gray-100"} rounded-xl px-3 py-3 shadow-2xs`}>
            <h1 className="font-semibold text-gray-800 border-b border-gray-400 pb-1">
            Bank Information
            </h1>
              <ul className="flex flex-wrap">
                {bankInfo.map(each => (
                  <li className="flex flex-col">
                  <label>{each.name}</label>
                  <input className="border-solid border-1 border-neutral-400 w-30 mr-1" type="text" />
              </li>
                ))}
              </ul>
            </div>
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