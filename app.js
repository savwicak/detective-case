gsap.registerPlugin(ScrollTrigger);

// 🎬 HERO
gsap.from(".word", {
  y: 100,
  opacity: 0,
  stagger: 0.15,
  duration: 1,
  ease: "power4.out"
});

// 🔥 SCROLL ANIMATION
gsap.utils.toArray(".fadeUp").forEach(el => {
  gsap.from(el, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "restart none none reset"
    }
  });
});

// 🌊 PARALLAX
gsap.to(".hero", {
  y: -150,
  scrollTrigger: {
    trigger: ".hero",
    scrub: true
  }
});

// 🖱 CURSOR
let mouse = { x: 0, y: 0 };
let pos = { x: 0, y: 0 };

let cursor = document.getElementById("cursor");

gsap.set(cursor, {
  xPercent: -50,
  yPercent: -50
});

document.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

gsap.ticker.add(() => {
  pos.x += (mouse.x - pos.x) * 0.2;
  pos.y += (mouse.y - pos.y) * 0.2;

  gsap.set(cursor, {
    x: pos.x,
    y: pos.y
  });
});

// 🔥 HOVER TEXT EFFECT
document.querySelectorAll("h1, h2, h3, p, a").forEach(el => {

  el.addEventListener("mouseenter", () => {

    // ambil ukuran text
    let rect = el.getBoundingClientRect();

    // ukuran cursor mengikuti text
    gsap.to(cursor, {
      width: rect.width + 40,
      height: rect.height + 20,
      borderRadius: "20px",
      duration: 0.3,
      ease: "power3.out"
    });

  });

  el.addEventListener("mouseleave", () => {

    // balik normal
    gsap.to(cursor, {
      width: 20,
      height: 20,
      borderRadius: "50%",
      duration: 0.3,
      ease: "power3.out"
    });

  });

});

// 👆 CLICK EFFECT
document.addEventListener("mousedown", () => {
  gsap.to(cursor, {
    scale: 0.7,
    duration: 0.1
  });
});

document.addEventListener("mouseup", () => {
  gsap.to(cursor, {
    scale: 1,
    duration: 0.2,
    ease: "power2.out"
  });
});