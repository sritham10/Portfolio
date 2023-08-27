import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline.jsx";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
     <Home></Home>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Work />
      <Timeline />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
     
    </>
  )  
}

export default App;
