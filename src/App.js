import './App.css';
import Features from './component/Features';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Projects from './component/Projects';
import Resume from './component/Resume';
import Testmonial from './component/Testmonial';
import Contact from './component/Contact';

function App() {
  return (
    <div className="w-full px-5 pt-2 bg-bodyColor">
      <Navbar />
      <div>
        <Home />
        <Features />
        <Projects />
        <Resume />
        <Testmonial />
        <Contact />
        
      </div>
    </div>
  );
}

export default App;
