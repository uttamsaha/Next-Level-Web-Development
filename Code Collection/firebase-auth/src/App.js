import logo from './logo.svg';
import './App.css';
import Header from './Components/Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Products from './Components/Pages/Products/Products';
import Login from './Components/Pages/LoginAccounts/Login';
import Register from './Components/Pages/LoginAccounts/Register';
import NotFound from './Components/Pages/Shared/NotFound';
import RequireAuth from './Components/Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<RequireAuth><Products></Products></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
