import { useEffect, useMemo, useState } from "react";
import { all } from "../../dummyClinets";
import { useParams } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { IoArrowDown, IoArrowUp, IoCalculator, IoCubeOutline, IoDiscOutline } from "react-icons/io5";
import { MdChevronLeft, MdChevronRight, MdOutlineDashboard } from 'react-icons/md';
import { IoHome } from 'react-icons/io5';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import DashBoard from "../DashBoard";
import Computation from "./computation";
import RevenueFromOperations from "./revenueFromOperations";
import OtherIncome from "./OtherIncome";

function EachHeading({ children, className }) {
  return (
    <div className={`border flex flex-col items-center justify-center p-1 md:p-2 text-center ${className}`}>
      {children}
    </div>
  );
}

const consumption = [{name: "AIS | TIS", icon:<IoHome/>},{name: "Permanent Info", icon:<IoHome/>},{name: "Salary", icon:<IoHome/>},{name: "House Property", icon:<IoHome/>},{name: "Speculative", icon:<IoHome/>}]


const data = {
  Computation: {
    'AIS : TIS': 'AIS : TIS',
    'Permanent Info.': 'Permanent Info.',
    Salary: 'Salary',
    'House Property': 'House Property',
    Speculative: 'Speculative',
    PGBP: {
      Presumptive: ['Commission', '44AD', '44ADA', '44AE'],
      'Normal Income': ['Ordinary', 'Normal'],
    },
    'Firms Income': [],
    'Capital Gains': {
      Shares: [{name:'LTCG', icon:<IoHome className="mx-1"/>}, {name:'STCG', icon:<IoHome className="mx-1"/>}],
      'Other Assets': [{name:'LTCG', icon:<IoHome className="mx-1"/>}, {name:'STCG', icon:<IoHome className="mx-1"/>}],
    },
    ComputationTwo : [{name: 'Other Income', icon:<IoHome className="mx-1"/>},{name: 'Agriculture Income', icon:<IoHome className="mx-1"/>},
      {name: 'Clubbing', icon:<IoHome className="mx-1"/>},{name: 'Setoff Losses', icon:<IoHome className="mx-1"/>},
      {name: 'Gross Total Income', icon:<IoHome className="mx-1"/>},{name: 'Total Deductions', icon:<IoHome className="mx-1"/>},
      {name: 'Net Income', icon:<IoHome className="mx-1"/>}],
    'Tax Thereon': ['Tax', 'Edu Cess'],
    'TDS/TCS/ADV Tax.': [],
    'Net Tax': ['Net Tax', 'Interest'],
    'Self Asst. Tax': [],
    Balance: [],
  },
  BalanceSheet: [
    'Business Info',
    'Manufacturing',
    'Trading',
    'Profit and Loss Ac',
    'Fixed Assets',
    'Capital Ac.',
    'Balance Sheet',
    'Cash FLow',
  ],
  'Audit Report': [],
  'Online Activities': [],
  Reports: [],
};

