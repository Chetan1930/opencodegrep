import React from 'react'

export const Output = (props) => {
    return (
        <div className="output" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', paddingLeft: '0.8vw', backgroundColor:props.bgcol, marginTop: '-8px', paddingTop: '40px', overflowY: 'scroll',position:'relative' ,height:'22.5vh',fontSize:'0.95em',borderTop:`0.1px solid ${props.border}`,color:props.col}}>
            <h6 style={{ color: props.col,zIndex:'99',position:'absolute',top:'15px',fontSize:'15.25px'}}>Output :</h6>
            <div className="output" style={{ color: 'white',display:'flex',flexDirection:'row' }}>
                {(props.op[1]) ?
                    <span style={{ color: 'green' }}> Build success: </span> : <></>}
                  <p style={{color:props.col}}>{props.op[1]}</p> 
                {(props.op[2]) ?
                    <span style={{ color: 'red' }}> Build failed: </span> : <></>}
               <p style={{color:props.col}}>{props.op[2]}</p> 
            </div>
        </div>
    )
}
