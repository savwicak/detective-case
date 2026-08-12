let currentCase = null;
let correctCount = 0;

const cases = [

{
    id: "CASE-001",

    title: "WHO STOLE THE FOOD?",

    time: "19:30 — 19:45",

    answer: "larry",


    summary:
        "A container of chocolate cookies disappeared from the kitchen. Four subjects were present in the residence during the estimated theft window. The family cat was immediately blamed, but the available records suggest otherwise.",


    // subject data
    subjects: [

        {
            nickname: "DAMIELA",
            name: "Damiela Lawson",
            age: 34,
            role: "WIFE",
            job: "Accountant",
            type: "PERSON",

            profile:
                "Organized and observant. Damiela manages most household routines and is usually responsible for preparing and storing food in the kitchen.",

            status:
                "PERSON OF INTEREST"
        },


        {
            nickname: "LARRY",
            name: "Larry Lawson",
            age: 36,
            role: "HUSBAND",
            job: "Farmer",
            type: "PERSON",

            profile:
                "Calm and confident. Larry frequently watches television in the evening and is known to snack late at night.",

            status:
                "PERSON OF INTEREST"
        },


        {
            nickname: "MIKE",
            name: "Michael Donald Lawson",
            age: 7,
            role: "KID",
            job: "Student",
            type: "PERSON",

            profile:
                "Curious and easily distracted. Mike has a strong interest in snacks and knows the family's daily routine.",

            status:
                "PERSON OF INTEREST"
        },


        {
            nickname: "COOKIE",
            name: "Cookie Monster",
            age: 4,
            role: "CAT",
            job: "House Cat",
            type: "ANIMAL",

            profile:
                "Sneaky, curious, food-motivated, and frequently enters the kitchen. Known to knock objects from surfaces.",

            status:
                "PRIMARY SUSPECT"
        }

    ],


    // evidence
    evidence: [

        {
            id: "EV-001",

            title: "COOKIE CONTAINER",

            source: "KITCHEN",

            description:
                "The cookie container was discovered closed on the kitchen counter. The cookies inside were completely missing."
        },


        {
            id: "EV-002",

            title: "COOKIE CRUMBS",

            source: "KITCHEN → LIVING ROOM",

            description:
                "Small cookie crumbs were found near the kitchen doorway. The trail continues toward the living room."
        },


        {
            id: "EV-003",

            title: "TELEVISION REMOTE",

            source: "KITCHEN COUNTER",

            description:
                "The television remote was discovered on the kitchen counter despite LARRY claiming he remained in the living room."
        },


        {
            id: "EV-004",

            title: "CAT LOCATION",

            source: "LIVING ROOM",

            description:
                "COOKIE was found near the sofa. No cookie crumbs were discovered around the cat's food bowl."
        },


        {
            id: "EV-005",

            title: "LAST CONFIRMED SIGHTING",

            source: "DAMIELA",

            description:
                "The cookies were confirmed to be present at approximately 19:25."
        }

    ],

    //introgation
    interrogation: [

        {
            nickname: "DAMIELA",
            name: "Damiela Lawson",
            role: "WIFE",

            statement:
                "I put the cookies on the kitchen counter after dinner. Then I went upstairs to get some clothes. When I came back, they were gone."
        },


        {
            nickname: "LARRY",
            name: "Larry Lawson",
            role: "HUSBAND",

            statement:
                "I was watching television in the living room. I never went into the kitchen."
        },


        {
            nickname: "MIKE",
            name: "Michael Donald Lawson",
            role: "KID",

            statement:
                "I saw the cookies on the counter. I wanted some, but I went to my room. I didn't take them."
        },


        {
            nickname: "COOKIE",
            name: "Cookie Monster",
            role: "CAT",

            statement:
                "MEOW"
        }

    ],

    solution:
        "The actual thief was LARRY. His statement claims he never entered the kitchen, yet his television remote was found on the kitchen counter. The cookie crumb trail also leads from the kitchen toward the living room. COOKIE was deliberately made to appear suspicious because of the cat's reputation for sneaking around the kitchen. However, there is no physical evidence proving COOKIE took the cookies."
}

];

document.getElementById("fileCount").innerText =
    String(cases.length).padStart(2, "0");

loadCases();

