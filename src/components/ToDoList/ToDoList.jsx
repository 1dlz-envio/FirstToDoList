import React, { useEffect, useState } from "react";
import classes from "./ToDoList.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faLock, faPenToSquare, faTrash, faUnlock } from '@fortawesome/free-solid-svg-icons'

const ToDoList = (props) => {

      const [edit, setEdit] = useState(false);
      const [value, setValue] = useState('');
      const [filtered, setFiltered] = useState(props.todo);

      useEffect(() => {
            setFiltered(props.todo)
      }, [props.todo]
      )

      let deliteToDo = (id) => {
            let newToDo = [...props.todo].filter(item => item.id !== id);
            props.setTodo(newToDo);
      }

      let doneToDo = (id) => {
            let newToDo = [...props.todo].filter(item => {
                  if (item.id === id) {
                        item.status = !item.status;
                  }
                  return item
            })
            props.setTodo(newToDo);
      }

      let editToDo = (id, title) => {
            setEdit(id);
            setValue(title)
      }

      let saveToDo = (id) => {
            let newToDo = [...props.todo].map(item => {
                  if (item.id === id) {
                        item.title = value;
                  }
                  return item
            })
            props.setTodo(newToDo)
            setEdit(false)
      }

      let filter = (status) => {

            if (status === 'all') {
                  setFiltered(props.todo)
            } else if (status == true) {
                  let newToDo = [...props.todo].filter(item => item.status === true);
                  setFiltered(newToDo);
            } else {
                  let newToDo = [...props.todo].filter(item => item.status === false);
                  setFiltered(newToDo);
            }


      }

      return (
            <section className={classes.toDoListBox}>
                  <section className={classes.btnBox}>
                        <button className={classes.btn} onClick={() => { filter('all') }} >All</button>
                        <button className={classes.btn} onClick={() => { filter(true) }} >In progress</button>
                        <button className={classes.btn} onClick={() => { filter(false) }} >Done</button>
                  </section>
                  <ul className={classes.todolist}>
                        {
                              filtered.map(item => (
                                    <li className={classes.item} key={item.id}>
                                          {
                                                edit === item.id ?
                                                      <div>
                                                            <input className={classes.input} onChange={(e) => setValue(e.target.value)} value={value}></input>

                                                      </div> :
                                                      <h3 className={`${classes.item__header} ${!item.status ? classes.close : ''}`}>{item.title}</h3>
                                          }
                                          {
                                                edit === item.id ?
                                                      <div>
                                                            <button className={classes.btn} onClick={() => { saveToDo(item.id) }} size='lg'>
                                                                  <FontAwesomeIcon icon={faFloppyDisk} />
                                                            </button>
                                                      </div> :
                                                      <div className={classes.item__btnRow}>
                                                            <button className={`${classes.btn} ${classes.btnRed}`} onClick={() => (deliteToDo(item.id))} size='lg'><FontAwesomeIcon icon={faTrash} /></button>
                                                            <button className={classes.btn} onClick={() => (editToDo(item.id, item.title))} size='lg'><FontAwesomeIcon icon={faPenToSquare} /></button>
                                                            <button className={classes.btn} onClick={() => (doneToDo(item.id))} size='lg'>
                                                                  {
                                                                        item.status ? <FontAwesomeIcon icon={faUnlock} /> : <FontAwesomeIcon icon={faLock} />
                                                                  }
                                                            </button>
                                                      </div>}
                                    </li>
                              )
                              )
                        }
                  </ul>
            </section>

      )
}

export default ToDoList;
