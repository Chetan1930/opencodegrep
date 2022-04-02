import React from 'react'

export const Output = (props) => {
    return (
        <div className="output" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', paddingLeft: '0.8vw', backgroundColor: props.bgcol, marginTop: '-8px', paddingTop: '40px', overflowY: 'scroll', position: 'relative', height: '30vh', fontSize: '0.98em', borderTop: `0.1px solid ${props.border}`, color: props.col }}>
            <h6 style={{ color: props.col, zIndex: '99', position: 'absolute', top: '15px', fontSize: '15.25px' }}>Output </h6>
            <div className="output" style={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
                {(props.op[0]) ?
                    <span style={{ color: 'green' }}> Build success: </span> : <></>}
                <p style={{ color: props.col }}>{props.op[0]}</p>
                {(props.op[1]) ?
                    <span style={{ color: 'red' ,marginTop:'-15px'}}> Build failed: </span> : <></>}
                <p style={{ color: props.col }}>{props.op[1]}</p>
            </div>
        </div>
    )
}
