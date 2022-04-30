import './App.css';
import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { useHistory } from 'react-router-dom'
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'

function App() {
  
  let history = useHistory();
  function new_editor(){
    let new_id=uuidv1()
    history.push("/"+new_id, "/"+new_id)
  }

  return (
    <div className="App">
      <div>
        <h1>Hello Welcome To Collaborative Text Editor</h1>
      </div>
      <button onClick={new_editor}>Create New Collaborative Document</button>
      {/* <h2>OR</h2>
      <h3>Enter Existing Meeting</h3>
      <div>
        <input />
        <button>Enter</button>
      </div> */}
    </div>
  );
}

export default App;
