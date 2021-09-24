import TodoDetail from '../../components/TodoDetail/TodoDetail';
import * as actionTypes from '../action/actionType'

const initialState = {
    todo: [
      { id: 1, title: 'SWPP', content: 'take swpp class', done: true },
      { id: 2, title: 'Movie', content: 'watch movie', done: false },
      { id: 3, title: 'Dinner', content: 'eat dinner', done: false }

    ],
    selectedTODO: null
};

const reducer = (state = initialState, action) => {
    //handling actions through switch statement
    switch(action.type){
        case actionTypes.ADD_TODO:
            //if action is add-todo we are adding a new state
            const newTodo = {
                id: state.todo.length + 1,
                title: action.title,
                content: action.content,
                done: false
            }
            return{...state, todos: [...state.todos, newTodo]};
        case actionTypes.DELETE_TODO:
            const deleted = state.todos.filter((todo) => {
                return todo.id !== action.targetID;
            });
            return { ...state, todos: deleted};
        case actionTypes.TOGGLE_DONE:
            const modified = state.todos.map((todo) => {
                if(todo.id === action.targetID){
                    return{ ...todo, done: !todo.done};
                }else {
                    return { ...todo };
                }
            });
            return {...state, todos: modified};
        case actionTypes.GET_TODO:
            const target = state.todos.find(td => 
                td.id === action.targetID);
            return {...state, selectedTodo: target};
        default:
            return state;
    }
}
//we need to do this to make the reducer accessable to other files
export default reducer;