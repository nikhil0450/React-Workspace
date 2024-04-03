import React from 'react'

function Hero({heroName}) {
    if(heroName === "Joker"){
        throw new Error('Not a hero') 
    }
    else
    return (
        <div>{heroName}</div>
        )
}

export default Hero