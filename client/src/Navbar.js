import React from 'react'
import run from './assets/runbtn.png'
export const Navbar = (props) => {
    function handleSelect(e){
        props.selectlang(e.target.value)
    }
    return (
        <nav className="navbar navbar-light" style={{ backgroundColor: 'rgb(36 38 38)' }}>
            <div className="container-fluid">
                <a href="/" className="navbar-brand" style={{ color: 'white' }}>Online Compiler</a>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <button onClick={()=>props.run()} style={{backgroundColor:'transparent',outline:'none',border:'none'}}><img src={run} style={{width:'34px'}} alt="" /></button>
                    <select className="form-select mx-4" style={{ width: '12vw' }} aria-label="Default select example" onChange={(e)=>handleSelect(e)}>
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                        <option value="py">Python</option>
                        <option value="js">Javascript</option>
                        <option value="c">C</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}
