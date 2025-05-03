import { IoArrowDown, IoArrowUp, IoHome } from "react-icons/io5";

const Computation = ({accordion, isOpen, data, setAccordion, setSelectedBtn }) => {
    return (
        <>
            <div className="transition-all  ease-in-out duration-100 flex font-bold">
                <div onClick={() => {accordion.computation && setSelectedBtn(""); setAccordion({...accordion, computation: !accordion.computation})}} className="cursor-pointer px-3 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
                <IoHome className="mx-3.5"/>
                    <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] flex gap-2 `}>Computation </span> 
                    {accordion.computation ? <IoArrowDown  /> : <IoArrowUp  />}
                </div>
                <input className={`w-32 border-r border-t border-b p-0.5`} />
                <input className="w-32 border-r border-t border-b p-0,5" />
            </div>
            {
                accordion.computation &&
                <div className="">
                    <div className="transition-all ease-in-out duration-100 flex font-bold">
                    <div className="px-3 flex items-center border transition-all duration-300">
                        <IoHome className="mx-3.5"/>
                        <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] font-normal   transition-all ease-in-out duration-100`}>AIS | TIS </span>
                        <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0,5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>
                    <div className="transition-all ease-in-out duration-100 flex font-bold">
                    <div className="px-3 flex items-center border transition-all duration-300">
                        <IoHome className="mx-3.5"/>
                        <span className={`${isOpen ? 'ml-2' : 'hidden'} font-normal w-[151px]  transition-all ease-in-out duration-100`}>Permanent Info </span>
                        <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0,5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>
                    <div className="transition-all ease-in-out duration-100 flex font-bold">
                    <div className="px-3 flex items-center border transition-all duration-300">
                        <IoHome className="mx-3.5"/>
                        <span className={`${isOpen ? 'ml-2' : 'hidden'} font-normal  w-[151px]  transition-all ease-in-out duration-100`}>Salary </span>
                        <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0,5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>
                    <div className="transition-all ease-in-out duration-100 flex font-bold">
                    <div className="px-3 flex items-center border transition-all duration-300">
                        <IoHome className="mx-3.5"/>
                        <span className={`${isOpen ? 'ml-2' : 'hidden'} font-normal  w-[151px]  transition-all ease-in-out duration-100`}>House Peoperty </span>
                        <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0,5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>
                    <div className="transition-all ease-in-out duration-100 flex font-bold">
                    <div className="px-3 flex items-center border transition-all duration-300">
                        <IoHome className="mx-3.5"/>
                        <span className={`${isOpen ? 'ml-2' : 'hidden'} font-normal  w-[151px]  transition-all ease-in-out duration-100`}>Speculative </span>
                        <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0,5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>
                    <div className="transition-all  ease-in-out duration-100 flex font-bold">
                    <div onClick={() => setAccordion({...accordion, pgbp: !accordion.pgbp})} className="cursor-pointer px-3 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
                        <IoHome className="mx-3.5"/>
                        <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] flex gap-2 `}>PGBP </span> 
                        {accordion.pgbp ? <IoArrowDown  /> : <IoArrowUp  />}
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0.5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>
                    {
                    accordion.pgbp && 
                    <div>
                    <div className="transition-all  ease-in-out duration-100 flex font-bold">
                        <div onClick={() => setAccordion({...accordion, pgbpPresemptive: !accordion.pgbpPresemptive})} className="cursor-pointer px-3 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
                        <IoHome className="mx-3.5"/>
                            <span className={`${isOpen ? 'ml-5' : 'hidden'} w-[139px]  flex gap-2 italic`}>Presemptive </span> 
                            {!accordion.pgbpPresemptive ? <IoArrowDown  /> : <IoArrowUp  />}
                        </div>
                        <input className={`w-32 border-r border-t border-b p-0.5`} />
                        <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>
                    {
                        accordion.pgbpPresemptive && 
                        <>
                        <div className="transition-all ease-in-out duration-100 flex font-bold">
                    <div className="px-3 flex items-center border transition-all duration-300">
                        <IoHome className="mx-3.5"/>
                        <span className={`${isOpen ? 'ml-7' : 'hidden'} font-normal w-[131px] italic transition-all ease-in-out duration-100`}>Commission</span>
                        <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0,5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                    </div><div className="transition-all ease-in-out duration-100 flex font-bold">
                    <div className="px-3 flex items-center border transition-all duration-300">
                        <IoHome className="mx-3.5"/>
                        <span className={`${isOpen ? 'ml-7' : 'hidden'} font-normal w-[131px]  italic transition-all ease-in-out duration-100`}>44AD</span>
                        <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0,5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                    </div><div className="transition-all ease-in-out duration-100 flex font-bold">
                    <div className="px-3 flex items-center border transition-all duration-300">
                        <IoHome className="mx-3.5"/>
                        <span className={`${isOpen ? 'ml-7' : 'hidden'} font-normal w-[131px]  italic transition-all ease-in-out duration-100`}>44ADA</span>
                        <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0,5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                    </div><div className="transition-all ease-in-out duration-100 flex font-bold">
                    <div className="px-3 flex items-center border transition-all duration-300">
                        <IoHome className="mx-3.5"/>
                        <span className={`${isOpen ? 'ml-7' : 'hidden'} font-normal w-[131px] italic  transition-all ease-in-out duration-100`}>44AE</span>
                        <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0,5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>
                        </>

                    }
                    
                    <div className="transition-all  ease-in-out duration-100 flex font-bold">
                        <div className="cursor-pointer px-3 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
                        <IoHome className="mx-3.5"/>
                            <span className={`${isOpen ? 'ml-5' : 'hidden'} w-[139px]  flex gap-2 italic`}>Normal Income</span> 
                            <span className="w-4"></span>
                        </div>
                        <input className={`w-32 border-r border-t border-b p-0.5`} />
                        <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>
                    
                    </div>
                    }
                    <div className="transition-all ease-in-out duration-100 flex font-bold">
                    <div className="px-3 flex items-center border transition-all duration-300">
                        <IoHome className="mx-3.5"/>
                        <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] font-normal   transition-all ease-in-out duration-100`}>Firms Income</span>
                        <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0,5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>
                    <div className="transition-all  ease-in-out duration-100 flex font-bold">
                    <div onClick={() => setAccordion({...accordion, captialGains: !accordion.captialGains})} className="cursor-pointer px-3 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
                        <IoHome className="mx-3.5"/>
                        <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] flex gap-2`}>Capital Gains</span> 
                        {accordion.captialGains ? <IoArrowDown  /> : <IoArrowUp  />}
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0.5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>
                    {accordion.captialGains && <>
                    <div className="transition-all  ease-in-out duration-100 flex font-bold">
                    <div onClick={() => setAccordion({...accordion, captialGainsShares: !accordion.captialGainsShares})} className="cursor-pointer px-3 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
                        <IoHome className="mx-3.5"/>
                        <span className={`${isOpen ? 'ml-5' : 'hidden'} w-[139px]  flex gap-2 italic`}>Shares</span> 
                        {accordion.captialGainsShares ? <IoArrowDown  /> : <IoArrowUp  />}
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0.5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>
                    {
                    accordion.captialGainsShares && data.Computation["Capital Gains"].Shares.map((each, i) => <div key={i} className="transition-all ease-in-out duration-100 flex font-bold">
                        <div className="px-3 flex items-center border transition-all duration-300">
                            {each.icon}
                            <span className={`${isOpen ? 'ml-7' : 'hidden'} font-normal w-[131px] italic  transition-all ease-in-out duration-100`}>{each.name}</span>
                            <span className="w-4"></span>
                        </div>
                        <input className={`w-32 border-r border-t border-b p-0,5`} />
                        <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>)

                    }
                    <div>
                    <div className="transition-all  ease-in-out duration-100 flex font-bold">
                    <div onClick={() => setAccordion({...accordion, captialGainsOtherAssets: !accordion.captialGainsOtherAssets})} className="cursor-pointer px-3 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
                        <IoHome className="mx-3.5"/>
                        <span className={`${isOpen ? 'ml-5' : 'hidden'} w-[139px]  flex gap-2 italic `}>Other Assets</span> 
                        {accordion.captialGainsOtherAssets ? <IoArrowDown  /> : <IoArrowUp  />}
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0.5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>
                    {
                    accordion.captialGainsOtherAssets && data.Computation["Capital Gains"]["Other Assets"].map((each, i) => <div key={i} className="transition-all ease-in-out duration-100 flex font-bold">
                        <div className="px-3 flex items-center border transition-all duration-300">
                            {each.icon}
                            <span className={`${isOpen ? 'ml-7' : 'hidden'} font-normal w-[131px] italic`}>{each.name}</span>
                            <span className="w-4"></span>
                        </div>
                        <input className={`w-32 border-r border-t border-b p-0,5`} />
                        <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>)
                    }
                    </div>
                    
                    </>
                    
                    }
                    {data.Computation.ComputationTwo.map((each, i) => <div  key={i} className="transition-all ease-in-out duration-100 flex font-bold">
                        <div className="px-3 flex items-center border transition-all duration-300">
                            {each.icon}
                            <span className={`${isOpen ? 'ml-2' : 'hidden'} font-normal  w-[151px]  transition-all ease-in-out duration-100`}>{each.name}</span>
                            <span className="w-4"></span>
                        </div>
                        <input className={`w-32 border-r border-t border-b p-0,5`} />
                        <input className="w-32 border-r border-t border-b p-0,5" />
                    </div>)
                    }
                    <div className="transition-all  ease-in-out duration-100 flex font-bold">
                <div onClick={() => setAccordion({...accordion, taxThereon: !accordion.taxThereon})} className="cursor-pointer px-3 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
                <IoHome className="mx-3.5"/>
                    <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] flex gap-2 `}>Tax Thereon</span> 
                    {accordion.taxThereon ? <IoArrowDown  /> : <IoArrowUp  />}
                </div>
                <input className={`w-32 border-r border-t border-b p-0.5`} />
                <input className="w-32 border-r border-t border-b p-0,5" />
            </div>
            {
                accordion.taxThereon && 
                <div>
                <div className="transition-all  ease-in-out duration-100 flex font-bold">
                    <div onClick={() => setAccordion({...accordion, pgbpNormalIncom: !accordion.pgbpNormalIncom})} className="cursor-pointer px-3 flex items-center border font-normal">
                    <IoHome className="mx-3.5"/>
                    <span className={`${isOpen ? 'ml-5' : 'hidden'} w-[139px] flex gap-2  italic `}>Tax</span> 
                    {/* {accordion.pgbpNormalIncom ? <IoArrowDown  /> : <IoArrowUp  />}
                    */}
                    <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0.5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                </div>
                <div className="transition-all  ease-in-out duration-100 flex font-bold">
                    <div onClick={() => setAccordion({...accordion, pgbpNormalIncom: !accordion.pgbpNormalIncom})} className="cursor-pointer px-3 flex items-center border font-normal">
                    <IoHome className="mx-3.5"/>
                    <span className={`${isOpen ? 'ml-5' : 'hidden'} w-[139px] flex gap-2  italic `}>Edu Cess</span> 
                    {/* {accordion.pgbpNormalIncom ? <IoArrowDown  /> : <IoArrowUp  />}
                    */}
                    <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0.5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                </div>
                </div>
            }
            <div className="transition-all  ease-in-out duration-100 flex font-bold">
                <div className="cursor-pointer px-3 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
                <IoHome className="mx-3.5"/>
                    <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] flex gap-2 `}>TDS/TCS/Adv Tax</span> 
                    <span className='w-4'></span>
                </div>
                <input className={`w-32 border-r border-t border-b p-0.5`} />
                <input className="w-32 border-r border-t border-b p-0,5" />
            </div>
            <div className="transition-all  ease-in-out duration-100 flex font-bold">
                <div onClick={() => setAccordion({...accordion, netTax: !accordion.netTax})} className="cursor-pointer px-3 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
                <IoHome className="mx-3.5"/>
                    <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] flex gap-2 `}>Net Tax</span> 
                    {accordion.netTax ? <IoArrowDown  /> : <IoArrowUp  />}
                </div>
                <input className={`w-32 border-r border-t border-b p-0.5`} />
                <input className="w-32 border-r border-t border-b p-0,5" />
            </div>
            {
                accordion.netTax && 
                <div>
                <div className="transition-all  ease-in-out duration-100 flex font-bold">
                    <div className="cursor-pointer px-3 flex items-center border font-normal">
                    <IoHome className="mx-3.5"/>
                    <span className={`${isOpen ? 'ml-5' : 'hidden'} w-[139px] flex gap-2  italic `}>Tax</span> 
                    {/* {accordion.pgbpNormalIncom ? <IoArrowDown  /> : <IoArrowUp  />}
                    */}
                    <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0.5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                </div>
                <div className="transition-all  ease-in-out duration-100 flex font-bold">
                    <div className="cursor-pointer px-3 flex items-center border font-normal">
                    <IoHome className="mx-3.5"/>
                    <span className={`${isOpen ? 'ml-5' : 'hidden'} w-[139px] flex gap-2  italic `}>Edu Cess</span> 
                    {/* {accordion.pgbpNormalIncom ? <IoArrowDown  /> : <IoArrowUp  />}
                    */}
                    <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0.5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                </div>
                </div>
            }
            <div className="transition-all  ease-in-out duration-100 flex">
                <div className="px-3 flex items-center border transition-all duration-300">
                <IoHome className="mx-3.5"/>
                    <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] flex gap-2 `}>Self Asst. Tax</span> 
                    <span className='w-4'></span>
                </div>
                <input className={`w-32 border-r border-t border-b p-0.5`} />
                <input className="w-32 border-r border-t border-b p-0,5" />
            </div><div className="transition-all  ease-in-out duration-100 flex">
                <div className="px-3 flex items-center border transition-all duration-300">
                <IoHome className="mx-3.5"/>
                    <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] flex gap-2 `}>Balance</span> 
                    <span className='w-4'></span>
                </div>
                <input className={`w-32 border-r border-t border-b p-0.5`} />
                <input className="w-32 border-r border-t border-b p-0,5" />
            </div>
                </div>
                
            }
            
            
            </>
    )
}

export default Computation