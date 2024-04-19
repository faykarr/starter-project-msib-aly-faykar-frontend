import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-4xl font-bold underline text-red-400">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
