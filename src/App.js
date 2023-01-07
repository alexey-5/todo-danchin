import { useState } from 'react';
import './app.css'

function App() {
  const [addItem, setAddItem] = useState('')

  const [list, setList] = useState([
    { id: 1, name: 'Планирование', done: false },
    { id: 2, name: 'Вёрстка', done: false },
    { id: 3, name: 'Разметка НТМЛ', done: false },
    { id: 4, name: 'Тестирование', done: false },
  ]);
  
  const done = (id) => {
    setList(list.map((item) => {
      if (item.id === id) return { ...item, done: !item.done }
      return item
    }))};

  const del = (id) => {
    setList(list.filter((item)=> item.id !== id ))
  }

  const addCase = () => {
    if(addItem !== '')
     {setList ([...list, {id: 1+Math.max(0, ...list.map((el)=>el.id)), name: addItem, done: false}])
     setAddItem('')}
  }
  console.log(list)
    return (
      <div>
        <input type='text' value={addItem} onChange={e=>setAddItem(e.target.value)}/>
        <button type='button' onClick={addCase}>Добавить</button>
        <div className='box'>
          <ul className='list'>
            {
              list.map((el) => <li key={el.id}>
                <button type='button' onClick={() => del(el.id)}>Удалить</button>
                <button type='button' onClick={() => done(el.id)}>Сделано</button>
                <span className={el.done ? "done" : ""}>{el.name}</span>
              </li>)
            }
          </ul>
        </div>
      </div>
    );
  }

  export default App;
