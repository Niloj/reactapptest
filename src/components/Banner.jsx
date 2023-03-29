import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import Soccer from "../assets/images/socccccccer.jpeg";

const Banner = (props) => {
  const { children } = props;
  return (
    <ParallaxBanner
      layers={[{ image: {Soccer}, speed: -15 }]}
      style={{ aspectRatio: '2 / 1'}}
    >
      {children}
    </ParallaxBanner>
  );
};

export default Banner;