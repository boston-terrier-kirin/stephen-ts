import { TodosAction } from './todos.action';
import { ActionTypes, Todo } from './todos.type';

export const todosReducer = (state: Todo[] = [], action: TodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
