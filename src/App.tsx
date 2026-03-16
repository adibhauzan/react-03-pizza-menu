import Footer from "./components/footer";
import Header from "./components/header";
import Menu from "./components/menu";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
