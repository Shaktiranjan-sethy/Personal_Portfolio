import React,{useEffect} from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Skills from './components/Skills'
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import MyState from './context/data/myState'
import Aos from "aos"
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    Aos.init();
    
   }, [])

  return (
    <>
     <MyState>
     <Navbar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Skills/>
     <Contact/>
     <Footer/>
     </MyState>
    </>
  )
}

export default App
