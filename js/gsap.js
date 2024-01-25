// Meet Section 애니메이션

gsap.fromTo(
  '.meet-text-box',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8 }
);

gsap.fromTo(
  '.meetimg1',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8 }
);

gsap.fromTo(
  '.meetimg2',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
);

gsap.fromTo(
  '.meetimg3',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, delay: 0.6 }
);

// ScrollTrigger.matchMedia({
//   '(min-width: 1640px)': function () {
//     var meetani = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.meet-section',
//         start: 'top top',
//       },
//     });

//     meetani.fromTo('.meet-text-box',
//       { y: 60, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8 }
//     );

//     meetani.fromTo('.meetimg1',
//       { y: 60, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8 }
//     );

//     meetani.fromTo('.meetimg2',
//       { y: 60, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
//     );

//     meetani.fromTo('.meetimg3',
//       { y: 60, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8, delay: 0.6 }
//     );

//   }
// })
