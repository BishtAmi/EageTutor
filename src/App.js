import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Features from "./Features";
import Benefits from "./Benifits";
import Client from "./Client";
import Howitworks from "./Howitworks";
import Casestudy from "./Casestudy";
import Review from "./Review";
import Contact from "./Contactus";
import Footer from "./Fotter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Features />
      <Benefits />
      <Client />
      <Howitworks/>
      <Casestudy/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
