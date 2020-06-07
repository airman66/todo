import React, {useContext} from 'react';
import { Context } from './context';

export default function TodoListItem({label, done, id}) {
    const {onToggleDone, removeTodoItem} = useContext(Context);

    if (done) {
        return (
            <li>
                <span className="todo-text done" onClick={() => onToggleDone(id)}>{label}</span>
                <span onClick={() => removeTodoItem(id)} className="todo-trash">
                    <i className="fas fa-trash-alt"></i>
                </span>
            </li>
        );
    } else {
        return (
            <li>
                <span className="todo-text" onClick={() => onToggleDone(id)}>{label}</span>
                <span onClick={() => removeTodoItem(id)} className="todo-trash">
                    <i className="fas fa-trash-alt"></i>
                </span>
            </li>
        );
    }
}
