import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutMe />
      <Skills />
      <Interests />
      <Projects />
      <Jobs />
    </div>
  );
}

export default App;
