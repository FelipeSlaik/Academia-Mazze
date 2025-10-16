import { useRef } from "react";
import "@fontsource/barlow-condensed";
import Cabecalho from "./Components/Shared/Header.jsx";
import Home from "./views/Home.jsx";
import Features from "./views/Features.jsx";
import Reviews from "./views/Reviews.jsx";
import Location from "./views/Location.jsx";
import Footer from "./Components/Shared/Footer.jsx";

function App() {
  
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const locationRef = useRef(null);

  const scrollToHome = () => homeRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToFeatures = () => featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToLocation = () => locationRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="scroll-smooth">
      
      <div className="relative min-h-screen bg-[url('./assets/home-bg.png')] bg-cover bg-center bg-fixed">
       
        <div className="absolute inset-0 bg-black/75 z-10"></div>

        
        <div className="absolute top-0 left-0 w-full z-20">
          <Cabecalho
            scrollToHome={scrollToHome}
            scrollToFeatures={scrollToFeatures}
            scrollToLocation={scrollToLocation}
          />
        </div>

        
        <div ref={homeRef} className="relative z-10 pt-24">
          <Home />
        </div>
      </div>

      <div ref={featuresRef}>
        <Features />
      </div>

      <Reviews />

      <div ref={locationRef}>
        <Location />
      </div>
      <div>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
