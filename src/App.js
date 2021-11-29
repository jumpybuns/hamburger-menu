import { useEffect, useRef, useState } from 'react';
import './App.css';
import { gsap } from 'gsap';

import { burgerTime } from './greensock';
const X = 'M6 18L18 6M6 6l12 12';
const newX = 'M8 10L18 8M6 6l10 10';

const App = () => {
  const [path, setPath] = useState(X);
  let burger = useRef(null);
  let burger2 = useRef(null);
  let divide = useRef(null);
  let divide2 = useRef(null);
  let divide3 = useRef(null);

  const lines = (e, e2, e3, e4, e5) => {
    let tl = gsap.timeline();
    tl.to(e, {
      x: 6,
      y: 3,
      rotate: 45,
    })
      .to(
        e2,
        {
          rotate: -45,
          scale: 0.8,
        },
        '-=0.5'
      )
      .to([e, e2], { opacity: 0 }, '-=0.5')
      .fromTo(
        [e3, e4, e5],
        { opacity: 0, rotate: 45 },
        { duration: 2, opacity: 1, rotate: 0 },
        '-=1.5'
      );
  };

  const handleClick = async () => {
    // burgerTime(burger, divide);
    lines(burger, burger2, divide, divide2, divide3);

    console.log('CONSOLE', '');
  };

  return (
    <div className='App'>
      <svg height='210' width='500' onClick={handleClick}>
        <rect height='100px' width='100px' fill='blue' />
      </svg>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        onClick={handleClick}
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 100 100'
        stroke='currentColor'
      >
        <path
          ref={(el) => (burger = el)}
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M6 18L18 6l12'
        />
        <path
          ref={(el) => (burger2 = el)}
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M6 6l12 12'
        />
        <path
          ref={(el) => (divide3 = el)}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          style={{ opacity: '0' }}
          d='M4 6h16M4 '
        />
        <path
          ref={(el) => (divide = el)}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          style={{ opacity: '0' }}
          d='M4 16M4 12h16M4'
        />{' '}
        <path
          ref={(el) => (divide2 = el)}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          style={{ opacity: '0' }}
          d='M4 16M4 16M4 18h16'
        />{' '}
      </svg>
    </div>
  );
};

export default App;
