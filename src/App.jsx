import "@fontsource/barlow-condensed";
import Cabecalho from "./Components/Shared/Cabecalho.jsx";
import Home from "./views/Home.jsx";
import Features from "./views/Features.jsx";
import Reviews from "./views/Reviews.jsx";
import Location from "./views/Location.jsx";

function App() {
  return (
    <div>
    <div className="relative min-h-screen bg-[url('./assets/home-bg.png')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10">
        <Cabecalho />
        <Home />
        <Features />
      </div>
    </div>
        <Reviews />
        <Location />
    </div>
  );
}

export default App;
