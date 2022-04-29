import React from 'react'
import Button from '@mui/material/Button';
export const Navbar = (props) => {
    function handleSelect(e) {
        props.selectlang(e.target.value)
    }
    return (
        <nav className="navbar navbar-light" style={{ backgroundColor:'rgb(39,39,39)',borderBottom:'1px solid #343a40'}}>
            <div className="container-fluid">
                <a href="/" className="navbar-brand" style={{ color: 'white', fontSize: '19.9px', paddingLeft: '0.25vw',fontWeight:"normal" }}><span style={{color:'rgb(144,202,249)',fontWeight:'bold'}}>&lt;</span>codegrep/<span style={{color:'rgb(144,202,249)',fontWeight:'bold'}}>&gt;</span></a>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {/* <button onClick={()=>{props.dark()}} style={{backgroundColor:'transparent',outline:'none',border:'none',width:'fit-content',height:'fit-content'}}><img src={dark} style={{width:'30px',height:'30px',marginBottom:'-11px'}} alt="" /></button> */}
                    <Button onClick={() => props.run()} variant="contained" size="medium" sx={{ width: '99px', height: '35px' ,marginTop:'2px' ,fontSize:'12.95px',color:'white',fontFamily: 'Source Code Pro',textTransform:'lowercase',backgroundColor:'#5090D3' }}>
                        run
                    </Button>
                    <select className="form-select mx-4" style={{ width: '8vw', fontSize: '12px', marginTop: '1.9px',height:'34px' }} aria-label="Default select example" onChange={(e) => handleSelect(e)} value={props.langsel}>
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                        <option value="py">Python</option>
                        <option value="c">C</option>
                    </select>
                    {/* <FormControl sx={{ width: '99px', height: '35px',marginLeft:'19px',marginTop:'2px',marginRight:'29px' }}>
                        <InputLabel id="demo-simple-select-label">Language</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.langsel}
                            label="Language"
                            onChange={(e) => handleSelect(e)}
                            sx={{ width: '99px', height: '39px' }}
                        >
                            <MenuItem value={'cpp'}>C++</MenuItem>
                            <MenuItem value={'py'}>Python</MenuItem>
                            <MenuItem value={'java'}>Java</MenuItem>
                            <MenuItem value={'c'}>C</MenuItem>
                        </Select>
                    </FormControl> */}
                </div>
            </div>
        </nav>
    )
}
