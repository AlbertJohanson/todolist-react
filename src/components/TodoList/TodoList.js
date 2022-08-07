import React, { useContext, useEffect, useState } from 'react'
import { todoContext } from '../../context/TodoContext'
import { CardToDo } from '../CardToDo/CardToDo';
import { Search } from '../Search/Search';

export const TodoList = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const {searchT,todos, addTodo } = useContext(todoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(title, description);
        setTitle('');
        setDescription('');
    }

    //avoid todos to be re-rendered every time the component is rendered
    useEffect(() => {
    }
    , [todos]);
        

  return (
    <div>

        <h1 className='mb-5'>To-do List</h1>
        <Search/>
        {
            todos.length === 0 ? 
            <div className='alert alert-info'>
                 <p>No hay elementos</p>
            </div>
            : 
            todos.
            filter(todo => todo.title.toLowerCase().includes(searchT.toLowerCase())).
            map((todo, index) => (
                <CardToDo title={todo.title} description={todo.description} commentary={todo.commentary} id={index} key={index}/>
            ))
        }
        <div className='mb-3'>
            <label className='form-label'>Que haras hoy?</label>
            <input type="text" className='form-control' value={title}   placeholder="Que tienes que hacer hoy?" onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Escribe una descripcion</label>
            <textarea type="text" className='form-control' value={description} placeholder="Describe lo que tienes que hacer hoy" onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className='mb-3'>
        <button className='btn btn-primary' onClick={handleSubmit}>
            Agregar To Do
        </button>
        </div>
    </div>
  )
}
