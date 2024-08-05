import CollapsibleCodeBlock from '../components/CollapsibleCodeBlock';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Understanding React Hooks</h1>
        
        <p className="mb-4">
          React Hooks are a powerful feature introduced in React 16.8. They allow you to use state and other React features without writing a class component.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The useState Hook</h2>
        
        <p className="mb-4">
          One of the most commonly used hooks is useState. It allows you to add state to functional components. Here's a simple example:
        </p>

        <CollapsibleCodeBlock
          filename="Counter.js"
          code={`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;`}
        />

        <p className="mt-4 mb-4">
          In this example, we import useState from React and use it to declare a state variable called count. The setCount function allows us to update this state.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The useEffect Hook</h2>

        <p className="mb-4">
          Another important hook is useEffect. It lets you perform side effects in function components. Here's how you might use it:
        </p>

        <CollapsibleCodeBlock
          filename="DataFetcher.js"
          code={`import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default DataFetcher;`}
        />

        <p className="mt-4 mb-4">
          In this example, useEffect is used to fetch data when the component mounts. The empty array as the second argument ensures that the effect only runs once.
        </p>

        <p className="mb-4">
          These are just two examples of React Hooks. There are many more, each serving different purposes and allowing for more flexible and powerful functional components.
        </p>
      </article>
    </div>
  );
};

export default Index;
