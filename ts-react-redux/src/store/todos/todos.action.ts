import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes, Todo } from './todos.type';

interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export type TodosAction = FetchTodosAction | DeleteTodoAction;

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: res.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
