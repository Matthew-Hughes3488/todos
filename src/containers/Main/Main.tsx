import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { TaskList } from "../../components/TaskList/TaskList";
import { Task } from "../../types/task";
import { InputBar } from "../../components/InputBar/InputBar";
import "./Main.scss";
import { Filter } from "../../components/Filter/Filter";

export const Main = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("High");
  const [filterPriorityAsc, setFilterPriorityAsc] = useState(true);
  const [numberOfTasksAdded, setNumberOfTasksAdded] = useState(0); // Used as a id and key for each task item component created

  const handleTaskInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.currentTarget.value;
    setTaskInput(value);
  };

  const handlePriorityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value: string = event.currentTarget.value;
    setSelectedPriority(value);
  };

  const handleNewTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (taskInput) {
      const newTask: Task = {
        id: numberOfTasksAdded,
        task: taskInput,
        priority: selectedPriority,
        dateCreated: new Date(),
      };
      setNumberOfTasksAdded(numberOfTasksAdded + 1);

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskInput("");
    }
  };

  const handlePriorityFilterChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const value: string = event.currentTarget.value;
    setFilterPriorityAsc(value === "asc");
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

  const sortPriority = (): Task[] => {
    const highTasks = tasks.filter((task) => {
      return task.priority.toLowerCase() == "high";
    });
    const mediumTasks = tasks.filter((task) => {
      return task.priority.toLowerCase() == "medium";
    });
    const lowTasks = tasks.filter((task) => {
      return task.priority.toLowerCase() == "low";
    });

    if (filterPriorityAsc) return [...highTasks, ...mediumTasks, ...lowTasks];
    else return [...lowTasks, ...mediumTasks, ...highTasks];
  };

  const filterTasks = () => {
    setTasks(sortPriority());
  };

  useEffect(() => {
    filterTasks();
  }, [tasks, filterPriorityAsc]);

  return (
    <main className="task-webpage">
      <Header onClick={handleReset} />
      <InputBar
        onSubmit={handleNewTask}
        onInputChange={handleTaskInput}
        onSelectChange={handlePriorityChange}
        taskValue={taskInput}
      />
      <Filter onFilterPriorityChange={handlePriorityFilterChange} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDelete={deleteTask} />
      ) : (
        <p className="task-webpage__text">Add tasks here 👆</p>
      )}
    </main>
  );
};
