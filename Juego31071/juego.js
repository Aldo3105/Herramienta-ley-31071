const eightUit2026 = 44000;

const state = {
  score: 0,
  technical: 45,
  trust: 45,
  time: 55,
  day: 1,
  activeMission: 0,
  completedMissions: new Set(),
  decisionLog: [],
  dossierIndex: 0,
  selectedDocs: new Set(),
  completedDossiers: new Set(),
  amountAnswered: false,
  errorsAnswered: false,
  producerCompleted: false,
};

const missions = [
  {
    id: "encargo",
    number: "1",
    title: "Recibes el encargo de alcaldia",
    meta: "Dia 1 - arranque politico",
    office: "Alcaldia y Gerencia Municipal",
    file: "Memorando de encargo para implementar compras a la agricultura familiar.",
    situation:
      "El alcalde quiere que la municipalidad compre alimentos locales para el Programa de Complementacion Alimentaria. Varias areas han escuchado de la Ley 31071, pero no conocen el procedimiento.",
    task: "Tu primera decision debe ordenar el proceso sin crear expectativas falsas en productores.",
    question: "Como inicias la implementacion?",
    options: [
      {
        title: "Convocar mesa de arranque con areas clave",
        detail:
          "Reunes alcaldia, gerencia, desarrollo social, desarrollo economico, logistica, abastecimiento y presupuesto para explicar ruta, roles y plazos.",
        result:
          "La municipalidad empieza con respaldo politico y tecnico. Queda claro que primero se ordena la ruta y luego se invita a productores.",
        note: "Acta de mesa de arranque y responsables iniciales registrados.",
        points: 120,
        technical: 14,
        trust: 6,
        time: 7,
        days: 2,
        correct: true,
      },
      {
        title: "Pedir a logistica que compre directamente",
        detail:
          "Logistica recibe el encargo, pero no hay COMPRAGRO, requerimiento, precio estimado ni planificacion.",
        result:
          "El expediente nace debil. Logistica no puede reemplazar la decision politica, el area usuaria ni la conformacion del COMPRAGRO.",
        note: "Riesgo: observaciones por iniciar sin ruta ni organo responsable.",
        points: 20,
        technical: -10,
        trust: -2,
        time: -8,
        days: 5,
      },
      {
        title: "Contactar productores de inmediato",
        detail:
          "Anuncias una compra sin tener demanda, presupuesto, comite ni procedimiento definido.",
        result:
          "Se generan expectativas sin sustento. Si luego el proceso se demora, la confianza productora cae.",
        note: "Riesgo: productores convocados sin expediente ni cronograma.",
        points: 10,
        technical: -8,
        trust: -12,
        time: -6,
        days: 6,
      },
    ],
  },
  {
    id: "compragro",
    number: "2",
    title: "Formalizas el COMPRAGRO",
    meta: "Resolucion y roles",
    office: "Alcaldia, Secretaria General y Gerencia Municipal",
    file: "Proyecto de resolucion de alcaldia para conformar el COMPRAGRO.",
    situation:
      "La municipalidad ya decidio avanzar. Necesitas que el comite exista formalmente para conducir las actuaciones de compra.",
    task: "El expediente debe mostrar quienes integran el comite y que rol cumple cada uno.",
    question: "Que documento elevas a alcaldia?",
    options: [
      {
        title: "Resolucion con presidente, secretario y vocal",
        detail:
          "Incluyes area usuaria, logistica o abastecimiento, y desarrollo economico o area agraria; ademas notificas a los integrantes.",
        result:
          "El COMPRAGRO queda respaldado. Las siguientes actuaciones tienen un organo responsable claro.",
        note: "Resolucion, notificaciones y acta de instalacion pasan al expediente.",
        points: 130,
        technical: 16,
        trust: 4,
        time: 6,
        days: 4,
        correct: true,
      },
      {
        title: "Acta informal firmada por funcionarios",
        detail:
          "El grupo quiere avanzar, pero no existe resolucion de alcaldia ni designacion formal.",
        result:
          "La coordinacion ayuda, pero no reemplaza la conformacion formal del COMPRAGRO.",
        note: "Riesgo: actuaciones sin respaldo legal suficiente.",
        points: 30,
        technical: -9,
        trust: 0,
        time: -4,
        days: 5,
      },
      {
        title: "Designar solo a desarrollo social",
        detail:
          "El area usuaria asume todo el proceso sin logistica ni desarrollo economico.",
        result:
          "La compra queda desbalanceada. Necesitas demanda, oferta, logistica y soporte presupuestal.",
        note: "Riesgo: roles incompletos y retrasos operativos.",
        points: 35,
        technical: -6,
        trust: -3,
        time: -5,
        days: 5,
      },
    ],
  },
  {
    id: "planificacion",
    number: "3",
    title: "Planificas demanda y oferta",
    meta: "Programas, productores y calendario",
    office: "COMPRAGRO, Desarrollo Social, Desarrollo Economico y Presupuesto",
    file: "Cuadro preliminar de alimentos, productores y demanda institucional.",
    situation:
      "El programa social necesita alimentos, pero aun no se sabe si la oferta local puede cubrir cantidad, calidad y calendario de entrega.",
    task: "Debes evitar una compra imposible o un proceso desierto.",
    question: "Como preparas la planificacion?",
    options: [
      {
        title: "Cruzar demanda publica con oferta local",
        detail:
          "Calculas cantidades, puntos de entrega, calendario, productores, estacionalidad, volumen y precios referenciales.",
        result:
          "La compra se vuelve realista. Presupuesto y logistica pueden revisar viabilidad antes de pasar al requerimiento.",
        note: "Se agrega matriz de demanda, mapa de productores e indagacion preliminar.",
        points: 130,
        technical: 18,
        trust: 10,
        time: 7,
        days: 10,
        correct: true,
      },
      {
        title: "Usar la lista historica de alimentos del municipio",
        detail:
          "Repites productos anteriores sin mirar cosecha local ni disponibilidad productiva.",
        result:
          "Puedes comprar algo que los agricultores locales no tienen disponible cuando el programa lo necesita.",
        note: "Riesgo: oferta local no alineada con demanda publica.",
        points: 40,
        technical: -5,
        trust: -5,
        time: -4,
        days: 6,
      },
      {
        title: "Elegir el producto mas barato del mercado",
        detail:
          "Priorizas precio sin revisar origen, calidad, inocuidad ni capacidad de entrega.",
        result:
          "La compra pierde sentido territorial y puede debilitar la finalidad de la Ley 31071.",
        note: "Riesgo: especificaciones mal sustentadas y productores excluidos.",
        points: 15,
        technical: -12,
        trust: -9,
        time: -5,
        days: 5,
      },
    ],
  },
  {
    id: "pac",
    number: "4",
    title: "Aseguras presupuesto y PAC",
    meta: "Viabilidad administrativa",
    office: "Presupuesto, Logistica, Area usuaria y Gerencia Municipal",
    file: "Informe de disponibilidad presupuestal y articulacion con instrumentos de gestion.",
    situation:
      "El COMPRAGRO ya tiene una propuesta de compra, pero presupuesto advierte que no basta con tener productores interesados.",
    task: "Antes de convocar o solicitar ofertas, debes asegurar que el gasto pueda ejecutarse.",
    question: "Que validacion haces?",
    options: [
      {
        title: "Revisar fuente de financiamiento, POI y PAC",
        detail:
          "Confirmas disponibilidad presupuestal, programacion, area usuaria responsable y ajustes administrativos necesarios.",
        result:
          "El expediente queda viable para continuar. Reduces el riesgo de tener proceso listo pero sin capacidad de pago.",
        note: "Presupuesto y logistica emiten conformidad administrativa previa.",
        points: 115,
        technical: 13,
        trust: 2,
        time: 7,
        days: 5,
        correct: true,
      },
      {
        title: "Avanzar y ver presupuesto despues",
        detail:
          "Se prepara el proceso sin confirmar disponibilidad ni instrumentos de gestion.",
        result:
          "El expediente puede frenarse justo antes de contratar. Eso afecta plazos y confianza de productores.",
        note: "Riesgo: proceso tecnicamente armado, pero presupuestalmente trabado.",
        points: 25,
        technical: -9,
        trust: -6,
        time: -10,
        days: 8,
      },
      {
        title: "Pedir al productor que espere indefinidamente",
        detail:
          "No se informa cronograma ni se resuelve la viabilidad interna.",
        result:
          "La relacion con productores se deteriora. El funcionario debe ordenar la casa antes de comprometer entregas.",
        note: "Riesgo: perdida de confianza y desinteres en futuras convocatorias.",
        points: 20,
        technical: -4,
        trust: -12,
        time: -8,
        days: 9,
      },
    ],
  },
  {
    id: "requerimiento",
    number: "5",
    title: "Formulas requerimiento y precio",
    meta: "Sustento tecnico",
    office: "Area usuaria y COMPRAGRO",
    file: "Requerimiento de compra e informe de precio estimado.",
    situation:
      "El area usuaria prepara especificaciones. Un borrador exige requisitos de gran empresa para alimentos frescos.",
    task: "Debes cuidar calidad e inocuidad sin excluir injustificadamente a agricultores familiares.",
    question: "Como corriges el requerimiento?",
    options: [
      {
        title: "Ajustar especificaciones a agricultura familiar",
        detail:
          "Defines alimento, peso, presentacion, calidad, inocuidad, lugar, frecuencia y precio estimado sustentado.",
        result:
          "El requerimiento queda proporcional y defendible. El COMPRAGRO puede determinar compra menor o mayor.",
        note: "Se incorpora indagacion de mercado y especificaciones tecnicas razonables.",
        points: 135,
        technical: 18,
        trust: 8,
        time: 5,
        days: 5,
        correct: true,
      },
      {
        title: "Mantener requisitos industriales",
        detail:
          "Se exigen condiciones que el producto fresco no necesita para cumplir la finalidad publica.",
        result:
          "Es un error frecuente. Puede dejar fuera a agricultores familiares y generar proceso desierto.",
        note: "Riesgo: barreras innecesarias a la agricultura familiar.",
        points: 5,
        technical: -14,
        trust: -14,
        time: -7,
        days: 6,
      },
      {
        title: "Fijar precio sin indagacion de mercado",
        detail:
          "Se usa un monto aproximado sin visitas, referencias ni sustento documental.",
        result:
          "El precio estimado queda expuesto. Sin sustento, la compra puede ser observada.",
        note: "Riesgo: valor referencial debil y decision de procedimiento dudosa.",
        points: 15,
        technical: -13,
        trust: -3,
        time: -6,
        days: 4,
      },
    ],
  },
  {
    id: "procedimiento",
    number: "6",
    title: "Eliges compra menor o mayor",
    meta: "Umbral 8 UIT",
    office: "COMPRAGRO y Logistica",
    file: "Determinacion del tipo de procedimiento segun monto estimado.",
    situation:
      "El monto estimado de la compra define el camino. Para 2026, 8 UIT equivalen a S/ 44,000.",
    task: "Debes elegir el procedimiento correcto antes de solicitar propuestas o publicar bases.",
    question: "Que criterio aplicas?",
    options: [
      {
        title: "Comparar el monto total con 8 UIT",
        detail:
          "Hasta 8 UIT aplicas compra menor. Si supera 8 UIT, corresponde compra mayor con convocatoria y bases.",
        result:
          "Correcto. El expediente demuestra por que se eligio el procedimiento.",
        note: "Se deja constancia del monto estimado y tipo de compra.",
        points: 120,
        technical: 14,
        trust: 4,
        time: 6,
        days: 2,
        correct: true,
      },
      {
        title: "Elegir compra menor porque es mas rapida",
        detail:
          "El monto supera 8 UIT, pero se intenta simplificar el proceso.",
        result:
          "La rapidez no reemplaza el umbral. Elegir mal el procedimiento expone todo el proceso.",
        note: "Riesgo: nulidad, observacion o responsabilidades funcionales.",
        points: 10,
        technical: -15,
        trust: -3,
        time: -6,
        days: 3,
      },
      {
        title: "Exigir RNP para estar mas seguros",
        detail:
          "Se pide Registro Nacional de Proveedores a productores de agricultura familiar.",
        result:
          "Incorrecto. Bajo la Ley 31071 no se debe exigir RNP a productores de agricultura familiar.",
        note: "Riesgo: exclusion indebida y proceso desierto.",
        points: 5,
        technical: -14,
        trust: -16,
        time: -5,
        days: 4,
      },
    ],
  },
  {
    id: "convocatoria",
    number: "7",
    title: "Conduces convocatoria y evaluacion",
    meta: "Bases, consultas y buena pro",
    office: "COMPRAGRO",
    file: "Bases, registro de participantes, actas y otorgamiento de buena pro.",
    situation:
      "La compra supera 8 UIT. Productores preguntan como registrarse y si pueden presentar consultas.",
    task: "Debes conducir una compra mayor transparente y comprensible.",
    question: "Como gestionas la convocatoria?",
    options: [
      {
        title: "Publicar bases y respetar todas las etapas",
        detail:
          "Convocatoria, registro gratuito, consultas, integracion de bases, propuestas, evaluacion y buena pro.",
        result:
          "La compra mayor avanza con reglas claras. Los productores saben cuando y como participar.",
        note: "Actas y publicaciones quedan incorporadas al expediente.",
        points: 125,
        technical: 15,
        trust: 10,
        time: 4,
        days: 18,
        correct: true,
      },
      {
        title: "Recibir propuestas sin publicar bases",
        detail:
          "Se busca ahorrar tiempo, pero los participantes no tienen reglas formales.",
        result:
          "El proceso pierde transparencia. En compra mayor, las bases y etapas son esenciales.",
        note: "Riesgo: impugnaciones y perdida de legitimidad.",
        points: 10,
        technical: -15,
        trust: -12,
        time: -8,
        days: 10,
      },
      {
        title: "Aceptar solo productores conocidos",
        detail:
          "Se limita la participacion a productores cercanos al municipio.",
        result:
          "La articulacion local es importante, pero la convocatoria debe respetar reglas de participacion.",
        note: "Riesgo: trato no transparente y cuestionamientos.",
        points: 20,
        technical: -10,
        trust: -9,
        time: -6,
        days: 8,
      },
    ],
  },
  {
    id: "contrato",
    number: "8",
    title: "Gestionas entrega, conformidad y pago",
    meta: "Ejecucion contractual",
    office: "Area usuaria, Logistica y Tesoreria",
    file: "Contrato, guias de entrega, conformidades y expediente de pago.",
    situation:
      "El productor entrega alimentos en remesas. El area usuaria esta ocupada y puede demorar la conformidad.",
    task: "Debes asegurar cumplimiento y pago oportuno.",
    question: "Que haces como responsable tecnico?",
    options: [
      {
        title: "Verificar entrega y activar conformidad inmediata",
        detail:
          "Se revisa cantidad, calidad, lugar, fecha y se deriva el pago segun el contrato.",
        result:
          "La cadena funciona: productor entrega, area usuaria conforma y tesoreria paga.",
        note: "La confianza productora aumenta por pago oportuno.",
        points: 125,
        technical: 10,
        trust: 18,
        time: 8,
        days: 7,
        correct: true,
      },
      {
        title: "Esperar a fin de mes para revisar todo",
        detail:
          "Se acumulan entregas sin conformidad.",
        result:
          "El pago se retrasa y el productor puede no volver a vender al Estado.",
        note: "Riesgo: intereses, reclamos y perdida de confianza.",
        points: 25,
        technical: -5,
        trust: -14,
        time: -10,
        days: 12,
      },
      {
        title: "Cambiar puntos de entrega verbalmente",
        detail:
          "No se deja constancia ni se actualiza el expediente.",
        result:
          "Los cambios no documentados generan controversias y debilitan el control.",
        note: "Riesgo: observaciones sobre recepcion y conformidad.",
        points: 15,
        technical: -10,
        trust: -8,
        time: -6,
        days: 9,
      },
    ],
  },
  {
    id: "reporte",
    number: "9",
    title: "Cierras con reporte semestral",
    meta: "Seguimiento y mejora",
    office: "COMPRAGRO y Gerencia Municipal",
    file: "Informe semestral para MIDAGRI y PRODUCE.",
    situation:
      "La compra termino. Algunos funcionarios quieren archivar solo el contrato y pasar a otra actividad.",
    task: "Debes cerrar el ciclo y dejar aprendizaje institucional.",
    question: "Como completas la implementacion?",
    options: [
      {
        title: "Elaborar reporte semestral con lecciones",
        detail:
          "Incluyes alimentos, cantidades, montos, logros, dificultades, mejoras y proyecciones.",
        result:
          "La municipalidad cumple y deja evidencia para mejorar la siguiente compra.",
        note: "Reporte remitido y plan de mejora listo para el siguiente ciclo.",
        points: 115,
        technical: 12,
        trust: 6,
        time: 5,
        days: 3,
        correct: true,
      },
      {
        title: "Archivar solo contrato y comprobantes",
        detail:
          "No se sistematizan resultados ni dificultades.",
        result:
          "Falta seguimiento. La implementacion no termina con el pago.",
        note: "Riesgo: aprendizaje institucional debil y reporte incumplido.",
        points: 25,
        technical: -7,
        trust: -2,
        time: -4,
        days: 2,
      },
      {
        title: "Reportar solo si hubo problemas",
        detail:
          "Si la compra salio bien, no se informa.",
        result:
          "Incorrecto. El reporte semestral debe realizarse como parte de la ruta.",
        note: "Riesgo: incumplimiento y responsabilidades funcionales.",
        points: 15,
        technical: -9,
        trust: 0,
        time: -4,
        days: 2,
      },
    ],
  },
];

