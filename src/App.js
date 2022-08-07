import { TodoList } from './components/TodoList/TodoList';
import './style/global.css';
import { todoContext } from './context/TodoContext';
import { useState } from 'react';



function App() {

  const [todos, setTodos] = useState([])
  const [searchT, setSearch] = useState('')
  const [comments, setComments] = useState(
    todos.map(todo => ({
      ...todo,
      commentary: []
    }))
  )

  const addTodo = ( title, description ) => {
    setTodos([...todos, { title, description }])
  }

  const addCommentary = (id,commentary) => {
    const confirm = prompt('Permitir ingresar este comentario?')
    if(confirm === 'si'){
      todos.map(
        (todo, index) => {
          if(index === id){
            setComments(todo.commentary = commentary)
          }
        }
      )
    } else {
      alert('Comentario no agregado')
    }
  }

  const deleteTodo = (id) => {
    const confirm = prompt('Permitir eliminar este To Do?')
    if(confirm === 'si'){
      todos.find((todo ,index) => {
        if(index === id) {
          setTodos(todos.filter((todo,index) => index !== id))
        }
      })
    }  else {
      alert('To Do no eliminado')
    }
  }

  const search = (name) => {
    setSearch(name)
  }

  return (
    <div className="container">
      <todoContext.Provider value={{todos, addTodo, deleteTodo, addCommentary, search, searchT}}>
        <TodoList/>
      </todoContext.Provider>
    </div>
  );
}

export default App;
