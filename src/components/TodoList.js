import React,{useState,useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const [todos,setTodos]=useState([]);
    //Add event to ToDo List
    const addTodo=todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
    const newTodos=[todo,...todos];
    setTodos(newTodos)
    }
    // Update Todo List from Todo list after Editing
    const  updateTodo=(todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev=>prev.map(item=>(item.id===todoId ? newValue:item))
        )
    }
    //Remove Event from Todo List
    const removeTodo=id=>{
        const removeArr =[...todos].filter(todo=>todo.id!==id)
        setTodos(removeArr)
    }
   const completeTodo=id=>{
       let updatedTodos=todos.map(todo=>{
           if(todo.id===id){
               todo.isComplete= !todo.isComplete;
           }
           return todo;
       })

   setTodos(updatedTodos)
    }

    //Save to local storage
    // useEffect(() => {
    //    localStorage.setTodos('todos',JSON.stringify(todos))
    // }, [todos])
   
    return (
        <div>
            <h1>What's the plan for Today</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList