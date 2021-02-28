import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';

function TodoList(props) {



    return (
        <div>
           {
            props.todos.map((todo, index) => {
               return <TodoItem key = {todo.id} todo = {todo} onChange = {props.toggleTodo}/>
            })
           }  

        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList
