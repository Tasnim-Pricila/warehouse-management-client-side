import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='/home' element={<Home/>}> </Route>
        </Routes>
    </>
  );
}

export default App;
