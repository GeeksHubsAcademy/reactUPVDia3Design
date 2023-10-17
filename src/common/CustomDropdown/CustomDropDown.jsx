
import "./CustomDropDown.css";

export const CustomDropDown = ({array, criteria, functionHandler}) => {

    return (
        <select onChange={functionHandler}>
            <option value={`Select a ${criteria}`}>
              -- Select a {criteria} --
            </option>
            {array.map((element) => (
              <option key={element.id} value={element.id}>{element.name}</option>
            ))}
        </select>
    )
}