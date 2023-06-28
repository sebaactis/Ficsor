const square = document.getElementById("squareContainer");

square.innerHTML = `<span className="fs-2 square">_</span>`;

for (let i = 0; i < 20; i++) {
    square.innerHTML = +square.innerHTML;
}
