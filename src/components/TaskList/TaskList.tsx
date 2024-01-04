import { Task } from "../../types/task"
import { TaskItem } from "../TaskItem/TaskItem"

type TaskListProps = {
    tasks: Task[]
}

export const TaskList = ({tasks} : TaskListProps) => {
  return (
    <section className='task-list-container'>
        {tasks.map(task =>{
            return <TaskItem task={task}/>
        })}
    </section>
  )
}
