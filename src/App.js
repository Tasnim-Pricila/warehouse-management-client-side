import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import SingleItem from './Private/SingleItem/SingleItem';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className='App'>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='/home' element={<Home/>}> </Route>
            <Route path='/login' element={<Login/>}> </Route>
            <Route path='/signup' element={<Signup/>}> </Route>
            <Route path='/inventory/:id' element={<SingleItem/>}> </Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
