import React from 'react';

// Styles
import styles from './todoList.module.scss';
import {usePage} from "@inertiajs/inertia-react";

// Components
import TodoItem from "./TodoItem";

const TodoList = ({setEditItemId, setFormValue}) => {
    const { todos } = usePage().props

    const handleEdit = (id) => {
        const editItem = todos.find((item) => item.id === id);
        setFormValue(editItem.name);
        setEditItemId(id);
    }

    return (
        <ul className={styles.todo_list}>
            {
                todos.map((item) => {
                    return (
                        <TodoItem key={item.id} item={item} handleEdit={handleEdit} />
                    )
                })
            }
        </ul>
    )
}

export default TodoList;
