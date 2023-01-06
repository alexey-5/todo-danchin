import { useState } from 'react';
import './app.css'

function App() {
  const [list, setList] = useState([
    { id: 1, name: 'Планирование', done: false },
    { id: 2, name: 'Вёрстка', done: false },
    { id: 3, name: 'Разметка НТМЛ', done: false },
    { id: 4, name: 'Тестирование', done: false },
  ])
  return (
    <div>
      <input type='text' />
      <button type='button'>Добавить</button>
      <div className='box'>
      <ul className='list'>
        {
          list.map((el) => <li>
            <button type='button'>Удалить</button>
            <button type='button'>Сделано</button>
            <span>{el.name}</span>
          </li>)
        }
      </ul>
      </div>
    </div>
  );
}

export default App;
