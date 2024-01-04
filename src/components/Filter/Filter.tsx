import { ChangeEventHandler } from "react";

type FilterProps = {
    onFilterPriorityChange: ChangeEventHandler<HTMLSelectElement>;
}
export const Filter = ({onFilterPriorityChange} : FilterProps) => {
  return (
    <div>
        <select name="priority" id="" onChange={onFilterPriorityChange}>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
        </select>
    </div>
  )
}
