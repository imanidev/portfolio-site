import React, { useEffect } from 'react';

const ShowNavBackground = () => {
  useEffect(() => {
    const navUl = document.querySelector('nav ul');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navUl.classList.add('scrolled');
      } else {
        navUl.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ShowNavBackground;

