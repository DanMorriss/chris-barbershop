import "./App.css";
import Haircuts from "./components/haircuts/haircuts.component";

import Hero from "./components/hero/hero.component";
import Welcome from "./components/welcome/welcome.component";
import Contact from "./components/contact/contact.component";
import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Haircuts />
      <Contact />
    </>
  );
}

export default App;
