const sobre = document.getElementById("sobre");

sobre.addEventListener("click", function() {

    this.classList.toggle("abierto");

    crearExplosion();

});


/* FLORES QUE CAEN */

function crearFlor() {

    const flor = document.createElement("div");

    flor.className = "flor";
    flor.textContent = "🌻";

    flor.style.left =
        Math.random() * window.innerWidth + "px";

    document.body.appendChild(flor);

    setTimeout(function() {
        flor.remove();
    }, 5000);
}

setInterval(crearFlor, 700);


/* EXPLOSIÓN DE FLORES */

function crearExplosion() {

    for (let i = 0; i < 20; i++) {

        const flor = document.createElement("div");

        flor.className = "explosion";
        flor.textContent = "🌻";

        flor.style.left = "50%";
        flor.style.top = "50%";

        const x =
            (Math.random() - 0.5) * 700;

        const y =
            (Math.random() - 0.5) * 500;

        flor.style.setProperty(
            "--x",
            x + "px"
        );

        flor.style.setProperty(
            "--y",
            y + "px"
        );

        document.body.appendChild(flor);

        setTimeout(function() {
            flor.remove();
        }, 1500);
    }
}