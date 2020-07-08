import React,{useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import todoListItem from './components/TodoListItem';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '리액트의 기초 알아보기',
      checked : true,
    },
    {
      id : 2,
      text : '컴포넌트 스타일링 해보기',
      check : true,
    },
    {
      id : 3,
      text : '일정 관리 앱 만들어 보기',
      check : false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextid = useRef(4);
  
  // insert
  const Insert = useCallback(
    text =>{
      // 새로 입력받은 상태 
      const todo ={
        id : nextid.current, // id 현재 상태값을 가져온다.
        text,                // 입력받은 text 값
        checked : false,     // 상태값 update flag
      };

      //상태추가
        setTodos(todos.concat(todo));
        nextid.current += 1;  //nextId 1씩 더하기
      },

      [todos],
  )

  // delete
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(...todo => todo.id !== id)) //입력받은 id 값이 아닌것들만 배열에 담음
    },
    [todos],
  )

  // update
  const onToggle = useCallback(
    id => {
      setTodos (
        todos.map( todo => todo.id === id ? { ...todo, checked : !todo.chheckd} : todo,),
      );
    },
    [todos],
  )

  return (
    <TodoTemplate /* App.js에서 prop , event를 자식 컴포넌트에 전달할수 있다. */>  
      <TodoInsert onInsert={Insert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
} 


export default App;
