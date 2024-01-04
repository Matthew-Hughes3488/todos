import { Header } from "../../components/Header/Header"
import { TaskList } from "../../components/TaskList/TaskList"
import {taskData} from "../../data/taskData"
import { Task } from "../../types/task"


export const Main = () => {
  
  return (
    <main>
        <Header/>
        {taskData.length > 0 ? <TaskList tasks={taskData}/> : <p>Add tasks here 👆</p>}
        {
            //inputBar
            //Show message if task list is empty instead
        }
    </main>
  )
}
