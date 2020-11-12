import React from 'react';
import {ITD} from "../interfaces";

type TDListProps = {
    todos: ITD[],
    onToggle(id: number): void,
    onRemove: (id: number) => void,
};

export const TDList: React.FC<TDListProps> = ({todos, onRemove, onToggle}) => {

    if (todos.length === 0) {
        return (
            <div className='msg'>
                <p>Нет записей</p>
            </div>
        )
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        onRemove(id)
    };

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo'];
                if (todo.completed) classes.push('completed');

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input
                                type='checkbox'
                                checked={todo.completed}
                                onChange={onToggle.bind(null, todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i className='material-icons red-text'
                               onClick={event => removeHandler(event, todo.id)}
                            >delete</i>
                        </label>
                    </li>
                )
            })}

        </ul>
    );
};

export default TDList;