import React from 'react'

function MemoComp({name}) {
    console.log("Memo Component Rendering");
  return (
    <div>Memo Component {name}</div>
  )
}

export default React.memo(MemoComp)