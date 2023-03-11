import React, { useEffect, useState } from 'react';
import './App.css';
import AddToDo from './components/AddToDo/AddToDo';
import Header from './components/Header/Header';
import ToDoList from './components/ToDoList/ToDoList';


const App = () => {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first todo',
      status: true,
    },
    {
      id: 2,
      title: 'second todo',
      status: true,
    },
    {
      id: 3,
      title: 'third todo',
      status: false,
    },
  ]
  )

  return (
    <section className='app'>
      <Header />
      <AddToDo todo={todo} setTodo={setTodo} />
      <ToDoList todo={todo} setTodo={setTodo} />
    </section >
  )
}
export default App;