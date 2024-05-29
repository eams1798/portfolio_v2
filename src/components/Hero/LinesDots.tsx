import { useEffect, useMemo, useState } from 'react';
import '../styles/LinesDots.css';

const Circle = ({windowWidth}: {windowWidth: number}) => {
  const randomBetween = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    const lines = document.querySelectorAll('.circle');
    lines.forEach((line) => {
      line.remove();
    });
  }, [windowWidth]);

  const lines = (): void => {
    const sizeW = Math.random() * 12;
    const duration = Math.random() * 3;
    const e = document.createElement('div');
    e.setAttribute('class', 'circle');
    document.body.appendChild(e);
    e.style.width = 2 + sizeW + 'px';
    e.style.left = randomBetween(0.025, 0.975) * window.innerWidth + 'px';
    e.style.animationDuration = 2 + duration + 's';

    setTimeout(() => {
      document.body.removeChild(e);
    }, 5000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      lines();
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default Circle;
