import { ChangeEventHandler, FormEventHandler } from "react";
import "./InputBar.scss";

type InputBarProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onSelectChange: ChangeEventHandler<HTMLSelectElement>;
  taskValue: string;
};

export const InputBar = ({ onSubmit, onInputChange, onSelectChange,  taskValue }: InputBarProps) => {
  return (
    <section className="form-card">
      <form className="form-card__input-form" action="" onSubmit={onSubmit}>
        <input
          className="form-card__input-form--input-bar"
          type="text"
          name="new-task"
          id="new-task"
          placeholder="Enter new task here..."
          value={taskValue}
          onChange={onInputChange}
        />
        <select className="form-card__input-form--dropdown" name="priority" id="priority" onChange={onSelectChange}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button className="form-card__input-form--submit" type="submit">
          +
        </button>
      </form>
    </section>
  );
};
