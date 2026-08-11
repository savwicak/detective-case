gsap.registerPlugin(ScrollTrigger);


// ===============================
// INTRO
// ===============================

const whyIntro = gsap.timeline({
    scrollTrigger: {
        trigger: "#why-us",
        start: "top 70%",
        end: "top 10%",
        scrub: 1,
    }
});

whyIntro
    .from(".why-small", {
        y: 30,
        opacity: 0,
        duration: 1
    })

    .from(".why-title", {
        y: 120,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    }, "-=0.6")

    .from(".why-description", {
        y: 50,
        opacity: 0,
        duration: 1
    }, "-=0.8");


// ===============================
// FEATURES
// ===============================

gsap.utils.toArray(".why-feature").forEach((feature, index) => {

    const number = feature.querySelector("span:first-child");
    const title = feature.querySelector("h2");
    const description = feature.querySelector("p");

    gsap.timeline({
        scrollTrigger: {
            trigger: feature,
            start: "top 85%",
            end: "top 35%",
            scrub: 1,
        }
    })

    .fromTo(feature,
        {
            opacity: 0.2
        },
        {
            opacity: 1,
            duration: 1
        }
    )

    .from(number, {
        x: -40,
        opacity: 0,
        duration: 0.8
    }, 0)

    .from(title, {
        x: 120,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, 0)

    .from(description, {
        y: 40,
        opacity: 0,
        duration: 0.8
    }, 0.3);

});


// ===============================
// CTA
// ===============================

const ctaTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".why-cta",
        start: "top 75%",
        end: "top 20%",
        scrub: 1,
    }
});

ctaTL
    .from(".why-cta > p", {
        y: 40,
        opacity: 0,
        duration: 1
    })

    .from(".cta-title", {
        y: 150,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    }, "-=0.5")

    .from(".cta-button", {
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 1
    }, "-=0.7");