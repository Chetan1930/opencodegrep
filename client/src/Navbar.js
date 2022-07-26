import React from 'react'
import Button from '@mui/material/Button';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SaveIcon from '@mui/icons-material/Save';
import DownloadIcon from '@mui/icons-material/Download';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export const Navbar = (props) => {
    function handleSelect(e) {
        props.selectlang(e.target.value)
    }
    //rgb(39,39,39) rgb(144,202,249) #343a40
    return (
        <nav className="navbar navbar-light" style={{ backgroundColor:props.dark?"rgb(39,39,39)":'#f9f9f9',borderBottom:props.dark?'1px solid #343a40':'1px solid rgb(222,222,222)'}}>
            <div className="container-fluid">
                <a href="/" className="navbar-brand" style={{ color: props.dark?'white':'black', fontSize: '19.9px', paddingLeft: '0.8vw',fontWeight:"normal" }}><span style={{color:props.dark?'white':'black',fontWeight:'bold',marginRight:'7px',marginTop:'-3px'}}>&#60;/&#62;</span>codegrep</a>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {/* <button onClick={()=>{props.dark()}} style={{backgroundColor:'transparent',outline:'none',border:'none',width:'fit-content',height:'fit-content'}}><img src={dark} style={{width:'30px',height:'30px',marginBottom:'-11px'}} alt="" /></button> */}
                    <Button title="Save" style={{'marginRight':'4px','marginTop':'2px', height: '35px',color:'white'}}>
                        <SaveIcon sx={{fontSize:'19px',color:props.dark?'white':'black'}} />
                    </Button>
                    <Button title="Download" style={{'marginRight':'4px','marginTop':'2px', height: '35px',color:'white'}}>
                        <DownloadIcon sx={{fontSize:'19px',color:props.dark?'white':'black'}} />
                    </Button>
                    <Button onClick={()=>{props.toggleDark()}} title="Dark mode toggle" style={{'marginRight':'4px','marginTop':'2px', height: '35px',color:'white'}}>
                        <Brightness4Icon sx={{fontSize:'19px',color:props.dark?'white':'black'}} />
                    </Button>
                    <Link to={`/join/${uniqid()}`}><Button title="Collab"  style={{'marginRight':'4px','marginTop':'2px', height: '35px',color:'white'}}>
                        <PeopleAltIcon sx={{fontSize:'21px',color:props.dark?'white':'black'}} />
                    </Button></Link>
                    <Button title="Login" onClick={() => props.run()}  size="medium" sx={{ height: '35px' ,marginTop:'2px' ,fontSize:'12.95px',color:'white',fontFamily: 'Source Code Pro',textTransform:'lowercase' ,marginRight:'4px'}}>
                        <VpnKeyIcon sx={{fontSize:'22px',color:props.dark?'white':'black'}}  />
                    </Button>
                    <Button title="Run Code" onClick={() => props.run()} size="medium" sx={{height: '35px' ,marginTop:'2px' ,fontSize:'12.95px',color:'white',fontFamily: 'Source Code Pro',textTransform:'lowercase'}}>
                        <PlayArrowIcon sx={{fontSize:'24px',color:props.dark?'white':'black'}}  />
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
