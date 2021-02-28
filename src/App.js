import React, { useState, useEffect } from 'react'
import './App.css';
import Context from './Context';
import TodoList from './TodoList';
import Loader from "./Loader";
import Modal from './Modal';


const AddTodo = React.lazy(() => import('./AddTodo'))


function App() {

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)   
          setLoading(false)  
        }, 2000);
      
      })
  }, [])

  function toggleTodo(id) {
    console.log('toggle todo id ' +  id)
    setTodos(
      todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  }

  function addTodo(title) {
    console.log('addTodo title' +  title)
    setTodos(
      todos.concat([
        {
          title, 
          id: todos.length + 1,
          completed: false
        }
      ])
    )
  }

  function removeTodo(id) {
    console.log('remove todo id ' +  id)
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  return (

    <Context.Provider value={{ removeTodo }}>

      <div className="App">
          <React.Suspense fallback={<p>LOADING</p>}>
            <Modal/>
            <AddTodo onCreate = {addTodo}/>
          </React.Suspense>
          {loading && <Loader/>}

          <TodoList todos = {todos} toggleTodo = {toggleTodo}/>

          {todos.length && setLoading === 0 ? <div>No TODO</div> : ""}
      </div>

    </Context.Provider>
  );
}

export default App;
