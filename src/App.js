import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";

function App() {
  return (
    <div className="w-full h-screen scrollbar-hide">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Work />
      <Contact />
    </div>
  );
}

export default App;
/* max-w-5xl mx-auto */