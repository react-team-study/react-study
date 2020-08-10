import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// Action Type
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// Action Creator

/**
 * redux-actions
 */
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);

export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  todos: [
    { id: 1, text: '리덕스 기초 배우기', done: true },
    { id: 2, text: '리액트와 리덕스 사용하기', done: false },
  ],
};

// reducer
/**
 *
 * @param {*} state
 * @param {*} action
 */
const todos = handleActions(
  {
    // [CHANGE_INPUT]: (state, { payload: input }) => {
    //   return {
    //     ...state,
    //     input,
    //   };
    // },
    [CHANGE_INPUT]: (state, { payload: input }) => {
      produce(state, (draft) => {
        draft.input = input;
      });
    },
    // [INSERT]: (state, { payload: todo }) => ({
    //   ...state,
    //   todos: state.todos.concat(todo),
    // }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),

    // [TOGGLE]: (state, { payload: id }) => ({
    //   ...state,
    //   todos: state.todos.map((todo) =>
    //     todo.id === id ? { ...todo, done: !todo.done } : todo,
    //   ),
    // }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.findIndex((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    // [REMOVE]: (state, { payload: id }) => ({
    //   ...state,
    //   todos: state.todos.filter((todo) => todo.id !== id),
    // }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);

export default todos;