const dossierPhases = [
  {
    badge: "Fase 1",
    title: "Conformacion del COMPRAGRO",
    instruction: "Selecciona documentos para sustentar que el comite existe y puede actuar.",
    correctDocs: ["resolucion", "notificacion", "acta"],
  },
  {
    badge: "Fase 2",
    title: "Planificacion de la compra",
    instruction: "Selecciona documentos para demostrar demanda, oferta, mercado y viabilidad.",
    correctDocs: ["demanda", "oferta", "mercado", "pac"],
  },
  {
    badge: "Fase 3",
    title: "Requerimiento y precio estimado",
    instruction: "Selecciona documentos que sustentan que se compra y como se estima el precio.",
    correctDocs: ["requerimiento", "mercado", "precio"],
  },
  {
    badge: "Fase 4B",
    title: "Compra mayor",
    instruction: "Selecciona documentos clave de una convocatoria mayor a 8 UIT.",
    correctDocs: ["bases", "registro", "actas", "buenaPro"],
  },
  {
    badge: "Fase 6",
    title: "Reporte semestral",
    instruction: "Selecciona documentos para cerrar, reportar y mejorar el proceso.",
    correctDocs: ["reporte", "conformidad", "mejoras"],
  },
];

const documentCards = [
  { id: "resolucion", title: "Resolucion de Alcaldia", hint: "Formaliza el COMPRAGRO." },
  { id: "notificacion", title: "Notificacion a integrantes", hint: "Comunica la designacion." },
  { id: "acta", title: "Acta de instalacion", hint: "Deja constancia de inicio." },
  { id: "demanda", title: "Diagnostico de demanda", hint: "Programas, cantidades y entregas." },
  { id: "oferta", title: "Mapa de productores", hint: "Productos, volumen y estacionalidad." },
  { id: "mercado", title: "Indagacion de mercado", hint: "Sustenta precio y disponibilidad." },
  { id: "pac", title: "Validacion POI/PAC", hint: "Evita trabas presupuestales." },
  { id: "requerimiento", title: "Requerimiento tecnico", hint: "Define alimento, cantidad y entrega." },
  { id: "precio", title: "Precio estimado", hint: "Define menor o mayor." },
  { id: "bases", title: "Bases estandar", hint: "Reglas de compra mayor." },
  { id: "registro", title: "Registro de participantes", hint: "Productores inscritos gratuitamente." },
  { id: "actas", title: "Actas de evaluacion", hint: "Admisibilidad, puntaje y resultados." },
  { id: "buenaPro", title: "Buena pro", hint: "Otorgamiento y consentimiento." },
  { id: "conformidad", title: "Conformidades", hint: "Sustentan pago." },
  { id: "reporte", title: "Informe semestral", hint: "Se remite en julio y enero." },
  { id: "mejoras", title: "Plan de mejoras", hint: "Aprendizaje para el siguiente ciclo." },
];

