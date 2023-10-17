
import "./CustomDropDown.css";

export const CustomDropDown = ({array, criteria, handlerFunction, name}) => {

    return (
        <select onChange={(e)=>handlerFunction(e, name)}>
            <option value={`Select a ${criteria}`}>
              -- Select a {criteria} --
            </option>
            {array.map((element) => (
              <option key={element.id + element.name} value={element.id}>{element.name}</option>
            ))}
        </select>
    )
}