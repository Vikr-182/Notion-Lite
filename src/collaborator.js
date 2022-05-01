import './editor.css';
import * as Quill from 'quill'
import React, { useState, useEffect } from 'react';
import './quill_snow.css'
import * as Y from 'yjs'
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./components/useDarkMode"
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import Toggle from "./components/Toggler"
import { QuillBinding } from 'y-quill'
import { WebrtcProvider } from 'y-webrtc'
import QuillCursors from 'quill-cursors'

function App(id, name) {

	const ID = id.location.pathname.split('/')[1];
	const NAME = id.location.pathname.split('/')[2];
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
				placeholder: 'Start typing here...',
			}))
		if(quill_state!=null)
		{
			const ydoc = new Y.Doc();
			const provider = new WebrtcProvider(ID+"TEXT", ydoc)
			const ytext = ydoc.getText('quill')
			const binding = new QuillBinding(ytext, quill_state, provider.awareness)

			const awareness = provider.awareness
			var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

			awareness.setLocalStateField('user', {
				name: NAME,
				color: randomColor
			})
		}
	})

	return (
		// <ThemeProvider theme={themeMode}>
		// <>
		// <GlobalStyles/>
		<div className="App">
		{/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
		<div id="header">
		<h1>Notion-Lite</h1>
		<h5>User: {NAME}</h5>
		<span id="url-box"><a href={window.location.origin+"/"+ID}> Get Shareable Link </a></span>
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
