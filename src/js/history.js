const historyData = [
    {
        year: "2018",
        number: "001",
        type: "FOUNDING RECORD",
        title: "THE FIRST<br>TRACE.",
        content:
            "Detective.co began with a simple question: what if every unanswered question had a trail worth following?",
        location: "UNKNOWN / ORIGINAL OFFICE",
        report:
            "FIRST INVESTIGATION",
        note:
            '"Something doesn\'t add up."'
    },

    {
        year: "2019",
        number: "002",
        type: "CASE FILE",
        title: "THE FIRST<br>CASE.",
        content:
            "Our first investigation changed everything. A missing detail became the beginning of a much larger story.",
        location: "CASE 001 / PRIVATE",
        report:
            "CASE 001 — OPENED",
        note:
            '"The smallest detail mattered."'
    },

    {
        year: "2020",
        number: "003",
        type: "FIELD RECORD",
        title: "FOLLOWING<br>THE TRAIL.",
        content:
            "Cases became more complex. Evidence had to be connected, compared, and examined from every possible angle.",
        location: "MULTIPLE LOCATIONS",
        report:
            "EVIDENCE COLLECTION",
        note:
            '"Follow the evidence."'
    },

    {
        year: "2021",
        number: "004",
        type: "EXPANSION FILE",
        title: "THE SEARCH<br>GROWS.",
        content:
            "Detective.co expanded its operations and began taking on investigations that reached far beyond its original boundaries.",
        location: "REGIONAL OPERATIONS",
        report:
            "OPERATION EXPANSION",
        note:
            '"The trail keeps moving."'
    },

    {
        year: "2023",
        number: "005",
        type: "GLOBAL RECORD",
        title: "NO DISTANCE<br>TOO FAR.",
        content:
            "New locations brought new cases. Different places, different people, different stories — but the same search for answers.",
        location: "GLOBAL / MULTIPLE",
        report:
            "GLOBAL OPERATIONS",
        note:
            '"Distance is not the problem."'
    },

    {
        year: "2026",
        number: "006",
        type: "CURRENT ARCHIVE",
        title: "THE SEARCH<br>CONTINUES.",
        content:
            "Today, the archive keeps growing. Every case leaves a trace, and every trace leads somewhere.",
        location: "ACTIVE OPERATIONS",
        report:
            "CASE STATUS — ACTIVE",
        note:
            '"There is always another clue."'
    }

];

gsap.registerPlugin(
    ScrollTrigger,
    Draggable,
    Flip,
    Physics2DPlugin,
    TextPlugin
);

const year = document.querySelector("#history-year");
const type = document.querySelector("#history-type");
const title = document.querySelector("#history-title");
const content = document.querySelector("#history-content");

const locationText = document.querySelector("#location-text");
const reportTitle = document.querySelector("#report-title");
const reportNote = document.querySelector("#report-note");

const fileNumber = document.querySelector("#file-number");
const fileDate = document.querySelector("#file-date");
const counter = document.querySelector("#history-counter");

const documentCard = document.querySelector("#history-document");
const photo = document.querySelector("#history-photo");
const report = document.querySelector("#history-report");
const note = document.querySelector("#history-note");

const progress = document.querySelector("#history-progress");

gsap.set(documentCard, {
    opacity: 0,
    y: 100,
    scale: 0.8,
    rotation: -10
});

gsap.set([photo, report, note], {
    opacity: 0
});

const historyTL = gsap.timeline({

    scrollTrigger: {
        trigger: "#history",
        start: "top top",
        end: "+=4200",
        scrub: 1,
        pin: "#history-stage",
        anticipatePin: 1
    }

});

historyTL
    .to(documentCard, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: -3,
        duration: 1,
        ease: "back.out(1.5)"
    })

    .from(photo, {
        x: -150,
        rotation: -25,
        duration: 0.8,
        opacity: 0
    }, "-=0.5")

    .from(report, {
        x: 150,
        rotation: 20,
        duration: 0.8,
        opacity: 0
    }, "-=0.7")

    .from(note, {
        y: 80,
        opacity: 0,
        duration: 0.5
    }, "-=0.5");

historyData.forEach((item, index) => {

    if (index === 0) return;
    historyTL
        .to(
            [documentCard, photo, report, note],
            {
                y: -100,
                opacity: 0,
                scale: 0.92,
                duration: 0.5,
                ease: "power2.in"
            }
        )

        .call(() => {

            year.textContent = item.year;

            type.textContent = item.type;

            title.innerHTML = item.title;

            content.textContent = item.content;

            locationText.textContent = item.location;

            reportTitle.innerHTML = item.report;

            reportNote.textContent = item.note;

            fileNumber.textContent = item.number;

            fileDate.textContent = item.year;

            counter.textContent =
                `${String(index + 1).padStart(2, "0")} / ${String(historyData.length).padStart(2, "0")}`;

        })

        .set(documentCard, {
            y: 100,
            x: index % 2 === 0 ? -60 : 60,
            rotation: index % 2 === 0 ? 4 : -5,
            scale: 0.9
        })

        .set(photo, {
            x: index % 2 === 0 ? -100 : 100,
            y: 40,
            rotation: index % 2 === 0 ? -15 : 15
        })

        .set(report, {
            x: index % 2 === 0 ? 100 : -100,
            y: -50,
            rotation: index % 2 === 0 ? 15 : -15
        })

        .to(documentCard, {
            y: 0,
            x: 0,
            rotation: index % 2 === 0 ? -3 : 3,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.5)"
        })

        .to(photo, {
            x: 0,
            y: 0,
            rotation: index % 2 === 0 ? -8 : 7,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out"
        }, "<0.15")

        .to(report, {
            x: 0,
            y: 0,
            rotation: index % 2 === 0 ? 7 : -7,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out"
        }, "<")

        .to(note, {
            y: 0,
            opacity: 1,
            duration: 0.4
        }, "<0.2")


        .to(progress, {
            width: `${((index + 1) / historyData.length) * 100}%`,
            duration: 0.5
        }, "<");

});