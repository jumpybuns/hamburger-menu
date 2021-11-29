import { gsap } from 'gsap';

export const burgerTime = (el, el2) => {
  var tl = gsap.timeline({
    onComplete: {},
  });
  tl.fromTo(
    el,
    { opacity: 1 },
    { duration: 2, ease: 'power2.out', opacity: 0 }
  ).fromTo(
    el2,
    { opacity: 0 },
    {
      stagger: '0.75',
      duration: 2,
      ease: 'power2.out',
      opacity: 1,
    }
  );
};
