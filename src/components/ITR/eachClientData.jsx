import { useState } from "react"
import { all } from "../../dummyClinets"
import { useParams } from "react-router-dom"
import { FaAngleDown } from "react-icons/fa";

// EachHeading component
function EachHeading({ children, className }) {
    return (
      <div className={`border border-gray-300 rounded-md flex flex-col items-center justify-center p-1 md:p-2 text-center ${className}`}>
        {children}
      </div>
    )
  }

  const data = {
    Computation: {
      items: ['AIS', 'TIS', 'Permanent Info.', 'Salary', 'House Property', 'Speculative'],
      PGBP: {
        Presumptive: ['Commission', '44AD', '44ADA', '44AE'],
        'Normal Income': ['Ordinary', 'Normal']
      },
      'Firms Income': [],
      'Capital Gains': {
        Shares: ['LTCG', 'STCG'],
        'Other Assets': ['LTCG', 'STCG']
      },
      'Other Income':[],
      'Agriculture Income':[],
      'Clubbing':[],
      'Setoff Losses':[],
      'Gross Total Income':[],
      'Total Deductions':[],
      'Net Income':[],
      'Tax Thereon':['Tax', 'Edu Cess'],
      'TDS/TCS/ADV Tax.':[],
      'Net Tax':['Net Tax', 'Interest'],
      'Self Asst. Tax':[],
      'Balance':[],
    },
    BalanceSheet:   ["Business Info", 'Manufacturing', 'Trading', 'Profit and Loss Ac','Fixed Assets', 'Capital Ac.', 'Balance Sheet', 'Cash FLow'],
  };  

  const Accordion = ({ title, children }) => {
    const [open, setOpen] = useState(true);
    return (
      <div className="mt-3 ">
        <div
          className="cursor-pointer font-bold flex gap-3 items-center"
          onClick={() => setOpen(!open)}
        >
          {title} 
        </div>
        {open && <div className="ml-4">{children} </div>}
      </div>
    );
  };  

  const date = new Date()
  const year = date.getFullYear()  

