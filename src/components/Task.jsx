import '../App.css';
export const Task = (props)=>{
    const { taskName, isCompleted, id, completeTask, deleteTask } = props;
    return (
      <div className={`task ${isCompleted ? "green" : "black"}`}>
        <h1>{taskName}</h1>
        <button onClick={() => completeTask(id)}>Completed</button>
        <button onClick={() => deleteTask(id)}>X</button>
      </div>
    );
}

