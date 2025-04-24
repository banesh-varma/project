interface ItemDetails {
    name: string;
    inputType: string;
    icon: React.ReactNode; // Added the 'icon' property
  }
  const RightNavItems = (props: { itemDetails: ItemDetails; isOpen: boolean; }) => {
    const {itemDetails, isOpen} = props
  return (
    <li className={`p-1.5 flex gap-2 items-center hover:font-medium hover:text-lg hover:   border-b-1 border-solid border-black`}>
        <span className={`${isOpen? "": "text-md py-1 p-0"}`}>{itemDetails.icon}</span>
        <p className={isOpen? "" : "hidden"}>{itemDetails.name}</p>
    </li>
  )
}

export default RightNavItems