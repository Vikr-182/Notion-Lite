import './App.css';
import * as Quill from 'quill'
import './quill_snow.css'
import React, { useState, useEffect } from 'react';
import * as Y from 'yjs'
import { QuillBinding } from 'y-quill'
import { WebrtcProvider } from 'y-webrtc'
import QuillCursors from 'quill-cursors'

import CodeMirror from "codemirror";
// import { CodemirrorBinding } from "y-codemirror"
import './code_mirror_css.css'
// import "codemirror/mode/javascript/javascript.js";
// import "codemirror/mode/clike/clike.js"
// import "codemirror/mode/python/python.js"

function App(id) {

    const [quill, setQuill] = useState(null);
    // const [code_editor, setCode_editor] = useState(null);
    // const [language, setLanguage] = useState("CPP");
    // const [languagemode, setLanguageMode] = useState("text/x-c++src");


    const ID = id.location.pathname
    const State = id.location.state

    function show_text_editor(){
      // document.querySelector('#code_editor').style.display='none';
      document.querySelector('#text_editor').style.display='block';
    }
    // function show_code_editor(){
    //   document.querySelector('#text_editor').style.display='none';
    //   document.querySelector('#code_editor').style.display='block';
    //   code_editor.refresh();
    // }



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
            placeholder: 'Start collaborating...',
            theme: 'snow'
        }))
        if(quill!=null)
        {
          const ydoc_text = new Y.Doc();
          const provider_text = new WebrtcProvider(ID+"TEXT", ydoc_text)
          const ytext_text = ydoc_text.getText('quill')
          const binding = new QuillBinding(ytext_text, quill, provider_text.awareness)
        }
    })


    // useEffect(()=>{
    //     if(code_editor===null)
    //     {
    //         setCode_editor(new CodeMirror(document.querySelector("#editor_area"), {
    //                 mode: languagemode,
    //                 lineNumbers: true,
    //                 autoRefresh: true
    //               }));
    //     }
    //     if(code_editor!=null)
    //     {
    //         const ydoc_code = new Y.Doc();
    //         const provider_code = new WebrtcProvider(ID+"CODE", ydoc_code);
    //         const ytext_code = ydoc_code.getText("codemirror");
    //         new CodemirrorBinding(ytext_code, code_editor, provider_code.awareness);
    //     }

    // })
  
  return (
    <div className="App">
      <div>
        <button onClick={show_text_editor}>Text Editor</button>
        {/* <button onClick={show_code_editor}>Code Editor</button> */}
      </div>
      <div id="text_editor" style={{display:'block'}}>
        <div id="text_box_editor"/>
      </div>
      {/* <div id="code_editor" style ={{display:'none'}}>
        <h2>Mode : {language}</h2>
        <button onClick={()=>{setLanguage("CPP"); setLanguageMode("text/x-c++src"); code_editor.refresh() }}>CPP</button>
        <button onClick={()=>{setLanguage("JavaScript"); setLanguageMode("javascript"); code_editor.refresh() }}>JavaScript</button>
        <button onClick={()=>{setLanguage("Python"); setLanguageMode("python"); code_editor.refresh() }}>Python</button>
        <div id="editor_area" />
      </div> */}
    </div>
  );
}

export default App;
