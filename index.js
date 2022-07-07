const counterDisplay = document.querySelector("h3");
let compteur = 0;


const bubbleMaker = () => {
    const bubble = document.createElement("span");
    const size = Math.random() * 200 + 100 + "px";
    const plusMinus = Math.random() > 0.5 ? 1 : -1;

    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    bubble.classList.add('bubble');

    document.addEventListener("keypress", (e) => {
        if (e.key) {
            counterDisplay.textContent = 0;
            compteur = 0;
        }
    })

    bubble.addEventListener("click", () => {
        bubble.remove();
        compteur += 1;
        counterDisplay.textContent = compteur;

    });

    document.body.appendChild(bubble);
    setTimeout(() => {
        bubble.remove();
    }, 8000)

}

setInterval(bubbleMaker, 300)