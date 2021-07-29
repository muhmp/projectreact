import React, {useState} from 'react';
import Tweet from './Tweet';
//import Hello from './sayHello';



//one component
function App() {
  const [isRed,setRed]= useState(false);
  const [count, setCount] = useState(0);

  const [ users, setUser] = useState ([
    {name: "Matt", message:" Hello there"},
    {name: "Jo", message:"I am Jo"},
    {name: "Muh", message:"testing"},

  ]);



  return (
    <div className="app">
      <h1>Simple tweet</h1>
        {users.map(user =>(
          <Tweet name={user.name} message={user.message} />
        ))}
    </div>
  ); 
} 

export default App;

    /*Lesson 2: creating increment*/

  /*
  const [user, setUser] = useState({
    name: 'Matt',
    age: 25,
    posts: ['my first post']
  });
*/


  /*
  const increment = () => {
    setCount(count+1);
    //setRed(true);
    setRed(!isRed);
  };


  return (
    <div className="app">
      <h1 className={isRed ? 'red' : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  ); 
} 

*/
