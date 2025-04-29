import { all } from "../../dummyClinets"
import { useParams } from "react-router-dom"

const EachClientData = () => {
    const params = useParams()
    const {id} = params
    const date = new Date()
    const year = date.getFullYear()

    const each = all.filter(each => each.id == id)
    return (
        <div  className="px-5 py-3">
            <div>
                <label className="!w-350">Assessment Year: </label>
                <select className="border-1">
                    <option>{year-1 } - {year}</option>
                    <option>{year-2 } - {year-1 }</option>
                    <option>{year -3 } - {year -2 }</option>
                </select>
            </div>
            <div className="mt-2">
                <label>Filling Type: </label><select className="border-1"><option>{year-1 } - {year}</option>
                <option>{year-2 } - {year-1 }</option><option>{year -3 } - {year -2 }</option></select>
            </div>

            
        </div>
    )
}

export default EachClientData