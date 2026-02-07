import { BrowserRouter, Routes, Route } from 'react-router';

// CSS
import './App.css'

// Pages
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import PageNotFound from './pages/PageNotFound';

// Context
import { CartProvider } from './context/CartContext';

// Components
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
