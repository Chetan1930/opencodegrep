import React from 'react'
export const TextEditor = (props) => {
    function handleCode(e){
        props.code(e.target.value)
    }
    
    return (

            <textarea style={{ border: 'none', outline: 'none', backgroundColor: 'black', width: '100%', height: '70vh', color: 'white', textDecoration: 'none', paddingLeft: '0.8vw', paddingTop: '19px', fontSize: '0.85em', overflowX: 'scroll' ,overfowY:'scroll'}} spellCheck="false" onChange={(e)=>handleCode(e)} value={props.c}>

            </textarea>
    )
}
