import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from './Context';

export default function TodoItem({todo, onChange}) {

    const { removeTodo } = useContext(Context)

    const classes = []
    if (todo.completed){
        classes.push("done")
    }



    return (
        <li className = {classes}>
            <input type = "checkbox" onChange = {() => onChange(todo.id)}/>
            <strong>{todo.id}</strong>
            &nbsp;
            {todo.title}
            <button type = "button" onClick = {() => removeTodo(todo.id)}>delete</button>
        </li>
    )
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}