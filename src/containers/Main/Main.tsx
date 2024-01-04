import { Header } from "../../components/Header/Header"
import { TaskList } from "../../components/TaskList/TaskList"
import {taskData} from "../../data/taskData"


export const Main = () => {
  return (
    <main>
        <Header/>
        <TaskList tasks={taskData}/>
        {
            //inputBar
            //TaskList
            //Show message if task list is empty instead
        }
    </main>
  )
}
