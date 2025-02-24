
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./component/Hero";
import About from "./component/About";
import Footer from "./component/Footer";
import Agent from "./component/Agent";
// import  Home  from "./component/LeadingAi";


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/Agent" element={<  Agent />} />
        <Route path="/Footer" element={<  Footer />} />

        
      </Routes>
    </Router>
 
    </>
  );
};

export default App;
