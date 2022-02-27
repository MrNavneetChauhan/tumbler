import { Footer } from "./components/footer/footer";
import { ProductsDisplay } from "./components/ProductsDisplay/ProductsDisplay";
import "./App.scss"
import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";
import Home  from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes , Route } from "react-router-dom";
import { SelectedProduct } from "./components/SelectedProduct/SelectedProduct";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Checkout/Payments";



function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/products" element={<ProductsDisplay/>} ></Route>
        <Route path="/products/details" element={<SelectedProduct/>}></Route>
        <Route path="/products/cart" element={<Cart/>} ></Route>
        <Route path="/products/checkout" element={<Checkout/>} ></Route>
        <Route path="/products/payment" element={<Payment/>} ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
