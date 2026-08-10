const about = document.querySelector("#about");
const magnifier = document.querySelector("#magnifier");

gsap.set(magnifier, {
    opacity: 0,
    scale: 0.8
});

about.addEventListener("mousemove", (e) => {

    gsap.to(magnifier, {
        x: e.clientX - 100,
        y: e.clientY - 100,
        duration: 0.3,
        ease: "power3.out"
    });

});

about.addEventListener("mouseenter", () => {

    gsap.to(magnifier, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
    });

});

about.addEventListener("mouseleave", () => {

    gsap.to(magnifier, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2
    });

});