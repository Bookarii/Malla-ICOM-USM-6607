// Set para almacenar las siglas de los ramos aprobados
const aprobados = new Set();

const nombresSemestres = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
const malla = document.getElementById("malla");

// =====================================
// 1. Generar Columnas de Semestres
// =====================================
nombresSemestres.forEach((semestre, index) => {
  const columna = document.createElement("div");
  columna.className = "semestre";
  columna.innerHTML = `
    <div class="titulo-semestre">${semestre}</div>
    <div class="contenedor-ramos" id="semestre-${index + 1}"></div>
  `;
  malla.appendChild(columna);
});

// =====================================
// 2. Renderizar Ramos
// =====================================
function renderizarRamos() {
  // Limpiar contenedores
  nombresSemestres.forEach((_, i) => {
    const cont = document.getElementById(`semestre-${i + 1}`);
    if (cont) cont.innerHTML = "";
  });

  ramos.forEach((ramo) => {
    const contenedor = document.getElementById(`semestre-${ramo.semestre}`);
    if (!contenedor) return;

    const tarjeta = document.createElement("div");
    
    // Verificamos si sus prerrequisitos están cumplidos
    const cumplePrerrequisitos = ramo.prerrequisitos.every((req) => aprobados.has(req));
    const estaAprobado = aprobados.has(ramo.sigla);

    // Clases según estado
    let claseEstado = "";
    if (estaAprobado) {
      claseEstado = "aprobado";
    } else if (!cumplePrerrequisitos && ramo.prerrequisitos.length > 0) {
      claseEstado = "bloqueado";
    }

    tarjeta.className = `ramo ${ramo.area} ${claseEstado}`;
    tarjeta.dataset.sigla = ramo.sigla;

    const reqTexto = ramo.prerrequisitos.length > 0 ? ramo.prerrequisitos.join(", ") : "—";

    tarjeta.innerHTML = `
      <div class="superior">
        <span>${ramo.id}</span>
        <span>${ramo.sigla}</span>
      </div>
      <div class="nombre">${ramo.nombre}</div>
      <div class="inferior">
        <span>${reqTexto}</span>
        <span>${ramo.creditos}</span>
      </div>
    `;

    // Evento de clic para aprobar/desaprobar
    tarjeta.addEventListener("click", () => alternarAprobado(ramo));

    contenedor.appendChild(tarjeta);
  });

  actualizarProgreso();
}

// =====================================
// 3. Lógica de Interacción
// =====================================
function alternarAprobado(ramo) {
  const cumplePrerrequisitos = ramo.prerrequisitos.every((req) => aprobados.has(req));

  if (aprobados.has(ramo.sigla)) {
    // Si ya está aprobado, lo quitamos (y desaprobamos lo que dependa de él)
    aprobados.delete(ramo.sigla);
    desaprobarDependientes(ramo.sigla);
  } else {
    // Solo se puede aprobar si cumple los requisitos
    if (cumplePrerrequisitos || ramo.prerrequisitos.length === 0) {
      aprobados.add(ramo.sigla);
    } else {
      alert(`Para cursar ${ramo.sigla} debes aprobar primero: ${ramo.prerrequisitos.join(", ")}`);
    }
  }

  renderizarRamos();
}

// Si desapruebas un ramo, desaprueba automáticamente los ramos posteriores que lo pedían
function desaprobarDependientes(siglaDesaprobada) {
  ramos.forEach((r) => {
    if (r.prerrequisitos.includes(siglaDesaprobada) && aprobados.has(r.sigla)) {
      aprobados.delete(r.sigla);
      desaprobarDependientes(r.sigla); // Recursivo
    }
  });
}

// =====================================
// 4. Actualizar Barra de Progreso
// =====================================
function actualizarProgreso() {
  const totalRamos = ramos.length; // 58
  const totalAprobados = aprobados.size;
  const porcentaje = Math.round((totalAprobados / totalRamos) * 100);

  const barra = document.getElementById("progreso");
  const texto = document.getElementById("texto-progreso");

  if (barra) barra.style.width = `${porcentaje}%`;
  if (texto) texto.textContent = `${totalAprobados} / ${totalRamos} ramos aprobados (${porcentaje}%)`;
}

// Inicializar la malla al cargar
renderizarRamos();
