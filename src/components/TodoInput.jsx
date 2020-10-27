import React, { useState } from 'react';
import { useDisptach } from 'react-redux';
import { addTodoAction } from '../redux';
import { v4 as uuid } from 'uuid';


export default TodoInput = () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDisptach();
    const addTodo = todo => dispatch(addTodoAction(todo));

    const onChange = e => setTodo(e.target.value)
    const onSubmit = e => {
        e.preventDefault();
        if(todo.trim() === '') return;

        addTodo({
            id: uuid(),
            name: todo,
            complete: false
        })

        setTodo('');
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-div">
                <input 
                    type="text"
                    name="todo"
                    placeholder="Add a todo"
                    value={todo}
                    onChange={onChange}
                />
                <button type="submit">Add Todo</button>
            </div>
        </form>
    )
}