const errorStatements = [
  { id: "rnp", text: "Exigir RNP a productores de agricultura familiar.", error: true },
  { id: "pac", text: "Articular la compra con presupuesto, POI y PAC cuando corresponda.", error: false },
  { id: "mercado", text: "Fijar precio estimado sin indagacion de mercado.", error: true },
  { id: "industria", text: "Pedir requisitos de grandes empresas para alimentos frescos.", error: true },
  { id: "conformidad", text: "Emitir conformidad luego de recibir alimentos.", error: false },
  { id: "reporte", text: "Omitir el reporte semestral si la compra salio bien.", error: true },
];

const producerItems = [
  "Productores identificados y ubicados territorialmente.",
  "Producto, cantidad, calidad y calendario claros.",
  "Acreditacion de agricultura familiar o registro aplicable.",
  "Propuesta tecnica y economica entendible.",
  "Condiciones de entrega y transporte definidas.",
  "Cuenta o medio de pago listo.",
];

const scoreValue = document.querySelector("#scoreValue");
const technicalMeter = document.querySelector("#technicalMeter");
const trustMeter = document.querySelector("#trustMeter");
const timeMeter = document.querySelector("#timeMeter");
const dayValue = document.querySelector("#dayValue");
const caseNote = document.querySelector("#caseNote");
const missionMap = document.querySelector("#missionMap");
const missionCard = document.querySelector("#missionCard");
const documentBank = document.querySelector("#documentBank");
const dossierPhaseBadge = document.querySelector("#dossierPhaseBadge");
const dossierPhaseTitle = document.querySelector("#dossierPhaseTitle");
const dossierInstruction = document.querySelector("#dossierInstruction");
const dossierFeedback = document.querySelector("#dossierFeedback");
const errorList = document.querySelector("#errorList");
const errorFeedback = document.querySelector("#errorFeedback");
const producerList = document.querySelector("#producerList");
const producerReadiness = document.querySelector("#producerReadiness");
const producerProgress = document.querySelector("#producerProgress");
const rankLabel = document.querySelector("#rankLabel");
const finalMessage = document.querySelector("#finalMessage");
const recommendations = document.querySelector("#recommendations");
const decisionLog = document.querySelector("#decisionLog");

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function updateHud() {
  scoreValue.textContent = state.score;
  technicalMeter.value = state.technical;
  trustMeter.value = state.trust;
  timeMeter.value = state.time;
  dayValue.textContent = state.day;

  const rank =
    state.score >= 900
      ? "Responsable tecnico destacado"
      : state.score >= 650
        ? "Funcionario implementador"
        : state.score >= 350
          ? "Gestor en proceso"
          : "Funcionario en entrenamiento";

  rankLabel.textContent = rank;
  finalMessage.textContent =
    state.score >= 900
      ? "Tu simulacion muestra una implementacion consistente, sustentada y con buena relacion con productores."
      : "Sigue avanzando en la simulacion para fortalecer tu expediente, tiempos y confianza productora.";

  const tips = [];
  if (state.technical < 70) tips.push("Refuerza resolucion COMPRAGRO, requerimiento, indagacion de mercado y expediente.");
  if (state.trust < 70) tips.push("Cuida comunicacion con productores, no exijas RNP y asegura pago oportuno.");
  if (state.time < 70) tips.push("Ordena cronograma, PAC, conformidades y reporte para evitar retrasos.");
  if (!tips.length) tips.push("La implementacion esta equilibrada: tecnica, confianza y tiempos estan encaminados.");
  recommendations.innerHTML = tips.map((tip) => `<li>${tip}</li>`).join("");

  decisionLog.innerHTML = state.decisionLog.length
    ? state.decisionLog.map((entry) => `<li>${entry}</li>`).join("")
    : "<li>Aun no hay decisiones registradas.</li>";
}