function loadCases() {

    const container =
        document.getElementById("caseList");

    container.innerHTML = "";


    cases.forEach((c, index) => {

        const card = document.createElement("div");

        card.className = `
            group
            relative
            cursor-pointer
            border
            border-white/10
            bg-[#151515]
            px-6
            py-6
            flex
            items-center
            justify-between
            overflow-hidden
            hover:bg-[#181818]
            hover:border-white/20
            hover:translate-x-1
            transition-all
            duration-300
        `;


        card.onclick = () => openCase(index);


        card.innerHTML = `

            <div
                class="
                    absolute
                    left-0
                    top-0
                    bottom-0
                    w-0.5
                    bg-[#a99a68]
                    scale-y-0
                    origin-bottom
                    group-hover:scale-y-100
                    transition-transform
                "
            ></div>


            <div>

                <p
                    class="
                        text-[8px]
                        tracking-[.2em]
                        uppercase
                        text-white/20
                        mb-2
                    "
                >
                    ${c.id}
                </p>


                <h3
                    class="
                        font-display
                        text-lg
                        sm:text-xl
                        text-[#dedbd2]
                    "
                >
                    ${c.title}
                </h3>

            </div>


            <div
                class="
                    text-right
                    shrink-0
                "
            >

                <p
                    class="
                        text-[8px]
                        uppercase
                        tracking-[.15em]
                        text-white/20
                        mb-1
                    "
                >
                    DATABASE
                </p>


                <span
                    class="
                        text-white/20
                        group-hover:text-[#d0bf87]
                        transition
                    "
                >
                    →
                </span>

            </div>

        `;


        container.appendChild(card);

    });

}

