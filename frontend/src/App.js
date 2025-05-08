import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@google/model-viewer';
import { Navbar } from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import sale_banner from './Components/Assets/banner_sale.png';
import new_banner from './Components/Assets/banner_newarrivals.png';
import home_banner from './Components/Assets/banner_home.png';

import Footer from './Components/Footer/Footer';
import ShopContextProvider from './Context/ShopContext';
import { DesignerLogin } from './Pages/DesignerLogin';
import { ThreeDDesignLanding } from './Pages/Designer/3DDesignLanding';
// import { RoomPreview } from './Pages/Designer/RoomPreview';
import { RoomDesigner } from './Pages/Designer/RoomDesigner';
import './App.css';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={sale_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={new_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={home_banner} category="kid" />} />
          <Route path="/product/:ProductId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/designerlogin" element={<DesignerLogin />} />
          <Route path="/3ddesignlanding" element={<ThreeDDesignLanding />} />
          {/* <Route path="/roompreview" element={<RoomPreview />} /> */}
          <Route path="/roompreview" element={<RoomDesigner />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
