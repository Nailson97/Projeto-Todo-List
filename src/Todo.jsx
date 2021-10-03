import React, { useState } from 'react'
import './Todo.css'
import List from './List'


function Todo() {

  const [text, setText] = useState('')
  const [items, setItems] = useState([])
 
  function handleChange(event) {
      let t = event.target.value
      setText(t)
  }

  function addItem(event) {
      event.preventDefault()
      if(text){
        setItems([...items, text])
        setText('')
      }
      
  }
  

  return (
       <div className='container'>
          <h1>Todo List</h1>
          <form>
             <input onCtype='text' value={text}  onChange={handleChange}></input>
             <button onClick={addItem}>Adicionar</button>
          </form>
             <List items={items}/>
       </div>
  )
}

export default Todo;
