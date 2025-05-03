import { useEffect, useState } from "react";

const RevenueFromOperations = () => {
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
    const [blocksForRevenueFromOperations, setBlocksRevenueFromOperations] = useState([
    { id: 0, label: 'e', hasLabel: true, inputs: ['', ''] },
    ]);
    const [blocksForExciseDuty, setBlocksForExciseDuty] = useState([
    { id: 0, label: 'f', hasLabel: true, inputs: ['', ''] },
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

    //new Blockes added/remover for RevenueFromOperations
    useEffect(() => {
    const lastBlock = blocksForRevenueFromOperations[blocksForRevenueFromOperations.length - 1];
    const isFilled = lastBlock.inputs.every((i) => i.trim() !== '');
    if (isFilled) {
        setBlocksRevenueFromOperations((prev) => [
        ...prev,
        {
            id: prev.length,
            hasLabel: false,
            inputs: ['', ''],
        },
        ]);
    }
    }, [blocksForRevenueFromOperations]);

    //new Blockes added/remover for blocksForExciseDuty
    useEffect(() => {
    const lastBlock = blocksForExciseDuty[blocksForExciseDuty.length - 1];
    const isFilled = lastBlock.inputs.every((i) => i.trim() !== '');
    if (isFilled) {
        setBlocksForExciseDuty((prev) => [
        ...prev,
        {
            id: prev.length,
            hasLabel: false,
            inputs: ['', ''],
        },
        ]);
    }
    }, [blocksForExciseDuty]);

    const handleInputChange = (index, inputIndex, value, stateName, setter) => {
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
            inputs: ['', ''],
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
            <div>
                {blocks.map((block, index) => (
                    <div
                    key={block.id}
                    className="pl-6 border border-t-0 flex items-center justify-between"
                    >
                    <p>
                        {block.hasLabel ? `(${block.label}) Sale Of Product` : ''}
                    </p>
                    <div>
                        <input
                        className="border-l !w-[250px]"
                        value={block.inputs[0]}
                        onChange={(e) => handleInputChange(index, 0, e.target.value, blocks, setBlocks)}
                        />
                        <input
                        className="border-l !w-[250px]"
                        value={block.inputs[1]}
                        onChange={(e) => handleInputChange(index, 1, e.target.value, blocks, setBlocks)}
                        />
                    </div>
                    </div>
                ))}
            </div>
            <div>
                {blocksForSaleOfServices.map((block, index) => (
                    <div
                    key={block.id}
                    className="pl-6 border border-t-0 flex items-center justify-between"
                    >
                    <p>
                        {block.hasLabel ? `(${block.label}) Sale Of Services` : ''}
                    </p>
                    <div>
                        <input
                        className="border-l !w-[250px]"
                        value={block.inputs[0]}
                        onChange={(e) => handleInputChange(index, 0, e.target.value, blocksForSaleOfServices, setBlocksForSaleOfServices)}
                        />
                        <input
                        className="border-l !w-[250px]"
                        value={block.inputs[1]}
                        onChange={(e) => handleInputChange(index, 1, e.target.value, blocksForSaleOfServices, setBlocksForSaleOfServices)}
                        />
                    </div>
                    </div>
                ))}
            </div>
            <div>
                {blocksForSaleOfServices.map((block, index) => (
                    <div
                    key={block.id}
                    className="pl-6 border border-t-0 flex items-center justify-between"
                    >
                    <p>
                        {block.hasLabel ? `(${block.label}) Grants or Donation Received` : ''}
                    </p>
                    <div>
                        <input
                        className="border-l !w-[250px]"
                        value={block.inputs[0]}
                        onChange={(e) => handleInputChange(index, 0, e.target.value, blocksForSaleOfServices, setBlocksForSaleOfServices)}
                        />
                        <input
                        className="border-l !w-[250px]"
                        value={block.inputs[1]}
                        onChange={(e) => handleInputChange(index, 1, e.target.value, blocksForSaleOfServices, setBlocksForSaleOfServices)}
                        />
                    </div>
                    </div>
                ))}
            </div>
            <div>
            {blocksForGrantsOrDonationReceived.map((block, index) => (
                <div
                key={block.id}
                className="pl-6 border border-t-0 flex items-center justify-between"
                >
                <p>
                    {block.hasLabel ? `(${block.label}) Other Operating Revenue` : ''}
                </p>
                <div>
                    <input
                    className="border-l !w-[250px]"
                    value={block.inputs[0]}
                    onChange={(e) => handleInputChange(index, 0, e.target.value, blocksForGrantsOrDonationReceived, setBlocksForGrantsOrDonationReceived)}
                    />
                    <input
                    className="border-l !w-[250px]"
                    value={block.inputs[1]}
                    onChange={(e) => handleInputChange(index, 1, e.target.value, blocksForGrantsOrDonationReceived, setBlocksForGrantsOrDonationReceived)}
                    />
                </div>
                </div>
            ))}
            </div>
            <div>
            {blocksForOtherOperatingRevenue.map((block, index) => (
                <div
                key={block.id}
                className="pl-6 border border-t-0 flex items-center justify-between"
                >
                <p>
                    {block.hasLabel ? `(${block.label}) Sale Of Services` : ''}
                </p>
                <div>
                    <input
                    className="border-l !w-[250px]"
                    value={block.inputs[0]}
                    onChange={(e) => handleInputChange(index, 0, e.target.value, blocksForOtherOperatingRevenue, setblocksForOtherOperatingRevenue)}
                    />
                    <input
                    className="border-l !w-[250px]"
                    value={block.inputs[1]}
                    onChange={(e) => handleInputChange(index, 1, e.target.value, blocksForOtherOperatingRevenue, setblocksForOtherOperatingRevenue)}
                    />
                </div>
                </div>
            ))}
            </div>
            <div>
                {blocksForRevenueFromOperations.map((block, index) => (
                    <div
                    key={block.id}
                    className="pl-6 border border-t-0 flex items-center justify-between"
                    >
                    <p>
                        {block.hasLabel ? `(${block.label}) Revenue From Operations (Gross)` : ''}
                    </p>
                    <div>
                        <input
                        className="border-l !w-[250px]"
                        value={block.inputs[0]}
                        onChange={(e) => handleInputChange(index, 0, e.target.value, blocksForRevenueFromOperations, setBlocksRevenueFromOperations)}
                        />
                        <input
                        className="border-l !w-[250px]"
                        value={block.inputs[1]}
                        onChange={(e) => handleInputChange(index, 1, e.target.value, blocksForRevenueFromOperations, setBlocksRevenueFromOperations)}
                        />
                    </div>
                    </div>
                ))}
            </div>
            <div>
                {blocksForExciseDuty.map((block, index) => (
                    <div
                    key={block.id}
                    className="pl-6 border border-t-0 flex items-center justify-between"
                    >
                    <p>
                        {block.hasLabel ? `(${block.label}) Less: Excise Duty` : ''}
                    </p>
                    <div>
                        <input
                        className="border-l !w-[250px]"
                        value={block.inputs[0]}
                        onChange={(e) => handleInputChange(index, 0, e.target.value, blocksForExciseDuty, setBlocksForExciseDuty)}
                        />
                        <input
                        className="border-l !w-[250px]"
                        value={block.inputs[1]}
                        onChange={(e) => handleInputChange(index, 1, e.target.value, blocksForExciseDuty, setBlocksForExciseDuty)}
                        />
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default RevenueFromOperations;