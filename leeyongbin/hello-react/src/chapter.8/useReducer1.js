import React,{useReducer} from 'react';

function reducer(state,action){
    switch(action.type){
        case 'INCREMENT' :
            return {value : state.value + 1};
        case 'DECREMENT' : 
            return {value : state.value - 1};
        case 'MULTIFLY' : 
            return {value : state.value * 2};
        case 'DIVISION  ' : 
            return {value : state.value / 2};           
        default :
            return state;    
    }
}
    const useReducer1 = () => {
        const [state,dispatch] = useReducer(reducer, {value : 0});

        return (
            <>
                <div>
                    <p> 현재 카운터값은 <b>{state.value}</b> 입니다.</p>
                </div>
                <button onClick={() => dispatch({type : 'INCREMENT'})}> +1 </button>
                <button onClick={() => dispatch({type : 'DECREMENT'})}> -1 </button>
                <button onClick={() => dispatch({type : 'MULTIPLY'})}> *2 </button>
                <button onClick={() => dispatch({type : 'DIVISION'})}> /2 </button>
            </>
        )
};

export default useReducer1;

