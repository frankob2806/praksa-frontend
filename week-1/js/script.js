const gumb = document.querySelector("#promijeniTekst");
const motivacija = document.querySelector("#motivacija");

gumb.addEventListener("click", function () {
    motivacija.textContent = "Disciplina je važnija od motivacije!";
});

const vjezbe = [
    "Bench press",
    "Squat",
    "Deadlift",
    "Pull up",
    "Shoulder press"
];

const listaVjezbi = document.querySelector("#listaVjezbi");
const pretraga = document.querySelector("#pretraga");

function prikaziVjezbe(podaci) {
    listaVjezbi.innerHTML = "";

    podaci.forEach(function (vjezba) {
        const div = document.createElement("div");
        div.className = "kartica";
        div.textContent = vjezba;
        listaVjezbi.appendChild(div);
    });
}

pretraga.addEventListener("input", function () {
    const unos = pretraga.ariaValueMax.toLowerCase();

    const filtrirano = vjezbe.filter(function (vjezba) {
        return vjezba.toLowerCase().includes(unos);
    });

    prikaziVjezbe(filtrirano);
});

prikaziVjezbe(vjezbe);