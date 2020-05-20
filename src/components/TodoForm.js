import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form className="col-md-6" onSubmit={handleSubmit}>
            <ul className="list-group">
                <input type="text" className="list-group-item" placeholder="Add Todo..." value={value} onChange={e => setValue(e.target.value)} />
            </ul>
        </form>
    )
}

export default TodoForm;