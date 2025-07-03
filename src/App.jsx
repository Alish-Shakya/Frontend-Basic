import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/navbar";

function App() {
  let cssStyle = {
    backgroundColor: "yellow",
  };
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <h1 style={{ background: "red", color: "White" }}>React</h1>

      {/* external css */}
      <h1 className="external"> this is React </h1>

      <h1 style={cssStyle}>this is my first react project</h1>
    </>
  );
}

export default App;
