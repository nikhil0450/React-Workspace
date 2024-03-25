import React from "react";
// import Person from "./Person";

function NameList() {
  // const names = ["Nikhil", "Varad", "Viraj"]
  // const nameList = names.map((name, index) =>{
  //     return <h1 key={index}>{name}</h1>
  // })
  const persons = [
    {
      id: 0,
      name: "Nikhil",
      profession: "developer",
      age: 21,
    },
    {
      id: 1,
      name: "Viraj",
      profession: "analyst",
      age: 22,
    },
    {
      id: 2,
      name: "Varad",
      profession: "CA",
      age: 18,
    },
  ];

  const personList = persons.map((person, index) => {
    return (
        // Two ways
        <h2 key={index}>
        Hello my name is {person.name} & I am a {person.profession}
      </h2>
    //   <Person person={person} key={person.id}/>
    );
  });
  return (
    <>
      {/* {names.map((name,index)=><h1 key={index}>{name}</h1>)} */}
      {/* {nameList} */}

      {personList}
    </>
  );
}

export default NameList;
