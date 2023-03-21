import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

// Styles
import styles from './Todo.module.scss';

// Components
import TodoHead from '../Components/pages/Todo/TodoHead';
import TodoList from "@/Components/pages/Todo/TodoList";

export default function Todo(props) {
    const [formValue, setFormValue] = useState("");
    const [editItemId, setEditItemId] = useState(null);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Todo</h2>}
        >
            <Head title="Todo" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className={`${styles.todo_container} p-6 border-b border-gray-200`}>
                            <TodoHead formValue={formValue} setFormValue={setFormValue} setEditItemId={setEditItemId} editItemId={editItemId} />
                            <TodoList setEditItemId={setEditItemId} setFormValue={setFormValue} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
