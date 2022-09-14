import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Project from './components/project/Project';
import Resume from './components/resume/Resume';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Nav from './components/nav/Nav';
// import Home from './pages/Home';
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <br/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/*" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
