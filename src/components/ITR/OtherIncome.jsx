import { useEffect, useState } from "react";

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

  return (
    <>
    <div>
        {blocks.map((block, index) => (
            <div
            key={block.id}
            className="pl-6 border border-t-0 flex items-center justify-between"
            >
            <p>
                {block.hasLabel ? `(${block.label}) Interest Income` : ''}
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
                {block.hasLabel ? `(${block.label}) Dividend Income` : ''}
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
                {block.hasLabel ? `(${block.label}) Net Gain on Sale of Invetments` : ''}
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
                {block.hasLabel ? `(${block.label}) Other Non-Operating Income (Please Specify)` : ''}
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
    </>
  );
}

export default OtherIncome