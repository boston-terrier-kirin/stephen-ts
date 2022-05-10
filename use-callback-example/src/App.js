import { useCallback, useEffect, useState } from 'react';

/**
 * https://javascript.plainenglish.io/5-useeffect-infinite-loop-patterns-2dc9d45a253f
 */
function App() {
  const [count, setCount] = useState(0);

  const outputLog = () => {
    console.log('Hello');
  };

  /**
   * これは無限ループしない。
   * outputLogは毎回変わるけど、変わってuseEffectが呼ばれて、outputLogが呼ばれるだけ
   */
  // useEffect(() => {
  //   outputLog();
  // }, [outputLog]);

  /**
   * これは無限ループする。
   * outputLogが変わる⇒setCountでcountが変わる⇒re-render⇒
   * outputLogが変わる⇒setCountでcountが変わる⇒re-render⇒
   */
  // useEffect(() => {
  //   outputLog();
  //   setCount(count + 1);
  // }, [outputLog]);

  /**
   * useCallbackが効いて、無限ループしない。
   */
  const outputLogV2 = useCallback(() => {
    console.log('HelloV2');
  }, []);

  useEffect(() => {
    outputLogV2();
    setCount(count + 1);
  }, [outputLogV2]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </>
  );
}

export default App;

// const outputLog = useCallback((value) => {
//   console.log(value);
// }, []);

// useEffect(() => {
//   outputLog(message);
// }, [outputLog, message]);
