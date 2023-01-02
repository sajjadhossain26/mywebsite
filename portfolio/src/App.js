import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import PortfolioAdd from "./Pages/Admin/PortfolioAdd";
import MangePortfolio from "./Pages/Admin/MangePortfolio";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { allPortfolio } from "./redux/portfolio/action";
import SinglePortfolio from "./components/Portfolio/SinglePortfolio";
import PortfolioItem from "./components/Portfolio/PortfolioItem";
import Services from "./components/Services/Services";
import About from "./Pages/About/AboutPage";
import ContactPage from "./Pages/Contact/ContactPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allPortfolio());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<PortfolioItem />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/single-portfolio" element={<SinglePortfolio />} />
        <Route path="/me/portfolio" element={<PortfolioAdd />} />
        <Route path="/me/portfolio/manage" element={<MangePortfolio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
