import React from "react"
import Header from "./components/header/header.jsx"
import Nav from "./components/nav/navbar.jsx"
import About from "./components/about/about.jsx"
import Experience from "./components/experience/experience.jsx"
import Services from "./components/services/services.jsx"
import Portfolio from "./components/portfolio/portfolio.jsx"
import Contact from "./components/contact/contact.jsx"
import Footer from "./components/Footer/footer.jsx"




const App = () => {
    return (
      <>
        <Header />
        <Experience />
        <Contact />
        <Footer /> 
        <Nav />      
      </> 
    )
}

export default App
