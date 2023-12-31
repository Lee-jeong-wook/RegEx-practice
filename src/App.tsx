import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InputForm } from './components/InputForm';
import { Items } from './components/Items';

function App() {
  const searchData:String[] = ["10312_이정욱", "01012341234"];
  return (
    <div className="App">
      <InputForm />
      <Items data={searchData}/>
    </div>
  );
}

export default App;
