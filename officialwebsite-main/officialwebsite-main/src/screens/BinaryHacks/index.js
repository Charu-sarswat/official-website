import React from 'react'
import About from '../../components/Hacks/About';
import FAQ from '../../components/Hacks/FAQ';
import Header from '../../components/Hacks/Header';
import Sponsor from '../../components/Hacks/Sponsor';
import Tracks from '../../components/Hacks/Tracks';

const BinaryHacks = () => {
  return (
    <div>
        <Header />
        <About />
        <Tracks />
        <Sponsor />
        <FAQ />
    </div>
  )
}

export default BinaryHacks;