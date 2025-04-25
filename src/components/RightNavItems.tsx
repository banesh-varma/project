interface ItemDetails {
    name: string;
    inputType: string;
    icon: React.ReactNode; // Added the 'icon' property
  }
  const RightNavItems = (props: { itemDetails: ItemDetails; isOpen: boolean; }) => {
    const {itemDetails, isOpen} = props
  return (
    <li className={`flex gap-2 items-center  transition-all mx-1.5 hover:text-black hover:bg-blue-300/50 px-2.5 py-2 border-b-2 border-amber-950 hover:scale-105`}>
        <span className={`${isOpen? "": "text-md py-1 p-0"}`}>{itemDetails.icon}</span>
        <p className={isOpen? "" : "hidden"}>{itemDetails.name}</p>
    </li>
  )
}

export default RightNavItems