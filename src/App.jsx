import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../src/App.css'
import Display from '../src/Components/Display';
import Buttons from "../src/Components/Buttons";

export default function App() {
  const [display, setDisplay] = useState({
    formula: '',
    output: '0',
  })
  return (
    <div className="calculator">
      <Display screen={display} />
      <Buttons btnFunctionalities={setDisplay}/>
    </div>
  );
}