import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Blob from './components/Blob';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Outsourcing from './components/Outsourcing';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Blob />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/outsourcing" element={<Outsourcing />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
