gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis({
    autoRaf: false,
    smoothWheel: true,
    wheelMultiplier: 0.2,
    lerp: 0.05,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 10000);
});

gsap.ticker.lagSmoothing(0);

let lastScroll = 0;
let scrollTimeout;

lenis.on("scroll", ({ scroll }) => {
    if (scroll > lastScroll && scroll > 100) {

        gsap.to("#navbar", {
            y: "-100%",
            duration: 0.4,
            ease: "power2.out"
        });

    }

    if (scroll < lastScroll) {

        gsap.to("#navbar", {
            y: "0%",
            duration: 0.4,
            ease: "power2.out"
        });

    }

    lastScroll = scroll;
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {

        gsap.to("#navbar", {
            y: "0%",
            duration: 0.5,
            ease: "power3.out"
        });

    }, 300);

});