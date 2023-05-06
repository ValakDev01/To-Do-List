import './_TodoItem.scss';

interface Task {
  name: string;
  isCompleted: boolean;
}

interface Props {
  task: Task;
  onDelete: (task: Task) => void;
  onToggleCompleted: (task: Task) => void;
}

function TodoItem({ task, onDelete, onToggleCompleted }: Props) {
  const deleteTask = () => {
    onDelete(task);
  };

  const toggleCompleted = () => {
    onToggleCompleted(task);
  };

  return (
    <div className='item__container'>
        <p className={task.isCompleted ? 'item__container--taskName taskDone' : 'item__container--taskName'}>{task.name}</p>
        <div className='item__container--iconsContainer'>
          <div className='item__container--iconsContainer__firstIconContainer' onClick={toggleCompleted}>
            <span className='item__container--iconsContainer__firstIconContainer--acceptIcon'>✅</span>
          </div>
          <div className='item__container--iconsContainer__secondIconContainer' onClick={deleteTask}>
            <span className='item__container--iconsContainer__secondIconContainer--closeIcon'>❌</span>
          </div>
        </div>
    </div>
  );
}

export default TodoItem;
