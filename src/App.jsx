import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import HiringForm from "./pages/HiringForm";
import ThankYou from "./pages/Thankyou";
import RoboticsProgram from "./pages/Robotics";
import IotProgram from "./pages/Iot";

function Layout({ children }) {
  const location = useLocation();

  // Routes where we want to hide Navbar and Footer
  const hideLayoutRoutes = [
    "/login",
    "/signup",
    "/forgot-password",
    "/payment",
    "/account-deletion",
    "/hiring-form",
    "/thankyou",
  ];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <div style={{ paddingTop: shouldHideLayout ? "0" : "8vh" }}>
        {children}
      </div>
      {!shouldHideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hiring-form" element={<HiringForm />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="/courses/robotics" element={<RoboticsProgram />} />
              <Route path="/courses/iot" element={<IotProgram />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