function applyOutcome(option) {
  const mission = missions[state.activeMission];
  if (mission.answered) return;

  state.score += option.points;
  state.technical = clamp(state.technical + option.technical);
  state.trust = clamp(state.trust + option.trust);
  state.time = clamp(state.time + option.time);
  state.day += option.days;
  state.completedMissions.add(mission.id);
  state.decisionLog.push(`Dia ${state.day}: ${mission.title} - ${option.title}.`);
  mission.answered = true;
  mission.selectedTitle = option.title;
  mission.feedback = option.result;
  mission.note = option.note;
  mission.correct = Boolean(option.correct);
  caseNote.textContent = option.note;
  updateHud();
  renderMissionMap();
  renderMission();
}

function renderMissionMap() {
  missionMap.innerHTML = missions
    .map(
      (mission, index) => `
        <li>
          <button class="map-button${index === state.activeMission ? " is-active" : ""}${state.completedMissions.has(mission.id) ? " is-done" : ""}" type="button" data-mission="${index}">
            <span class="map-number">${mission.number}</span>
            <span>
              <span class="map-title">${mission.title}</span>
              <span class="map-meta">${mission.meta}</span>
            </span>
          </button>
        </li>
      `,
    )
    .join("");
}

function renderMission() {
  const mission = missions[state.activeMission];
  const feedback = mission.answered
    ? `<div class="feedback ${mission.correct ? "good" : "warn"}"><strong>Consecuencia administrativa:</strong> ${mission.feedback}<br><strong>Expediente:</strong> ${mission.note}</div>`
    : "";
  const nextButton = mission.answered
    ? `<button class="button primary" id="nextMission" type="button">${state.activeMission === missions.length - 1 ? "Ver informe" : "Siguiente caso"}</button>`
    : "";

  missionCard.innerHTML = `
    <span class="pill">Caso ${mission.number}</span>
    <h3>${mission.title}</h3>
    <div class="case-context">
      <p><strong>Oficina:</strong> ${mission.office}</p>
      <p><strong>Documento en mesa:</strong> ${mission.file}</p>
    </div>
    <p class="scenario">${mission.situation}</p>
    <p class="task"><strong>Tu tarea:</strong> ${mission.task}</p>
    <h4>${mission.question}</h4>
    <div class="option-list">
      ${mission.options
        .map(
          (option, index) => `
            <button class="option-button${mission.selectedTitle === option.title ? (option.correct ? " is-correct" : " is-risky") : ""}" type="button" data-option="${index}" ${mission.answered ? "disabled" : ""}>
              <strong>${option.title}</strong>
              <span>${option.detail}</span>
            </button>
          `,
        )
        .join("")}
    </div>
    ${feedback}
    ${nextButton}
  `;
}

