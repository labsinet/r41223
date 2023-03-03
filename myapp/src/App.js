//import {  useState } from 'react';
import Header from './components/shared/Header/Header';
import { Routes, Route } from "react-router-dom";
import ProductList from './components/ProductList/ProductList';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from '/components/EditProduct/EditProduct';


function App() {


  // const [products, setProducts] = useState([
  //   {id: 1, title: 'Product 1', price: 899},
  //   {id: 2, title: 'Product 2', price: 982},
  //   {id: 3, title: 'Product 3', price: 322},
  //   {id: 4, title: 'Product 4', price: 763},
  //   {id: 5, title: 'Product 5', price: 389}
  // ]);

  //   const deleteProduct = (productId) => {
  //     const newProducts = products.filter(product => product.id !== productId);
  //     setProducts(newProducts);
  //   }

 


  return (
    <div className="App">
     <Header/> 
    
    <Routes>
      <Route path="/" element={<Home/>}></Route> 
      <Route path='/shop' element={<ProductList />}></Route>
      <Route path="/" element={<AboutUs/>}></Route> 
      <Route path="/add" element={<AddProduct/>}></Route> 
      <Route path="/edit/:id" element={<EditProduct/>}></Route> 
    </Routes>
   



      

      

    </div>
  );
}

export default App;
