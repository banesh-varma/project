import { FormEvent, useState } from "react";
import { CiImport } from "react-icons/ci";

import { IoMdContact, IoMdHome, IoMdTrash } from "react-icons/io";
import { AiTwotoneBank } from "react-icons/ai";
import { RiInfoCardFill } from "react-icons/ri";
import { MdAppRegistration, MdChevronLeft, MdChevronRight, MdEdit, MdLocalPostOffice, MdMedicalInformation } from "react-icons/md";
import { GiBank } from "react-icons/gi";
import { IoBusiness, IoMail, IoTrash } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

const Label =({children}) => {
  return (
    <label className="">{children}</label>
  )
}


const activeAddresses = [
  {
    address: "Address: Jk heavens apartment, Rd Number 1, Income Tax Colony, RK Puram, Kothapet, Hyderabad, Telangana 500035"
  },
  {
    address: "Global Tech Ltd, 456 Enterprise Rd, Austin, TX"
  },
  {
    address: "Info Tech Ltd, 456 Global Rd, Westin, IND"
  }
]
const inActiveAddresses = [
  {
    address: "H.No: 3-224/22 Madhurapuri colony, Miyapur, 500050"
  },
  {
    address: "H.No: 5-74/11 Madhurapuri colony, LB-Nagar, 500050"
  }
]

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
      name: "Address Title :",
      full:"",
    },
  {
    name: "Address Type :",
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
  const [businessActiveTab, setBusinessActiveTab] = useState('active')
  const [residentialActiveTab, setResidentialActiveTab] = useState('active')
  const {childActiveBtn, childOPenClose} = useSelector((state) => state?.rightCLientsNavbar)
  console.log(businessActiveTab)
  
  
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
              <div className="col-span-12 lg:col-span-10 space-y-1">
                
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

              <div className="border-1 mt-8  px-3 py-3=1.5  rounded-2xl col-span-5 lg:col-span-2 flex flex-col items-center justify-center space-y-2">
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
            <div className="grid grid-cols-12 border-b border-gray-400">
              <h1 className="col-span-7 font-semibold text-gray-800  pb-1">
                Residential Information (R.Info)
              </h1>
              <div className="flex justify-between col-span-5">
                <div className="flex gap-2">
                  <button className={`h-full ${residentialActiveTab === "active" && "bg-green-100 border border-green-400"} bg-blue-200 px-2 rounded text-sm hover:border`} onClick={(e) => {
                    e.preventDefault();
                    setResidentialActiveTab("active");
                  }}>Active</button>
                  <button className={`h-full ${residentialActiveTab === "inactive" && "bg-red-100 border border-red-400"} bg-blue-200 px-2 rounded text-sm hover:border`} onClick={(e) => {
                    e.preventDefault();
                    setResidentialActiveTab("inactive");
                  }}>Inactive</button>
                </div>
                <div className="flex gap-2">
                  <button className="h-full bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Add</button>
                  <button className="h-full col-span-2 bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Save</button>
                </div>
              </div>
              
              {/* <div className="flex gap-4">
                <button className={`bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:borde`} onClick={(e) => {
                  e.preventDefault();
                  setBusinessActiveTab("active");
                }}>Active</button>
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border" onClick={(e) => {
                  e.preventDefault();
                  setBusinessActiveTab("inactive");
                }}>Inactive</button>
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Add</button>
                <button className="bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Save</button>
              </div> */}
            </div>
            <div className="grid grid-cols-12 space-x-9 w-full">
              <ul className="mt-2 grid grid-cols-2 col-span-12 lg:col-span-7 gap-1 gap-x-5">
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
              {/* status active or inactive */}
              <div className={`${residentialActiveTab === "active"? "bg-green-50" : "bg-red-50"}  mt-2 col-span-12 lg:col-span-5 gap-x-5 border p-2`}>
                <span className="">
                  {/* <h1 className={`${businessActiveTab === "active" ? "bg-green-200" : "bg-red-200"}  min-w-30 font-semibold`}>{businessActiveTab === "active"? "Active Business Addresses:" : "Inactive Business Addresses:"}</h1> */}
                  <ol className="list-decimal ">
                    {residentialActiveTab === "active" &&
                      activeAddresses.map(eachAdd => (
                        <li className="ml-6 my-2 list-decimal" style={{ display: "list-item" }}>
                          <div className="flex items-center mb-4 justify-between">
                            <p>{eachAdd.address}</p>
                            <div className="flex">
                              <button className="text-blue-700 mx-2 px-2 py-1 rounded text-sm hover:scale-105 transition-all bg-blue-100"><MdEdit/></button>
                              <button className="text-red-400 px-2 py-1 rounded text-sm bg-red-50"><IoTrash/></button>
                            </div>
                          </div>
                        </li>
                      ))
                    }
                    {residentialActiveTab === "inactive" &&
                      inActiveAddresses.map(eachAdd => (
                        <li className="ml-6 my-2 list-decimal" style={{ display: "list-item" }}>
                          <div className="flex justify-between items-center mb-4">
                            <p>{eachAdd.address}</p>
                            <div className="flex">
                              <button className="text-blue-700 mx-2 px-2 py-1 rounded text-sm hover:scale-105 transition-all bg-blue-100"><MdEdit/></button>
                              <button className="text-red-400 px-2 py-1 rounded text-sm bg-red-50"><IoTrash/></button>
                            </div>
                          </div>
                        </li>
                      ))
                    }
                  </ol>
                </span>
              </div>



            </div>
          </div>
          <div id="B.Info"   className={`${childActiveBtn === "B.Info" ? "border-gray-200 bg-slate-50":"border-gray-100"} rounded-xl px-3 py-3 shadow-2xs`}>
          <div className="border-b border-gray-400">
            <div className="grid grid-cols-12">
              <h1 className="col-span-7 font-semibold text-gray-800">
                Business / Office Information (B.Info)
              </h1>
              <div className="flex justify-between col-span-5">
                <div className="flex gap-2">
                  <button className={`h-full ${businessActiveTab === "active" && "bg-green-100 border border-green-400"} bg-blue-200 px-2 rounded text-sm hover:border`} onClick={(e) => {
                    e.preventDefault();
                    setBusinessActiveTab("active");
                  }}>Active</button>
                  <button className={`h-full ${businessActiveTab === "inactive" && "bg-red-100 border border-red-400"} bg-blue-200 px-2 rounded text-sm hover:border`} onClick={(e) => {
                    e.preventDefault();
                    setBusinessActiveTab("inactive");
                  }}>Inactive</button>
                </div>
                <div className="flex gap-2">
                  <button className="h-full bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Add</button>
                  <button className="h-full col-span-2 bg-blue-200 px-2 rounded hover:bg-blue-300 text-sm hover:border">Save</button>
                </div>
              </div>
            </div>
            </div>
            <div className="grid grid-cols-12 w-full space-x-10">
              <ul className="mt-2 grid grid-cols-2 col-span-12 lg:col-span-7 gap-1 gap-x-5">
                <li className="flex col-span-2">
                  <label className="min-w-30" htmlFor="">Business Name :</label>
                  <input type="text" className="w-full p-1 border" />
                </li>
                <li className="flex">
                  <label className="min-w-30" htmlFor="">GSTN :</label>
                  <input type="text" className="w-full p-1 border" />
                </li>
                {/* <li className="flex justify-between ">
                  <div className="border grid grid-cols-10">
                    relative left-8 
                    <a className="col-span-1"> </a>
                    <select className="col-span-4 border-r" name="" id="">
                      <option value="">Active</option>
                      <option value="">InActive</option>
                    </select>
                    
                    <a className="col-span-1"> </a>
                    <select className="col-span-4" name="" id="">
                      <option value="">Regular</option>
                      <option value="">Composition</option>
                    </select>
                  </div>
                  <CiImport className="size-8 text-blue-500"/>
                </li> */}
                <li className="relative flex justify-between ">
                  <div className="flex w-full">
                    <select className="border w-full px-2" name="" id="" >
                      <option value="">Active</option>
                      <option value="">InActive</option>
                    </select>
                    <select className="border w-full" name="" id="">
                      <option value="">Regular</option>
                      <option value="">Composition</option>
                    </select></div>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="absolute -right-8 size-8 text-blue-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Import"><g><path d="M5.552,20.968a2.577,2.577,0,0,1-2.5-2.73c-.012-2.153,0-4.306,0-6.459a.5.5,0,0,1,1,0c0,2.2-.032,4.4,0,6.6.016,1.107.848,1.589,1.838,1.589H18.353A1.546,1.546,0,0,0,19.825,19a3.023,3.023,0,0,0,.1-1.061V11.779h0a.5.5,0,0,1,1,0c0,2.224.085,4.465,0,6.687a2.567,2.567,0,0,1-2.67,2.5Z"></path><path d="M11.63,15.818a.459.459,0,0,0,.312.138c.014,0,.027.005.042.006s.027,0,.041-.006a.457.457,0,0,0,.312-.138l3.669-3.669a.5.5,0,0,0-.707-.707l-2.815,2.815V3.515a.5.5,0,0,0-1,0V14.257L8.668,11.442a.5.5,0,0,0-.707.707Z"></path></g></g></svg></li>

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
                      <div className="flex gap-1 text-center items-center">
                      <div className="mr-3">
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

              <div className={`${businessActiveTab === "active"? "bg-green-50" : "bg-red-50"}  mt-2 col-span-12 lg:col-span-5 gap-x-5 border p-2`}>
                <span className="">
                  {/* <h1 className={`${businessActiveTab === "active" ? "bg-green-200" : "bg-red-200"}  min-w-30 font-semibold`}>{businessActiveTab === "active"? "Active Business Addresses:" : "Inactive Business Addresses:"}</h1> */}
                  <ol className="list-decimal ">
                    {businessActiveTab === "active" &&
                      activeAddresses.map(eachAdd => (
                        <li className="ml-6 my-2 list-decimal" style={{ display: "list-item" }}>
                          <div className="flex items-center mb-4 justify-between">
                            <p>{eachAdd.address}</p>
                            <div className="flex">
                              <button className="text-blue-700 mx-2 px-2 py-1 rounded text-sm hover:scale-105 transition-all bg-blue-100"><MdEdit/></button>
                              <button className="text-red-400 px-2 py-1 rounded text-sm bg-red-50"><IoTrash/></button>
                            </div>
                          </div>
                        </li>
                      ))
                    }
                    {businessActiveTab === "inactive" &&
                      inActiveAddresses.map(eachAdd => (
                        <li className="ml-6 my-2 list-decimal" style={{ display: "list-item" }}>
                          <div className="flex justify-between items-center mb-4">
                            <p>{eachAdd.address}</p>
                            <div className="flex">
                              <button className="text-blue-700 mx-2 px-2 py-1 rounded text-sm hover:scale-105 transition-all bg-blue-100"><MdEdit/></button>
                              <button className="text-red-400 px-2 py-1 rounded text-sm bg-red-50"><IoTrash/></button>
                            </div>
                          </div>
                        </li>
                      ))
                    }
                  </ol>
                </span>
              </div>
            </div>
          </div>

          {/* <div id="MSME"   className={`${childActiveBtn === "MSME" ? "border-gray-200 bg-slate-50":"border-gray-100"} rounded-xl px-3 py-3 shadow-2xs`}>

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
          </div> */}
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