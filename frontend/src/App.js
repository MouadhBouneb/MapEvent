import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./router/Router";

const App = () => {
  return (
    <Suspense fallback={null}>
      <Header />

      <Router />
      <Footer />
    </Suspense>
  );
};

export default App;
