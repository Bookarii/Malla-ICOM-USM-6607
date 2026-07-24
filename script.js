/* =====================================================
   MALLA INTERACTIVA ICOM USM
   SCRIPT.JS
   Parte 1
=====================================================*/

/* ===============================
   VARIABLES GLOBALES
================================*/

const malla = document.getElementById("malla");

const barra = document.getElementById("progreso");
const textoProgreso = document.getElementById("texto-progreso");
const textoCreditos = document.querySelector("#creditos strong");

const nombresSemestres = [
    "I","II","III","IV","V",
    "VI","VII","VIII","IX","X"
];

/* ===============================
   LOCAL STORAGE
================================*/

let aprobados = new Set(
    JSON.parse(localStorage.getItem("mallaICOM")) || []
);

/* ===============================
   CREAR SEMESTRES
================================*/

function crearSemestres(){

    malla.innerHTML = "";

    nombresSemestres.forEach((nombre,index)=>{

        const columna = document.createElement("div");

        columna.className = "semestre";

        columna.innerHTML = `

            <div class="titulo-semestre">

                ${nombre}

            </div>

            <div
                class="contenedor-ramos"
                id="semestre-${index+1}">
            </div>

        `;

        malla.appendChild(columna);

    });

}

/* ===============================
   GUARDAR
================================*/

function guardarDatos(){

    localStorage.setItem(

        "mallaICOM",

        JSON.stringify([...aprobados])

    );

}

/* ===============================
   ACTUALIZAR PROGRESO
================================*/

function actualizarProgreso(){

    const totalRamos = ramos.length;

    const totalAprobados = aprobados.size;

    const porcentaje = Math.round(

        totalAprobados*100/totalRamos

    );

    barra.style.width = porcentaje+"%";

    textoProgreso.textContent =

        `${totalAprobados} / ${totalRamos} ramos aprobados (${porcentaje}%)`;

}

/* ===============================
   ACTUALIZAR CRÉDITOS
================================*/

function actualizarCreditos(){

    let suma = 0;

    ramos.forEach(ramo=>{

        if(aprobados.has(ramo.sigla)){

            suma += ramo.creditos;

        }

    });

    textoCreditos.textContent = suma;

}

/* ===============================
   RENDERIZAR MALLA
================================*/

function renderizarRamos(){

    document
    .querySelectorAll(".contenedor-ramos")
    .forEach(c=>c.innerHTML="");

    ramos.forEach(ramo=>{

        const contenedor = document.getElementById(

            `semestre-${ramo.semestre}`

        );

        if(!contenedor) return;

        const aprobado = aprobados.has(ramo.sigla);

        const desbloqueado =

            ramo.prerrequisitos.every(req=>

                aprobados.has(req)

            );

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("ramo");

        tarjeta.classList.add(ramo.area);

        if(aprobado){

            tarjeta.classList.add("aprobado");

        }

        if(

            !aprobado &&

            !desbloqueado &&

            ramo.prerrequisitos.length>0

        ){

            tarjeta.classList.add("bloqueado");

        }

        tarjeta.dataset.sigla = ramo.sigla;

        tarjeta.innerHTML = `

            <div class="superior">

                <span>${ramo.id}</span>

                <span>${ramo.sigla}</span>

            </div>

            <div class="nombre">

                ${ramo.nombre}

            </div>

            <div class="inferior">

                <span>

                    ${ramo.prerrequisitos.length
                    ? ramo.prerrequisitos.join(", ")
                    : "—"}

                </span>

                <span>

                    ${ramo.creditos}

                </span>

            </div>

        `;

        /* Eventos (se completarán
           en la Parte 2) */

        tarjeta.addEventListener("click",()=>{

            alternarRamo(ramo);

        });

        tarjeta.addEventListener("mouseenter",()=>{

            mostrarPanel(ramo);

        });

        contenedor.appendChild(tarjeta);

    });

    actualizarProgreso();

    actualizarCreditos();

}

/* ===============================
   APROBAR / DESAPROBAR
================================*/

function alternarRamo(ramo){

    const cumple = ramo.prerrequisitos.every(req =>
        aprobados.has(req)
    );

    // Si ya está aprobado
    if(aprobados.has(ramo.sigla)){

        aprobados.delete(ramo.sigla);

        desaprobarDependientes(ramo.sigla);

    }

    // Si aún no está aprobado
    else{

        if(cumple || ramo.prerrequisitos.length===0){

            aprobados.add(ramo.sigla);

        }

        else{

            alert(
                "Debes aprobar primero:\n\n" +
                ramo.prerrequisitos.join("\n")
            );

            return;

        }

    }

    guardarDatos();

    renderizarRamos();

}

