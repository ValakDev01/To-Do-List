import './_App.scss';
import TodoSearch from './components/TodoSearch/TodoSearch';
import TodoItem from './components/TodoItem/TodoItem';
import { useState, KeyboardEvent } from 'react';

interface Task {
  name: string;
  isCompleted: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<Task[]>([]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const taskName = event.currentTarget.value;
      if (taskName.trim() !== '') {
        const newTask: Task = {name: taskName, isCompleted: false};
        setTodoList([...todoList, newTask]);
        event.currentTarget.value = '';
      }
    }
  };

  const deleteTask = (taskToDelete: Task) => {
    setTodoList(todoList.filter(task => task !== taskToDelete));
  };

  const toggleCompleted = (taskToToggle: Task) => {
    const updatedTasks = todoList.map(task => {
      if (task === taskToToggle) {
        return { name: task.name, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTodoList(updatedTasks);
  };

  return (
    <div className='list__container'>
      <h1>To-Do List</h1>
      <TodoSearch handleKeyDown={handleKeyDown} />
      {todoList.length ? todoList.map((task, index) => (
        <TodoItem key={index} task={task} onDelete={deleteTask} onToggleCompleted={toggleCompleted} />)) 
        : <p className='defaultTitle'>What's new today?</p>}
    </div>
  );
}

export default App;
