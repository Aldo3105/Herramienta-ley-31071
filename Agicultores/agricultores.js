const profileOptions = [
  {
    id: "individual",
    label: "Individual",
    badge: "Productor individual",
    requirements: [
      "Acreditar condición de agricultor familiar, sello o registro aplicable.",
      "Contar con DNI y datos de contacto actualizados.",
      "Declarar disponibilidad real del producto, cantidad, calendario y lugar de producción.",
      "Presentar propuesta técnica y económica firmada.",
      "Contar con cuenta bancaria o medio de pago definido por la entidad.",
    ],
  },
  {
    id: "asociacion",
    label: "Asociación",
    badge: "Organización de productores",
    requirements: [
      "Acreditar representación de quien firma la propuesta.",
      "Tener RUC, datos de contacto y domicilio de la organización.",
      "Consolidar la oferta de los socios: producto, volumen, calidad y calendario.",
      "Presentar propuesta técnica y económica en nombre de la organización.",
      "Acordar internamente responsabilidades de entrega, calidad y pago a socios.",
    ],
  },
  {
    id: "cooperativa",
    label: "Cooperativa",
    badge: "Cooperativa agraria",
    requirements: [
      "Acreditar representación legal y vigencia de poderes cuando las bases lo soliciten.",
      "Consolidar oferta productiva de socios y plan de entregas.",
      "Revisar si aplica bonificación o condición prevista para cooperativas agrarias.",
      "Presentar propuesta técnica y económica con precio, cantidad y cronograma.",
      "Preparar documentos para contrato, cuenta CCI y responsables de entrega.",
    ],
  },
  {
    id: "consorcio",
    label: "Consorcio",
    badge: "Consorcio de agricultura familiar",
    requirements: [
      "Definir integrantes, representante común, domicilio común y obligaciones de cada parte.",
      "Preparar promesa de consorcio según lo indicado en las bases.",
      "Evitar que un integrante presente otra propuesta individual en el mismo proceso.",
      "Consolidar una sola oferta técnica y económica.",
      "Formalizar el consorcio si resulta ganador y las bases lo exigen.",
    ],
  },
];

const productOptions = [
  {
    id: "fresh",
    label: "Fresco",
    note: "Frutas, hortalizas, granos u otros alimentos frescos.",
    requirements: [
      "Producto fresco, sano, limpio, entero y apto para consumo humano.",
      "Condiciones de transporte y entrega que eviten contaminación o deterioro.",
      "Buenas prácticas agrícolas o requisitos sanitarios cuando la convocatoria lo indique.",
    ],
  },
  {
    id: "processed",
    label: "Procesado",
    note: "Alimentos con pilado, selección, empaque u otro tratamiento.",
    requirements: [
      "Presentación, empaque, peso y rotulado conforme a las especificaciones técnicas.",
      "Sustento de inocuidad o autorización sanitaria cuando corresponda al producto.",
      "Capacidad para entregar lotes homogéneos y verificables.",
    ],
  },
  {
    id: "fishery",
    label: "Hidrobiológico",
    note: "Acuicultura o pesca artesanal.",
    requirements: [
      "Permiso, título habilitante o documento aplicable del sector Producción cuando corresponda.",
      "Manejo de frío, transporte e inocuidad según la naturaleza del alimento.",
      "Trazabilidad mínima de origen, cantidad y punto de entrega.",
    ],
  },
];

const purchaseOptions = [
  {
    id: "minor",
    label: "Compra menor",
    requirements: [
      "Monto igual o menor a 8 UIT.",
      "Proceso simplificado con contacto directo o solicitud de propuesta.",
      "Revisar requerimiento, entregar oferta y conservar sustento de entrega.",
    ],
  },
  {
    id: "major",
    label: "Compra mayor",
    requirements: [
      "Monto mayor a 8 UIT.",
      "Registro gratuito como participante dentro del plazo de la convocatoria.",
      "Presentación de anexos, declaraciones juradas, propuesta técnica y propuesta económica.",
      "Atender consultas, observaciones, evaluación y buena pro según cronograma.",
    ],
  },
];

