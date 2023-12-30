import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InputForm } from './components/InputForm';
import { Items } from './components/Items';

function App() {
  const searchData:String[] = ["인디", "힙합", "블루스", "발라드", "인디 밴드", "힙합 발라드", "꽐라 블루스"];
  return (
    <div className="App">
      <InputForm />
      <Items data={searchData}/>
    </div>
  );
}

export default App;
