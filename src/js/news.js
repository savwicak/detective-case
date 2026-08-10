const cards = document.querySelectorAll(".news-card");

const modal = document.querySelector("#news-modal");
const modalBox = document.querySelector("#news-modal-box");

const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalContent = document.querySelector("#modal-content");

const closeButton = document.querySelector("#news-close");


cards.forEach((card) => {

    card.addEventListener("click", () => {

        const title = card.dataset.title;
        const image = card.dataset.image;
        const content = card.dataset.content;

        modalTitle.textContent = title;
        modalImage.src = image;
        modalContent.textContent = content;

        modal.classList.remove("hidden");
        modal.classList.add("flex");

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


closeButton.addEventListener("click", closeModal);


modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        closeModal();
    }

});


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

        }
    });

}