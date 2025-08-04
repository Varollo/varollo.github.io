import Background from "./components/Background";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

import AboutData from "./data/AboutData";
import WorkData from "./data/WorkData";
import ProjectsData from "./data/ProjectsData";
import GamesData from "./data/GamesData";

import "./Colors.css";
import "./App.css";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <ParallaxProvider>        
        <Parallax speed={-24}>
          <Hero />
        </Parallax>
      </ParallaxProvider>
      <div className="sectionContainer">
        <Section
          name={AboutData.name}
          description={AboutData.description}
          imgUrl={AboutData.imgUrl}
        />
        <Section
          name={WorkData.name}
          description={WorkData.description}
          imgUrl={WorkData.imgUrl}
          url="https://www.linkedin.com/in/gabriel-carollo-3699181a0/"
        />
        <Section
          name={ProjectsData.name}
          description={ProjectsData.description}
          imgUrl={ProjectsData.imgUrl}
          url="https://github.com/Varollo/"
        />
        <Section
          name={GamesData.name}
          description={GamesData.description}
          imgUrl={GamesData.imgUrl}
          url="https://varollo.itch.io/"
        />
      </div>
    </div>
  );
}

export default App;
