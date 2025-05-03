import { useMemo, useState } from "react";
import { all } from "../../dummyClinets";
import { useParams } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { IoArrowDown, IoArrowUp, IoCalculator, IoCubeOutline, IoDiscOutline } from "react-icons/io5";
import { MdChevronLeft, MdChevronRight, MdOutlineDashboard } from 'react-icons/md';
import { IoHome } from 'react-icons/io5';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import DashBoard from "../DashBoard";

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
      Shares: [{name:'LTCG', icon:<IoHome className="mx-3.5"/>}, {name:'STCG', icon:<IoHome className="mx-3.5"/>}],
      'Other Assets': [{name:'LTCG', icon:<IoHome className="mx-3.5"/>}, {name:'STCG', icon:<IoHome className="mx-3.5"/>}],
    },
    ComputationTwo : [{name: 'Other Income', icon:<IoHome className="mx-3.5"/>},{name: 'Agriculture Income', icon:<IoHome className="mx-3.5"/>},
      {name: 'Clubbing', icon:<IoHome className="mx-3.5"/>},{name: 'Setoff Losses', icon:<IoHome className="mx-3.5"/>},
      {name: 'Gross Total Income', icon:<IoHome className="mx-3.5"/>},{name: 'Total Deductions', icon:<IoHome className="mx-3.5"/>},
      {name: 'Net Income', icon:<IoHome className="mx-3.5"/>}],
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
  const [selected, setSelected] = useState('dashboard')
  const [accordion, setAccordion] = useState({computation: true, pgbp: true, pgbpPresemptive: true, pgbpNormalIncom: true, captialGains:true, captialGainsShares:true, captialGainsOtherAssets:true, taxThereon:true, netTax:true, balanceSheet:true})
  const { id } = params;
  const [selectedBtn, setSelectedBtn] = useState("dashBoard")

  const each = all.filter(each => each.id == id);

  const [isOpen, setIsOpen] = useState(true);

  const currentYear = new Date().getFullYear();
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
  

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="rounded-md px-3 py-1 space-y-1">
      <div className="flex h-[18h] w-full">
        <EachHeading className="min-w-[60px] border-r-0">
          <img
            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?t=st=1745915434~exp=1745919034~hmac=89d8e5fb7f21d63740f5756552c34d302b9e03051cfd33e7273eea04ad870f7f&w=740"
            className=" mx-auto rounded-full object-fit w-[110px]"
            alt="profile"
          />
        </EachHeading>
        <EachHeading className="min-w-[200px] text-xs md:text-sm border-r-0">
          <p>Group Details</p>
        </EachHeading>
        <EachHeading className="w-[20%] min-w-[200px] text-xs md:text-sm border-r-0">
          <p>Group Details</p>
        </EachHeading>
        <EachHeading className="w-[20%] min-w-[200px] text-xs md:text-sm border-r-0">
          <p>ID Details</p>
        </EachHeading>
        <EachHeading className="w-[20%] min-w-[200px] text-xs md:text-sm border-r-0">
          Residence Address
        </EachHeading>
        <EachHeading className="w-[20%] min-w-[200px] text-xs md:text-sm border-r-0">
          Business Address
        </EachHeading>
        <EachHeading className="w-[20%] min-w-[200px] text-xs md:text-sm">
          Communication
        </EachHeading>
      </div>
      {/* <div className="font-sans text-sm">
        Header row
        <div className=" flex font-bold">
          <div
            className="px-3 flex items-center border transition-all duration-300"
            style={{ width: isOpen ? '269px' : `${62 + maxIndentLevel * 24.5}px` }}
          >
            <button
              onClick={toggleOpen}
              className="mx-2 p-1 bg-blue-800 text-white rounded hover:bg-blue-600"
            >
              {isOpen ? <MdChevronLeft size={20} /> : <MdChevronRight size={20} />}
            </button>
            <span className={isOpen ? 'ml-2' : 'ml-2 opacity-0'}>Asst. Year</span>
          </div>
          <select className={`${isOpen ? 'w-[128px]' : 'w-[127px]'} border-r border-t border-b p-2`}>
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

        Data rows
        {filteredRows.map((row, idx) => (
          <div key={row.key} className=" flex  border-t-0">
            <div
              className="px-3 flex items-center border-r border-l border-b transition-all duration-300"
              style={{ width: isOpen ? '269px' : `${62 + maxIndentLevel * 24}px` }}
            >
              <div
                className=" flex items-center cursor-pointer w-full"
                style={{ marginLeft: `${row.level * 24}px` }}
                onClick={() => handleSectionToggle(row)}
              >
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IoHome className="mr-2" size={18} />
                    <span className={isOpen ? (row.isParent ? 'font-bold' : '') : 'opacity-0 w-1'}>
                      {row.label}
                    </span>
                  </div>
                  {row.isParent && row.hasChildren && (
                    <span className="mr-1 ">
                      {openSections.has(row.key) ? <FaChevronDown size={10} /> : <FaChevronRight size={10} />}
                    </span>
                  )}

                </div>
              </div>
            </div>
            <div className="w-32 border-r border-b p-2">
              <input className="w-full outline-none" />
            </div>
            <div className="w-32 border-r border-b p-2">
              <input className="w-full outline-none" />
            </div>
          </div>
        ))}
      </div> */}
      <div className=" h-[85vh] border flex">
        <div className=" h-full border-r-1">

          <div className="h-[75%]  overflow-y-auto border-b-1">
          <div>

          <div className=" flex font-bold">
          <div className="px-3 flex items-center border transition-all duration-300">
            <button
              onClick={toggleOpen}
              className="mx-2 p-1 bg-blue-800 text-white rounded hover:bg-blue-600"
            >
              {isOpen ? <MdChevronLeft size={20} /> : <MdChevronRight size={20} />}
            </button>
            <span className="w-4"></span>

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
          <div className="transition-all  ease-in-out duration-100 flex font-bold">
            <div onClick={() => setAccordion({...accordion, computation: !accordion.computation})} className="cursor-pointer px-3 flex items-center border bg-blue-50 text-blue-500 hover:text-blue-700">
              <IoHome className="mx-3.5"/>
                <span className={`${isOpen ? 'ml-2' : 'hidden'} w-[151px] flex gap-2 `}>Computation </span> 
                {accordion.computation ? <IoArrowDown  /> : <IoArrowUp  />}
            </div>
            <input className={`w-32 border-r border-t border-b p-0.5`} />
            <input className="w-32 border-r border-t border-b p-0,5" />
          </div>
          {
            !accordion.computation &&
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

                    <div onClick={() => setAccordion({...accordion, pgbpNormalIncom: !accordion.pgbpNormalIncom})} className="cursor-pointer px-3 flex items-center border font-normal">
                      <IoHome className="mx-3.5"/>
                      <span className={`${isOpen ? 'ml-5' : 'hidden'} w-[139px] flex gap-2  italic `}>Normal Income </span> 
                      {/* {accordion.pgbpNormalIncom ? <IoArrowDown  /> : <IoArrowUp  />}
                       */}
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
                  accordion.captialGainsShares && data.Computation["Capital Gains"].Shares.map(each => <div className="transition-all ease-in-out duration-100 flex font-bold">
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
                  accordion.captialGainsOtherAssets && data.Computation["Capital Gains"]["Other Assets"].map(each => <div className="transition-all ease-in-out duration-100 flex font-bold">
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
                {data.Computation.ComputationTwo.map(each => <div className="transition-all ease-in-out duration-100 flex font-bold">
                    <div className="px-3 flex items-center border transition-all duration-300">
                        {each.icon}
                        <span className={`${isOpen ? 'ml-2' : 'hidden'} font-normal  w-[151px]  transition-all ease-in-out duration-100`}>{each.name}</span>
                        <span className="w-4"></span>
                    </div>
                    <input className={`w-32 border-r border-t border-b p-0,5`} />
                    <input className="w-32 border-r border-t border-b p-0,5" />
                  </div>)
                }
              </div>
          }
          
        </div>
            {selectedBtn === 'dashboard' && <h1>Dashboard</h1>}
            {selectedBtn === 'computation' && <h1>Computation</h1>}
            {selectedBtn === 'balance sheet' && <h1>Balance sheet</h1>}
            {selectedBtn === 'audit  Reoort' && <h1>Audit  Reoort</h1>}
            {selectedBtn === 'online Activities' && <h1>Online Activities</h1>}
            {selectedBtn === 'reports' && <h1>Reports</h1>}
          </div>
          <div className="h-[20%] flex flex-col">
            <button onClick={() => setSelectedBtn('dashboard')} className={`${selectedBtn === "dashboard" && "bg-blue-600"} flex items-center bg-neutral-100 text-md font-semibold border-b-1 hover:bg-blue-100 transition-all duration-300`}><MdOutlineDashboard className="mr-2"/>
            Dashboard</button>
            <button onClick={() => setSelectedBtn('computation')} className="flex items-center  bg-neutral-100 text-md font-semibold border-b-1 hover:bg-blue-100 transition-all duration-300"><MdOutlineDashboard className="mr-2"/>
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
        <div>
          <div>
            {selectedBtn === 'dashboard' && <h1>Dashboard</h1>}
            {selectedBtn === 'computation' && <h1>Computation</h1>}
            {selectedBtn === 'balance sheet' && <h1>Balance Sheet</h1>}
            {selectedBtn === 'audit  Reoort' && <h1>Audit  Reoort</h1>}
            {selectedBtn === 'online Activities' && <h1>Online Activities</h1>}
            {selectedBtn === 'reports' && <h1>Reports</h1>}
          </div>
        </div>
      <div>
      </div>
      </div>
    </div>
  );
};

export default EachClientData;