function renderDossier() {
  const phase = dossierPhases[state.dossierIndex];
  state.selectedDocs.clear();
  dossierPhaseBadge.textContent = phase.badge;
  dossierPhaseTitle.textContent = phase.title;
  dossierInstruction.textContent = phase.instruction;
  dossierFeedback.textContent = "";
  dossierFeedback.className = "feedback";
  documentBank.innerHTML = documentCards
    .map(
      (doc) => `
        <button class="document-card" type="button" data-doc="${doc.id}">
          <strong>${doc.title}</strong>
          <small>${doc.hint}</small>
        </button>
      `,
    )
    .join("");
}

function checkDossier() {
  const phase = dossierPhases[state.dossierIndex];
  const correct = new Set(phase.correctDocs);
  const selected = Array.from(state.selectedDocs);
  const missed = phase.correctDocs.filter((doc) => !state.selectedDocs.has(doc));
  const extra = selected.filter((doc) => !correct.has(doc));
  const alreadyCompleted = state.completedDossiers.has(state.dossierIndex);

  if (!missed.length && !extra.length) {
    if (!alreadyCompleted) {
      state.score += 90;
      state.technical = clamp(state.technical + 8);
      state.completedDossiers.add(state.dossierIndex);
      state.decisionLog.push(`Dia ${state.day}: expediente correcto para ${phase.title}.`);
    }
    dossierFeedback.className = "feedback good";
    dossierFeedback.textContent = "Expediente completo. Esta fase queda bien sustentada.";
  } else {
    if (!alreadyCompleted) {
      state.score += Math.max(10, 55 - missed.length * 10 - extra.length * 8);
      state.technical = clamp(state.technical - missed.length * 3);
    }
    dossierFeedback.className = "feedback warn";
    dossierFeedback.textContent = `Revisa el expediente. Faltan ${missed.length} documento(s) clave y sobran ${extra.length} documento(s).`;
  }
  updateHud();
}