const EachClientData = () => {
  const params = useParams();
  const currentYear = new Date().getFullYear();
  const [selected, setSelected] = useState('dashboard')
  const [accordion, setAccordion] = useState({computation: true, pgbp: true, pgbpPresemptive: true, pgbpNormalIncom: true, captialGains:true, captialGainsShares:true, captialGainsOtherAssets:true, taxThereon:true, netTax:true, balanceSheet:true})
  const { id } = params;
  const [selectedBtn, setSelectedBtn] = useState("")

  const each = all.filter(each => each.id == id);

  const [isOpen, setIsOpen] = useState(true);

  const flattenData = (obj, level = 0, parentKey = null) => {
    let rows = [];
    for (const key in obj) {
      const value = obj[key];
      const hasChildren = typeof value === 'object' && value &&
        (Array.isArray(value) ? value.length > 0 : Object.keys(value).length > 0);

      rows.push({
        label: key,
        level,
        key: parentKey ? `${parentKey}-${key}` : key,
        isParent: true,
        hasChildren
      });

      if (hasChildren) {
        if (Array.isArray(value)) {
          rows.push(...value.map((item, idx) => ({
            label: item,
            level: level + 1,
            key: `${key}-${idx}`,
            isParent: false,
          })));
        } else if (typeof value === 'object') {
          rows.push(...flattenData(value, level + 1, key));
        }
      }
    }
    return rows;
  };

  const rawRows = useMemo(() => flattenData(data), [data]);
  const maxIndentLevel = useMemo(() => Math.max(...rawRows.map((r) => r.level)), [rawRows]);

  const [openSection, setOpenSection] = useState(null); // To manage the single open section
  const [openSections, setOpenSections] = useState(new Set());
  const [rightContent, setRightContent] = useState("")

  // Improved filtering logic based on the single open section
  const filteredRows = useMemo(() => {
    const result = [];
    const parentKeys = [];
  
    rawRows.forEach(row => {
      // Remove closed parents from stack
      while (
        parentKeys.length > 0 &&
        row.level <= parentKeys[parentKeys.length - 1].level
      ) {
        parentKeys.pop();
      }
  
      if (row.level === 0 || parentKeys.every(p => openSections.has(p.key))) {
        result.push(row);
      }
  
      if (row.isParent) {
        parentKeys.push(row);
      }
    });
  
    return result;
  }, [rawRows, openSections]);

  const handleSectionToggle = (row) => {
    if (!row.isParent || !row.hasChildren) return;
  
    setOpenSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(row.key)) {
        newSet.delete(row.key); // collapse
      } else {
        newSet.add(row.key); // expand
      }
      return newSet;
    });
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div className="px-3 rounded-md mt-2  py-1 space-y-1 overflow-x-auto">
      <div className="flex mb-2">
        <EachHeading className="min-w-[60px] border-r-0 flex-[0_0_auto]">
          <img
            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?t=st=1745915434~exp=1745919034~hmac=89d8e5fb7f21d63740f5756552c34d302b9e03051cfd33e7273eea04ad870f7f&w=740"
            className="mx-auto rounded-full object-fit w-[110px]"
            alt="profile"
          />
        </EachHeading>
        <EachHeading className="flex-1 text-xs md:text-sm border-r-0 min-w-[150px]">
          <p>Group Details</p>
        </EachHeading>
        <EachHeading className="flex-1 text-xs md:text-sm border-r-0 min-w-[150px]">
          <p>Group Details</p>
        </EachHeading>
        <EachHeading className="flex-1 text-xs md:text-sm border-r-0 min-w-[150px]">
          <p>ID Details</p>
        </EachHeading>
        <EachHeading className="flex-1 text-xs md:text-sm border-r-0 min-w-[150px]">
          Residence Address
        </EachHeading>
        <EachHeading className="flex-1 text-xs md:text-sm border-r-0 min-w-[200px]">
          Business Address
        </EachHeading>
        <EachHeading className="flex-1 text-xs md:text-sm min-w-[200px]">
          Communication
        </EachHeading>
      </div>
      <div className="flex gap-5 ">
        <div>
          <div className=" flex font-bold">
            <div className="px-0.5 flex items-center border transition-all duration-300">
              <button
                onClick={toggleOpen}
                className="mx-0.5 p-1 bg-blue-800 text-white rounded hover:bg-blue-600"
              >
                {isOpen ? <MdChevronLeft size={20} /> : <MdChevronRight size={20} />}
              </button>
              <span className="w-2"></span>

              <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] transition-all ease-in-out duration-100`}>Asst. Year</span>
            </div>
            <select className={`w-32 border-r border-t border-b p-2`}>
              <option>{currentYear - 1} - {currentYear}</option>
              <option>{currentYear - 2} - {currentYear - 1}</option>
              <option>{currentYear - 3} - {currentYear - 2}</option>
            </select>
            <select className="w-32 border-r border-t border-b p-2">
              <option>{currentYear - 2} - {currentYear - 1}</option>
              <option>{currentYear - 3} - {currentYear - 2}</option>
              <option>{currentYear - 4} - {currentYear - 3}</option>
            </select>
          </div>
          {selectedBtn === 'computation' &&
          <Computation accordion={accordion} isOpen={isOpen} data={data} setAccordion={setAccordion} setSelectedBtn={setSelectedBtn} />
          }
          {selectedBtn === 'balance sheet' && <>
            <div className="transition-all  ease-in-out duration-100 flex font-bold">
              <div onClick={() => {accordion.balanceSheet && setSelectedBtn(""); setAccordion({...accordion, balanceSheet: !accordion.balanceSheet})}} className="cursor-pointer px-0.5 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
                <IoHome className="mx-1"/>
                  <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] flex gap-2 `}>Balance Sheet</span> 
                  {accordion.balanceSheet ? <IoArrowDown  /> : <IoArrowUp  />}
              </div>
              <input className={`w-32 border-r border-t border-b p-0.5`} />
              <input className="w-32 border-r border-t border-b p-0,5" />
            </div>    
            {
              accordion?.balanceSheet && data?.BalanceSheet?.map((each, i) => <div key={i} className="transition-all ease-in-out duration-100 flex font-bold">
                <div onClick={() => setRightContent(each)} className="cursor-pointer px-0.5 flex items-center border transition-all duration-300">
                    <IoHome className="mx-1"/>
                    <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] font-normal   transition-all ease-in-out duration-100`}>{each}</span>
                    <span className="w-4"></span>
                </div>
                <input className={`w-32 border-r border-t border-b p-0,5`} />
                <input className="w-32 border-r border-t border-b p-0,5" />
                </div>
              )
            }        
          </>}
          {selectedBtn === 'audit  Reoort' && <>
            <div className="transition-all  ease-in-out duration-100 flex font-bold">
              <div onClick={() => {!accordion.balanceSheet && setSelectedBtn(""); setAccordion({...accordion, balanceSheet: !accordion.balanceSheet})}} className="cursor-pointer px-0.5 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
                <IoHome className="mx-1"/>
                  <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] flex gap-2 `}>Audit Reoort</span> 
                  <span className="w-4"></span>
              </div>
              <input className={`w-32 border-r border-t border-b p-0.5`} />
              <input className="w-32 border-r border-t border-b p-0,5" />
            </div>    
          </>}
          {selectedBtn === 'online Activities' && <>
            <div className="transition-all  ease-in-out duration-100 flex font-bold">
              <div className="cursor-pointer px-0.5 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
                <IoHome className="mx-1"/>
                  <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] flex gap-2 `}>Online Activities</span> 
                  <span className="w-4"></span>
              </div>
              <input className={`w-32 border-r border-t border-b p-0.5`} />
              <input className="w-32 border-r border-t border-b p-0,5" />
            </div>    
          </>}{selectedBtn === 'reports' && <>
            <div className="transition-all  ease-in-out duration-100 flex font-bold">
              <div className="cursor-pointer px-0.5 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
                <IoHome className="mx-1"/>
                  <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] flex gap-2 `}>Reports</span> 
                  <span className="w-4"></span>
              </div>
              <input className={`w-32 border-r border-t border-b p-0.5`} />
              <input className="w-32 border-r border-t border-b p-0,5" />
            </div>    
          </>}
          <div className="flex flex-col border-r border-l">
            <button onClick={() => {setSelectedBtn('computation')}} className="flex items-center  bg-neutral-100 text-md font-semibold border-b-1 hover:bg-blue-100 transition-all duration-300"><MdOutlineDashboard className="mr-2"/>
            Computation</button>
            <button onClick={() => setSelectedBtn('balance sheet')} className="flex items-center bg-neutral-100 text-md font-semibold border-b-1 hover:bg-blue-100 transition-all duration-300"><MdOutlineDashboard className="mr-2"/>
            Balance sheet</button>
            <button onClick={() => setSelectedBtn('audit  Reoort')} className="flex items-center bg-neutral-100 text-md font-semibold border-b-1 hover:bg-blue-100 transition-all duration-300"><MdOutlineDashboard className="mr-2"/>
            Audit  Reoort</button>
            <button onClick={() => setSelectedBtn('online Activities')} className="flex items-center bg-neutral-100 text-md font-semibold border-b-1 hover:bg-blue-100 transition-all duration-300"><MdOutlineDashboard className="mr-2"/>
            Online Activities</button>
            <button onClick={() => setSelectedBtn('reports')} className="flex items-center bg-neutral-100 text-md font-semibold border-b-1 hover:bg-blue-100 transition-all duration-300"><MdOutlineDashboard className="mr-2"/>
            Reports</button>
          </div>
        </div>
        {selectedBtn === "balance sheet" && <div className="w-full">
          {
            rightContent === data?.BalanceSheet[0] && <div><h1 className="font-bold">{rightContent}</h1></div>
          }
          {
            rightContent === data?.BalanceSheet[1] && <div><h1 className="font-bold">{rightContent}</h1></div>
          }{
            rightContent === data?.BalanceSheet[2] && <div><h1 className="font-bold">{rightContent}</h1></div>
          }{
            rightContent === data?.BalanceSheet[3] && 
            <div  className="w-full ">
              <select className="w-full border rounded p-2 mb-2">
                <option>Business 1</option>
                <option>Business 1</option>
                <option>Business 1</option>
              </select>
              <div className="font-bold border border-b-0 flex justify-between gap-5 border-b-black ">
                <div className="flex">
                  <h1 className="pl-2 border-r min-w-64">{rightContent}</h1>
                  <span className="border-r min-w-24 text-center pt-1.5">Note</span>
                </div>
                <div className="flex">
                  <span className="border-l min-w-[150px] text-center flex items-center justify-between px-2">Group</span>
                  <p className="border-l min-w-[200px] text-center py-1.5">31st March {currentYear}</p>
                  <p className="border-l min-w-[200px] text-center">31st March {currentYear - 1}</p>
                </div>
              </div>
              <div className="border border-t-0">
              <details className="w-full">
                <summary className="flex items-center justify-between w-full pl-3 cursor-pointer list-none border-t border-b border-t-black border-gray-300">
                  <span className="flex items-center gap-3">
                    <span className="inline-block w-2 h-2 rotate-0 transition-transform details-arrow" />
                    <span className="font-medium min-w-[210px]">Revenue From Operations</span>
                    <span className="border-x border-gray-300 min-w-[97px] text-center">19</span>
                  </span>
                  <span className="flex">
                    <span className="border-l min-w-[200px] text-center flex items-center justify-between px-2">
                      <span>Total in Rs.</span> <strong>0/-</strong>
                    </span>
                    <span className="border-l min-w-[200px] text-center flex items-center justify-between px-2">
                      <span>Total in Rs.</span> <strong>0/-</strong>
                    </span>
                  </span>
                </summary>
                <div className="">
                  <RevenueFromOperations />
                </div>
              </details>
                <details className="border-t-0  w-full">
                  <summary className=" flex items-center justify-between w-full pl-3 cursor-pointer list-none">
                    <span className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rotate-0 transition-transform details-arrow" />
                      <span className="font-medium min-w-[210px]">Other Income</span>
                      <span className="border-x min-w-[97px] border-gray-300 text-center">20</span>
                    </span>
                    <span className="flex">
                      <span  className="border-l min-w-[200px] text-center pl-2 flex items-center justify-between px-2"><span>Total in Rs.</span> <strong>0/-</strong></span>
                      <span className="border-l min-w-[200px] text-center flex items-center justify-between px-2"><span>Total in Rs.</span> <strong>0/-</strong></span>
                    </span>
                  </summary>
                  <OtherIncome />
                </details>
                
              </div>
            </div>
          }{
            rightContent === data?.BalanceSheet[4] && <div>
              <div  className="w-full">
                <div className="font-bold border flex items-center justify-between">
                  <h1 className=" pl-2">{rightContent}</h1>
                </div>
              </div>
            </div>
          }
          {
            rightContent === data?.BalanceSheet[5] && <div><h1 className="font-bold">{rightContent}</h1></div>
          }
          {
            rightContent === data?.BalanceSheet[6] && <div><h1 className="font-bold">{rightContent}</h1></div>
          }{
            rightContent === data?.BalanceSheet[7] && <div><h1 className="font-bold">{rightContent}</h1></div>
          }{
            rightContent === data?.BalanceSheet[8] && <div><h1 className="font-bold">{rightContent}</h1></div>
          }
          
        </div>}
      
      </div>
    </div>
  );
};

export default EachClientData;