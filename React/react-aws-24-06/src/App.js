import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Div_Content from "./components/layout/div_content/Div_Content";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
      </div>
      <div>
        <Div_Content />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
