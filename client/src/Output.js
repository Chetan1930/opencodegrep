import React from 'react'

export const Output = (props) => {
    return (
        <div className="output" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', paddingLeft: '0.8vw', backgroundColor: 'rgb(36 38 38)', height: '18.5vh', marginTop: '-8px', paddingTop: '14px', overflowY: 'scroll' }}>
            <h6 style={{ color: 'white' }}>Output :</h6>
            <div className="output" style={{ color: 'white' }}>
                {(props.op[1]) ?
                    <span style={{ color: '#BBE1FA' }}> Build success: </span> : <></>}
                {props.op[1]}
            </div>
        </div>
    )
}
