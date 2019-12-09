import { ReduceStore } from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Todo from './Todo';

class TodoStore extends ReduceStore {
    nextId = 1;

    constructor() {
        super(TodoDispatcher);
    }

    // since we modify the array need to tell it not to treat it as equal
    // really should be using immutable object instead
    /*areEqual() {
        return false;
    }*/

    getInitialState() {
        return Object.freeze([]);
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                const todo = new Todo({
                    id: this.nextId++,
                    text: action.text
                });

                return Object.freeze([...state, todo]);

            case TodoActionTypes.DELETE_TODO:
                return Object.freeze(state.filter(todo => todo.id !== action.id));

            case TodoActionTypes.TOGGLE_TODO:
                const index = state.findIndex(todo => todo.id === action.id);
                const props = { ...state[index] };
                props.complete = !props.complete;

                const newState = [...state];
                newState[index] = new Todo(props);

                return Object.freeze(newState);

            default:
                return state;
        }
    }
}

export default new TodoStore();