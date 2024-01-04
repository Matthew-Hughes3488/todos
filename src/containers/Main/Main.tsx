import { ChangeEvent, FormEvent, useState } from "react";
import { Header } from "../../components/Header/Header";
import { TaskList } from "../../components/TaskList/TaskList";
import { Task } from "../../types/task";
import { InputBar } from "../../components/InputBar/InputBar";
import "./Main.scss";

export const Main = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [numberOfTasksAdded, setNumberOfTasksAdded] = useState(0);

  const handleTaskInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.currentTarget.value;
    setTaskInput(value);
  };

  const handleNewTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (taskInput) {
      const newTask: Task = {
        id: numberOfTasksAdded,
        task: taskInput,
        dateCreated: new Date(),
      };
      setNumberOfTasksAdded(numberOfTasksAdded + 1);

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskInput("");
    }
  };

  const deleteTask = (taskId: number) => {
    const newTasks: Task[] = tasks.filter((task) => {
      return taskId != task.id;
    });
    setTasks(newTasks);
  };

  const handleReset = () => {
    setTasks([]);
  };

  return (
    <main className="task-webpage">
      <Header onClick={handleReset} />
      <InputBar
        onSubmit={handleNewTask}
        onChange={handleTaskInput}
        taskValue={taskInput}
      />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDelete={deleteTask} />
      ) : (
        <p className="task-webpage__text">Add tasks here 👆</p>
      )}
    </main>
  );
};
