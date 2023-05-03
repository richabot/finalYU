import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import {  Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
     <Routes>
<Route path="/details" element={<Details/>}/>
<Route path="/" element={<LoginForm/>}/>
<Route path="/form" element={<Form/>}/>

     </Routes>
   
    </div>
  );
}

export default App;
