import './App.css';
import * as Quill from 'quill'
import './quill_snow.css'
import React, { useState, useEffect } from 'react';
import * as Y from 'yjs'
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./components/useDarkMode"
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import Toggle from "./components/Toggler"
import { QuillBinding } from 'y-quill'
import { WebrtcProvider } from 'y-webrtc'
import QuillCursors from 'quill-cursors'




function App(id) {

	const ID = id.location.pathname
	const [quill_state, setQuill] = useState(null);
	//const State = id.location.state
	// const [theme, themeToggler, mountedComponent] = useDarkMode();
	// const themeMode = theme === 'light' ? lightTheme : darkTheme;
	useEffect(()=>{
		Quill.register('modules/cursors', QuillCursors)
		if(quill_state===null)
			setQuill(new Quill(document.querySelector('#text_box_editor'), {
				modules: {
					toolbar: false,
					cursors:true,
					history: {
						userOnly: true
					}
				},
				theme: 'bubble',
				placeholder: 'Start typing here...'
			}))
		if(quill_state!=null)
		{
			const ydoc_text = new Y.Doc();
			const provider_text = new WebrtcProvider(ID+"TEXT", ydoc_text)
			const ytext_text = ydoc_text.getText('quill')
			const binding = new QuillBinding(ytext_text, quill_state, provider_text.awareness)
		}
	})

	return (
		// <ThemeProvider theme={themeMode}>
		// <>
		// <GlobalStyles/>
		<div className="App">
		{/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
			<div id="header">
				<h1>Notion</h1>
				<span id="url-box">URL: <a href={window.location.href}> Get Shareable Link </a></span>
			</div> 
		<div id="text_box_container">
			<div id="text_box_editor"/>
		</div>
		</div>
		// </>
		// </ThemeProvider>
	);
}

export default App;
