import React from 'react'
// import './App.css'
import Navbar from "./comp/header"
import Hero from "./comp/Hero"
import SecondSection from './comp/second-section'
import Footer from './comp/footer'


function App() {

  return (
    <>
      <div>

        <div className='header-holder'>
          <div className='header-and-hero'>

            <Navbar />
            <Hero />

          </div>

        </div>

        <div className='second-div-holder'>

          <SecondSection />

        </div>


        <Footer />





      </div>

    </>
  )
}

export default App
