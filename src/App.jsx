import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop from './components/Shop';
import ShopCategory from './components/ShopCategory';
import Cart from './components/Cart';
import SignupLogin from './components/SignupLogin';
import Signup from './components/Signup';
import Product from './components/Product';
import Checkout from './components/Proceed';
import Payment from './components/Payment';

// Admin Components
import AdminLayout from './components/Admin/AdminLayout';
import AddProduct from './components/Admin/AddProduct';
import ListProduct from './components/Admin/ListProduct';
import Dashboard from './components/Admin/Dashboard';
import InventoryManager from './components/Admin/InventoryManager';
import Orders from './components/Admin/Orders';

// Banner Images
import MensBanner from './assets/mens-banner.png';
import WomensBanner from './assets/womens-banner.png';
import KidsBanner from './assets/kids-banner.png';

// Layout Component to handle Conditional Navbar/Footer
function Layout({ children }) {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  // যে পাথগুলো দিয়ে ইউআরএল শুরু হলে Navbar এবং Footer দেখাবে না
  const hiddenRoutes = [
    '/cart',
    '/login',
    '/signup',
    '/checkout',
    '/payment',
    '/product', // ডাইনামিক আইডি হ্যান্ডেল করার জন্য startsWith ব্যবহার হবে
    '/admin'
  ];

  // চেক করা হচ্ছে বর্তমান পাথটি উপরের কোনো স্ট্রিং দিয়ে শুরু হয়েছে কি না
  const shouldHide = hiddenRoutes.some(route => path.startsWith(route));

  return (
    <>
      {/* যদি shouldHide false হয় তবেই Navbar দেখাবে */}
      {!shouldHide && <Navbar />}

      {/* Navbar ফিক্সড থাকলে কন্টেন্ট যেন নিচে না ঢাকা পড়ে তাই 'pt' (padding-top) ব্যবহার করা ভালো */}
      <main className={!shouldHide ? "pt-20 min-h-screen" : "min-h-screen"}>
        {children}
      </main>

      {/* যদি shouldHide false হয় তবেই Footer দেখাবে */}
      {!shouldHide && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Main Shop Routes */}
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={MensBanner} category="Mens" />} />
          <Route path='/womens' element={<ShopCategory banner={WomensBanner} category="Womens" />} />
          <Route path='/kids' element={<ShopCategory banner={KidsBanner} category="Kids" />} />

          {/* Product Detail Route */}
          <Route path='/product/:ProductId' element={<Product />} />

          {/* Checkout & User Routes */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<SignupLogin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment' element={<Payment />} />

          {/* Admin Panel Nested Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="listproduct" element={<ListProduct />} />
            <Route path="inventorymanager" element={<InventoryManager />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;