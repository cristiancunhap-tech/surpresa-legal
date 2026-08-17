const letter = document.getElementById("letter");
const message = document.getElementById("message");
const clickHint = document.getElementById("clickHint");

let isOpen = false;

function openLetter() {
    if (isOpen || !letter || !message || !clickHint) {
        return;
    }

    isOpen = true;

    letter.classList.add("open");
    letter.setAttribute("aria-expanded", "true");
    clickHint.textContent = "Uma mensagem especial para você ♡";

    setTimeout(() => {
        message.classList.add("show");
        document.body.classList.add("message-open");

        setTimeout(() => {
            message.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 450);
    }, 650);
}

letter?.addEventListener("click", openLetter);
