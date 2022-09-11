
import './App.css';
import React, {useState} from "react";

function App() {
  const [look,setLook]=useState({backgroundColor:'rgb(238, 241, 0)'});
  let happy={backgroundColor:'rgb(238, 241, 0)'}
  let sad={backgroundColor:'rgb(19, 0, 164)'}
  let sleepy={backgroundColor:'rgb(35, 177, 0)'}
  let excited={backgroundColor:'rgb(255, 0, 66)'}
  const handleChange=(e)=>{
    console.log(e.target.value);
    if(e.target.value ==="Sleepy"){
      setLook(sleepy);
    }else if(e.target.value ==="Sad"){
      setLook(sad);
    }else if(e.target.value ==="Excited"){
      setLook(excited);
    }else{
      setLook(happy)
    }
  }
  return (
    <div id="main">
      <select onChange={handleChange}>
        <option selected>Happy</option>
        <option>Sad</option>
        <option>Sleepy</option>
        <option>Excited</option>
      </select>
      <div id="mood-indicator" style={look}></div>
      {/* <div id="mood-indicator" style={{backgroundColor:'rgb(238, 241, 0)'}}></div> */}
    </div>
  );
}

export default App;
