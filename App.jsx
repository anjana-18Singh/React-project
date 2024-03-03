import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let[counter,setCounter]=useState(15)
    



  //let counter=15
  //Arrow function is being created
  const addValue=()=>{
    console.log("Clicked",counter);
    counter=counter+1;
    setCounter(counter);
  
  
  }


  const removeValue=()=>{
    setCounter(counter-1);
    
  
  
  }
 
  return (
    <>
        <h1>coffee and react</h1>
        <h2>Counter Value:{counter}</h2>
        <button onClick={addValue}>Add value{counter}</button>
        <br></br>
        <button onClick={removeValue}>Remove value{counter}</button>
    </>
  )
}

export default App
