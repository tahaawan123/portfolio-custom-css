import React from 'react';
import Image from 'next/image';
import HeroCss from './Hero.module.css';

const HeroSection = () => {
  return (
    <div className={HeroCss.heroContainer}>
      <div className={HeroCss.textContainer}>
        <h1 className={HeroCss.heroTitle}>
          Hi, I am Muhammad Taha
        </h1>
        <p className={HeroCss.heroDescription}>
          I am a passionate web developer skilled in HTML CSS and JavaScript.
          Currently I am deepening my expertise in Next.js to stay on top of modern web development. 
          I enjoy crafting seamless user-friendly experiences and love bringing ideas to life through code.
        </p>
      </div>
      <div className={HeroCss.imageContainer}>
        <Image 
          src="/img.jpg" 
          alt="Profile-Pic" 
          width={300} 
          height={200} 
          className={HeroCss.profileImage} 
        />
      
       </div>
    </div>
  );
};

export default HeroSection;
