import React,{useState,useRef,useEffect} from 'react'


function TodoForm(props) {
    const [input,setInput]=useState('');
    //For focus on adding and updating input tag
    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus()
    })
    const handleChange=e=>{
        setInput(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*1000),
            text:input
        })
        setInput('')
    }
    return (
       <form className='todo-form' onSubmit={handleSubmit}>
           <input type='text'
           placeholder='Add a ToDo'
           value={input}
           name='text'
           className='todo-input'
           onChange={handleChange}
           ref={inputRef}
           />
           <button className='todo-button'>Add todo</button>
       </form>
    )
}

export default TodoForm
