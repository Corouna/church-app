// Landing page
import React from 'react';
// import '.../../index.css';
import Highlight from '../components/widget/Highlight';
import Navigation from '../components/body/Navigation';
import CardList from '../components/body/ItemCarousel.js';

const Landing = props => {
  const { locale } = props

  return (
    <div>
      <Highlight locale={locale} />
    </div>
  )
}

export default Landing;
