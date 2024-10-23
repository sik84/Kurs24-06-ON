import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Div_Content from "./components/layout/div_content/Div_Content";
import Footer from "./components/layout/footer/Footer";
import Standard_Button from "./components/commons/buttons/Standard_Button";
import Textcustom from "./components/commons/textcustom/Textcustom";

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
      <div>
      <Standard_Button />
      </div>
      <div>
      <Textcustom />
      </div>
    </>
  );
}

export default App;
