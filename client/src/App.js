import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { Output } from './Output';
import { TextEditor } from './TextEditor';
import cppraw from './cpp.txt'
import javaraw from './java.txt'
import craw from './c.txt'
import pyraw from './py.txt'
import loadinggif from './assets/redload.gif'


function App() {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('java')
  const [output, setOutput] = useState([])
  const [loading, setLoading] = useState(false)
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
    setOutput(data);
  }
  function setProplang(e) {
    setLanguage(e)
  }
  useEffect(() => {
    setLoading(true)
    setLanguage('cpp')
    setLoading(false)
  }, [])
  useEffect(() => {
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
          <img style={{ width: '50px', position: 'absolute', top: '40%', left: '50%', zIndex: '999' }} src={loadinggif} alt="" />
          <h6 style={{ width: '50px', position: 'absolute', top: '47.75%', left: '49.74%', zIndex: '999',color:'white' }}>Running</h6></>
        ) : (<></>)
      }
      <Navbar run={sendCode} selectlang={setProplang}></Navbar>
      <TextEditor code={setCode} c={code}></TextEditor>
      <Output op={output}></Output>
    </div>
  );
}

export default App;
