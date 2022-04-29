import React from 'react'
import TerminalIcon from '@mui/icons-material/Terminal';
import { TextField } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
export const Output = (props) => {
    return (
        <div className="output" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', paddingLeft: '0.8vw', backgroundColor: '#232121', marginTop: '0px', paddingTop: '16px', overflowY: 'scroll', position: 'relative', height: '93vh', fontSize: '0.98em', width: '30.5vw', borderLeft: '1px solid #343a40', marginLeft: '-6px' }}>
            <div className="headlogos" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <TerminalIcon style={{ width: '21px', height: '26px', marginLeft: '6px' }} />
                <p style={{ fontSize: '13.25px', marginBottom: '-1.58px', marginLeft: '3px' }}>Console </p>
            </div>
            <div className="textarea">
                <TextField
                    style={{ width: '96%', marginTop: '20px', fontFamily: 'Source Code Pro' }}
                    InputProps={{ style: { fontSize: 12.9,fontFamily: 'Source Code Pro' } }} InputLabelProps={{ style: { fontSize: 12.9,fontFamily: 'Source Code Pro' } }}
                    id="outlined-multiline-static"
                    label="Input"
                    multiline
                    value={props.input}
                    onChange={e => props.setInput(e.target.value)}
                    rows={4}
                />
            </div>
            <div className="headlogos" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: "25px" }}>
                <TaskIcon style={{ width: '21px', height: '26px', marginLeft: '6px' }} />
                <p style={{ fontSize: '13.25px', marginBottom: '-1.58px', marginLeft: '3px' }}>Output </p>
            </div>
            <div className="output" style={{ color: 'white', display: 'flex', flexDirection: 'column', marginTop: '15px', marginLeft: '3px' }}>
                {(props.op[0]) ?
                    <span style={{ color: '#34ce34', fontSize: '12.95px' }}> Build success: <span style={{ color: 'gray' }}> {props.op[2]}ms execution time</span></span> : <></>}
                <p style={{ color: 'white', fontSize: '13px' }}>{`${props.op[0]}`}</p>
                {(props.op[1]) ?
                    <span style={{ color: 'red', marginTop: '-15px', fontSize: '12.75px' }}> Build failed: </span> : <></>}
                <p style={{ color: 'white', fontSize: '13px' }}>{props.op[1]}</p>
            </div>
        </div>
    )
}
