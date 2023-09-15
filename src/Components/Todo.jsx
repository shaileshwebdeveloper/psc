import React, { useState } from 'react'
import { AddTodo } from './AddTodo'
import { TodoItem } from './TodoItem'

export const Todo = () => {

   const [todos, setTodo] = useState([])

   const handleTodo = (text) => {
 
     const newItem = {
          title : text,
          status : false,
          id : new Date().toDateString + text
     }

      setTodo([...todos, newItem])

   }

   


  return (
    <div>
        <AddTodo   handleTodo={handleTodo} />
         
         <ul>
            {todos.map((item )=> (
               <TodoItem  key={item.id} title={item.title} status={item.status} />
            ))}
         </ul>

    </div>
  )
}
