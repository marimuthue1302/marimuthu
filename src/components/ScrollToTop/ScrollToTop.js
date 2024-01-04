import React, { useState, useEffect } from 'react';
import { IoMdArrowUp } from 'react-icons/io';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const scrollThreshold = 0.01 * document.documentElement.scrollHeight;

      setIsVisible(scrollHeight > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll ${isVisible ? 'visible' : ''}`} title='Back To Top' onClick={scrollToTop}>
      <IoMdArrowUp />
    </div>
  );
};

export default ScrollToTop;
