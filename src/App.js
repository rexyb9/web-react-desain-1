import FaqComp from "./components/FaqComp"
import FooterComp from "./components/FooterComp"
import GalleryComp from "./components/GalleryComp"
import HeroComp from "./components/HeroComp"
import NavbarComp from "./components/NavbarComp"
import ServicesComp from "./components/ServicesComp"

import "./css/style.css"
import 'animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const App = () => {
  return (
    <div className="App">
      <HeroComp />
      <NavbarComp />
      <GalleryComp />
      <ServicesComp />
      <FaqComp />


      <FooterComp />
    </div>
  )
}

export default App
