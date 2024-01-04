import { ChangeEventHandler } from "react";

type FilterProps = {
    onFilterPriorityChange: ChangeEventHandler<HTMLSelectElement>;
    onFilterDateChange: ChangeEventHandler<HTMLSelectElement>;
}
export const Filter = ({onFilterDateChange, onFilterPriorityChange} : FilterProps) => {
  return (
    <div>
        <select name="priority" id="" onChange={onFilterPriorityChange}>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
        </select>

        <select name="time" id="" onChange={onFilterDateChange}>
            <option value="">Time Asc</option>
            <option value="">Time Desc</option>
        </select>
    </div>
  )
}
