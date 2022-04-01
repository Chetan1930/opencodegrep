import React from 'react'
import run from './assets/play.png'
export const Navbar = (props) => {
    function handleSelect(e){
        props.selectlang(e.target.value)
    }
    return (
        <nav className="navbar navbar-light" style={{ backgroundColor: 'rgb(40,40,40)' ,borderBottom:'1px solid rgb(56 56 56)'}}>
            <div className="container-fluid">
                <a href="/" className="navbar-brand" style={{ color: 'white' ,fontSize:'18.5px',paddingLeft:'0.25vw'}}>CPE Online Compiler</a>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <button onClick={()=>props.run()} style={{backgroundColor:'transparent',outline:'none',border:'none',width:'fit-content',height:'fit-content'}}><img src={run} style={{width:'40px',height:'36px'}} alt="" /></button>
                    <select className="form-select mx-4" style={{ width: '8vw' ,fontSize:'0.85em',height:'fit-content',marginTop:'1.9px'}} aria-label="Default select example" onChange={(e)=>handleSelect(e)} value={props.langsel}>
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                        <option value="py">Python</option>
                        <option value="c">C</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}
