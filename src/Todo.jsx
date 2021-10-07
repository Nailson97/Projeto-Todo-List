import React, { useState } from 'react'
import './Todo.css'
import List from './List'
import TodoForm from './TodoForm'
import Item from './Item'


function Todo() {

  const [items, setItems] = useState([])

  function onAddItem(text) {

    let it = new Item(text)
      setItems([...items, it])
  }
 
  
  

  return (
       <div className='container'>
          <h1>Todo List</h1>
              <TodoForm onAddItem={onAddItem}></TodoForm>
             <List items={items}/>
       </div>
  )
}


export default Todo;
