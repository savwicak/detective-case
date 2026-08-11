gsap.registerPlugin(ScrollTrigger);

const history = document.querySelector("#history");
const papers = gsap.utils.toArray("#history .history-paper");

if (history && papers.length) {
    gsap.set(papers[0], {
        y: 0,
        opacity: 1
    });

    gsap.set(papers.slice(1), {
        y: window.innerHeight,
        opacity: 1
    });

    const historyTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: history,
            start: "top top",
            // semakin besar = semakin lama tiap paper
            end: `+=${(papers.length - 1) * 500}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
        }
    });

    papers.forEach((paper, index) => {

    if (index === 0) return;

    historyTimeline.to(paper, {
        y: 0,
        duration: 1,
        ease: "power3.out"
    });

});
}