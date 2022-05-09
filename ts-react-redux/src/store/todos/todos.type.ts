export enum ActionTypes {
  fetchTodos = 'FETCH_TODOS',
  deleteTodo = 'DELETE_TODO',
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