function renderErrors() {
  errorList.innerHTML = errorStatements
    .map(
      (item) => `
        <label class="check-row">
          <input type="checkbox" value="${item.id}" />
          <span>${item.text}</span>
        </label>
      `,
    )
    .join("");
}

function checkErrors() {
  const selected = new Set(Array.from(errorList.querySelectorAll("input:checked")).map((input) => input.value));
  const errors = errorStatements.filter((item) => item.error).map((item) => item.id);
  const missed = errors.filter((id) => !selected.has(id));
  const wrong = Array.from(selected).filter((id) => !errors.includes(id));
  if (!missed.length && !wrong.length) {
    if (!state.errorsAnswered) {
      state.score += 100;
      state.technical = clamp(state.technical + 8);
      state.decisionLog.push(`Dia ${state.day}: control previo detecto errores criticos.`);
    }
    state.errorsAnswered = true;
    errorFeedback.className = "feedback good";
    errorFeedback.textContent = "Excelente. Detectaste las practicas que ponen en riesgo el proceso.";
  } else {
    if (!state.errorsAnswered) {
      state.score += Math.max(10, 55 - missed.length * 10 - wrong.length * 10);
      state.technical = clamp(state.technical - 4);
    }
    errorFeedback.className = "feedback warn";
    errorFeedback.textContent = `Ajusta tu lectura: faltaron ${missed.length} error(es) y marcaste ${wrong.length} practica(s) correcta(s).`;
  }
  updateHud();
}

