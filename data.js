// =====================================
// Datos Malla Curricular (58 Ramos)
// =====================================

const ramos = [
  // -------------------------------------
  // 1er Semestre (7 ramos)
  // -------------------------------------
  { id: 1, sigla: "ICS111", nombre: "Administración de Empresas", semestre: 1, area: "administracion", creditos: 5, prerrequisitos: [] },
  { id: 2, sigla: "HAC100", nombre: "Comunicación Escrita", semestre: 1, area: "humanidades", creditos: 5, prerrequisitos: [] },
  { id: 3, sigla: "EFI100", nombre: "Educación Física I", semestre: 1, area: "deportes", creditos: 2, prerrequisitos: [] },
  { id: 4, sigla: "HCW100", nombre: "Inglés I", semestre: 1, area: "idiomas", creditos: 3, prerrequisitos: [] },
  { id: 5, sigla: "ICS161", nombre: "Introducción a la Economía", semestre: 1, area: "economia", creditos: 5, prerrequisitos: [] },
  { id: 6, sigla: "INF130", nombre: "Programación y Tratamiento de Datos para la Gestión", semestre: 1, area: "tecnologia", creditos: 5, prerrequisitos: [] },
  { id: 7, sigla: "MATE10", nombre: "Álgebra y Geometría", semestre: 1, area: "matematica", creditos: 6, prerrequisitos: [] },

  // -------------------------------------
  // 2do Semestre (7 ramos)
  // -------------------------------------
  { id: 8, sigla: "INF303", nombre: "Bases de Datos para la Gestión", semestre: 2, area: "tecnologia", creditos: 5, prerrequisitos: ["INF130"] },
  { id: 9, sigla: "HAA102", nombre: "Comunicación Oral", semestre: 2, area: "humanidades", creditos: 5, prerrequisitos: ["HAC100"] },
  { id: 10, sigla: "ICS140", nombre: "Contabilidad I", semestre: 2, area: "finanzas", creditos: 5, prerrequisitos: [] },
  { id: 11, sigla: "EFI101", nombre: "Educación Física II", semestre: 2, area: "deportes", creditos: 2, prerrequisitos: ["EFI100"] },
  { id: 12, sigla: "HCW101", nombre: "Inglés II", semestre: 2, area: "idiomas", creditos: 3, prerrequisitos: ["HCW100"] },
  { id: 13, sigla: "MATE11", nombre: "Pre-Cálculo", semestre: 2, area: "matematica", creditos: 5, prerrequisitos: ["MATE10"] },
  { id: 14, sigla: "MATE20", nombre: "Álgebra Lineal", semestre: 2, area: "matematica", creditos: 5, prerrequisitos: ["MATE10"] },

  // -------------------------------------
  // 3er Semestre (6 ramos)
  // -------------------------------------
  { id: 15, sigla: "ICS144", nombre: "Contabilidad II", semestre: 3, area: "finanzas", creditos: 5, prerrequisitos: ["ICS140"] },
  { id: 16, sigla: "MATE25", nombre: "Cálculo Diferencial", semestre: 3, area: "matematica", creditos: 5, prerrequisitos: ["MATE11", "MATE20"] },
  { id: 17, sigla: "HCW102", nombre: "Inglés III", semestre: 3, area: "idiomas", creditos: 3, prerrequisitos: ["HCW101"] },
  { id: 18, sigla: "ICS112", nombre: "Legislación Empresarial", semestre: 3, area: "legal", creditos: 5, prerrequisitos: ["ICS111"] },
  { id: 19, sigla: "INF316", nombre: "Programación para la Analítica de Gestión", semestre: 3, area: "tecnologia", creditos: 5, prerrequisitos: ["INF303"] },
  { id: 20, sigla: "IDP107", nombre: "Taller de Creatividad", semestre: 3, area: "talleres", creditos: 5, prerrequisitos: ["MATE10", "HAC100"] },

  // -------------------------------------
  // 4to Semestre (7 ramos)
  // -------------------------------------
  { id: 21, sigla: "MATE26", nombre: "Cálculo Integral", semestre: 4, area: "matematica", creditos: 5, prerrequisitos: ["MATE25"] },
  { id: 22, sigla: "DEW0", nombre: "Deportes", semestre: 4, area: "deportes", creditos: 2, prerrequisitos: ["EFI101"] },
  { id: 23, sigla: "ICS142", nombre: "Ingeniería Económica", semestre: 4, area: "economia", creditos: 5, prerrequisitos: ["INF130", "MATE20"] },
  { id: 24, sigla: "HCW200", nombre: "Inglés IV", semestre: 4, area: "idiomas", creditos: 3, prerrequisitos: ["HCW102"] },
  { id: 25, sigla: "IQA161", nombre: "Introducción a la Ingeniería Sostenible", semestre: 4, area: "sustentabilidad", creditos: 5, prerrequisitos: ["ICS161"] },
  { id: 26, sigla: "ICS162", nombre: "Microeconomía I", semestre: 4, area: "economia", creditos: 5, prerrequisitos: ["ICS161", "MATE25"] },
  { id: 27, sigla: "IDP108", nombre: "Taller de Pensamiento de Diseño", semestre: 4, area: "talleres", creditos: 5, prerrequisitos: ["IDP107"] },

  // -------------------------------------
  // 5to Semestre (7 ramos)
  // -------------------------------------
  { id: 28, sigla: "ICS244", nombre: "Dirección Tributaria", semestre: 5, area: "legal", creditos: 5, prerrequisitos: ["ICS140"] },
  { id: 29, sigla: "HAH101", nombre: "Historia Económica", semestre: 5, area: "humanidades", creditos: 5, prerrequisitos: [] },
  { id: 30, sigla: "HCW201", nombre: "Inglés V", semestre: 5, area: "idiomas", creditos: 3, prerrequisitos: ["HCW200"] },
  { id: 31, sigla: "ICS31025", nombre: "Macroeconomía I", semestre: 5, area: "economia", creditos: 5, prerrequisitos: ["ICS162"] },
  { id: 32, sigla: "ICS70825", nombre: "Marketing I", semestre: 5, area: "marketing", creditos: 5, prerrequisitos: ["ICS161", "ICS111"] },
  { id: 33, sigla: "ICS214", nombre: "Personas y Organizaciones I", semestre: 5, area: "administracion", creditos: 5, prerrequisitos: ["ICS112"] },
  { id: 34, sigla: "MATE034", nombre: "Probabilidad y Estadística", semestre: 5, area: "matematica", creditos: 5, prerrequisitos: ["MATE25"] },

  // -------------------------------------
  // 6to Semestre (6 ramos)
  // -------------------------------------
  { id: 35, sigla: "ICS294", nombre: "Econometría", semestre: 6, area: "economia", creditos: 7, prerrequisitos: ["MATE034"] },
  { id: 36, sigla: "HCW202", nombre: "Inglés VI", semestre: 6, area: "idiomas", creditos: 3, prerrequisitos: ["HCW201"] },
  { id: 37, sigla: "ICS31125", nombre: "Macroeconomía II", semestre: 6, area: "economia", creditos: 5, prerrequisitos: ["ICS31025"] },
  { id: 38, sigla: "ICS264", nombre: "Microeconomía II", semestre: 6, area: "economia", creditos: 5, prerrequisitos: ["ICS162", "MATE25"] },
  { id: 39, sigla: "ICS297", nombre: "Optimización para la Gestión", semestre: 6, area: "tecnologia", creditos: 5, prerrequisitos: ["MATE034"] },
  { id: 40, sigla: "ICS316", nombre: "Personas y Organizaciones II", semestre: 6, area: "administracion", creditos: 5, prerrequisitos: ["ICS214"] },

  // -------------------------------------
  // 7mo Semestre (6 ramos)
  // -------------------------------------
  { id: 41, sigla: "ICS40125", nombre: "Analítica para Negocios I", semestre: 7, area: "tecnologia", creditos: 5, prerrequisitos: ["ICS294"] },
  { id: 42, sigla: "ICS22126", nombre: "Dirección Estratégica I", semestre: 7, area: "administracion", creditos: 5, prerrequisitos: ["ICS70825", "ICS244"] },
  { id: 43, sigla: "ICS315", nombre: "Entorno Legal de la Empresa", semestre: 7, area: "legal", creditos: 7, prerrequisitos: ["ICS214", "ICS244"] },
  { id: 44, sigla: "ICS164", nombre: "Evaluación Privada y Social de Proyectos", semestre: 7, area: "finanzas", creditos: 0, prerrequisitos: ["ICS142", "INF303"] },
  { id: 45, sigla: "ICS41226", nombre: "Finanzas I", semestre: 7, area: "finanzas", creditos: 5, prerrequisitos: ["ICS142", "ICS162"] },
  { id: 46, sigla: "ICS265", nombre: "Organización Industrial", semestre: 7, area: "economia", creditos: 5, prerrequisitos: ["ICS31025", "ICS264"] },

  // -------------------------------------
  // 8vo Semestre (6 ramos)
  // -------------------------------------
  { id: 47, sigla: "ICS175", nombre: "Analítica para los Negocios II", semestre: 8, area: "tecnologia", creditos: 5, prerrequisitos: ["ICS40125"] },
  { id: 48, sigla: "ICS223", nombre: "Dirección Estratégica II", semestre: 8, area: "administracion", creditos: 0, prerrequisitos: ["ICS22126"] },
  { id: 49, sigla: "ICS248", nombre: "Finanzas II", semestre: 8, area: "finanzas", creditos: 5, prerrequisitos: ["ICS41226", "ICS294"] },
  { id: 50, sigla: "ICS296", nombre: "Gestión de Operaciones", semestre: 8, area: "tecnologia", creditos: 5, prerrequisitos: ["ICS297"] },
  { id: 51, sigla: "ICS233", nombre: "Marketing II", semestre: 8, area: "marketing", creditos: 0, prerrequisitos: ["ICS70825", "MATE034"] },
  { id: 52, sigla: "ICS166", nombre: "Preparación y Presentación de Proyectos", semestre: 8, area: "finanzas", creditos: 0, prerrequisitos: [] },

  // -------------------------------------
  // 9no Semestre (4 ramos)
  // -------------------------------------
  { id: 53, sigla: "ICS801", nombre: "Electivo I", semestre: 9, area: "electivo", creditos: 5, prerrequisitos: [] },
  { id: 54, sigla: "ICS802", nombre: "Electivo II", semestre: 9, area: "electivo", creditos: 5, prerrequisitos: [] },
  { id: 55, sigla: "ICS700", nombre: "Optativo de Profundización I", semestre: 9, area: "optativo", creditos: 0, prerrequisitos: [] },
  { id: 56, sigla: "ICS701", nombre: "Optativo de Profundización II", semestre: 9, area: "optativo", creditos: 0, prerrequisitos: [] },

  // -------------------------------------
  // 10mo Semestre (2 ramos)
  // -------------------------------------
  { id: 57, sigla: "ICS803", nombre: "Electivo III", semestre: 10, area: "electivo", creditos: 5, prerrequisitos: [] },
  { id: 58, sigla: "ICS399", nombre: "Seminario de Título", semestre: 10, area: "titulacion", creditos: 17, prerrequisitos: ["ICS701"] }
];
