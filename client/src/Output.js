import React from 'react'

export const Output = (props) => {
    return (
        <div className="output" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', paddingLeft: '0.8vw', backgroundColor: '#212529', marginTop: '-8px', paddingTop: '40px', overflowY: 'scroll',position:'relative' ,height:'22.5vh',fontSize:'0.85em'}}>
            <h6 style={{ color: 'white',zIndex:'99',position:'absolute',top:'15px',fontSize:'14px'}}>Output :</h6>
            <div className="output" style={{ color: 'white' }}>
                {(props.op[1]) ?
                    <span style={{ color: '#BBE1FA' }}> Build success: </span> : <></>}
                {props.op[1]}
                {(props.op[2]) ?
                    <span style={{ color: 'red' }}> Build failed: </span> : <></>}
                {props.op[2]}
            </div>
        </div>
    )
}
