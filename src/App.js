
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import { Route, Routes } from 'react-router-dom';

function App() { 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard/>}/>        
      </Routes>
    </div>
  );
}

export default App;
