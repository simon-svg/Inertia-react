import {Inertia} from "@inertiajs/inertia";
import React, {useState} from 'react';

// Styles
import styles from './todoHead.module.scss';

const TodoHead = ({setFormValue, formValue, setEditItemId, editItemId}) => {

    const handleInput = (e) => {
        setFormValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (editItemId){
            Inertia.put(`/todo/${editItemId}`, {
                name: formValue,
            });
        } else {
            Inertia.post("/todo", {
                name: formValue,
            });
        }
        setFormValue("");
        setEditItemId(null);
    }

    return (
        <div>
            <form className={styles.add_form} onSubmit={onSubmit} action="#">
                <div className={styles.form_input}>
                    <input onInput={handleInput} value={formValue} type="text" placeholder="Add New Task"/>
                </div>
                <div className={styles.add_btn}>
                    <button type="submit">+</button>
                </div>
            </form>
        </div>
    )
}

export default TodoHead;