function renderProducerList() {
  producerList.innerHTML = producerItems
    .map(
      (item, index) => `
        <label class="check-row">
          <input type="checkbox" value="${index}" />
          <span>${item}</span>
        </label>
      `,
    )
    .join("");
}

function updateProducerReadiness() {
  const checked = producerList.querySelectorAll("input:checked").length;
  const percent = Math.round((checked / producerItems.length) * 100);
  producerReadiness.textContent = `${percent}%`;
  producerProgress.value = percent;
  if (percent === 100 && !state.producerCompleted) {
    state.score += 60;
    state.trust = clamp(state.trust + 6);
    state.producerCompleted = true;
    state.decisionLog.push(`Dia ${state.day}: oferta productiva verificada antes de continuar.`);
    updateHud();
  }
}

function checkPurchaseAnswer(answer) {
  const amount = Number(document.querySelector("#amountInput").value);
  const feedback = document.querySelector("#amountFeedback");
  if (!amount) {
    feedback.className = "feedback warn";
    feedback.textContent = "Primero ingresa un monto estimado.";
    return;
  }
  const correct = amount <= eightUit2026 ? "menor" : "mayor";
  if (answer === correct) {
    if (!state.amountAnswered) {
      state.score += 80;
      state.technical = clamp(state.technical + 8);
      state.decisionLog.push(`Dia ${state.day}: monto S/ ${amount.toLocaleString("es-PE")} clasificado como compra ${correct}.`);
    }
    state.amountAnswered = true;
    feedback.className = "feedback good";
    feedback.textContent = `Correcto. S/ ${amount.toLocaleString("es-PE")} corresponde a compra ${correct}.`;
  } else {
    if (!state.amountAnswered) {
      state.score += 15;
      state.technical = clamp(state.technical - 5);
    }
    feedback.className = "feedback warn";
    feedback.textContent = `No exactamente. En 2026, hasta S/ ${eightUit2026.toLocaleString("es-PE")} es compra menor; por encima es compra mayor.`;
  }
  updateHud();
}

