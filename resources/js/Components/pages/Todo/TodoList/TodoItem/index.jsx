import React from 'react';
import styles from './todoItem.module.scss';
import {Inertia} from "@inertiajs/inertia";
import Icons from '/resources/assets/icons/icon';

const TodoItem = ({item, handleEdit}) => {

    const handleDelete = (id) => {
        Inertia.delete(`/todo/${id}`);
    }

    const handleChange = (id, is_done) => {
        is_done = +!is_done;

        Inertia.put(`/todo/${id}`, {
            is_done: is_done,
        });
    }

    return (
        <li className={styles.todo_item}>
            <div className={styles.todo_item_cont}>
                <div className={`${styles.todo_item_checkbox} ${item.is_done ? styles.checkbox_done : ''}`}>
                    <label htmlFor="checkbox"></label>
                    <input className={styles.checkbox_inp} onChange={() => handleChange(item.id, item.is_done)}
                           id="checkbox" type="checkbox"/>
                </div>
                <div>
                    <label className={`${styles.todo_item_name}  ${item.is_done ? styles.item_name_done : ''}`}
                           htmlFor="item_name">{item.name}</label>
                    <input className={styles.checkbox_inp} onChange={() => handleChange(item.id, item.is_done)}
                           id="item_name" type="checkbox"/>
                </div>
            </div>
            <div className={styles.icons}>
                <span onClick={() => handleDelete(item.id)} className={`${styles.todo_item_icon} ${styles.todo_item_delete}`}>
                    <Icons name="delete" fill="#FF3D46"/>
                </span>
                <span onClick={() => handleEdit(item.id)} className={`${styles.todo_item_icon} ${styles.todo_item_edit}`}>
                    <Icons name="edit" fill="#FF3D46"/>
                </span>
            </div>
        </li>
    );
}

export default TodoItem;
