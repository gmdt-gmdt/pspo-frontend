import { useEffect, useState } from "react";
import "./App.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="theBody">
          <Router />
        </div>
      </BrowserRouter>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
}

export default App;
