import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductModal from "./Components/ProductModal";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const MyContext = createContext();

const MainLayout = ({ values }) => {
  const location = useLocation();

  const hideHeaderFooter =
    location.pathname === "/signIn" || location.pathname === "/signUp";

  return (
    <MyContext.Provider value={values}>
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:id" element={<Listing />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}

      {values.isOpenProductModal && <ProductModal />}
    </MyContext.Provider>
  );
};

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/",
        );

        setCountryList(res.data.data);
      } catch (error) {
        console.error("Failed to fetch country list:", error);
      }
    };

    getCountry();
  }, []);

  const values = {
    countryList,
    selectedCountry,
    setSelectedCountry,
    isOpenProductModal,
    setIsOpenProductModal,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin,
  };

  return (
    <BrowserRouter>
      <MainLayout values={values} />
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
