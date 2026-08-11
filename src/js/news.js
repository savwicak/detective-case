const modal = document.querySelector("#news-modal");
const modalBox = document.querySelector("#news-modal-box");

const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalContent = document.querySelector("#modal-content");

const closeButton = document.querySelector("#news-close");

const cases = {
"001": {
    title: "CASE 001 — THE LOST WORK",

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0pQrj-0lhW7fxDRzbTHYpPRKG5OG7swM7NYKko4GI5BS4_8rgbKxOjo&s=10",

    content: `
CASE STATUS: RESOLVED

CASE TYPE: LOST PROPERTY
DIFFICULTY: MODERATE
INVESTIGATION TIME: 2 DAYS

OVERVIEW
A set of important work files and documents
could no longer be located after being moved
between several locations.

The owner was certain the files had not been
intentionally discarded, but could not determine
where they had disappeared.

APPROACH
Detective.co established the last confirmed
location of the files and reconstructed the
sequence of movements that followed.

Available records, timestamps, conversations,
and location information were compared.

EXECUTION
Instead of searching every possible location,
the investigation narrowed the search based
on when the files were last confirmed and
who had access to them afterward.

One overlooked transfer provided the missing
connection between the original location
and the final storage area.

RESULT
The files were located and their movement
was reconstructed.

CASE RESULT: RESOLVED

SELECTED INFORMATION REMAINS CONFIDENTIAL.
`
},

"002": {
    title: "CASE 002 — THE CAT IN THE TREES",

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0dKhDpR9CcOmp4GieDII0Q8d1q69Zt6-uGLMTAS8hjoj9hsE1Sx7ipS4&s=10",

    content: `
CASE STATUS: RESOLVED

CASE TYPE: ANIMAL ASSISTANCE
DIFFICULTY: MODERATE
INVESTIGATION TIME: 4 HOURS

OVERVIEW

A cat had become trapped in a tree and was
unable to return to the ground.

The exact location was unclear, with several
nearby trees initially appearing possible.

APPROACH
Detective.co established the last confirmed
location and collected observations from
people in the surrounding area.

The direction of movement, height of the tree,
and surrounding access points were compared.

EXECUTION
The search was narrowed by matching each
observation against the physical layout
of the area.

Once the correct tree was identified,
the safest available access route was assessed.

RESULT
The cat was safely recovered from the tree.

CASE RESULT: RESOLVED

NO FURTHER INVESTIGATION REQUIRED.
`
},

"003": {
    title: "CASE 003 — THE PICKPOCKET IN BROAD DAYLIGHT",

    image: "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/v2/5TPRFLCSIYI6TGQGJRLQFIE6OM.jpg?auth=fb9786ead95d1d3195ab8666f857ca16483f7b28f540a9ee014d6b56e36b3402&width=1440",

    content: `
CASE STATUS: RESOLVED

CASE TYPE: THEFT INVESTIGATION
DIFFICULTY: HIGH
INVESTIGATION TIME: 3 DAYS

OVERVIEW

A personal item was taken during the middle
of the day in a crowded public area.

The incident occurred in clear visibility,
but the exact moment of the theft could
not initially be established.

APPROACH
Detective.co reconstructed the victim's
movements before and after the incident.

Available surveillance footage, timestamps,
witness observations, and surrounding activity
were compared.

EXECUTION
Rather than focusing on a single individual,
the investigation examined movement patterns
within the area.

The relevant sequence was narrowed by
identifying where the victim's belongings
were last confirmed to be intact.

A short gap in the timeline provided the
key point for further investigation.

RESULT
The sequence surrounding the theft was
established and the relevant individual
was identified.

CASE RESULT: RESOLVED

IDENTIFYING DETAILS HAVE BEEN WITHHELD.
`
},


    "004": {
        title: "CASE 004 — THE LOST PUPPY",

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwZEgTuoBqC1libOaTBY4WWLHWjxm7TfX2PuLdR0OB0K2NAh0a1RRufet&s=10https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdb1ivSORtqOF05W3Rw6rahV5vh1BZs6zS68Z4QXcGAFNSzQRflISY8x4&s=10",

        content: `
CASE STATUS: RESOLVED

CASE TYPE: MISSING ANIMAL
DIFFICULTY: MODERATE
INVESTIGATION TIME: 6 HOURS


OVERVIEW
A puppy went missing from a residential
area with no confirmed direction of travel.

The available information was limited
to the approximate time and last known
location.


APPROACH
Detective.co established the last confirmed
location and created a timeline based on
available observations.

Nearby sightings were then compared
against the timeline.


EXECUTION
Rather than searching the entire area
randomly, possible routes were narrowed
using the direction and timing of each
confirmed sighting.

The search area was progressively reduced.


RESULT
The puppy was located safely within the
identified search area.

CASE RESULT: RESOLVED

NO FURTHER INVESTIGATION REQUIRED.
`
    },


    "005": {
        title: "CASE 005 — THE SINKING BOAT",

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxn1qLw6XWcblenooRcMcf-hrXJ9TRiE8e3uzXrJYt3GFnfQ3o5BUfiW8&s=10",

        content: `
CASE STATUS: RESOLVED

CASE TYPE: MARITIME EMERGENCY
DIFFICULTY: CRITICAL
RESPONSE TIME: 18 MINUTES


OVERVIEW
A boat reported significant water ingress
while operating away from immediate
shore assistance.

The vessel's position and condition
required immediate coordination.


APPROACH
Detective.co established the vessel's
last confirmed position and assessed
the available information regarding
its condition.


EXECUTION
The response was coordinated around
location, available communication,
and the vessel's estimated condition.

Assistance was directed toward the
confirmed position while communication
was maintained with the crew.


RESULT
The vessel was reached before the
situation became critical and all
individuals were brought to safety.

CASE RESULT: RESOLVED

RESPONSE PROCEDURES REMAIN CONFIDENTIAL.
`
    }

};


