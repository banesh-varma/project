import { useState } from "react"

const Project = () => {
  const [isClicked, setIsClicked] = useState(false)
  const onAddExtraContact = () => {
  return(
    <>
      <div className="col-span-8 grid grid-cols-3 space-x-1">
          <div className="col-span-1 items-center">
            <label htmlFor="" className="">Contact Person</label>
            <input type="text" className="px-1.5 py-0.5 border w-full" />
          </div>

          <div className="items-center">
            <label htmlFor="" className="">Mobile No</label>
            <input type="text" className="px-1.5 py-0.5 border w-full" />
          </div>
          <div className="items-center">
            <label htmlFor="" className="">Email id</label>
            <input type="text" className="px-1.5 py-0.5 border w-full" />
          </div>
        </div>
    </>
  )}
  return (
    <>
    <div className="border-b-1 mb-2 border-neutral-400 px-1.5">
      <h1 className="font-semibold">List of Projects</h1>
    </div>
    <div className="">
      <div>
        <div className="flex gap-2">
          <input id="checkBox" type="checkbox" className="mx-2" />
          <label htmlFor="checkBox">Project Name, Bank Name, Contact Person Name, Mobile No, email id</label>
        </div>
        <div className="flex gap-2">
          <input id="checkBox1" type="checkbox" className="mx-2" />
          <label htmlFor="checkBox1">Project Name, Bank Name, Contact Person Name, Mobile No, email id</label>
        </div>
      </div>
      <div className="border-b-1 mb-2 mt-3 border-neutral-400 px-1.5">
        <h1 className="font-semibold">Create Edit Project</h1>
      </div>

      <div className="grid grid-cols-12 lg:grid-cols-12 px-1.5">
        <div className="col-span-8 lg:col-span-7 space-y-1">
          <div className="grid grid-cols-6 col-span-6 items-center">
            <label htmlFor="" className="col-span-1">Name of Project</label>
            <input type="text" className="px-1.5 py-0.5 col-span-5 border w-full" />
          </div>
          <div className="grid grid-cols-6 col-span-4 items-center">
            <label htmlFor="" className="col-span-1">Bank Name</label>
            <input type="text" className="px-1.5 py-0.5  col-span-5 border w-full" />
          </div>
          <div className="grid grid-cols-6 col-span-4 items-center">
            <label htmlFor="" className="col-span-1">Branch Name</label>
            <input type="text" className="px-1.5 py-0.5  col-span-5 border w-full" />
          </div>
        </div>
        <div className="col-span-8 lg:col-span-7 grid grid-cols-3 space-x-1">
          <div className="col-span-1 items-center">
            <label htmlFor="" className="">Contact Person <i onClick={() => setIsClicked(!isClicked)} className={`${isClicked ? "fa fa-minus" : "fa fa-plus"} ml-1 hover:cursor-pointer bg-blue-100 p-1 hover:bg-blue-200" aria-hidden="true`}></i></label>
            <input type="text" className="px-1.5 py-0.5 border w-full" />
          </div>

          <div className="items-center">
            <label htmlFor="" className="">Mobile No</label>
            <input type="text" className="px-1.5 py-0.5 border w-full" />
          </div>
          <div className="items-center">
            <label htmlFor="" className="">Email id</label>
            <input type="text" className="px-1.5 py-0.5 border w-full" />
          </div>
        </div>
        {isClicked && onAddExtraContact()}
      </div>
      
    </div>
    </>
  )
}
export default Project