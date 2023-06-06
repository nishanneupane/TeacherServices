import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home'
import './App.css';
import AddTeacher from './components/Teacher/AddTeacher';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddTeacher/>}/>
      </Routes>
    </div>
  );
}

export default App;
