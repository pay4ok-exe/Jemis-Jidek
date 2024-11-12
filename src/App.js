import Footer from "./components/Footer";
import Header from "./components/Header/";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "10px 1fr 10px",
        height: "100vh",
      }}>
      <Header />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
