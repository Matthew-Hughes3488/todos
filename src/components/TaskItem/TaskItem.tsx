import { Task } from "../../types/task";
import "./TaskItem.scss";

type TaskItemProps = {
  task: Task;
  onDelete: (taskId: number) => void
};

export const TaskItem = ({ task, onDelete }: TaskItemProps) => {
  const handleBin = () =>{
    onDelete(task.id);
  }

  return (
    <section className="task-card" id={`task-card-${task.id}`}>
        <input className="task-card__checkbox" type="checkbox" />
        <p className="task-card__task">{task.task}</p>
      <button className="task-card__bin" onClick={handleBin}>Bin</button>
    </section>
  );
};
