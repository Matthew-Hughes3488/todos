import { ChangeEventHandler } from "react";
import "./Filter.scss"

type FilterProps = {
    onFilterPriorityChange: ChangeEventHandler<HTMLSelectElement>;
}
export const Filter = ({onFilterPriorityChange} : FilterProps) => {
  return (
    <div>
        <select className="dropdown-menu" name="priority" id="" onChange={onFilterPriorityChange}>
            <option value="asc">Priority Asc</option>
            <option value="desc">Priority Desc</option>
        </select>
    </div>
  )
}
