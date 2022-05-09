import { useState } from 'react';

const App = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);

  const onIncrement = (): void => {
    setCounter((current) => {
      return current + 1;
    });
  };

  const onDecrement = (): void => {
    setCounter((current) => {
      return current - 1;
    });
  };

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      {counter}
    </div>
  );
};

export default App;
