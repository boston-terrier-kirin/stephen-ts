import { useCallback, useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('initial value');
  const [count, setCount] = useState(0);

  const outputLog = (value) => {
    console.log(value);
  };

  useEffect(() => {
    outputLog(message);
  }, [outputLog]);

  // const outputLog = useCallback((value) => {
  //   console.log(value);
  // }, []);

  // useEffect(() => {
  //   outputLog(message);
  // }, [outputLog, message]);

  return (
    <>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>click me</button>
    </>
  );
}

export default App;
