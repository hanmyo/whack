import react from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import WishList from "./pages/WishList";
import ProductPage from "./pages/ProductPage"

function App() {

  return (
    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
      </Routes>
     </BrowserRouter>
    
  );
}

export default App;
