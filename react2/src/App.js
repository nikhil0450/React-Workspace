// Class Based Component (CBC) & Function Based Component (FBC)

import React from 'react';
import './App.css';
import Greet from "./components/Greet" // FBC
import Welcome from './components/Welcome'; // CBC
import MessageClass from './components/MessageClass';
import MessageFunc from './components/MessageFunc';
import CounterClass from './components/Counter';
import CounterFunc from './components/CounterFunc';
import ProductList from './components/ProductList';
import NameList from './components/NameList';
import EventBind from './components/EventBind'; //CBC
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Hello from './components/Hello'; // with & without JSX 
import ParentComponent from './components/ParentComponent'; //CBC
import UserGreeting from './components/UserGreeting'; //CBC

function App() {
  return (
    <>
     <Greet name= "Nikhil">This is a children props in function based component</Greet>
     <Greet name= "Abhijay"/>
     <Greet name= "Viraj"/>
     <Welcome name="Nikhil">This is a children props in class based component</Welcome>
     <Welcome name="Viraj"/> 
     <Welcome name="Abhijay"></Welcome> 
     <Welcome/> 
    <Hello/>
    <MessageClass/>
    <MessageFunc/>
    <CounterClass/>
    <CounterFunc/>
    
    <FunctionClick/>
    <ClassClick/>

    <EventBind/>
    <ParentComponent/>
    <UserGreeting/>
    <NameList/>
    <ProductList/>
    </>
  );
}


export default App;
