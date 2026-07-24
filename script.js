// =====================================
// Semestres
// =====================================

const nombresSemestres = [
    "I","II","III","IV","V",
    "VI","VII","VIII","IX","X"
];

const malla = document.getElementById("malla");

// Crear columnas

for(let i=0;i<nombresSemestres.length;i++){

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


// =====================================
// Crear tarjetas
// =====================================

for(const ramo of ramos){

    const tarjeta = document.createElement("div");

    tarjeta.className = `ramo ${ramo.area}`;

    tarjeta.innerHTML = `

        <div class="superior">

            <span>${ramo.id}</span>

            <span>${ramo.sigla}</span>

        </div>

        <div class="nombre">

            ${ramo.nombre}

        </div>

        <div class="inferior">

            <span>${ramo.prerrequisitos.join(", ")}</span>

            <span>${ramo.creditos}</span>

        </div>

    `;

    document
        .getElementById(`semestre-${ramo.semestre}`)
        .appendChild(tarjeta);

}
