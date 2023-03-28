import "./App.css";
import { NavBar } from "./components/nav-bar/NavBar";
import { Slider } from "./components/slider/Slider";
import { Products } from "./components/Products/Products";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <div className="container d-flex justify-content-between">
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default App;