function openCase(index) {

    currentCase = index;

    const c = cases[index];


    document.getElementById("home")
        .classList.add("hidden");

    document.getElementById("result")
        .classList.add("hidden");

    document.getElementById("database")
        .classList.remove("hidden");


    document.getElementById("databaseTitle")
        .innerText =
        `${c.id} — ${c.title}`;


    document.getElementById("incidentTime")
        .innerText =
        c.time;


    document.getElementById("overviewSummary")
        .innerText =
        c.summary;


    document.getElementById("subjectCount")
        .innerText =
        String(c.subjects.length).padStart(2, "0");


    document.getElementById("evidenceCount")
        .innerText =
        String(c.evidence.length).padStart(2, "0");


    document.getElementById("interrogationCount")
        .innerText =
        String(c.interrogation.length).padStart(2, "0");


    renderSubjects(c);

    renderEvidence(c);

    renderInterrogation(c);


    switchTab("overview");


    document.getElementById("suspectInput")
        .value = "";


    document.getElementById("deductionMessage")
        .classList.add("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function renderSubjects(c) {

    const container =
        document.getElementById("subjectsContainer");

    container.innerHTML = "";


    c.subjects.forEach(subject => {

        const card =
            document.createElement("div");


        card.className = `
            database-card
            border
            border-white/10
            bg-[#151515]
            p-6
            hover:border-white/20
            hover:bg-[#111]
        `;


        card.innerHTML = `

            <div
                class="
                    flex
                    items-start
                    justify-between
                    gap-5
                    mb-6
                "
            >

                <div>

                    <p
                        class="
                            font-display
                            text-2xl
                            text-[#e7e5df]
                            tracking-[-.02em]
                        "
                    >
                        ${subject.nickname}
                    </p>


                    <p
                        class="
                            mt-1
                            text-[8px]
                            tracking-[.2em]
                            uppercase
                            text-[#a99a68]
                        "
                    >
                        ${subject.type}
                    </p>

                </div>


                <span
                    class="
                        text-[8px]
                        tracking-[.15em]
                        uppercase
                        text-white/20
                    "
                >
                    ${subject.status}
                </span>

            </div>


            <div
                class="
                    border-t
                    border-white/10
                    pt-5
                    space-y-5
                "
            >

                <div>

                    <p
                        class="
                            text-[8px]
                            uppercase
                            tracking-[.15em]
                            text-white/20
                            mb-2
                        "
                    >
                        Full Name
                    </p>

                    <p
                        class="
                            text-xs
                            text-[#d0bf87]
                        "
                    >
                        ${subject.name}
                    </p>

                </div>


                <div class="grid grid-cols-2 gap-5">

                    <div>

                        <p
                            class="
                                text-[8px]
                                uppercase
                                tracking-[.15em]
                                text-white/20
                                mb-2
                            "
                        >
                            Age
                        </p>

                        <p
                            class="
                                text-xs
                                text-white/45
                            "
                        >
                            ${subject.age}
                        </p>

                    </div>


                    <div>

                        <p
                            class="
                                text-[8px]
                                uppercase
                                tracking-[.15em]
                                text-white/20
                                mb-2
                            "
                        >
                            Job
                        </p>

                        <p
                            class="
                                text-xs
                                text-white/45
                            "
                        >
                            ${subject.job}
                        </p>

                    </div>

                </div>


                <div>

                    <p
                        class="
                            text-[8px]
                            uppercase
                            tracking-[.15em]
                            text-white/20
                            mb-2
                        "
                    >
                        Role
                    </p>

                    <p
                        class="
                            text-xs
                            text-white/45
                        "
                    >
                        ${subject.role}
                    </p>

                </div>


                <div>

                    <p
                        class="
                            text-[8px]
                            uppercase
                            tracking-[.15em]
                            text-white/20
                            mb-2
                        "
                    >
                        Profile
                    </p>

                    <p
                        class="
                            text-xs
                            leading-6
                            text-white/40
                        "
                    >
                        ${subject.profile}
                    </p>

                </div>

            </div>

        `;


        container.appendChild(card);

    });
}

function renderEvidence(c) {

    const container =
        document.getElementById("evidenceContainer");

    container.innerHTML = "";


    c.evidence.forEach(evidence => {

        const card =
            document.createElement("div");


        card.className = `
            database-card
            border
            border-white/10
            bg-[#151515]
            p-6
            hover:border-white/20
            hover:bg-[#111]
        `;


        card.innerHTML = `

            <div
                class="
                    flex
                    flex-col
                    md:flex-row
                    md:items-start
                    gap-5
                "
            >

                <div
                    class="
                        md:w-28
                        shrink-0
                    "
                >

                    <p
                        class="
                            text-[9px]
                            tracking-[.2em]
                            text-[#a99a68]
                        "
                    >
                        ${evidence.id}
                    </p>

                </div>


                <div class="flex-1">

                    <div
                        class="
                            flex
                            flex-col
                            sm:flex-row
                            sm:items-start
                            sm:justify-between
                            gap-3
                            mb-4
                        "
                    >

                        <h3
                            class="
                                font-display
                                text-xl
                                text-[#e7e5df]
                            "
                        >
                            ${evidence.title}
                        </h3>


                        <span
                            class="
                                text-[8px]
                                tracking-[.15em]
                                uppercase
                                text-white/20
                            "
                        >
                            ${evidence.source}
                        </span>

                    </div>


                    <p
                        class="
                            text-xs
                            leading-7
                            text-white/45
                        "
                    >
                        ${evidence.description}
                    </p>

                </div>

            </div>

        `;


        container.appendChild(card);

    });
}

function renderInterrogation(c) {

    const container =
        document.getElementById("interrogationContainer");

    container.innerHTML = "";


    c.interrogation.forEach((record, index) => {

        const card =
            document.createElement("div");


        card.className = `
            database-card
            border
            border-white/10
            bg-[#151515]
            p-6
            hover:border-white/20
        `;


        card.innerHTML = `

            <div
                class="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    pb-5
                    mb-6
                "
            >

                <div>

                    <p
                        class="
                            font-display
                            text-2xl
                            text-[#e7e5df]
                        "
                    >
                        ${record.nickname}
                    </p>


                    <p
                        class="
                            text-[8px]
                            tracking-[.2em]
                            uppercase
                            text-[#a99a68]
                            mt-1
                        "
                    >
                        ${record.role}
                    </p>

                </div>


                <div class="text-right">

                    <p
                        class="
                            text-[8px]
                            tracking-[.15em]
                            uppercase
                            text-white/20
                        "
                    >
                        INTERVIEW #${String(index + 1).padStart(2, "0")}
                    </p>


                    <p
                        class="
                            text-xs
                            text-[#d0bf87]
                            mt-2
                        "
                    >
                        ${record.time}
                    </p>

                </div>

            </div>


            <div>

                <p
                    class="
                        text-[8px]
                        tracking-[.15em]
                        uppercase
                        text-white/20
                        mb-3
                    "
                >
                    STATEMENT
                </p>


                <p
                    class="
                        text-sm
                        leading-8
                        text-white/50
                    "
                >
                    "${record.statement}"
                </p>

            </div>

        `;


        container.appendChild(card);

    });
}

//tab
function switchTab(tab) {

    document.querySelectorAll(".tab-content")
        .forEach(content => {

            content.classList.add("hidden");

        });


    document.querySelectorAll(".tab-button")
        .forEach(button => {

            button.classList.remove("active-tab");

        });


    const content =
        document.getElementById(`tab-${tab}`);


    const button =
        document.querySelector(
            `[data-tab="${tab}"]`
        );


    if (content) {

        content.classList.remove("hidden");

    }


    if (button) {

        button.classList.add("active-tab");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function submitDeduction() {

    const input =
        document
            .getElementById("suspectInput")
            .value
            .trim()
            .toLowerCase();


    const message =
        document.getElementById("deductionMessage");


    const c = cases[currentCase];

    if (!input) {

        message.innerText =
            "ERROR — SUSPECT NICKNAME REQUIRED.";

        message.className =
            "mt-5 text-[9px] uppercase tracking-[.15em] text-red-400";

        return;

    }

    const selectedSubject =
        c.subjects.find(subject =>
            subject.nickname.toLowerCase() === input
        );

    if (!selectedSubject) {

        message.innerText =
            "DETECTIVE INCOMPETENT — SUBJECT NOT FOUND IN DATABASE.";

        message.className =
            "mt-5 text-[9px] uppercase tracking-[.15em] text-red-400";

        return;

    }

    const correct =
        input === c.answer.toLowerCase();


    if (correct) {

        correctCount++;


        const score =
            Math.round(
                (correctCount / cases.length) * 100
            );


        document.getElementById("score")
            .innerText = `${score}%`;


        document.getElementById("database")
            .classList.add("hidden");


        document.getElementById("result")
            .classList.remove("hidden");


        document.getElementById("resultText").innerHTML = `

            <p
                class="
                    text-[9px]
                    tracking-[.2em]
                    uppercase
                    text-[#a99a68]
                    mb-6
                "
            >
                ✓ DEDUCTION CONFIRMED
            </p>


            <h3
                class="
                    font-display
                    text-3xl
                    text-[#e7e5df]
                    mb-6
                "
            >
                SUBJECT: ${selectedSubject.nickname}
            </h3>


            <p>
                ${c.solution}
            </p>


            <div
                class="
                    mt-7
                    pt-6
                    border-t
                    border-white/10
                "
            >

                <p
                    class="
                        text-[8px]
                        tracking-[.2em]
                        uppercase
                        text-white/20
                        mb-2
                    "
                >
                    INCIDENT WINDOW
                </p>


                <p
                    class="text-[#d0bf87]"
                >
                    ${c.time}
                </p>

            </div>

        `;


        document.body.classList.add("glitch");


        setTimeout(() => {

            document.body.classList.remove("glitch");

        }, 400);


    } else {

        document.getElementById("database")
            .classList.add("hidden");


        document.getElementById("result")
            .classList.remove("hidden");


        document.getElementById("score")
            .innerText = "";


        document.getElementById("resultText").innerHTML = `

            <p
                class="
                    text-[9px]
                    tracking-[.2em]
                    uppercase
                    text-red-400
                    mb-6
                "
            >
                ✕ DEDUCTION REJECTED
            </p>


            <h3
                class="
                    font-display
                    text-3xl
                    text-[#e7e5df]
                    mb-6
                "
            >
                INSUFFICIENT EVIDENCE
            </h3>


            <p>
                The subject you selected cannot be conclusively
                connected to the missing food.
            </p>


            <p class="mt-5 text-white/25">
                Review the evidence, interrogation records,
                and subject profiles before attempting another deduction.
            </p>

        `;

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener("keydown", event => {

    if (
        event.key === "Enter" &&
        currentCase !== null &&
        !document
            .getElementById("database")
            .classList.contains("hidden")
    ) {

        const activeTab =
            document.querySelector(
                ".tab-content:not(.hidden)"
            );


        if (
            activeTab &&
            activeTab.id === "tab-deduction"
        ) {

            submitDeduction();

        }

    }

});

function backHome() {

    document.getElementById("database")
        .classList.add("hidden");


    document.getElementById("result")
        .classList.add("hidden");


    document.getElementById("home")
        .classList.remove("hidden");


    currentCase = null;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}