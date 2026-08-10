const vhs = document.querySelector("#vhs-section");
const tv = document.querySelector("#tv-container");

vhs.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);

    gsap.to(tv, {
        x: x * 25,
        y: y * 15,
        rotationY: x * 3,
        rotationX: -y * 3,
        duration: 0.6,
        ease: "power2.out"
    });

});