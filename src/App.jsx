import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import HiringForm from "./pages/HiringForm";
import ThankYou from "./pages/Thankyou";
import RoboticsProgram from "./pages/Robotics";
import IotProgram from "./pages/Iot";
import NotFound from "./pages/NotFound";
import WorkInProgress from "./pages/WorkInProgress";

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
  const wipPaths = [
    "/workshops/bluetooth-driving-car",
    "/workshops/self-driving-car",
    "/workshops/home-automation",
    "/workshops/obstacle-detection",
    "/workshops/smoke-detection",
    "/workshops/bluetooth-control",
    "/about-us",
    "/programs-courses",
    "/workshops-events",
    "enroll-now",
    "/blog",
    "/testimonials",
    "/careers",
    "/faqs",
    "/contact-us",
  ];
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    scrollToCourses={useLocation().state?.scrollToCourses}
                  />
                }
              />
              <Route exact path="/hiring-form" element={<HiringForm />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="/courses/robotics" element={<RoboticsProgram />} />
              <Route path="/courses/iot" element={<IotProgram />} />
              {wipPaths.map((path) => (
                <Route key={path} path={path} element={<WorkInProgress />} />
              ))}
              <Route path="/not-found" element={<NotFound />} />

              {/* Redirect all unmatched paths to /not-found */}
              <Route path="*" element={<Navigate to="/not-found" replace />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
