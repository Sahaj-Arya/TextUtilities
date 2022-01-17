import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="App">
      <Navbar title="Text Utils" />
      <div className="container my-3">
        <TextForm heading="Enter Text to Analyse" />
      </div>
    </div>
  );
}

export default App;
