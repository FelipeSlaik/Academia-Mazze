import "@fontsource/barlow-condensed";
import Cabecalho from "./Components/Shared/Cabecalho.jsx";
import Home from "./views/Home.jsx";

function App() {
  return (
    <div>
      <div className="bg-[url('./assets/home-bg.png')] h-screen bg-no-repeat bg-cover bg-center bg-fixed">
        <Cabecalho />
        <Home />
      </div>
    </div>
  );
}

export default App;
