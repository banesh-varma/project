import { Link } from "react-router-dom";
interface ItemDetails {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const NavItems = (props: { itemDetails: ItemDetails; isOpen?: boolean; onNavItemClick?: () => void; }) => {
    const {itemDetails, isOpen} = props
    const onNavItemClick = () => {
      console.log(itemDetails.link)
    }
  return (
    <li className={`p-1.5 flex gap-2 items-center hover:font-medium hover:text-lg hover:bg-neutral-300 border-b-1 border-solid border-black`} onClick={onNavItemClick} >
      <Link to={itemDetails.link}>
        <span className={`${isOpen? "": "text-md py-1 p-0"}`}>{itemDetails.icon}</span>
        <p className={isOpen? "" : "hidden"}>{itemDetails.name}</p>
      </Link>
    </li>
  )
}

export default NavItems
