import "./App.css";
import Sticky from "react-stickynode";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Sticky>
        <Navbar></Navbar>
      </Sticky>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
