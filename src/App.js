import './App.css';
import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { useHistory } from 'react-router-dom'
//import * as Y from 'yjs'
//import { WebrtcProvider } from 'y-webrtc'

function App() {
  
  let history = useHistory();
  function new_editor(){
	let new_id=uuidv1()
	history.push("/"+new_id, "/"+new_id)
  }

  return (
    <div id="landing-screen" className="App">
      <div>
        <h1>Notion</h1>
      </div>
      <button onClick={new_editor}>Create a New Page</button>
    </div>
  );
}

export default App;
