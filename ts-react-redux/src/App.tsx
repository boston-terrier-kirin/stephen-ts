import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions, useActionsV2 } from './store/todos/todos.hook';
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
  //   // dispatchへのパラメータは、{type:xxx, payload:xxx} or {type:xxx} なのに、typeすらないと怒っている。
  //
  //   // ■解決１
  //   // https://qiita.com/hiromiya0628/items/bd48bc4b0e1ba0506a97
  //   // https://github.com/reduxjs/redux-toolkit/issues/587
  //   // dispatch<any>(fetchTodos());
  //
  //   // ■解決２
  //   // しかしながら、fetchTodosをdependenciesに追加すると無限ループになる。
  //   // useCallbackで回避を試みたが失敗。
  //   fetchTodos();
  // }, []);

  // ■失敗例
  // これは無理がある。useCallbackの依存関係にfetchTodos自体が入っているので、矛盾している。
  // const cb = useCallback(() => {
  //   return fetchTodos();
  // }, [fetchTodos]);
  //
  // useEffect(() => {
  //   cb();
  // }, [cb]);

  // ■これでいったん解決
  // useActionV2で、bindActionCreatorsをメモ化する。
  // actionsはメモかされているので、依存関係に入れても大丈夫。
  const actions = useActionsV2();
  useEffect(() => {
    actions().fetchTodos();
  }, [actions]);

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
