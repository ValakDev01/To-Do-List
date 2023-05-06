import { KeyboardEvent } from 'react';
import './_TodoSearch.scss';

interface Props {
  handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

function TodoSearch({ handleKeyDown }: Props) {
  return (
    <div className='search__container'>
        <input type='text' placeholder='Enter a new task' onKeyDown={handleKeyDown}></input>
    </div>
  );
}

export default TodoSearch;
