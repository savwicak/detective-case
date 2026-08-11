const about = document.querySelector("#about");
const magnifier = document.querySelector("#magnifier");

function hideMagnifier() {
    gsap.to(magnifier, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
    });
}

gsap.set(magnifier, {
    opacity: 0,
    scale: 0.8,
    pointerEvents: "none"
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

about.addEventListener("mouseleave", hideMagnifier);


// Kalau user scroll / navigation lompat ke section lain
window.addEventListener("scroll", () => {
    const rect = about.getBoundingClientRect();

    const isInsideAbout =
        rect.top < window.innerHeight &&
        rect.bottom > 0;

    if (!isInsideAbout) {
        hideMagnifier();
    }
});