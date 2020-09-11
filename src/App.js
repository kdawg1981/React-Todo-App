import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import './App.css';
import db from './firebase';

function App() {
  // STATE refers to data that gets cleared when refreshed
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(['']);

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().text))
    })
  }, [input]);

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
        <FormControl>
            <InputLabel>Write a todo</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="Primary">Add Todo</Button> 
      </form>
      

      <ul>
        {todos.map(todo =>  (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
