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
import toast, { Toaster } from 'react-hot-toast';
const socket = io(`localhost:8000`)


function App() {
  const [dark, setDark] = useState(false)
  const darkTheme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
    },
  });
  const [code, setCode] = useState('')
  const [code1, setSendCode] = useState('')
  const [language, setLanguage] = useState('java')
  const [output, setOutput] = useState([])
  const [input, setInput] = useState('')
  const [room, setroom] = useState('')
  const [authUser, setAuthUser] = useState(null)


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

  useLayoutEffect(() => {
    socket.on(`sendcode${room}`, code => {
      setCode(code.code)
      setLanguage(code.lang)
    })
  })
  useEffect(() => {
    if (!localStorage.getItem('dark')) return
    if (localStorage.getItem('dark') === 'dark') {
      setDark(true)
    } else if (localStorage.getItem('dark') === 'light') {
      setDark(false)
    }
    if (!localStorage.getItem('uid')) return
    setAuthUser(localStorage.getItem('uid'))
  }, [])

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
      lang: language
    })
  }, [code1, language, room])

  const toggleDark = () => {
    if (dark) {
      localStorage.setItem('dark', 'light')
      toast.success('Light Mode', {
        duration: 2000,
        style: {
          fontFamily: 'Poppins',
          fontSize: '12.5px'
        },
      });
    }
    else {
      localStorage.setItem('dark', 'dark')
      toast.success('Dark Mode', {
        duration: 2000,
        style: {
          fontFamily: 'Poppins',
          fontSize: '12.5px'
        },
      });
    }
    setDark((prev) => !prev)
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Toaster />
        <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
          <Navbar authUser={authUser} setAuthUser={setAuthUser} toggleDark={toggleDark} dark={dark} run={sendCode} selectlang={setProplang} langsel={language}></Navbar>
          <Routes>
            <Route path="/join/:roomid" element={
              <div className="codeditor" style={{ display: 'flex', flexDirection: 'row' }}>
                <TextEditor dark={dark} setroom={setroom} code={setCode} setSendCode={setSendCode} c={code} lang={language}></TextEditor>
                <Output dark={dark} input={input} setInput={setInput} op={output}></Output>
              </div>
            } />
            <Route path="/" element={
              <div className="codeditor" style={{ display: 'flex', flexDirection: 'row' }}>
                <TextEditor dark={dark} setroom={setroom} code={setCode} setSendCode={setSendCode} c={code} lang={language}></TextEditor>
                <Output dark={dark} input={input} setInput={setInput} op={output}></Output>
              </div>
            } />

          </Routes>

        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