missionMap.addEventListener("click", (event) => {
  const button = event.target.closest(".map-button");
  if (!button) return;
  state.activeMission = Number(button.dataset.mission);
  renderMissionMap();
  renderMission();
});

missionCard.addEventListener("click", (event) => {
  const option = event.target.closest(".option-button");
  if (option) {
    applyOutcome(missions[state.activeMission].options[Number(option.dataset.option)]);
    return;
  }
  if (event.target.id === "nextMission") {
    if (state.activeMission === missions.length - 1) {
      document.querySelector("#final").scrollIntoView({ block: "start" });
      return;
    }
    state.activeMission += 1;
    renderMissionMap();
    renderMission();
  }
});

documentBank.addEventListener("click", (event) => {
  const card = event.target.closest(".document-card");
  if (!card) return;
  const id = card.dataset.doc;
  if (state.selectedDocs.has(id)) {
    state.selectedDocs.delete(id);
    card.classList.remove("is-selected");
  } else {
    state.selectedDocs.add(id);
    card.classList.add("is-selected");
  }
});

document.querySelector("#checkDossier").addEventListener("click", checkDossier);
document.querySelector("#nextDossier").addEventListener("click", () => {
  state.dossierIndex = (state.dossierIndex + 1) % dossierPhases.length;
  renderDossier();
});

document.querySelectorAll("[data-purchase-answer]").forEach((button) => {
  button.addEventListener("click", () => checkPurchaseAnswer(button.dataset.purchaseAnswer));
});

document.querySelector("#checkErrors").addEventListener("click", checkErrors);
producerList.addEventListener("change", updateProducerReadiness);

document.querySelector("#resetGame").addEventListener("click", () => {
  state.score = 0;
  state.technical = 45;
  state.trust = 45;
  state.time = 55;
  state.day = 1;
  state.activeMission = 0;
  state.completedMissions.clear();
  state.decisionLog = [];
  state.dossierIndex = 0;
  state.selectedDocs.clear();
  state.completedDossiers.clear();
  state.amountAnswered = false;
  state.errorsAnswered = false;
  state.producerCompleted = false;
  caseNote.textContent = "Primer encargo: ordenar la ruta antes de hablar de compras con productores.";
  document.querySelector("#amountInput").value = "";
  document.querySelector("#amountFeedback").textContent = "";
  missions.forEach((mission) => {
    delete mission.answered;
    delete mission.selectedTitle;
    delete mission.feedback;
    delete mission.note;
    delete mission.correct;
  });
  renderMissionMap();
  renderMission();
  renderDossier();
  renderErrors();
  renderProducerList();
  updateProducerReadiness();
  updateHud();
});

renderMissionMap();
renderMission();
renderDossier();
renderErrors();
renderProducerList();
updateProducerReadiness();
updateHud();
