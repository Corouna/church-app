import React, { Component } from 'react';
// Components
import Slider from 'react-animated-slider';
// CSS
import 'react-animated-slider/build/horizontal.css';
import '../../css/normalize.css';
import '../../css/carousel-animations.css';
import '../../css/carousel-style.css';
// Locales
import data from '../../locales/components/widget/carousel'

const Highlight = (props) => {
  const { locale } = props;
  const localeData = data[locale]
  const { content } = localeData;

  console.log("Let me see what is props and locale :: ", props, locale);

  return (
    <Slider className="slider-wrapper" autoplay={5000} >
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
        </div>
      ))}
    </Slider>
  );
}

export default Highlight;
