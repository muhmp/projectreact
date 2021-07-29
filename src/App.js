import React, {useState} from 'react';
import Tweet from './Tweet';
//import Hello from './sayHello';



//one component
function App() {
  const [isRed,setRed]= useState(false);
  const [count, setCount] = useState(0);


  //
  const [user, setUser] = useState({
    name: 'Matt',
    age: 25,
    posts: ['my first post']
  });



  //increment function
  const increment = () => {
    setCount(count+1);
    //setRed(true);
    setRed(!isRed);
  };


  /*Lesson 2: creating increment*/
    
  return (
    <div className="app">
      <h1 className={isRed ? 'red' : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
    
  );
  
} 


export default App;