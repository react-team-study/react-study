import React from 'react';
import { chageInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import { connect } from 'react-redux';

const TodosContainter = ({
    input,
    todos,
    chageInput,
    insert,
    toggle,
    remove
}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={chageInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};

export default connect(
    ({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        chageInput,
        insert,
        toggle,
        remove,
    }
)(TodosContainter);
