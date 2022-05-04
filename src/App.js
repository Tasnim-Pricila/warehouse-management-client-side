import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signup from './components/Signup/Signup';
import AddItems from './Private/AddItems/AddItems';
import ManageInventory from './Private/ManageInventory/ManageInventory';
import MyItems from './Private/MyItems/MyItems';
import SingleItem from './Private/SingleItem/SingleItem';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/home' element={<Home />}> </Route>
        <Route path='/login' element={<Login />}> </Route>
        <Route path='/signup' element={<Signup />}> </Route>
        <Route path='/inventory/:id' element={<SingleItem />}> </Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        }> </Route>
        <Route path='/addItems' element={
          <RequireAuth>
            <AddItems />
          </RequireAuth>
        }> </Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        }> </Route>
        <Route path='*' element={<NotFound />}> </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
