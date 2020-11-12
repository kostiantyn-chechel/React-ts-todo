import React, {useEffect, useState} from 'react';
import TDForm from "../components/TDForm";
import TDList from "../components/TDList";
import {ITD} from "../interfaces";

// declare var confirm: (question: string) => boolean;

const TdPages: React.FC = (props) => {
    const [todos, setTodos] = useState<ITD[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITD[];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);

    const addHandler = (title: string) => {
        const newTodo: ITD = {
            title: title,
            id: Date.now(),
            completed: false,
        };
        // setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...prev])
    };

    const toggleHandler = (id: number) => {
        let newTodos:ITD[] = todos.slice();

        setTodos(newTodos.map(todo =>{
            if (todo.id === id) todo.completed = !todo.completed;
            return todo
        }));

        // WTF ???
        // setTodos(prev =>
        //     prev.map(td => {
        //         if (td.id === id) td.completed = !td.completed;
        //         return td
        //     })
        // )
    };

    const removeHandler =  (id: number) => {
        // if (confirm('Удалять?')){
        if (window.confirm('Удалять?')){
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    };


    return (
        <>
            <TDForm
                onAdd={addHandler}
            />
            <TDList
                todos={todos}
                onRemove={removeHandler}
                onToggle={toggleHandler}
            />
        </>
    );
}

export default TdPages;