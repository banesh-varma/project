export const ProjectDetails = () => {
  return (
    <div>
      <div className="rounded border m-1 border-neutral-300 pb-1 shadow-sm mb-4">
        <div className="border-b-1 border-neutral-300 px-1.5 mt-2">
          <h1 className="font-semibold">Project Details</h1>
        </div>
        <div className="rounded border m-1 border-neutral-300 pb-2">
          <div className="grid grid-cols-12 space-x-4 p-1.5">
            <div className="lg:col-span-4 md:col-span-8 col-span-12 grid gap-y-1">
              <label htmlFor="">Audited / Actual Financial Details</label>
              <label htmlFor="">Previous Year</label>
              <label htmlFor="">Projections Required for Year</label>
              <label htmlFor="">Figurers Required in </label>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded border m-1 border-neutral-300 pb-2">
        <div className="grid grid-cols-12 border-b-1 border-neutral-300 mt-1 px-1.5 mb-1.5">
          <h1 className="col-span-9 md:col-span-10 lg:col-span-11 font-semibold">Cost of Project</h1>
          <p className="col-span-3 md:col-span-2 lg:col-span-1 text-center">Amount</p>
        </div>
        <div className="rounded border m-1 border-neutral-300 pb-2 mb-2 shadow-sm">
          <div className="grid grid-cols-12 px-1 py-1">
            <h1 className="col-span-9 md:col-span-10 lg:col-span-11 font-semibold">Land</h1>
            <input type="text" className="col-span-3 md:col-span-2 lg:col-span-1 border" />
          </div>
          <hr className="col-span-12 border-neutral-300"/>
          <div className="grid grid-cols-8 lg:grid-cols-7 px-1 space-y-1 md:space-x-1">
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="" className="" >SlNo</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Description</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Uom</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-2 flex flex-col">
              <label htmlFor="">Area</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Rate</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Value</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
          </div>
        </div>
        <div className="rounded border m-1 border-neutral-300 pb-2 mb-2 shadow-sm">
            <div className="grid grid-cols-12 px-1 py-1">
              <h1 className="col-span-9 md:col-span-10 lg:col-span-11 font-semibold">Building</h1>
              <input type="text" className="col-span-3 md:col-span-2 lg:col-span-1 border" />
            </div>
            <hr className="col-span-12 border-neutral-300"/>
            <div className="grid grid-cols-8 lg:grid-cols-7 px-1.5 md:space-x-1">
              <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
                <label htmlFor="" className="" >SlNo</label>
                <input type="text" className="border px-1.5 py-0.5" />
              </div>
              <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
                <label htmlFor="">Description</label>
                <input type="text" className="border px-1.5 py-0.5" />
              </div>
              <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
                <label htmlFor="">Uom</label>
                <input type="text" className="border px-1.5 py-0.5" />
              </div>
              <div className="col-span-8 md:col-span-4 lg:col-span-2 flex flex-col">
                <label htmlFor="">Area</label>
                <input type="text" className="border px-1.5 py-0.5" />
              </div>
              <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
                <label htmlFor="">Rate</label>
                <input type="text" className="border px-1.5 py-0.5" />
              </div>
              <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
                <label htmlFor="">Value</label>
                <input type="text" className="border px-1.5 py-0.5" />
              </div>
            </div>
          </div>
        <div className="rounded border m-1 border-neutral-300 pb-2 mb-2 shadow-sm">
          <div className="grid grid-cols-12 px-1 py-1">
            <h1 className="col-span-9 md:col-span-10 lg:col-span-11 font-semibold">Imported Plant and Machinery</h1>
            <input type="text" className="col-span-3 md:col-span-2 lg:col-span-1 border" />
          </div>
          <hr className="col-span-12 border-neutral-300"/>
          <div className="grid grid-cols-8 lg:grid-cols-7 px-1.5 md:space-x-1">
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="" className="" >SlNo</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Description</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Supplies Name</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Uom</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">No.</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Rate</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Value</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
          </div>
        </div>
        <div className="rounded border m-1 border-neutral-300 pb-2 mb-2 shadow-sm">
          <div className="grid grid-cols-12 px-1 py-1">
            <h1 className="col-span-9 md:col-span-10 lg:col-span-11 font-semibold">Indigenious Plant and Machinery</h1>
            <input type="text" className="col-span-3 md:col-span-2 lg:col-span-1 border" />
          </div>
          <hr className="col-span-12 border-neutral-300"/>
          <div className="grid grid-cols-8 lg:grid-cols-7 px-1.5 md:space-x-1">
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="" className="" >SlNo</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Description</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Supplies Name</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Uom</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">No.</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Rate</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Value</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
          </div>
        </div>
        <div className="rounded border m-1 border-neutral-300 pb-2 mb-2 shadow-sm">
          <div className="grid grid-cols-12 px-1 py-1">
            <h1 className="col-span-9 md:col-span-10 lg:col-span-11 font-semibold">Furniture and Fixtures</h1>
            <input type="text" className="col-span-3 md:col-span-2 lg:col-span-1 border" />
          </div>
          <hr className="col-span-12 border-neutral-300"/>
          <div className="grid grid-cols-8 lg:grid-cols-7 px-1.5 md:space-x-1">
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="" className="" >SlNo</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Description</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Supplies Name</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Uom</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">No.</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Rate</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Value</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
          </div>
        </div>
        <div className="rounded border m-1 border-neutral-300 pb-2 mb-2 shadow-sm">
          <div className="grid grid-cols-12 px-1 py-1">
            <h1 className="col-span-9 md:col-span-10 lg:col-span-11 font-semibold">Other Assets</h1>
            <input type="text" className="col-span-3 md:col-span-2 lg:col-span-1 border" />
          </div>
          <hr className="col-span-12 border-neutral-300"/>
          <div className="grid grid-cols-8 lg:grid-cols-7 px-1.5 md:space-x-1">
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="" className="" >SlNo</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Description</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Supplies Name</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Uom</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">No.</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Rate</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-1 flex flex-col">
              <label htmlFor="">Value</label>
              <input type="text" className="border px-1.5 py-0.5" />
            </div>
          </div>
        </div>
        <div className="rounded border m-1 border-neutral-300 px-1.5 shadow-sm py-1 mb-3">
          <h1 className="">Total</h1>
        </div>
      </div>
    </div>
  )
}
