import { ChangeEvent, FormEvent, useState } from "react";
import { Header } from "../../components/Header/Header";
import { TaskList } from "../../components/TaskList/TaskList";
import { taskData } from "../../data/taskData";
import { Task } from "../../types/task";
import { InputBar } from "../../components/InputBar/InputBar";

export const Main = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");

  const handleTaskInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.currentTarget.value;
    setTaskInput(value);
  };

  const handleNewTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask: Task = { task: taskInput, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskInput("")
  };

  return (
    <main>
      <Header />
      <InputBar onSubmit={handleNewTask} onChange={handleTaskInput}/>
      {taskData.length > 0 ? (
        <TaskList tasks={taskData} />
      ) : (
        <p>Add tasks here 👆</p>
      )}
      {
        //inputBar
        //Show message if task list is empty instead
      }
    </main>
  );
};
