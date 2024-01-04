import { ChangeEventHandler, FormEventHandler } from "react";
import "./InputBar.scss"

type InputBarProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  taskValue: string;
};

export const InputBar = ({ onSubmit, onChange, taskValue }: InputBarProps) => {
  return (
    <section className="form-card">
      <form action="" onSubmit={onSubmit}>
        <input
        className="form-card__input-bar"
          type="text"
          name="new-task"
          id="new-task"
          placeholder="Enter new task here..."
          value={taskValue}
          onChange={onChange}
        />
        <button className="form-card__submit" type="submit">Submit</button>
      </form>
    </section>
  );
};
