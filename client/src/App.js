import './App.css';
import { Navbar } from './Navbar';
import { Output } from './Output';
import { TextEditor } from './TextEditor';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <TextEditor></TextEditor>
    <Output></Output>
    </div>
  );
}

export default App;
