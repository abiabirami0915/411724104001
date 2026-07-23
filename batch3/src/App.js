// import NavbarComponent from "./components/NavbarComponent";
// import HeroSection from "./components/HeroSection";
// import FeatureCards from "./components/FeatureCards";
// import AboutSection from "./components/AboutSection";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <NavbarComponent />
//       <HeroSection />
//       <FeatureCards />
//       <AboutSection />
//       <Footer />
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Book";
import Authors from "./pages/Authors";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import AtomicHabits from "./pages/books/AtomicHabits";
import Alchemist from "./pages/books/Alchemist";
import RichDadPoorDad from "./pages/books/RichDadPoorDad";
import Ikigai from "./pages/books/Ikigai";
import DeepWork from "./pages/books/DeepWork";
import ThinkGrowRich from "./pages/books/ThinkGrowRich";

import JamesClear from "./pages/authors/JamesClear";
import PauloCoelho from "./pages/authors/PauloCoelho";
import RobertKiyosaki from "./pages/authors/RobertKiyosaki";
import HectorGarcia from "./pages/authors/HectorGarcia";
import CalNewport from "./pages/authors/CalNewport";
import NapoleonHill from "./pages/authors/NapoleonHill";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/books" element={<Books />} />
        <Route path="/books/atomic-habits" element={<AtomicHabits />} />
        <Route path="/books/the-alchemist" element={<Alchemist />} />
        <Route path="/books/rich-dad-poor-dad" element={<RichDadPoorDad />} />
        <Route path="/books/ikigai" element={<Ikigai />} />
        <Route path="/books/deep-work" element={<DeepWork />} />
        <Route path="/books/think-and-grow-rich" element={<ThinkGrowRich />} />

        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/james-clear" element={<JamesClear />} />
        <Route path="/authors/paulo-coelho" element={<PauloCoelho />} />
        <Route path="/authors/robert-kiyosaki" element={<RobertKiyosaki />} />
        <Route path="/authors/hector-garcia" element={<HectorGarcia />} />
        <Route path="/authors/cal-newport" element={<CalNewport />} />
        <Route path="/authors/napoleon-hill" element={<NapoleonHill />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;