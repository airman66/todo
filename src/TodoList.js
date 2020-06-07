import React, {useContext} from 'react';
import TodoListItem from './TodoListItem';
import { Context } from './context';

export default function TodoList() {
    const {todoData} = useContext(Context);
    const elements = todoData.map(el => <TodoListItem id={el.id} key={el.id} label={el.label} done={el.done} />);

    return (
        <ul className="todos">
            {elements}
        </ul>
    );
}
