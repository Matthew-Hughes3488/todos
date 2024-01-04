import { Task } from "../../types/task"
import { TaskItem } from "../TaskItem/TaskItem"

type TaskListProps = {
    tasks: Task[],
    onDelete: (taskId: number) => void
}

export const TaskList = ({tasks, onDelete} : TaskListProps) => {
  return (
    <section className='task-list-container'>
        {tasks.map(task =>{
            return <TaskItem key={task.id} task={task} onDelete={onDelete}/>
        })}
    </section>
  )
}
