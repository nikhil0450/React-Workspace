import React from "react";

function Trial() {
  const obj = [
    { id: 1, name: "Nikhil" },
    { id: 2, name: "Varad" },
    { id: 3, name: "Abhijay" },
  ];
  const intro = obj.map((names)=>{
    return <h1 key={names.id}>
         {`Hello my id is ${names.id} & my name is ${names.name}`}
    </h1> 
})
  return <div>
    {/* {intro} */}
    {obj.map(doc => <h1 key={doc.id}>{`Hello my id is ${doc.id} & my name is ${doc.name}`}</h1> )}
  </div>;
}       

export default Trial;
