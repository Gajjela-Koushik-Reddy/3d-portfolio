// src/App.js
import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Portfolio } from "./components";
import HobbieHub from "./components/HobbieHub";
import { Helmet } from "react-helmet";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="wrapper" ref={wrapperRef}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div id="hero" className="z-10">
                    <Hero scrollContainer={wrapperRef} />
                  </div>
                  <div
                    id="portfolio"
                    className="relative z-30 bg-primary mt-[-2px]"
                  >
                    <Portfolio />
                  </div>
                  <div id="experience" className="relative z-30 bg-primary">
                    <Experience />
                  </div>
                  <div id="contact" className="relative z-30 bg-primary">
                    <Contact />
                  </div>
                </>
              }
            />
            <Route
              path="/hobbiehub"
              element={
                <div className="relative flex justify-center top-[50%]">
                  <Helmet>
                    <script
                      src="https://getlaunchlist.com/js/widget.js"
                      type="text/javascript"
                      defer
                    />
                  </Helmet>
                  <HobbieHub/>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
