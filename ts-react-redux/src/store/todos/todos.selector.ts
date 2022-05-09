import { StoreState } from '../root.reducer';

export const selectTodos = (state: StoreState) => {
  return state.todos;
};
