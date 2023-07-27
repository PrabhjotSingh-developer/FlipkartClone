import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Cart from './Pages/Cart';
import AllProducts from './Pages/electorincsPage/AllProducts';
import Clothing from './Pages/Clothing'
function App() {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/AllProducts" element={<AllProducts />}></Route>
                        <Route path="/clothing" element={<Clothing />}></Route>

                  </Routes>
            </BrowserRouter>
      );
}

export default App;
