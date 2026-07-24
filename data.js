// =====================================
// Datos Malla Curricular (58 Ramos)
// =====================================

const ramos = [
  // -------------------------------------
  // 1er Semestre (7 ramos)
  // -------------------------------------
  { id:1, sigla: "ICS111", nombre: "Administración de Empresas", semestre: 1, area: "administracion", creditos: 5, prerrequisitos: [] },
  { sigla: "HAC100", nombre: "Comunicación Escrita", semestre: 1, area: "humanidades", creditos: 5, prerrequisitos: [] },
  { sigla: "EFI100", nombre: "Educación Física I", semestre: 1, area: "deportes", creditos: 2, prerrequisitos: [] },
  { sigla: "HCW100", nombre: "Inglés I", semestre: 1, area: "idiomas", creditos: 3, prerrequisitos: [] },
  { sigla: "ICS161", nombre: "Introducción a la Economía", semestre: 1, area: "economia", creditos: 5, prerrequisitos: [] },
  { sigla: "INF130", nombre: "Programación y Tratamiento de Datos para la Gestión", semestre: 1, area: "tecnologia", creditos: 5, prerrequisitos: [] },
  { sigla: "MATE10", nombre: "Álgebra y Geometría", semestre: 1, area: "matematica", creditos: 6, prerrequisitos: [] },

  // -------------------------------------
  // 2do Semestre (7 ramos)
  // -------------------------------------
  { sigla: "INF303", nombre: "Bases de Datos para la Gestión", semestre: 2, area: "tecnologia", creditos: 5, prerrequisitos: ["INF130"] },
  { sigla: "HAA102", nombre: "Comunicación Oral", semestre: 2, area: "humanidades", creditos: 5, prerrequisitos: ["HAC100"] },
  { sigla: "ICS140", nombre: "Contabilidad I", semestre: 2, area: "finanzas", creditos: 5, prerrequisitos: [] },
  { sigla: "EFI101", nombre: "Educación Física II", semestre: 2, area: "deportes", creditos: 2, prerrequisitos: ["EFI100"] },
  { sigla: "HCW101", nombre: "Inglés II", semestre: 2, area: "idiomas", creditos: 3, prerrequisitos: ["HCW100"] },
  { sigla: "MATE11", nombre: "Pre-Cálculo", semestre: 2, area: "matematica", creditos: 5, prerrequisitos: ["MATE10"] },
  { sigla: "MATE20", nombre: "Álgebra Lineal", semestre: 2, area: "matematica", creditos: 5, prerrequisitos: ["MATE10"] },

  // -------------------------------------
  // 3er Semestre (6 ramos)
  // -------------------------------------
  { sigla: "ICS144", nombre: "Contabilidad II", semestre: 3, area: "finanzas", creditos: 5, prerrequisitos: ["ICS140"] },
  { sigla: "MATE25", nombre: "Cálculo Diferencial", semestre: 3, area: "matematica", creditos: 5, prerrequisitos: ["MATE11", "MATE20"] },
  { sigla: "HCW102", nombre: "Inglés III", semestre: 3, area: "idiomas", creditos: 3, prerrequisitos: ["HCW101"] },
  { sigla: "ICS112", nombre: "Legislación Empresarial", semestre: 3, area: "legal", creditos: 5, prerrequisitos: ["ICS111"] },
  { sigla: "INF316", nombre: "Programación para la Analítica de Gestión", semestre: 3, area: "tecnologia", creditos: 5, prerrequisitos: ["INF303"] },
  { sigla: "IDP107", nombre: "Taller de Creatividad", semestre: 3, area: "talleres", creditos: 5, prerrequisitos: ["MATE10", "HAC100"] },

  // -------------------------------------
  // 4to Semestre (7 ramos)
  // -------------------------------------
  { sigla: "MATE26", nombre: "Cálculo Integral", semestre: 4, area: "matematica", creditos: 5, prerrequisitos: ["MATE25"] },
  { sigla: "DEW0", nombre: "Deportes", semestre: 4, area: "deportes", creditos: 2, prerrequisitos: ["EFI101"] },
  { sigla: "ICS142", nombre: "Ingeniería Económica", semestre: 4, area: "economia", creditos: 5, prerrequisitos: ["INF130", "MATE20"] },
  { sigla: "HCW200", nombre: "Inglés IV", semestre: 4, area: "idiomas", creditos: 3, prerrequisitos: ["HCW102"] },
  { sigla: "IQA161", nombre: "Introducción a la Ingeniería Sostenible", semestre: 4, area: "sustentabilidad", creditos: 5, prerrequisitos: ["ICS161"] },
  { sigla: "ICS162", nombre: "Microeconomía I", semestre: 4, area: "economia", creditos: 5, prerrequisitos: ["ICS161", "MATE25"] },
  { sigla: "IDP108", nombre: "Taller de Pensamiento de Diseño", semestre: 4, area: "talleres", creditos: 5, prerrequisitos: ["IDP107"] },

  // -------------------------------------
  // 5to Semestre (7 ramos)
  // -------------------------------------
  { sigla: "ICS244", nombre: "Dirección Tributaria", semestre: 5, area: "legal", creditos: 5, prerrequisitos: ["ICS140"] },
  { sigla: "HAH101", nombre: "Historia Económica", semestre: 5, area: "humanidades", creditos: 5, prerrequisitos: [] },
  { sigla: "HCW201", nombre: "Inglés V", semestre: 5, area: "idiomas", creditos: 3, prerrequisitos: ["HCW200"] },
  { sigla: "ICS31025", nombre: "Macroeconomía I", semestre: 5, area: "economia", creditos: 5, prerrequisitos: ["ICS162"] },
  { sigla: "ICS70825", nombre: "Marketing I", semestre: 5, area: "marketing", creditos: 5, prerrequisitos: ["ICS161", "ICS111"] },
  { sigla: "ICS214", nombre: "Personas y Organizaciones I", semestre: 5, area: "administracion", creditos: 5, prerrequisitos: ["ICS112"] },
  { sigla: "MATE034", nombre: "Probabilidad y Estadística", semestre: 5, area: "matematica", creditos: 5, prerrequisitos: ["MATE25"] },

  // -------------------------------------
  // 6to Semestre (6 ramos)
  // -------------------------------------
  { sigla: "ICS294", nombre: "Econometría", semestre: 6, area: "economia", creditos: 7, prerrequisitos: ["MATE034"] },
  { sigla: "HCW202", nombre: "Inglés VI", semestre: 6, area: "idiomas", creditos: 3, prerrequisitos: ["HCW201"] },
  { sigla: "ICS31125", nombre: "Macroeconomía II", semestre: 6, area: "economia", creditos: 5, prerrequisitos: ["ICS31025"] },
  { sigla: "ICS264", nombre: "Microeconomía II", semestre: 6, area: "economia", creditos: 5, prerrequisitos: ["ICS162", "MATE25"] },
  { sigla: "ICS297", nombre: "Optimización para la Gestión", semestre: 6, area: "tecnologia", creditos: 5, prerrequisitos: ["MATE034"] },
  { sigla: "ICS316", nombre: "Personas y Organizaciones II", semestre: 6, area: "administracion", creditos: 5, prerrequisitos: ["ICS214"] },

  // -------------------------------------
  // 7mo Semestre (6 ramos)
  // -------------------------------------
  { sigla: "ICS40125", nombre: "Analítica para Negocios I", semestre: 7, area: "tecnologia", creditos: 5, prerrequisitos: ["ICS294"] },
  { sigla: "ICS22126", nombre: "Dirección Estratégica I", semestre: 7, area: "administracion", creditos: 5, prerrequisitos: ["ICS70825", "ICS244"] },
  { sigla: "ICS315", nombre: "Entorno Legal de la Empresa", semestre: 7, area: "legal", creditos: 7, prerrequisitos: ["ICS214", "ICS244"] },
  { sigla: "ICS164", nombre: "Evaluación Privada y Social de Proyectos", semestre: 7, area: "finanzas", creditos: 0, prerrequisitos: ["ICS142", "INF303"] },
  { sigla: "ICS41226", nombre: "Finanzas I", semestre: 7, area: "finanzas", creditos: 5, prerrequisitos: ["ICS142", "ICS162"] },
  { sigla: "ICS265", nombre: "Organización Industrial", semestre: 7, area: "economia", creditos: 5, prerrequisitos: ["ICS31025", "ICS264"] },

  // -------------------------------------
  // 8vo Semestre (6 ramos)
  // -------------------------------------
  { sigla: "ICS175", nombre: "Analítica para los Negocios II", semestre: 8, area: "tecnologia", creditos: 5, prerrequisitos: ["ICS40125"] },
  { sigla: "ICS223", nombre: "Dirección Estratégica II", semestre: 8, area: "administracion", creditos: 0, prerrequisitos: ["ICS22126"] },
  { sigla: "ICS248", nombre: "Finanzas II", semestre: 8, area: "finanzas", creditos: 5, prerrequisitos: ["ICS41226", "ICS294"] },
  { sigla: "ICS296", nombre: "Gestión de Operaciones", semestre: 8, area: "tecnologia", creditos: 5, prerrequisitos: ["ICS297"] },
  { sigla: "ICS233", nombre: "Marketing II", semestre: 8, area: "marketing", creditos: 0, prerrequisitos: ["ICS70825", "MATE034"] },
  { sigla: "ICS166", nombre: "Preparación y Presentación de Proyectos", semestre: 8, area: "finanzas", creditos: 0, prerrequisitos: [] },

  // -------------------------------------
  // 9no Semestre (4 ramos)
  // -------------------------------------
  { sigla: "ICS801", nombre: "Electivo I", semestre: 9, area: "electivo", creditos: 5, prerrequisitos: [] },
  { sigla: "ICS802", nombre: "Electivo II", semestre: 9, area: "electivo", creditos: 5, prerrequisitos: [] },
  { sigla: "ICS700", nombre: "Optativo de Profundización I", semestre: 9, area: "optativo", creditos: 0, prerrequisitos: [] },
  { sigla: "ICS701", nombre: "Optativo de Profundización II", semestre: 9, area: "optativo", creditos: 0, prerrequisitos: [] },

  // -------------------------------------
  // 10mo Semestre (2 ramos)
  // -------------------------------------
  { sigla: "ICS803", nombre: "Electivo III", semestre: 10, area: "electivo", creditos: 5, prerrequisitos: [] },
  { sigla: "ICS399", nombre: "Seminario de Título", semestre: 10, area: "titulacion", creditos: 17, prerrequisitos: ["ICS701"] }
];
