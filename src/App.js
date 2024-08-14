import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavbarMenu from "./components/NavbarMenu";
import ViewProduct from "./pages/ViewProduct";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { CartWrapper } from "./components/CartContext";
import DeleteUser from "./pages/DeleteUser";
import UpdatePassword from "./pages/UpdatePassword";
import Contact from "./pages/Contact";
import AdminLogin from "./components/AdminLogin";
import AdminPage from "./components/AdminPage";
import ManufacturersAuthPage from "./components/ManufacturersAuthPage";
import ManufacturerPage from "./components/ManufacturerPage";

function App() {
    return (
        <CartWrapper>
            <Router>
                <NavbarMenu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin-login" element={<AdminLogin />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/manufacturers" element={<ManufacturersAuthPage />} />
                    <Route path="/deleteuser" element={<DeleteUser />} />
                    <Route path="/manufacturer/page" element={<ManufacturerPage />} />
                    <Route path="/updatePassword" element={<UpdatePassword />} />
                    <Route path="/viewproduct/:id" element={<ViewProduct />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </CartWrapper>
    );
}

export default App;
