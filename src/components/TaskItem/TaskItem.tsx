import { useState } from "react";
import { Task } from "../../types/task";
import "./TaskItem.scss";

type TaskItemProps = {
  task: Task;
  onDelete: (taskId: number) => void;
};

export const TaskItem = ({ task, onDelete }: TaskItemProps) => {
  const [completed, setCompleted] = useState(false);

  const handleBin = () => {
    onDelete(task.id);
  };

  const updateTask = () => {
    setCompleted(!completed);
  };

  return (
    <section className="task-card" id={`task-card-${task.id}`}>
      <input
        className="task-card__checkbox"
        type="checkbox"
        onClick={updateTask}
      />
      <p className={`task-card__task ${completed ? "completed" : ""}`}>
        {task.task}
      </p>
      <button className="task-card__bin" onClick={handleBin}>
        Bin
      </button>
      <p className="task-card__priority">{`Priority: ${task.priority}`}</p>
      <p className="task-card__date">Created: {task.dateCreated.toLocaleString()}</p>
    </section>
  );
};