const readinessItems = [
  {
    id: "identity",
    label: "Tengo claro si participaré solo, en asociación, cooperativa o consorcio.",
    next: "Define tu forma de participación con otros productores o con tu organización.",
  },
  {
    id: "product",
    label: "Sé qué producto puedo ofrecer, en qué cantidad y en qué meses.",
    next: "Ordena tu oferta: producto, volumen, calidad, cosecha y calendario.",
  },
  {
    id: "proof",
    label: "Puedo acreditar mi vínculo con agricultura familiar o registro aplicable.",
    next: "Revisa el sello, registro o documento que te pedirá la convocatoria.",
  },
  {
    id: "quality",
    label: "Mi producto cumple condiciones de calidad, inocuidad y entrega.",
    next: "Verifica frescura, empaque, transporte, inocuidad y punto de entrega.",
  },
  {
    id: "price",
    label: "Tengo calculado mi precio y mis costos de entrega.",
    next: "Calcula costo de producción, transporte, empaque, merma y margen razonable.",
  },
  {
    id: "proposal",
    label: "Puedo preparar y firmar una propuesta técnica y económica.",
    next: "Completa tu propuesta con datos claros y revisa los anexos de las bases.",
  },
];

const routeSteps = [
  {
    title: "1. Ordena tu oferta",
    body: "Define qué alimento puedes vender, cuánto tienes disponible, cuándo cosechas y dónde puedes entregar.",
  },
  {
    title: "2. Revisa la convocatoria",
    body: "Lee objeto de compra, cantidad, precio estimado, calendario, requisitos y lugar de presentación.",
  },
  {
    title: "3. Prepara documentos",
    body: "Junta acreditación de agricultura familiar, propuesta, anexos, declaraciones juradas y documentos de representación.",
  },
  {
    title: "4. Presenta tu propuesta",
    body: "Entrega la propuesta dentro del plazo. En compra mayor, revisa registro, consultas, observaciones y folios.",
  },
  {
    title: "5. Si ganas, cumple el contrato",
    body: "Entrega alimentos en cantidad, calidad, lugar y fecha acordados. Pide conformidad y seguimiento del pago.",
  },
  {
    title: "6. Guarda evidencia",
    body: "Conserva propuesta, guías, actas, conformidades, comprobantes y lecciones para próximas convocatorias.",
  },
];

const farmerPrompts = [
  "¿Necesito RNP?",
  "¿Qué documentos preparo?",
  "¿Cómo calculo mi precio?",
  "¿Qué pasa si gano?",
  "¿Qué es una compra menor?",
  "¿Cómo participo como asociación?",
];

const farmerRules = [
  {
    keys: ["rnp", "registro nacional"],
    response:
      "Para compras bajo la Ley N° 31071 no corresponde exigir RNP a productores de agricultura familiar. Si una base lo pide, conviene consultar u observar el requisito dentro del plazo.",
  },
  {
    keys: ["documentos", "requisitos", "preparo", "papeles"],
    response:
      "Prepara: acreditación de agricultura familiar o registro aplicable, DNI o representación, datos de contacto, oferta técnica, oferta económica, disponibilidad del producto, condiciones de entrega y cuenta de pago. Si eres organización, agrega RUC y representación legal cuando las bases lo pidan.",
  },
  {
    keys: ["precio", "costos", "costo"],
    response:
      "Calcula tu precio sumando producción, cosecha, selección, empaque, transporte, merma, impuestos o comprobantes aplicables y un margen razonable. No ofertes por debajo de tu costo real.",
  },
  {
    keys: ["gano", "buena pro", "contrato", "entrega"],
    response:
      "Si ganas, revisa el contrato, calendario de entregas, lugar, calidad, penalidades y forma de pago. Entrega con evidencia, solicita conformidad y conserva documentos para el cobro.",
  },
  {
    keys: ["compra menor", "8 uit", "menor"],
    response:
      "La compra menor aplica cuando el monto estimado es igual o menor a 8 UIT. Suele ser más simple: la municipalidad solicita propuesta, evalúa, contrata o emite liquidación, recibe alimentos y paga según conformidad.",
  },
  {
    keys: ["compra mayor", "convocatoria", "bases"],
    response:
      "En compra mayor hay convocatoria pública, registro gratuito de participantes, consultas, presentación de propuestas, evaluación y buena pro. Lee el calendario con cuidado porque cada etapa tiene plazo.",
  },
  {
    keys: ["asociacion", "asociación", "cooperativa", "organizacion", "organización"],
    response:
      "Como asociación o cooperativa, ordenen la oferta de los socios, definan quién firma, preparen documentos de representación, consoliden volúmenes y acuerden cómo distribuir entregas, pagos y responsabilidades.",
  },
  {
    keys: ["sello", "agricultura familiar", "licencia", "registro"],
    response:
      "La convocatoria puede pedir acreditar condición de agricultura familiar mediante sello, licencia, registro u otro documento aplicable. Revisa exactamente qué acepta la municipalidad antes de presentar tu propuesta.",
  },
  {
    keys: ["pago", "conformidad", "cobrar"],
    response:
      "Para cobrar necesitas entregar conforme a contrato o requerimiento. El área usuaria emite conformidad y luego se tramita el pago. Guarda guías, actas, conformidad y comprobantes.",
  },
];

