// Class Based Component (CBC) & Function Based Component (FBC)

import React from 'react';
import './App.css';
// import Greet from "./components/Greet" // FBC
// import Welcome from './components/Welcome'; // CBC
// import MessageClass from './components/MessageClass';
// import MessageFunc from './components/MessageFunc';

// import Counter from './components/Counter';
import CounterFunc from './components/CounterFunc';
import EventBind from './components/EventBind';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import Hello from './components/Hello';

function App() {
  return (
    <>
     {/* <Greet name= "Nikhil">This is a children props in function based component</Greet> */}
     {/* <Greet name= "Abhijay"/> */}
     {/* <Greet name= "Viraj"/> */}
     {/* <Welcome name="Nikhil">This is a children props in class based component</Welcome> */}
     {/* <Welcome name="Viraj"/>  */}
     {/* <Welcome name="Abhijay"></Welcome>  */}
     {/* <Welcome/>  */}
    {/* <Hello/> */}
    {/* <MessageClass/> */}
    {/* <MessageFunc/> */}
    {/* <Counter/> */}
    <CounterFunc/>
    
    {/* <FunctionClick/> */}
    {/* <ClassClick/> */}

    <EventBind/>


    </>
  );
}


export default App;
