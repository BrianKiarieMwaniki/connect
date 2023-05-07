import { useState } from "react";
import { Task } from "../components/Task";

export const Tasks = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleOnchange = (e) => {
    setNewTask(e.target.value);
  };

  const addTast = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isCompleted: false,
    };
    setTodoList([...todoList, task]);
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) return { ...task, isCompleted: true };
        else return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="addTask">
        <input type="text" onChange={handleOnchange} />
        <button onClick={addTast}>Add Task</button>
      </div>

      <div className="list">
        {todoList.map((task, key) => {
          return (
            <Task
              key={key}
              completeTask={completeTask}
              deleteTask={deleteTask}
              {...task}
            />
          );
        })}
      </div>
    </div>
  );
};
