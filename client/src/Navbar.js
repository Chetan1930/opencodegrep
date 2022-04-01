import React from 'react'
import run from './assets/play1.png'
export const Navbar = (props) => {
    function handleSelect(e){
        props.selectlang(e.target.value)
    }
    return (
        <nav className="navbar navbar-light" style={{ backgroundColor: 'rgb(36 38 38)' }}>
            <div className="container-fluid">
                <a href="/" className="navbar-brand" style={{ color: 'white' ,fontSize:'18.5px',paddingLeft:'0.25vw'}}>CPE Online Compiler</a>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <button onClick={()=>props.run()} style={{backgroundColor:'transparent',outline:'none',border:'none'}}><img src={run} style={{width:'40px',height:'38px'}} alt="" /></button>
                    <select className="form-select mx-4" style={{ width: '8vw' ,fontSize:'0.85em'}} aria-label="Default select example" onChange={(e)=>handleSelect(e)}>
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
