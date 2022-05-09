import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from './store/todos/todos.hook';
import { selectTodos } from './store/todos/todos.selector';

const App = () => {
  const { fetchTodos, deleteTodo } = useActions();
  const todos = useSelector(selectTodos);

  // ■TODO:
  // useEffect(() => {
  //   // いまだに解決できないエラー
  //   // TS2345: Argument of type '(dispatch: Dispatch) => Promise<void>' is not assignable to parameter of type 'AnyAction'.
  //   // Property 'type' is missing in type '(dispatch: Dispatch) => Promise<void>' but required in type 'AnyAction'.
  //   // ⇒Thnukを使っているので、Actionをそのままリターンしていないのが原因のはず。
  //
  //   // ■解決１
  //   // https://qiita.com/hiromiya0628/items/bd48bc4b0e1ba0506a97
  //   // https://github.com/reduxjs/redux-toolkit/issues/587
  //   // dispatch<any>(fetchTodos());
  //
  //   // ■解決２
  //   // しかしながら、fetchTodosをdependenciesに追加すると無限ループになる。
  //   fetchTodos();
  // }, []);

  const onFetch = () => {
    fetchTodos();
  };

  const onDelete = (id: number) => {
    // Thunk以外でもuseActionは使える。
    deleteTodo(id);
  };

  const todosToRender = todos.map((todo) => (
    <div key={todo.id}>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <span>{todo.title}</span>
    </div>
  ));

  return (
    <div>
      <button onClick={onFetch}>Fetch</button>
      <div>{todosToRender}</div>
    </div>
  );
};

export default App;
