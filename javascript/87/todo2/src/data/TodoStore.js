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

            default:
                return state;
        }
    }
}

export default new TodoStore();