import { FormEventHandler } from "react";

type InputBarProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export const InputBar = ({ onSubmit }: InputBarProps) => {
  return (
    <section className="form-card">
      <form action="" onSubmit={onSubmit}>
        <input
        className="form-card__input-bar"
          type="text"
          name="new-task"
          id="new-task"
          placeholder="Enter new task here..."
        />
        <button className="form-card__submit" type="submit">Submit</button>
      </form>
    </section>
  );
};
