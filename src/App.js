import "./App.css";
import { NavBar } from "./components/nav-bar/NavBar";
import { Slider } from "./components/slider/Slider";
import { Products } from "./components/Products/Products";
import { Footer } from "./components/footer/Footer";
import Student from "./components/student/Student";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Slider />
      <div className="container d-flex justify-content-between">
        <Products />
      </div> */}
      <Student />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
