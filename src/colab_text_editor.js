import './App.css';
import * as Quill from 'quill'
import './quill_snow.css'
import React, { useState, useEffect } from 'react';
import * as Y from 'yjs'
import { QuillBinding } from 'y-quill'
import { WebrtcProvider } from 'y-webrtc'
import QuillCursors from 'quill-cursors'

import CodeMirror from "codemirror";
import { CodemirrorBinding } from "y-codemirror"
import './code_mirror_css.css'
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/clike/clike.js"
import "codemirror/mode/python/python.js"

function App(id) {

    const ID = id.location.pathname

    function show_text_editor(){
      document.querySelector('#text_editor').style.display='block';
    }

    const [quill, setQuill] = useState(null);


    useEffect(()=>{
      Quill.register('modules/cursors', QuillCursors)
      if(quill===null)
        setQuill(new Quill(document.querySelector('#text_box_editor'), {
            modules: {
                cursors:true,
                toolbar: [
                // adding some basic Quill content features
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline'],
                ['image', 'code-block']
                ],
                history: {
                  userOnly: true
                }
            },
            placeholder: 'Start collaborating...',
            theme: 'snow' // 'bubble' is also great
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
        <button onClick={show_text_editor}>Text Editor</button>
      </div>
      <div id="text_editor" style={{display:'block'}}>
        <div id="text_box_editor"/>
      </div>
    </div>
  );
}

export default App;
