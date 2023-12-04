import './App.css';
import Header from "./components/Header/Header";
import AboutUs from './components/AboutUs/AboutUs';
import Services from "./components/Services/Services";
import Sale from "./components/Sale/Sale";
import Type from "./components/Type/Type";
import Testimonials from './components/Testimonials/Testimonials';
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="holder">
      <Header />
      <AboutUs />
      <Services />
      <Sale />
      <Type />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
