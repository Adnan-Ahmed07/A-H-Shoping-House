import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import TodoItems from "./components/Todoitemse";


import "./App.css";
function App(){ 

  const todoItems=[ 
    { 
      name:"Buy Milk ",
      dueDate: "2024/05/13",
    },
    { 
      name:"Buy Milk ",
      dueDate: "2024/05/13",
    },
    { 
      name:"why not me ",
      dueDate: "Right now",
    },
  ];

  return ( 
  <center className='todo-continar'>
    <AppName/>
    <AppTodo/>
    <TodoItems todoItems={todoItems}> </TodoItems>
    
    
    </center>

  );
}

export default App;