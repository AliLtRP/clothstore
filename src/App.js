import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/splashscreen/SplashScreen.js'
import Signinscreen from './components/signin/signinscreen.js';
import Signupscreen from './components/signup/signupscreen.js';
import Getstarted from './components/getstarted/getstarted.js'
import Placeorder from './components/placeorder/placeorder.js';
import Shipping from './components/shipping/shipping.js';
import { HomePage } from "./components/home page/index";
import { TrendingProducts } from './components/trending products';
import Shop from './components/shop page/Shop.jsx';

import Cartpage from './components/cartpage/cart.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SplashScreen />}></Route>
        <Route path="/signin" element={<Signinscreen />} />
        <Route path="/signup" element={<Signupscreen />} />
        <Route path="/getstarted" element={<Getstarted />} />
        <Route path="/placeorder" element={<Placeorder />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/wishlist' element={<HomePage />} />
        <Route path='/trending/product' element={<TrendingProducts />} />
        <Route path='/shop/:id' element={<Shop />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/cart' element={<Cartpage />} />
      </Routes>
    </Router>
  );
}

export default App;
