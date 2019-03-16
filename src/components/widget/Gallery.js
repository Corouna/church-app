import React, { Component } from 'react';
// Components
import Slider from 'react-animated-slider';
// CSS
import 'react-animated-slider/build/horizontal.css';
import '../../css/normalize.css';
import '../../css/carousel-animations.css';
import '../../css/carousel-style.css';
// Locales
import data from '../../locales/components/widget/gallery';

const Gallery = (props) => {
  const { page } = props;
  const thispage = data[page];
  const { content } = thispage;

  console.log("Can i see what is :: ", content);

  return (
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div key={index} className="slider-content" style={{ background: `url('${item.image}') no-repeat center center` }}></div>
      ))}
    </Slider>
  );
}

export default Gallery;
