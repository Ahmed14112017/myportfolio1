import './App.css';
import Features from './component/Features';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Projects from './component/Projects';
import Resume from './component/Resume';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="w-full px-5 pt-2 bg-bodyColor">
      <Navbar />
      <div>
        <Home />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
