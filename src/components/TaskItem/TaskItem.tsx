import { Task } from "../../types/task"

type TaskItemProps = {
    task: Task;
}

export const TaskItem = ({task} : TaskItemProps) => {
  return (
    <section className="task-card">
        <input className="task-card__checkbox" type="checkbox" />
        <p className="task-card__task">{task.task}</p>
        <button className="task-card__bin">Bin</button>
    </section>
  )
}