const EachClientData = () => {

    const params = useParams()
    const [dates, setDate] = useState(year)
    const {id} = params

    const each = all.filter(each => each.id == id)

    return (
        <div className="mx-2 md:mx-5 my-3 border border-gray-300 rounded-md px-2 md:px-3 py-3 md:py-5 space-y-3.5">
            <div className="overflow-x-auto">
                <div className="min-w-[1400px]">
                <div>
                    <div className="grid grid-cols-12 gap-1 md:gap-2">
                    <div className="border-2 border-amber-400 col-span-2 px-2 py-3 md:px-3 md:py-4 rounded-md">
                        <div className="flex items-center justify-between mb-2">
                        <label className="text-xs md:text-sm">Assessment Year:</label>
                        <select onChange={e=> setDate(e.target.value)} className="border w-20 md:w-24 rounded-md text-xs md:text-sm p-1">
                            <option value={year}>{year-1} - {year}</option>
                            <option value={year-1}>{year-2} - {year-1}</option>
                            <option value={year-2}>{year-3} - {year-2}</option>
                        </select>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                        <label className="text-xs md:text-sm">Filling Type:</label>
                        <select className="border w-20 md:w-24 rounded-md text-xs md:text-sm p-1">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                        <label className="text-xs md:text-sm">Filling Date:</label>
                        <input className="border w-20 md:w-24 rounded-md text-xs md:text-sm p-1" type="date"/>
                        </div>
                        <div className="flex items-center justify-between">
                        <label className="text-xs md:text-sm">Acknowledge No:</label>
                        <input className="border w-20 md:w-24 rounded-md text-xs md:text-sm p-1" type="text"/>
                        </div>
                    </div>
                    <EachHeading className="col-span-1">
                        <img 
                        src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?t=st=1745915434~exp=1745919034~hmac=89d8e5fb7f21d63740f5756552c34d302b9e03051cfd33e7273eea04ad870f7f&w=740" 
                        className="h-10 md:h-14 lg:h-16 mx-auto rounded-full object-cover" 
                        alt="profile" 
                        />
                    </EachHeading>
                    <EachHeading className="col-span-1 text-xs md:text-sm">
                        <p>Group Details</p>
                    </EachHeading>
                    <EachHeading className="col-span-2 text-xs md:text-sm">
                        <p>Group Details</p>
                    </EachHeading>
                    <EachHeading className="col-span-1 text-xs md:text-sm">
                        <p>ID Details</p>
                    </EachHeading>
                    <EachHeading className="col-span-2 text-xs md:text-sm">
                        Residence Address
                    </EachHeading>
                    <EachHeading className="col-span-2 text-xs md:text-sm">
                        Business Address
                    </EachHeading>
                    <EachHeading className="col-span-1 text-xs md:text-sm">
                        Communication
                    </EachHeading>
                    </div>
                </div>
                
                <div className="mt-4 grid grid-cols-12">
                    <p className="text-sm md:text-base lg:text-lg font-bold col-span-2">Dashboard</p>
                    <input className="border w-full col-span-10"/>
                </div>
                {/* <div className="mt-4 grid grid-cols-12">
                    <p className="text-sm md:text-base lg:text-lg font-bold col-span-2">Computation</p>
                    <div className="flex items-center justify-around gap-3 border px-2 w-[250px]">
                        <p>{dates-1}-{dates}</p>
                        <hr className="rotate-90 w-6"/>
                        <p>{dates-2}-{dates-1}</p>
                    </div>
                </div> */}
                <div className="">
                    <div className="">

                    </div>
                    <Accordion title={`Computation ${dates-1}-${dates} | ${dates-2}-${dates-1}`}>
                        {data.Computation.items.map((item, index) => (
                            <div key={index} className="p-1 w-[350px] flex items-center justify-between">{item} : <input className="border "/></div>
                        ))}
                        <Accordion title="PGBP">
                        <Accordion title="Presumptive">
                            {data.Computation.PGBP.Presumptive.map((item, index) => (
                            <div key={index} className="p-1 w-[350px] flex items-center justify-between">{item} :  <input className="border"/></div>
                            ))}
                        </Accordion>
                        <Accordion title="Normal Income">
                            {data.Computation.PGBP['Normal Income'].map((item, index) => (
                                <div key={index} className="p-1 w-[350px] flex items-center justify-between">{item} :  <input className="border"/></div>
                            ))}
                        </Accordion>
                    </Accordion>
                    <Accordion title="Firms Income"></Accordion>
                    <Accordion title="Capital Gains">
                    <Accordion title="Shares">
                        {data.Computation['Capital Gains'].Shares.map((item, index) => (
                        <div key={index} className="p-1 w-[350px] flex items-center justify-between">{item} :  <input className="border"/></div>
                        ))}
                    </Accordion>
                    <Accordion title="Other Assets">
                        {data.Computation['Capital Gains']['Other Assets'].map((item, index) => (
                        <div key={index} className="p-1 w-[350px] flex items-center justify-between">{item} :  <input className="border"/></div>
                        ))}
                    </Accordion>
                    </Accordion>
                    <Accordion title="Other Income"></Accordion>
                    <Accordion title="Agriculture Income"></Accordion>
                    <Accordion title="Clubbing"></Accordion>
                    <Accordion title="Sestoff Losses"></Accordion>
                    <Accordion title="Gross Total Income"></Accordion>
                    <Accordion title="Deductions"></Accordion>
                    <Accordion title="Net Income"></Accordion> 
                    <Accordion title="Tax Thereon">
                        {data.Computation['Tax Thereon'].map((item, index) => (
                            <div key={index} className="p-1 w-[350px] flex items-center justify-between">{item} : <input className="border"/></div>
                        ))}
                    </Accordion>
                    <Accordion title="TDS/TCS/ADV Tax."></Accordion> 
                    <Accordion title="Net Tax">
                        {data.Computation['Net Tax'].map((item, index) => (
                            <div key={index} className="p-1 w-[350px] flex items-center justify-between">{item} :  <input className="border"/></div>
                        ))}
                    </Accordion>
                    <Accordion title="Self Asst. Tax."></Accordion> 
                    <Accordion title="Balance"></Accordion> 
                    </Accordion>
                    <Accordion title="Balance Sheet">
                        {
                            data.BalanceSheet.map((item, index) => (
                                <div key={index} className="p-1 w-[350px] flex items-center justify-between"><label >{item}</label> <input className="border"/></div>
                            ))
                        }
                    </Accordion>
                    <Accordion title="Audit Report"></Accordion> 
                    <Accordion title="Online Activities"></Accordion> 
                    <Accordion title="Reports"></Accordion> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EachClientData