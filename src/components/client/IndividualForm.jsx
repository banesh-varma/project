import { FormEvent, useState } from "react";

const Label =({children}) => {
  return (
    <label className="w-40">{children}</label>
  )
}

const Input = ({ children,placeholder,onChange, value, ...props }) => {
  return (
    <input
      placeholder={placeholder}
      className="border-b-gray-300 focus:border-blue-500 focus:ring-blue-500 px-2 py-0.5 border-b-2 outline-none"
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
    <div className="mt-6 border-2 border-gray-200 rounded-2xl">
      <div className="mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="bg-blue-600 py-4 px-6">
          <h1 className="text-2xl font-bold text-white">
            Individual Registration Form
          </h1>
          <p className="text-blue-100 mt-1">
            Please fill in your details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">

        <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Group Details
            </h2>

            <div className="flex flex-wrap space-x-5 space-y-5">
              <div className="flex items-center ">
                <Label>Client ID :</Label>
                <Input 
                  placeholder="Client ID" 
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>
            <div className="flex items-center">
              <Label>Branch :</Label>
              <Input 
                placeholder="Branch" 
                onChange={(e) => setClientId(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <Label>File No :</Label>
              <Input 
                placeholder="File No" 
                onChange={(e) => setClientId(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <Label>Group :</Label>
              <Input 
                placeholder="Group" 
                onChange={(e) => setClientId(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <Label>Referrence :</Label>
              <Input 
                placeholder="Referrence" 
                onChange={(e) => setClientId(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <Label>Preferrence :</Label>
              <Input 
                placeholder="Preferrence" 
                onChange={(e) => setClientId(e.target.value)}
              />
            </div>
            </div>
         </div>   
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Personal Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name (as per Aadhaar/PAN) *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender *
                </label>
                <div className="mt-1 space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                      required
                      className="text-blue-600"
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                      className="text-blue-600"
                    />
                    <span className="ml-2">Female</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={formData.gender === "Other"}
                      onChange={handleChange}
                      className="text-blue-600"
                    />
                    <span className="ml-2">Other</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Father's/Mother's Name *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nationality *
                </label>
                <select
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                >
                  <option value="Indian">Indian</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
              ID Proof Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Aadhaar Number *
                </label>
                <input
                  type="text"
                  name="aadhaar"
                  value={formData.aadhaar}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{12}"
                  title="12-digit Aadhaar number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  PAN Number *
                </label>
                <input
                  type="text"
                  name="pan"
                  value={formData.pan}
                  onChange={handleChange}
                  required
                  pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                  title="10-character PAN (e.g., ABCDE1234F)"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Contact Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  title="10-digit phone number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address *
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State *
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  PIN Code *
                </label>
                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{6}"
                  title="6-digit PIN code"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Educational Qualification
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Highest Qualification *
              </label>
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              >
                {
                  ["Select an Option", "10th", "ITI", "Diploma", "Inter", "Degree", "B.Tech", "B.sc", "B.Pharmacy", "M.Tech", "M.Pharmacy", "Post Graduation", "CA Foundation", "CA Intermediate", "CA Final"].map((each, id) => <option key={id} value={each}>{each}</option>)
                }
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="isAgreed"
                  checked={formData.isAgreed}
                  onChange={handleChange}
                  required
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3">
                <label className="text-sm font-medium text-gray-700">
                  I hereby declare that all the information provided is correct as
                  per ICAI guidelines. *
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
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