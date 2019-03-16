// Landing page
import React from 'react';
// import '.../../index.css';
import Highlight from '../components/widget/Highlight';
import Navigation from '../components/body/Navigation';
import CardList from '../components/body/ItemCarousel.js';
import ModalVideo from 'react-modal-video';

const Landing = props => {
  const { locale } = props

  return (
    <div>
      <Highlight locale={locale} />
      <Navigation {...props} />
      <CardList />
      <CardList />
    </div>
  )
}

export default Landing;
