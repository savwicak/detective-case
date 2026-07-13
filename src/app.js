const nav = gsap.timeline()

nav.to({}, {duration:0.5})

//header
.set(".navbar", {
    x:"100%"
})

.set(".nav-text", {
    y:"-100%",
    opacity: 0,
    duration:2.0
})

.to(".navbar", {
    x: "0%",
    duration: 1.2,
    ease: "power1.inOut"
})

.to(".nav-text", {
    y:"0%",
    opacity: 100,
    ease: "back",
    stagger: 0.2
})

//main
gsap.to("#title", {
    keyframes: [
        { scale: 20 },
        { scale: 40 },
        { scale: 80 },
        { scale: 100 },
    ],
    opacity: 0,

    ease: "none",

    scrollTrigger: {
        trigger: ".con",
        start: "top top",
        end: "+=2900",
        scrub: true,
        pin: true
    }
});

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "top 85%",
        end: "bottom 85%", // panjang area animasi
        scrub: 1,          // atau true
    }
});

tl.from("#text-up", {
    x: -420,
    y: 700,
    opacity: 0,
    duration: 1.6,
    ease: "expo.out"
})

.from("#hero-title", {
    x: -120,
    y: 750,
    opacity: 0,
    duration: 1.6,
    ease: "expo.out"
}, "-=1.15")

.from("#hero-subtitle", {
    x: -100,
    y: 400,
    opacity: 0,
    duration: 1.3,
    ease: "expo.out"
}, "-=1.05")

// Geser ke kanan
.to("#text-up", {
    x: 2000,
    ease: "none",
    duration: 1
})

.to("#hero-title", {
    x: 2000,
    ease: "none",
    duration:1.3
}, "<")

.to("#hero-subtitle", {
    x: 2000,
    ease: "none",
    duration:1.5
}, "<");

gsap.from("#wobble", {
    opacity: 0,
    y: 80,
    scale: 0.9,
    duration: 1.5,
    ease: "elastic.out(1,0.4)",

    scrollTrigger: {
        trigger: "#wobble",
        start: "top 80%",
        opacity :150,
        end: "top 30%",
        scrub: true
    }
});

gsap.from(".jump", {
    y: 80,
    opacity: 0,
    scale: 0.8,
    ease: "back.out(2)",

    stagger: {
        each: 0.3
    },

    scrollTrigger: {
        trigger: "#hero-desc",
        start: "top 90%",
        end: "top 20%",
        scrub: 1
    }
});
