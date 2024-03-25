import React from 'react'

function Person({person, id}) {
  return (
    <h2 key={id}>
        Hello my name is {person.name} & I am a {person.profession}
      </h2>
  )
}

export default Person