/* ===============================
   DESAPROBAR DEPENDIENTES
================================*/

function desaprobarDependientes(sigla){

    ramos.forEach(r=>{

        if(

            r.prerrequisitos.includes(sigla)

            &&

            aprobados.has(r.sigla)

        ){

            aprobados.delete(r.sigla);

            desaprobarDependientes(r.sigla);

        }

    });

}

/* ===============================
   PANEL DE INFORMACIÓN
================================*/

function mostrarPanel(ramo){

    document.getElementById("titulo-panel").textContent =
        ramo.nombre;

    document.getElementById("info-sigla").textContent =
        ramo.sigla;

    document.getElementById("info-nombre").textContent =
        ramo.nombre;

    document.getElementById("info-semestre").textContent =
        ramo.semestre;

    document.getElementById("info-area").textContent =
        ramo.area;

    document.getElementById("info-creditos").textContent =
        ramo.creditos;

    document.getElementById("info-prerrequisitos").textContent =

        ramo.prerrequisitos.length

        ?

        ramo.prerrequisitos.join(", ")

        :

        "No tiene";

}

/* ===============================
   BOTÓN REINICIAR
================================*/

const botonReiniciar =
document.getElementById("reiniciar");

if(botonReiniciar){

    botonReiniciar.addEventListener("click",()=>{

        if(confirm("¿Deseas borrar todo tu progreso?")){

            aprobados.clear();

            guardarDatos();

            renderizarRamos();

        }

    });

}

/* ===============================
   TOOLTIP
================================*/

const tooltip = document.getElementById("tooltip");

function crearTooltip(ramo){

    return `
        <strong>${ramo.sigla}</strong><br>
        ${ramo.nombre}<br><br>

        <strong>Semestre:</strong> ${ramo.semestre}<br>
        <strong>Créditos:</strong> ${ramo.creditos}<br>

        <strong>Prerrequisitos:</strong><br>

        ${
            ramo.prerrequisitos.length
            ?
            ramo.prerrequisitos.join("<br>")
            :
            "No tiene"
        }

    `;

}

function activarTooltip(){

    document.querySelectorAll(".ramo").forEach(tarjeta=>{

        const sigla = tarjeta.dataset.sigla;

        const ramo = ramos.find(r=>r.sigla===sigla);

        tarjeta.addEventListener("mousemove",(e)=>{

            tooltip.style.display="block";

            tooltip.style.left=(e.pageX+18)+"px";

            tooltip.style.top=(e.pageY+18)+"px";

            tooltip.innerHTML=crearTooltip(ramo);

        });

        tarjeta.addEventListener("mouseleave",()=>{

            tooltip.style.display="none";

        });

    });

}

/* ===============================
   ACTUALIZAR PANEL
================================*/

function actualizarPanelVacio(){

    document.getElementById("titulo-panel").textContent =
        "Selecciona un ramo";

    document.getElementById("info-sigla").textContent="-";
    document.getElementById("info-nombre").textContent="-";
    document.getElementById("info-semestre").textContent="-";
    document.getElementById("info-area").textContent="-";
    document.getElementById("info-creditos").textContent="-";
    document.getElementById("info-prerrequisitos").textContent="-";

}

/* ===============================
   REINICIAR PANEL
================================*/

document.addEventListener("mouseleave",()=>{

    tooltip.style.display="none";

});

/* ===============================
   MEJORAR RENDER
================================*/

const renderOriginal = renderizarRamos;

renderizarRamos = function(){

    renderOriginal();

    activarTooltip();

}

/* ===============================
   ATAJOS
================================*/

window.addEventListener("keydown",(e)=>{

    if(

        e.ctrlKey

        &&

        e.key==="Delete"

    ){

        if(confirm("¿Borrar todo el progreso?")){

            aprobados.clear();

            guardarDatos();

            renderizarRamos();

            actualizarPanelVacio();

        }

    }

});

/* ===============================
   CARGA INICIAL
================================*/

actualizarPanelVacio();

/* ===============================
   INICIO
================================*/

crearSemestres();

renderizarRamos();
