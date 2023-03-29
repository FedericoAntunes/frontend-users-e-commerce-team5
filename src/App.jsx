import "./App.css";
import "./animation/animations.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import Product from "./routes/Product";
import SignUp from "./routes/SignUp";
import CheckOut from "./routes/CheckOut";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./routes/Category";
import About from "./routes/About";
import { useEffect, useState } from "react";
import Splash from "./components/Splash";
import Profile from "./routes/Profile";
import Orders from "./routes/Orders";
import ScrollToTop from "./hooks/ScrollToTop";
import AuthRequire from "./hooks/AuthRequire";

function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  if (splash) {
    return <Splash />;
  } else {
    return (
      <div className="App">
        <div className="w-full fixed z-50">
          <Header />
        </div>
        <div className="min-h-[100vh]">
          <ScrollToTop>
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:slug" element={<Product />} />
              <Route path="/chekout" element={<CheckOut />} />
              <Route path="/categories/:slug" element={<Category />} />
              <Route element={<AuthRequire />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders" element={<Orders />} />
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </ScrollToTop>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
