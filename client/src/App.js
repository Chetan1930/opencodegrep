import { useState } from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { Output } from './Output';
import { TextEditor } from './TextEditor';

function App() {
  const [code, setCode] = useState('')
  const [language,setLanguage]=useState('java')
  const [output,setOutput]=useState([])
  async function sendCode() {
    const resp=await fetch('http://localhost:5000/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: new URLSearchParams({
        'language': language,
        'code': code,
    })
    })
    const data=await resp.json()
    setOutput(data);
  }
  function setProplang(e){
    setLanguage(e)
  }
  return (
    <div className="App">
      <Navbar run={sendCode} selectlang={setProplang}></Navbar>
      <TextEditor code={setCode}></TextEditor>
      <Output op={output}></Output>
    </div>
  );
}

export default App;
