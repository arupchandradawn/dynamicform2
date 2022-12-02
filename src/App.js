import logo from './logo.svg';
import './App.css';
import jsonfile from './dynamic.json';
import { useEffect, useState } from 'react';

function App() {

  const jsonValue = require ("./dynamic.json");
  console.log("jsonValue >>",jsonValue);

  const [finalJsonValue,setfinalJsonValue] = useState(jsonValue);

  const handleFormChange = (event,index) =>{
    let data = [...jsonValue];
    data[index]['value'] = event.target.value;
    console.log("event.target.value>>",data[index]);
    setfinalJsonValue(data);
  }

  return (
    <div className="App">
        {finalJsonValue.map((field,index) => {
          return<div key={index} className="mainClass">
            <div>
              {field.label}
            </div>
            {
              (field.labeltype === "Textbox") && (<input 
                value={field.value}
                onChange={event => handleFormChange(event,index)}
              ></input>)
            }
            {
              (field.labeltype === "DropDownlist") && (<select>
                <option>{field.value}</option>
              </select>)
            }
          </div>
        })}
        <br/><button>Save</button>
    </div>
  );
}

export default App;
