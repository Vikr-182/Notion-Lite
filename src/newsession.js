import './editor.css';
import { useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./components/useDarkMode"
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import Toggle from "./components/Toggler"

function App(id) {

	let prev_states = useHistory();
	function launch_session()
	{
		var name = document.getElementById("fname").value;
		console.log(name);
		console.log(ID);
		var route_path = "/"+ID+"/"+name;
		console.log(route_path);
		prev_states.push(route_path, route_path)
	}

	console.log(id);
	const ID = id.match.params.id
	const [theme, themeToggler, mountedComponent] = useDarkMode();

	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={themeMode}>
		<>
		<GlobalStyles/>
		<div id="landing-screen" className="App">
		<Toggle theme={theme} toggleTheme={themeToggler} />
		<div>
		<h1>Notion</h1>
		<h4>Join Session</h4>
		</div>

		<form>
		<label for="fname">Name:  </label>
		<input type="text" id="fname"/><br/><br/>

		<button id="nameButton" onClick={launch_session}>Join Session</button>
		</form>
		</div>
		</>
		</ThemeProvider>
	);

}

export default App;
