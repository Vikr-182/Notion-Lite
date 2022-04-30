import './App.css';
import * as Quill from 'quill'
import './quill_snow.css'
import React, { useState, useEffect } from 'react';
import * as Y from 'yjs'
import { QuillBinding } from 'y-quill'
import { WebrtcProvider } from 'y-webrtc'
import QuillCursors from 'quill-cursors'

function App(id) {

	const [quill, setQuill] = useState(null);
	const ID = id.location.pathname
	//const State = id.location.state

	function show_text_editor(){
		// document.querySelector('#code_editor').style.display='none';
		document.querySelector('#text_editor').style.display='block';
	}

	useEffect(()=>{
		Quill.register('modules/cursors', QuillCursors)
		if(quill===null)
			setQuill(new Quill(document.querySelector('#text_box_editor'), {
				modules: {
					cursors:true,
					toolbar: false,
					history: {
						userOnly: true
					}
				},
				placeholder: 'Enter text here...',
				theme: 'bubble'
			}))
		if(quill!=null)
		{
			const ydoc_text = new Y.Doc();
			const provider_text = new WebrtcProvider(ID+"TEXT", ydoc_text)
			const ytext_text = ydoc_text.getText('quill')
			const binding = new QuillBinding(ytext_text, quill, provider_text.awareness)
		}
	})

	return (
		<div className="App">
			<div>
				<h1>Notion</h1>
				URL: <a href={window.location.href}> Get Shareable Link </a>
			</div> 
			<div id="text_editor" style={{display:'block'}}>
			<div id="text_box_editor"/>
			</div>
		</div>
	);
}

export default App;