let selectedProfile = profileOptions[0].id;
let selectedProduct = productOptions[0].id;
let selectedPurchase = purchaseOptions[0].id;
const checkedReadiness = new Set();

const profileNode = document.querySelector("#profileOptions");
const productNode = document.querySelector("#productOptions");
const purchaseNode = document.querySelector("#purchaseOptions");
const scenarioBadge = document.querySelector("#scenarioBadge");
const requirementList = document.querySelector("#requirementList");
const readinessChecklist = document.querySelector("#readinessChecklist");
const readinessScore = document.querySelector("#readinessScore");
const readinessMessage = document.querySelector("#readinessMessage");
const nextStep = document.querySelector("#nextStep");
const producerRoute = document.querySelector("#producerRoute");
const proposalForm = document.querySelector("#proposalForm");
const proposalOutput = document.querySelector("#proposalOutput");
const farmerPromptsNode = document.querySelector("#farmerPrompts");
const farmerChatMessages = document.querySelector("#farmerChatMessages");
const farmerChatForm = document.querySelector("#farmerChatForm");
const farmerChatInput = document.querySelector("#farmerChatInput");

function renderSegmented(container, options, selectedId, onChange) {
  container.innerHTML = options
    .map(
      (option) =>
        `<button class="segment${option.id === selectedId ? " is-active" : ""}" type="button" data-id="${option.id}">${option.label}</button>`,
    )
    .join("");

  container.onclick = (event) => {
    const button = event.target.closest(".segment");
    if (!button) return;
    onChange(button.dataset.id);
  };
}

function selectedFrom(options, id) {
  return options.find((option) => option.id === id);
}

function renderRequirements() {
  const profile = selectedFrom(profileOptions, selectedProfile);
  const product = selectedFrom(productOptions, selectedProduct);
  const purchase = selectedFrom(purchaseOptions, selectedPurchase);
  const requirements = [
    ...profile.requirements,
    ...product.requirements,
    ...purchase.requirements,
  ];

  scenarioBadge.textContent = profile.badge;
  requirementList.innerHTML = requirements.map((item) => `<li>${item}</li>`).join("");
}

function renderReadiness() {
  readinessChecklist.innerHTML = readinessItems
    .map(
      (item) => `
        <label class="check-item">
          <input type="checkbox" value="${item.id}" ${checkedReadiness.has(item.id) ? "checked" : ""} />
          <span>${item.label}</span>
        </label>
      `,
    )
    .join("");

  readinessChecklist.onchange = (event) => {
    const checkbox = event.target;
    if (checkbox.checked) {
      checkedReadiness.add(checkbox.value);
    } else {
      checkedReadiness.delete(checkbox.value);
    }
    updateProgress();
  };

  updateProgress();
}

