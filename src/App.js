import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Outlet,
    Route,
} from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";


import {
    Home,
    Products,
    SingleProduct,
    About,
    Cart,
    Error,
    Checkout,
    AuthWrapper,
    PrivateRoute,
} from "./pages";

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Outlet />
            <Footer />
        </>
    );
};

function App() {
    return (
        <AuthWrapper>
            <Router>
                <Routes>
                    <Route path={"/"} element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="products" element={<Products />} />
                        <Route
                            path="products/:id"
                            element={<SingleProduct />}
                        />
                        <Route
                            path="checkout"
                            element={
                                <PrivateRoute>
                                    <Checkout />
                                </PrivateRoute>
                            }
                        />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Routes>
            </Router>
        </AuthWrapper>
    );
}

export default App;
