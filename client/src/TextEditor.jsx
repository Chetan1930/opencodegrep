import React from 'react'
import Editor from "@monaco-editor/react";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const TextEditor = (props) => {
    const {roomid}=useParams()
    
    useEffect(()=>{
        props.setroom(roomid)
    },[props, roomid])
    function handleEditorChange(value, event) {
        props.code(value)
        props.setSendCode(value)
        // console.log("here is the current model value:", value);
      }
    return (

        // <textarea style={{ border: 'none', outline: 'none', backgroundColor: 'black', width: '100%', height: '70vh', color: 'white', textDecoration: 'none', paddingLeft: '0.8vw', paddingTop: '19px', fontSize: '0.85em', overflowX: 'scroll', overfowY: 'scroll' }} spellCheck="false" onChange={(e) => handleCode(e)} value={props.c}>  </textarea>
        <div className="textarea" style={{ height: '93vh', overflowY: 'scroll', backgroundColor: '#080808', width: '70vw' }}>
            {/* <CodeEditor
                value={props.c}
                language={props.lang}
                onChange={(e) => handleCode(e)}
                style={{ backgroundColor:'#080808', width: '100%', fontSize: '13.56px'}}
            /> */}
            <Editor
                height="92.85vh"
                width="100%"
                theme="vs-dark"
                language={props.lang==="py"?"python":props.lang}
                value={props.c}
                onChange={handleEditorChange}
            />

        </div>

    )
}
