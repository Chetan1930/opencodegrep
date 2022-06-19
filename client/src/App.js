import { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { Output } from './Output';
import { TextEditor } from './TextEditor';
import cppraw from './cpp.txt'
import javaraw from './java.txt'
import craw from './c.txt'
import pyraw from './py.txt'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import io from "socket.io-client";
const socket = io(`localhost:8000`)


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const [code, setCode] = useState('')
  const [code1,setSendCode]=useState('')
  const [language, setLanguage] = useState('java')
  const [output, setOutput] = useState([])
  const [dark, setDark] = useState(false)
  const [input, setInput] = useState('')
  const [room, setroom] = useState('')
  async function sendCode() {
    // in development mode this will be localhost:8000
    const resp = await fetch('http://localhost:8000/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: new URLSearchParams({
        'language': language,
        'code': code,
        'input': input
      })
    })
    const data = await resp.json()
    console.debug(data);
    setOutput(data);
  }
  function setProplang(e) {
    setLanguage(e)
  }
  useEffect(() => {
    if (localStorage.getItem('lang')) {
      setLanguage(localStorage.getItem('lang'))
    }
    else setLanguage('cpp')

    if (localStorage.getItem('dark') === true || localStorage.getItem('dark') === true) {
      setDark(localStorage.getItem('dark'))
    }
    else setDark(false)
  }, [])

  useLayoutEffect(() => {
    socket.on(`sendcode${room}`, code => {
      setCode(code.code)
      setLanguage(code.lang)
    })
  })

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
          setSendCode(data)
        })
    }

    if (language === 'java') {
      fetch(javaraw)
        .then(function (response) {
          return response.text();
        }).then(function (data) {
          setCode(data);
          setSendCode(data)
        })
    }

    if (language === 'c') {
      fetch(craw)
        .then(function (response) {
          return response.text();
        }).then(function (data) {
          setCode(data);
          setSendCode(data)
        })
    }

    if (language === 'py') {
      fetch(pyraw)
        .then(function (response) {
          return response.text();
        }).then(function (data) {
          setCode(data);
          setSendCode(data)
        })
    }

  }, [language])
  useEffect(() => {
    socket.emit('getcode', {
      code: code1,
      roomid: room,
      lang:language
    })
  }, [code1, language, room])

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
          <Navbar run={sendCode} selectlang={setProplang} langsel={language} mode={dark}></Navbar>
          <Routes>
            <Route path="/join/:roomid" element={
              <div className="codeditor" style={{ display: 'flex', flexDirection: 'row' }}>
                <TextEditor setroom={setroom} code={setCode} setSendCode={setSendCode} c={code} lang={language}></TextEditor>
                <Output input={input} setInput={setInput} b op={output}></Output>
              </div>
            } />
            <Route path="/" element={
              <div className="codeditor" style={{ display: 'flex', flexDirection: 'row' }}>
                <TextEditor setroom={setroom} code={setCode}  setSendCode={setSendCode} c={code} lang={language}></TextEditor>
                <Output input={input} setInput={setInput} b op={output}></Output>
              </div>
            } />

          </Routes>

        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
