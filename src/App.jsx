import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import MyWork from './components/MyWork.jsx/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
      <Footer />
    </>
  )
}

export default App
