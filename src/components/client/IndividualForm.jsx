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
                
                <div className="grid grid-cols-11 gap-1">
                  <h1></h1>
                  <h2 className="font-semibold ">Prefix</h2>
                  <h2 className="font-semibold col-span-3">First Name</h2>
                  <h2 className="font-semibold col-span-3">Middle Name</h2>
                  <h2 className="font-semibold col-span-3">Last Name</h2>
                </div>

                {personalDetails.map(person => (
                  <div className="grid grid-cols-11 gap-2 items-center">
                  <h2 className="font-semibold">{person.name}:</h2>

                  
                  <div className="flex flex-col">
                    <select className="border  p-1 ">
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                    </select>
                  </div>
                  <input type="text" className="border col-span-3 p-1" />
                  <input type="text" className="border col-span-3 p-1 " />
                  <input type="text" className="border col-span-3 p-1" />
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
            <ul className=" mt-2 grid grid-cols-8 gap-2">
              {identityInformation.map(eachId => (
                <li className="flex flex-col">
                  <label className="font-semibold">{eachId.name}</label>
                  <input className="mr-1  mt-2 border" type="text" />
                </li>
              ))}
            </ul>

          </div>
          <div id="C.Info"   className={`${childActiveBtn === "C.Info" ? "border-gray-200 bg-slate-50":"border-gray-100"} rounded-xl px-3 py-3 shadow-2xs`}>
          <h1 className=" font-semibold text-gray-800 border-b border-gray-400 pb-1">
          Communication Information (C.Info)
          </h1>
          <ul className="mt-2 flex gap-4">
            {communication.map(each => (
              <li className="flex items-start gap-3">
                <label >{each.name}</label>
                <input className="border w-40 " type="text" />
              </li>
            ))}
          </ul>
          </div>
          <div id="R.Info"   className={`${childActiveBtn === "R.Info" ? "border-gray-200 bg-slate-50":"border-gray-100"} rounded-xl px-3 py-3 shadow-2xs`}>
            <h1 className=" font-semibold text-gray-800 border-b border-gray-400 pb-1">
              Residential Information (R.Info)
            </h1>
              <ul className="mt-2 flex flex-wrap">
                {residentialAddress.map(address => (
                  <li className="flex flex-col">
                    <label>{address.name}</label>
                    <input className="border-solid border-1 border-neutral-400 w-30 mr-1" type="text" />
                </li>
                ))}
              </ul>
          </div>
          <div id="B.Info"   className={`${childActiveBtn === "B.Info" ? "border-gray-200 bg-slate-50":"border-gray-100"} rounded-xl px-3 py-3 shadow-2xs`}>
          
            <h1 className=" font-semibold text-gray-800 border-b border-gray-400 pb-1">
              Business / Office Information (B.Info)
            </h1>
            <ul className="flex flex-wrap">
            {residentialAddress.map(address => (
                  <li className="flex flex-col">
                    <label>{address.name}</label>
                    <input className="border-solid border-1 border-neutral-400 w-30 mr-1" type="text" />
                </li>
                ))}
            </ul>
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