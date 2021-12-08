import HomePage from './Pages/HomePage';
import Logo from "./images/logo/ohmyfood.png";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        </div>
        <img src={Logo} alt="Logo Oh My Food"/>
        <div>
        </div>
      </header>

      <section>
        <HomePage/>
      </section>
    </div>
  );
}

export default App;
