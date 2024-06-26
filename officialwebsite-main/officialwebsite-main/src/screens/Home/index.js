import React from 'react'
import Navbar from '../../components/Navbar';
import About from '../../components/About';
import { Team } from '../../components/Team';
import Domain from '../../components/Domain'
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Members from '../../components/Members/Members';

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Members />
        <Domain />
        <Team />
        <Footer />
    </div>
  )
}