function updateProgress() {
  const percent = Math.round((checkedReadiness.size / readinessItems.length) * 100);
  const degrees = Math.round((percent / 100) * 360);
  document.querySelector(".progress-ring").style.background = `
    radial-gradient(circle at center, #fff 57%, transparent 58%),
    conic-gradient(var(--green) 0deg ${degrees}deg, #dce8df ${degrees}deg 360deg)
  `;
  readinessScore.textContent = `${percent}%`;
  readinessMessage.textContent =
    percent === 100
      ? "Tienes una base sólida para revisar una convocatoria."
      : "Sigue completando tu preparación antes de presentar una propuesta.";

  const pending = readinessItems.find((item) => !checkedReadiness.has(item.id));
  nextStep.innerHTML = pending
    ? `<strong>Siguiente paso:</strong> ${pending.next}`
    : "<strong>Siguiente paso:</strong> Revisa las bases de la convocatoria y prepara tus anexos.";
}

function renderRoute() {
  producerRoute.innerHTML = routeSteps
    .map(
      (step) => `
        <article class="route-card">
          <h3>${step.title}</h3>
          <p>${step.body}</p>
        </article>
      `,
    )
    .join("");
}

function buildProposal(event) {
  event.preventDefault();
  const product = document.querySelector("#proposalProduct").value.trim() || "[producto]";
  const quantity = document.querySelector("#proposalQuantity").value.trim() || "[cantidad]";
  const place = document.querySelector("#proposalPlace").value.trim() || "[lugar de producción]";
  const price = document.querySelector("#proposalPrice").value.trim() || "[precio]";
  const delivery = document.querySelector("#proposalDelivery").value.trim() || "[condiciones de entrega]";

  proposalOutput.textContent = `Resumen de oferta:
Producto: ${product}
Cantidad disponible: ${quantity}
Origen: ${place}
Precio referencial: ${price}
Entrega: ${delivery}

Declaro que cuento con disponibilidad del producto indicado y que revisaré las especificaciones técnicas, requisitos sanitarios, cronograma y anexos de la convocatoria antes de presentar mi propuesta.`;
}

function renderFarmerPrompts() {
  farmerPromptsNode.innerHTML = farmerPrompts
    .map((prompt) => `<button class="prompt-chip" type="button">${prompt}</button>`)
    .join("");

  farmerPromptsNode.onclick = (event) => {
    const button = event.target.closest(".prompt-chip");
    if (!button) return;
    askFarmerAssistant(button.textContent);
  };
}

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function farmerResponse(question) {
  const normalizedQuestion = normalize(question);
  const rule = farmerRules.find((item) =>
    item.keys.some((key) => normalizedQuestion.includes(normalize(key))),
  );

  if (rule) return rule.response;
  return "Puedo orientarte sobre RNP, requisitos, precio, compra menor, compra mayor, asociación, contrato, entrega, conformidad y pago.";
}

function addFarmerMessage(role, text) {
  const message = document.createElement("div");
  message.className = `message ${role}`;
  message.textContent = text;
  farmerChatMessages.appendChild(message);
  farmerChatMessages.scrollTop = farmerChatMessages.scrollHeight;
}

function askFarmerAssistant(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;
  addFarmerMessage("user", cleanQuestion);
  addFarmerMessage("bot", farmerResponse(cleanQuestion));
}

farmerChatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  askFarmerAssistant(farmerChatInput.value);
  farmerChatInput.value = "";
  farmerChatInput.focus();
});

proposalForm.addEventListener("submit", buildProposal);

function renderProfileOptions() {
  renderSegmented(profileNode, profileOptions, selectedProfile, (id) => {
    selectedProfile = id;
    renderProfileOptions();
    renderRequirements();
  });
}

function renderProductOptions() {
  renderSegmented(productNode, productOptions, selectedProduct, (id) => {
    selectedProduct = id;
    renderProductOptions();
    renderRequirements();
  });
}

function renderPurchaseOptions() {
  renderSegmented(purchaseNode, purchaseOptions, selectedPurchase, (id) => {
    selectedPurchase = id;
    renderPurchaseOptions();
    renderRequirements();
  });
}

renderProfileOptions();
renderProductOptions();
renderPurchaseOptions();
renderRequirements();
renderReadiness();
renderRoute();
renderFarmerPrompts();
addFarmerMessage(
  "bot",
  "Hola. Te ayudo a prepararte para participar en compras públicas de alimentos de la agricultura familiar.",
);
