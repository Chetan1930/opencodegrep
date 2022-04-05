import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { Output } from './Output';
import { TextEditor } from './TextEditor';
import cppraw from './cpp.txt'
import javaraw from './java.txt'
import craw from './c.txt'
import pyraw from './py.txt'
import loadinggif from './assets/ZZ5H.gif'


function App() {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('java')
  const [output, setOutput] = useState([])
  const [loading, setLoading] = useState(false)
  const [dark, setDark] = useState(false)
  const [bg, setBg] = useState('rgb(40,40,40)')
  const [bg1, setBg1] = useState('#202020')
  const [color,setColor]=useState('white')
  const [border,setBorder]=useState('rgb(56 56 56)')
  const [buildcolor,setBuildcol]=useState('#65de65')
  //
  async function sendCode() {
    setLoading(true)
    const resp = await fetch('http://localhost:5000/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: new URLSearchParams({
        'language': language,
        'code': code,
      })
    })
    const data = await resp.json()
    setLoading(false)
    console.log(data);
    setOutput(data);
  }
  function setProplang(e) {
    setLanguage(e)
  }
  useEffect(() => {
    setLoading(true)
    if (localStorage.getItem('lang')) {
      setLanguage(localStorage.getItem('lang'))
    }
    else setLanguage('cpp')
    setLoading(false)

    if (localStorage.getItem('dark')===true || localStorage.getItem('dark')===true) {
      setDark(localStorage.getItem('dark'))
    }
    else setDark(false)
  }, [])
  function handleDark() {
    if(dark===false){
      setBg('rgb(40,40,40)')
      setBg1('#202020')
      setColor('white')
      setBorder('rgb(56 56 56)')
      setBuildcol('#65de65')
    }
    else{
      setBg('rgb(235 235 235)')
      setBg1('#F2F3F5')
      setColor('black')
      setBorder('rgb(218 218 218)')
      setBuildcol('#227f22')
    }
    setDark(!dark)
  }
  useEffect(() => {
    localStorage.setItem('dark', dark)
  }, [dark])

  useEffect(() => {
    localStorage.setItem('lang', language)
    if (language === 'cpp') {
      fetch(cppraw)
        .then(function (response) {
          return response.text();
        }).then(function (data) {
          setCode(data);
        })
    }

    if (language === 'java') {
      fetch(javaraw)
        .then(function (response) {
          return response.text();
        }).then(function (data) {
          setCode(data);
        })
    }

    if (language === 'c') {
      fetch(craw)
        .then(function (response) {
          return response.text();
        }).then(function (data) {
          setCode(data);
        })
    }

    if (language === 'py') {
      fetch(pyraw)
        .then(function (response) {
          return response.text();
        }).then(function (data) {
          setCode(data);
        })
    }

  }, [language])

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      {
        loading ? (<>
          <img style={{ width: '45px', position: 'absolute', top: '40%', left: '50%', zIndex: '999' }} src={loadinggif} alt="" />
          <h6 style={{ position: 'absolute', top: '47.58%', left: '49.52%', zIndex: '999', color: color }}>Running</h6></>
        ) : (<></>)
      }
      <Navbar border={border} col={color} bgcol={bg} run={sendCode} selectlang={setProplang} langsel={language} dark={handleDark} mode={dark}></Navbar>
      <TextEditor bgcol={bg1} code={setCode} c={code} lang={language}></TextEditor>
      <Output buildcol={buildcolor} border={border} col={color} bgcol={bg} op={output}></Output>
    </div>
  );
}

export default App;
