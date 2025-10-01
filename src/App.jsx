import "@fontsource/barlow-condensed";
import Cabecalho from "./Components/Shared/Cabecalho.jsx";
import Home from "./views/Home.jsx";

function App() {
  return (
    <div className="relative min-h-screen bg-[url('./assets/home-bg.png')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10">
        <Cabecalho />
        <Home />
      </div>
    </div>
  );
}

export default App;
