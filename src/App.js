import './editor.css';
import React, { useState, useEffect } from 'react';
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./components/useDarkMode"
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import Toggle from "./components/Toggler"
import { v1 as uuidv1 } from 'uuid';
import { useHistory } from 'react-router-dom'
//import { WebrtcProvider } from 'y-webrtc'

function App() {
  
  let prev_states = useHistory();
  function launch_page()
  {
    let path_id=uuidv1()
    //Generating new ids for new pages
	var name = document.getElementById("fname").value;
    var route_path = "/"+path_id+"/"+name
    prev_states.push(route_path, route_path)
  }

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles/>
    <div id="landing-screen" className="App">
    <Toggle theme={theme} toggleTheme={themeToggler} />
      <div>
        <h1>Notion-Lite</h1>
      </div>

	  <form>
	  <label for="fname">Name:  </label>
		  <input type="text" id="fname" /><br/><br/>

      <button id="nameButton" onClick={launch_page}>Create a New Page</button>
	  </form>
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;
