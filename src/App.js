import './App.css';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import FooterContent from './components/FooterContent';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen flex-grow ">
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
      <FooterContent/>
      </div>
    </Router>
  );
}

export default App;
