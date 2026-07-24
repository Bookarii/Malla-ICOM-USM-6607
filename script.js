// ======================================
// Crear las columnas de los semestres
// ======================================

const contenedor = document.getElementById("malla");

for (let semestre = 1; semestre <= 10; semestre++) {

    const columna = document.createElement("div");

    columna.className = "semestre";

    columna.innerHTML = `
        <div class="titulo-semestre">
            ${semestre}
        </div>

        <div class="contenedor-ramos"
             id="semestre-${semestre}">
        </div>
    `;

    contenedor.appendChild(columna);

}
