import React from 'react'

export const Navbar = () => {
    return (
            <nav class="navbar navbar-light" style={{backgroundColor: 'rgb(36 38 38)'}}>
                <div class="container-fluid">
                    <a href="/" class="navbar-brand" style={{color:'white'}}>Online Compiler</a>
                    <select class="form-select mx-4" style={{ width: '12vw' }} aria-label="Default select example">
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                        <option value="py">Python</option>
                        <option value="js">Javascript</option>
                        <option value="c">C</option>
                    </select>
                </div>
            </nav>
    )
}
