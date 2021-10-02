import React, { useState } from 'react'
import './Todo.css'


function Todo() {

  const [text, setText] = useState('')
 
  function handleChange(event) {
      let t = event.target.value
      setText(t)
  }
  

  return (
       <div className='container'>
          <h1>Todo List</h1>
          <form>
             <input onCtype='text'  onChange={handleChange}></input>
             <button>Adicionar</button>
          </form>

          <ul>
            <li>{text}</li>
          </ul>
       </div>
  )
}

export default Todo;
