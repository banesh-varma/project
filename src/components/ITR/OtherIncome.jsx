import { useEffect, useState } from "react";

const EachSapn = ({children}) => {
    return (
        <span className="border-l border-t-0 border-b border-r-0 border-gray-300 !w-[200px] px-2 py-1 flex items-center justify-between "> {children}</span>
    )
}

const options = ["Raw Material", "Products", 'Services', 'Grants', 'Donation', 'Other Operating Revenue', 'Revenue From Operations (Gross)', 'Excise Duty']


const OtherIncome = () => {
    const [blocks, setBlocks] = useState([
    { id: 0, label: 'a', hasLabel: true, inputs: ['', ''] },
    ]);
    const [blocksForSaleOfServices, setBlocksForSaleOfServices] = useState([
    { id: 0, label: 'b', hasLabel: true, inputs: ['', ''] },
    ]);
    const [blocksForGrantsOrDonationReceived, setBlocksForGrantsOrDonationReceived] = useState([
    { id: 0, label: 'c', hasLabel: true, inputs: ['', ''] },
    ]);
    const [blocksForOtherOperatingRevenue, setblocksForOtherOperatingRevenue] = useState([
    { id: 0, label: 'd', hasLabel: true, inputs: ['', ''] },
    ]);

    //new Blockes added/remover for services
    useEffect(() => {
    const lastBlock = blocks[blocks.length - 1];
    const isFilled = lastBlock.inputs.every((i) => i.trim() !== '');
    if (isFilled) {
        setBlocks((prev) => [
        ...prev,
        {
            id: prev.length,
            hasLabel: false,
            inputs: ['', ''],
        },
        ]);
    }
    }, [blocks]);

    //new Blockes added/remover for services
    useEffect(() => {
    const lastBlock = blocksForSaleOfServices[blocksForSaleOfServices.length - 1];
    const isFilled = lastBlock.inputs.every((i) => i.trim() !== '');
    if (isFilled) {
        setBlocksForSaleOfServices((prev) => [
        ...prev,
        {
            id: prev.length,
            hasLabel: false,
            inputs: ['', ''],
        },
        ]);
    }
    }, [blocksForSaleOfServices]);

    //new Blockes added/remover for services
    useEffect(() => {
    const lastBlock = blocksForGrantsOrDonationReceived[blocksForGrantsOrDonationReceived.length - 1];
    const isFilled = lastBlock.inputs.every((i) => i.trim() !== '');
    if (isFilled) {
        setBlocksForGrantsOrDonationReceived((prev) => [
        ...prev,
        {
            id: prev.length,
            hasLabel: false,
            inputs: ['', ''],
        },
        ]);
    }
    }, [blocksForGrantsOrDonationReceived]);

    //new Blockes added/remover for blocksForOtherOperatingRevenue
    useEffect(() => {
    const lastBlock = blocksForOtherOperatingRevenue[blocksForOtherOperatingRevenue.length - 1];
    const isFilled = lastBlock.inputs.every((i) => i.trim() !== '');
    if (isFilled) {
        setblocksForOtherOperatingRevenue((prev) => [
        ...prev,
        {
            id: prev.length,
            hasLabel: false,
            inputs: ['', ''],
        },
        ]);
    }
    }, [blocksForOtherOperatingRevenue]);


    const handleInputChange = (index, inputIndex, value, stateName, setter) => {
        console.log(index)
        const updatedBlocks = [...stateName];
        updatedBlocks[index].inputs[inputIndex] = value;
        setter(updatedBlocks);
    
        // Add new block if last one is fully filled
        const isLastBlock = index === stateName.length - 1;
        const isFilled = updatedBlocks[index].inputs.every((i) => i.trim() !== '');
    
        if (isLastBlock && isFilled) {
        updatedBlocks.push({
            id: updatedBlocks.length,
            hasLabel: false,
            inputs: ['', '',''],
        });
        setter([...updatedBlocks]);
        }
    
        // Remove the next block if it's fully empty
        const nextBlock = updatedBlocks[index + 1];
        if (
        nextBlock &&
        nextBlock.inputs.every((input) => input.trim() === '') &&
        !nextBlock.hasLabel
        ) {
        updatedBlocks.splice(index + 1, 1);
        setter([...updatedBlocks]);
        }
    };

  return (
    <>
    <div className="border border-x-0 border-b-0 border-gray-300">
        <div className="flex">
            <p className="border-b border-gray-300 pl-6 pr-4 py-1 w-full">(a) Dividend Income</p>
            <div className=" flex">
                <EachSapn><span>Total Sales in Rs.</span> <strong>0/-</strong></EachSapn>
                <EachSapn><span>Total Sales in Rs.</span> <strong>0/-</strong></EachSapn>

            </div>
        </div>
        {blocks.map((block, index) => (
            <div key={block.id} className="w-full flex  justify-between">
                <input
                    className="pl-6 pr-4 py-1 w-full border-b border-gray-300"
                    value={block.inputs[0]}
                    onChange={(e) => handleInputChange(index, 0, e.target.value, blocks, setBlocks)}
                />
                <select className="min-w-[150px] outline-none border-l border-b  border-gray-300 ">
                    {
                        options.map((each, i) => <option key={i}>{each}</option>)
                    }
                </select>
                <div className="flex">
                    
                    <input
                        className="border-l border-r-0 border-b border-t-0 border-gray-300 !w-[200px] px-4 py-1"
                        value={block.inputs[1]}
                        onChange={(e) => handleInputChange(index, 1, e.target.value, blocks, setBlocks)}
                    />
                    <input
                        className="border-l border-r-0 border-b border-t-0 border-gray-300 !w-[200px] px-4 py-1"
                        value={block.inputs[2]}
                        onChange={(e) => handleInputChange(index, 2, e.target.value, blocks, setBlocks)}
                    />
                </div>
            </div>
        ))}
    </div>
    <div className="border border-x-0 border-b-0 border-gray-300">
        <div className="flex">
            <p className="border-b border-gray-300 pl-6 pr-4 py-1 w-full">(b) Net Gain on Sale of Invetments</p>
            <div className=" flex">
                <EachSapn><span>Total Sales in Rs.</span> <strong>0/-</strong></EachSapn>
                <EachSapn><span>Total Sales in Rs.</span> <strong>0/-</strong></EachSapn>

            </div>
        </div>
        {blocksForSaleOfServices.map((block, index) => (
            <div key={block.id} className="w-full flex  justify-between">
                <input
                    className="pl-6 pr-4 py-1 w-full border-b border-gray-300"
                    value={block.inputs[0]}
                    onChange={(e) => handleInputChange(index, 0, e.target.value, blocksForSaleOfServices, setBlocksForSaleOfServices)}
                />
                <select className="min-w-[150px] outline-none border-l border-b  border-gray-300 ">
                    {
                        options.map((each, i) => <option key={i}>{each}</option>)
                    }
                </select>
                <div className="flex">
                    
                    <input
                        className="border-l border-r-0 border-b border-t-0 border-gray-300 !w-[200px] px-4 py-1"
                        value={block.inputs[1]}
                        onChange={(e) => handleInputChange(index, 1, e.target.value, blocksForSaleOfServices, setBlocksForSaleOfServices)}
                    />
                    <input
                        className="border-l border-r-0 border-b border-t-0 border-gray-300 !w-[200px] px-4 py-1"
                        value={block.inputs[2]}
                        onChange={(e) => handleInputChange(index, 2, e.target.value, blocksForSaleOfServices, setBlocksForSaleOfServices)}
                    />
                </div>
            </div>
        ))}
    </div>
    <div className="border border-x-0 border-b-0 border-gray-300">
                <div className="flex">
                    <p className="border-b border-gray-300 pl-6 pr-4 py-1 w-full">(c) Net Gain on Sale of Investments</p>
                    <div className="flex">
                        <EachSapn><span>Total Grants in Rs.</span> <strong>0/-</strong></EachSapn>
                        <EachSapn><span>Total Grants in Rs.</span> <strong>0/-</strong></EachSapn>
                    </div>
                </div>
                {blocksForGrantsOrDonationReceived.map((block, index) => (
                    <div key={block.id} className="w-full flex  justify-between">
                        <input
                            className="pl-6 pr-4 py-1 w-full border-b border-gray-300"
                            value={block.inputs[0]}
                            onChange={(e) => handleInputChange(index, 0, e.target.value, blocksForGrantsOrDonationReceived, setBlocksForGrantsOrDonationReceived)}
                        />
                        <select className="min-w-[150px] outline-none border-l border-b  border-gray-300 ">
                            {
                                options.map((each, i) => <option key={i}>{each}</option>)
                            }
                        </select>
                        <div className="flex">
                            <input
                                className="border-l border-r-0 border-b border-t-0 border-gray-300 !w-[200px] px-4 py-1"
                                value={block.inputs[1]}
                                onChange={(e) => handleInputChange(index, 1, e.target.value, blocksForGrantsOrDonationReceived, setBlocksForGrantsOrDonationReceived)}
                            />
                            <input
                                className="border-l border-r-0 border-b border-t-0 border-gray-300 !w-[200px] px-4 py-1"
                                value={block.inputs[2]}
                                onChange={(e) => handleInputChange(index, 2, e.target.value, blocksForGrantsOrDonationReceived, setBlocksForGrantsOrDonationReceived)}
                            />
                        </div>
                    </div>
                ))}
            </div>
    <div className="border border-x-0 border-b-0 border-gray-300">
        <div className="flex">
            <p className="border-b border-gray-300 pl-6 pr-4 py-1 w-full">(d) Other Non-Operating Income (Please Specify)</p>
            <div className=" flex">
                <EachSapn><span>Total Sales in Rs.</span> <strong>0/-</strong></EachSapn>
                <EachSapn><span>Total Sales in Rs.</span> <strong>0/-</strong></EachSapn>

            </div>
        </div>
        {blocksForGrantsOrDonationReceived.map((block, index) => (
            <div key={block.id} className="w-full flex  justify-between">
                <input
                    className="pl-6 pr-4 py-1 w-full border-b border-gray-300"
                    value={block.inputs[0]}
                    onChange={(e) => handleInputChange(index, 0, e.target.value, blocksForGrantsOrDonationReceived, setBlocksForGrantsOrDonationReceived)}
                />
                <select className="min-w-[150px] outline-none border-l border-b  border-gray-300 ">
                    {
                        options.map((each, i) => <option key={i}>{each}</option>)
                    }
                </select>
                <div className="flex">
                    
                    <input
                        className="border-l border-r-0 border-b border-t-0 border-gray-300 !w-[200px] px-4 py-1"
                        value={block.inputs[1]}
                        onChange={(e) => handleInputChange(index, 1, e.target.value, blocksForGrantsOrDonationReceived, setBlocksForGrantsOrDonationReceived)}
                    />
                    <input
                        className="border-l border-r-0 border-b border-t-0 border-gray-300 !w-[200px] px-4 py-1"
                        value={block.inputs[2]}
                        onChange={(e) => handleInputChange(index, 2, e.target.value, blocksForGrantsOrDonationReceived, setBlocksForGrantsOrDonationReceived)}
                    />
                </div>
            </div>
        ))}
    </div>
    
    </>
  );
}

export default OtherIncome