// ==========================
// OPEN CASE
// ==========================

const cards = document.querySelectorAll(".news-card");

cards.forEach((card) => {

    card.addEventListener("click", () => {

        // Ambil ID dari HTML
        const caseId = card.dataset.case;

        // Cari data berdasarkan ID
        const caseData = cases[caseId];

        // Kalau case tidak ditemukan
        if (!caseData) {
            console.warn(`Case ${caseId} tidak ditemukan.`);
            return;
        }


        // ==========================
        // ISI MODAL
        // ==========================

        modalTitle.textContent = caseData.title;

        modalImage.src = caseData.image;

        modalContent.textContent = caseData.content;

        modalContent.scrollTop = 0;


        // ==========================
        // SHOW MODAL
        // ==========================

        modal.classList.remove("hidden");
        modal.classList.add("flex");


        // ==========================
        // ANIMATION
        // ==========================

        gsap.fromTo(
            modal,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            }
        );


        gsap.fromTo(
            modalBox,
            {
                y: 80,
                scale: 0.9,
                opacity: 0
            },
            {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out"
            }
        );

    });

});


// ==========================
// CLOSE BUTTON
// ==========================

closeButton.addEventListener("click", closeModal);


// ==========================
// CLICK OUTSIDE MODAL
// ==========================

modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        closeModal();
    }

});


// ==========================
// CLOSE MODAL
// ==========================

function closeModal() {

    gsap.to(modalBox, {
        y: 50,
        scale: 0.95,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in"
    });

    gsap.to(modal, {
        opacity: 0,
        duration: 0.25,

        onComplete: () => {

            modal.classList.add("hidden");
            modal.classList.remove("flex");

            // Reset modal
            gsap.set(modalBox, {
                y: 0,
                scale: 1,
                opacity: 1
            });

        }
    });

}