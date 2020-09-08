import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  // STATE refers to data that gets cleared when refreshed
  const [todos, setTodos] = useState(['Play with Katie', 'Play with Julianna', 'Play with cats']);
  const [input, setInput] = useState(['']);

  // Added log to verify that it's working correctly.
  console.log('This is working!!!!');

  const addTodo = (event) => {
    console.log('Button has been clicked!');
    event.preventDefault(); // this will prevent react from refreshing
    setTodos([...todos, input]);
    setInput(''); 
  }

  

  return (
    <div className="App">
      <h1>Welcome Kevin Morales!</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="Primary">Add Todo</Button> 
      </form>
      

      <ul>
        {todos.map(todo =>  (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
