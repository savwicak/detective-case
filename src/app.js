const nav = gsap.timeline()

nav.to({}, {duration:0.5})

// header
.set(".navbar", {
    x: "2000px",
    backgroundColor: "#1e1e1e"
})

.set(".nav-text", {
    y: "-100px",
    opacity: 0
})

.to(".navbar", {
    x: "0",
    duration: 1.2,
    ease: "power1.inOut"
})

.to(".navbar", {
    backgroundColor: "#ffffff",
    duration: 0.3,
    ease: "power2.out"
})

.to(".nav-text", {
    y: "0",
    opacity: 1,
    ease: "back.out(0.5)",
    stagger: 0.2
})

gsap.registerPlugin(ScrollTrigger);

gsap.to("#title", {
    scale: 300,          
    ease: "none",
    scrollTrigger: {
        trigger: ".con",
        start: "top end",
        end: "+=1700",
        scrub: true,
        pin: true
    }
});

const hero = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "top 80%",
        end: "bottom 25%",
        scrub: 1
    }
});

hero
.from("#text-up", {
    x: -500,
    y: 300,
    scale: 1.2,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
})

.from("#hero-title", {
    y: 250,
    scale: 1.3,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
}, "-=0.9")

.from("#hero-subtitle", {
    y: 120,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, "-=0.8")

.to("#text-up", {
    x: 600,
    y:-300,
    opacity: 0,
    duration: 0.4
})

.to("#hero-title", {
    x: 600,
    y:-300,
    opacity: 0,
    duration: 1
}, "<")

.to("#hero-subtitle", {
    x: 600,
    y:-300,
    opacity: 0,
    duration: 1
}, "<");



const track = document.querySelector(".image-track");

if (track) {
    gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        start: "bottom",

        scrollTrigger: {
            trigger: ".horizontal-section",
            start: "top",
            end: () => `+=${track.scrollWidth * 0.4}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true
        }
    });
}


gsap.from("#wobble", {
    opacity: 0,
    y: 200,
    scale: 2,
    duration: 1.5,
    ease: "elastic.out(1,0.4)",

});

const jumpTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero-desc",
        start: "top 30%",
        end: "top",
        scrub: 1,
        pin:true
    }
});

jumpTL.from(".jump", {
    y: 580,
    opacity: 0,
    ease: "back.out(3)",
    stagger: 0.08
});

gsap.registerPlugin(ScrollTrigger);

const offerTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#offer",
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
    }
});

const randomMoves = [];

for (let i = 0; i < 20; i++) {
    randomMoves.push({
        x: gsap.utils.random(500, 1200),
        y: gsap.utils.random(-200, 600),
        scale: gsap.utils.random(0.6, 1),
        duration: 5
    });
}

randomMoves.push({
    x: 300,
    y: 200,
    scale: 100,
    duration: 1
});

offerTL.to("#offer-circle", {
    keyframes: randomMoves,
    opacity:1,
    ease: "sine.inOut"
});

gsap.set(".offer-text", {
    y: 300,
    opacity: 0
});

gsap.set(".offer-text:first-child", {
    y: 0,
    opacity: 1
});
const offerTextTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#offer",
        start: "top 20%",
        end: "+=2000",
        scrub: 1,
    }
});

offerTextTL
    .to(".offer-text:nth-child(1)", {
        y: -300,
        opacity: 0,
        duration: 1
    })

    .to(".offer-text:nth-child(2)", {
        y: 0,
        opacity: 1,
        duration: 1
    })

    .to(".offer-text:nth-child(2)", {
        y: -300,
        opacity: 0,
        duration: 1
    })

    .to(".offer-text:nth-child(3)", {
        y: 0,
        opacity: 1,
        duration: 1
    })

    .to(".offer-text:nth-child(3)", {
        y: -300,
        opacity: 0,
        duration: 1
    })

    .to(".offer-text:nth-child(4)", {
        y: 0,
        opacity: 1,
        duration: 1
    })

    .to(".offer-text:nth-child(4)", {
        y: -300,
        opacity: 0,
        duration: 1
    })

tl3.from(".jump2", {
    scale: 8,
    y: 150,
    opacity: 0,
    rotation: () => gsap.utils.random(-20, 20),
    stagger: 0.08,
    ease: "expo.out",
    duration: 0.5,
})
.to(".jump2", {
    keyframes: [
        { scale: 1.15, duration: 0.05 },
        { scale: 0.95, duration: 0.05 },
        { scale: 1.05, duration: 0.05 },
        { scale: 1 },
    ],
    stagger: 0.08
});
gsap.to(".world-map", {
    scale: 1.15,
    rotation: 2,
    opacity: 0.5,    ease: "none",

    scrollTrigger: {
        trigger: "#world",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});