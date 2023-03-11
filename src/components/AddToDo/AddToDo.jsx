import { useState } from "react";
import React from "react";
import classes from './AddToDo.module.css'



const AddToDo = (props) => {

      const [value, setValue] = useState('');

      const addToDo = () => {
            if (value) {
                  props.setTodo(
                        [...props.todo, ({ id: props.todo.length + 1, title: value, status: true })]
                  );
                  setValue('');
            } else {
                  alert('You did not write any word... I refuse to save it');
            }

      }

      return (
            <section className={classes.element}>
                  <input className={classes.input} placeholder="Enter text..." value={value} onChange={(e) => { setValue(e.target.value) }}></input>
                  <button onClick={addToDo}>Add ToDo</button>
            </section>
      )
}

export default AddToDo;
