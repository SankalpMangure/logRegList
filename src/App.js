// import logo from './logo.svg';
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Rergister';
import Users from './components/Users';
import Product from './components/Product';

function App() {
  return (
    <>
      < div className="App mt-5" >
        <div className='container'>
          {/* <div className='row'>
            <div className='col-md-6'>
              <Register />
            </div>
            <div className='col-md-6'>
              <Login />
            </div>
          </div>
          <div className='row'>
            <Users />
          </div> */}

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/product/:id" element={<Product />}></Route>
            </Routes>
          </BrowserRouter>

        </div>
      </div >
    </>
  );
}

export default App;
