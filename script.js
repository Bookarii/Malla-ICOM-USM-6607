// ================================
// Semestres en números romanos
// ================================

const nombresSemestres = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X"
];

// ================================
// Contenedor principal
// ================================

const malla = document.getElementById("malla");

// ================================
// Crear columnas
// ================================

for(let i = 0; i < nombresSemestres.length; i++){

    const columna = document.createElement("div");

    columna.className = "semestre";

    columna.innerHTML = `

        <div class="titulo-semestre">

            ${nombresSemestres[i]}

        </div>

        <div
            class="contenedor-ramos"
            id="semestre-${i+1}">

        </div>

    `;

    malla.appendChild(columna);

}
