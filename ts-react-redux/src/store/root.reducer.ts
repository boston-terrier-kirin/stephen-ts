import { combineReducers } from 'redux';
import { Todo } from './todos/todos.type';
import { todosReducer } from './todos/todos.reducer';

export interface StoreState {
  todos: Todo[];
}

export const rootReducer = combineReducers<StoreState>({
  todos: todosReducer,
});
