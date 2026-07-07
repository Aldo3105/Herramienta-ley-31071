const driveFolder =
  "https://drive.google.com/drive/folders/1PrEvG3Scs8wERIrzp1V8SSp5vGJaC6km?usp=sharing";

const uit2026 = {
  amount: 5500,
  eightUit: 44000,
};

const libraryReviewedAt = "4 de julio de 2026";
const assistanceEndpoint = "https://script.google.com/macros/s/AKfycbxlG32r0qH5MEjenSVBpeqAbJ2bkimRaU7_mJdddmXSvlKgpvAbtB0PZs8TIJLMbuM/exec";

const resources = [
  {
    title: "Ruta de implementación Ley 31071",
    type: "Guía",
    tag: "ruta",
    category: "guías",
    description: "Documento base con fase previa, fases operativas, responsables, tiempos y alertas.",
    url: "https://docs.google.com/document/d/1UuSKXkwj3GJMxzCgZUaQvl2RST10DIAj/edit?usp=sharing&ouid=102792293732526682570&rtpof=true&sd=true",
    keywords: "fase previa ruta implementación sistematización sechura",
  },
  {
    title: "Modelo de resolución COMPRAGRO",
    type: "Modelo",
    tag: "resolución",
    category: "modelos",
    description: "Modelo para conformar el Comité de Compras Públicas de la Agricultura Familiar.",
    url: "https://drive.google.com/file/d/1aM57T1c6Xtd8NIy8upl094tTPm0BuSYX/view?usp=sharing",
    keywords: "resolución alcaldía conformación comité compragro",
  },
  {
    title: "Resolución de Alcaldía MPS",
    type: "Caso de referencia",
    tag: "resolución",
    category: "casos",
    description: "Ejemplo público de resolución de alcaldía vinculada a COMPRAGRO en Sechura.",
    url: "https://drive.google.com/file/d/1nGp1vAHakHkhzuR1Rw_ghhWY51x6KVHM/view?usp=sharing",
    keywords: "resolución alcaldía sechura mps comité compragro",
  },
  {
    title: "Modelo de requerimiento 31071",
    type: "Modelo editable",
    tag: "requerimiento",
    category: "modelos",
    description: "Formato referencial para sustentar la compra de alimentos de la agricultura familiar.",
    url: "https://docs.google.com/document/d/1H_THwqzuhK45xs5kzP4r2aQru1UOCiLF/edit?usp=sharing&ouid=102792293732526682570&rtpof=true&sd=true",
    keywords: "requerimiento compra menor bellavista informe técnico especificaciones",
  },
  {
    title: "Requerimiento de compra de arroz MPS",
    type: "PDF",
    tag: "requerimiento",
    category: "casos",
    description: "Caso de referencia de compra de arroz desde la Municipalidad Provincial de Sechura.",
    url: "https://drive.google.com/file/d/1__TRtEs9BQGCtixnJwSEly8YhAyajdEJ/view?usp=sharing",
    keywords: "arroz pca compra mayor sechura requerimiento",
  },
  {
    title: "Bases estándar para compras mayores",
    type: "Modelo editable",
    tag: "compra mayor",
    category: "modelos",
    description: "Documento base para convocatorias públicas mayores a 8 UIT.",
    url: "https://docs.google.com/document/d/14fNHk916VE5QKPvj1gkRy4xx5kf3jgah/edit?usp=sharing&ouid=102792293732526682570&rtpof=true&sd=true",
    keywords: "bases estándar convocatoria buena pro propuestas",
  },
  {
    title: "Bases integradas COMPRE",
    type: "PDF",
    tag: "compra mayor",
    category: "casos",
    description: "Referencia complementaria para revisar bases integradas de un proceso.",
    url: "https://drive.google.com/file/d/18N4wO4bW4O6zech7i63S69dVYtTo_9_D/view?usp=sharing",
    keywords: "bases integradas compra mayor compre",
  },
  {
    title: "Hoja de ruta compras menores COMPRAGRO",
    type: "Modelo editable",
    tag: "compra menor",
    category: "modelos",
    description: "Documento de apoyo para procesos simplificados iguales o menores a 8 UIT.",
    url: "https://drive.google.com/file/d/1yDNDINmzwO--5VdgEc6hHiEn2GYkosOW/view?usp=sharing",
    keywords: "compra menor bases simplificadas proceso simplificado",
  },
  {
    title: "D.S. N° 012-2021-MIDAGRI",
    type: "Norma",
    tag: "normativa",
    category: "normativa",
    description: "Reglamento de la Ley N° 31071.",
    url: "https://drive.google.com/file/d/1rUw5Oj0KTNcyOAY5EFus3M8TxTuuoGmI/view?usp=sharing",
    keywords: "reglamento ley 31071 decreto supremo midagri",
  },
  {
    title: "Guía orientadora COMPRAGRO",
    type: "Guía",
    tag: "COMPRAGRO",
    category: "guías",
    description: "Referencia para instalación, funciones y actuación del comité.",
    url: "https://drive.google.com/file/d/1QDrUbQW4kSJZ8H8pUVVH6kgkkbiuNRWE/view?usp=sharing",
    keywords: "guía orientadora comité compras públicas agricultura familiar",
  },
  {
    title: "Guía estándar",
    type: "Guía",
    tag: "guía",
    category: "guías",
    description: "Material orientador complementario para el procedimiento.",
    url: "https://drive.google.com/file/d/14OXLmMH3e7YvqK1OFv1-XIqeP7IsP3Vc/view?usp=sharing",
    keywords: "guía procedimiento compras",
  },
  {
    title: "Licenciatarios",
    type: "Excel",
    tag: "sello",
    category: "herramientas",
    description: "Base de consulta sobre licenciatarios vinculados a agricultura familiar.",
    url: "https://drive.google.com/file/d/1PNPNjbfHyijDqWTfZPGxttCNaT31CGtH/view?usp=sharing",
    keywords: "sello agricultura familiar productores licenciatarios midagri",
  },
  {
    title: "Díptico",
    type: "PDF",
    tag: "difusión",
    category: "difusión",
    description: "Material de difusión para explicar la Ley N° 31071.",
    url: "https://drive.google.com/file/d/1AdLxZdCd6Qa2If5XC3WPBK_CawGrGAWv/view?usp=sharing",
    keywords: "comunicación sensibilización difusión díptico",
  },
  {
    title: "Tríptico",
    type: "PDF",
    tag: "difusión",
    category: "difusión",
    description: "Material resumido para socializar la ruta con equipos municipales.",
    url: "https://drive.google.com/file/d/1wdYS9fNdYp6tQEW6S-KjhgbtrpiGWkdD/view?usp=sharing",
    keywords: "comunicación sensibilización difusión tríptico",
  },
];

const phases = [
  {
    id: "previa",
    shortId: "P",
    kicker: "Fase previa",
    title: "Fortalecimiento de capacidades e incidencia institucional",
    responsible: "PMA, MIDAGRI y funcionarios municipales",
    time: "6 meses (transversal)",
    summary:
      "Prepara a autoridades, funcionarios y actores territoriales para liderar la implementación cuando la Ley N° 31071 aún es poco conocida.",
    actions: [
      "Realizar incidencia política con alcalde, regidores y gerencias, mostrando beneficios para economía local y seguridad alimentaria.",
      "Capacitar a logística, desarrollo social, desarrollo económico, presupuesto y abastecimiento sobre normativa, requerimientos y compras.",
      "Articular con MIDAGRI, PRODUCE, gobiernos locales, regionales y otras entidades clave.",
      "Desplegar comunicación y sensibilización interna, comunitaria y con productores de agricultura familiar.",
    ],
    tip: "Esta fase no está en la ley, pero reduce resistencias y crea condiciones técnicas para que la ruta avance.",
    warning:
      "Si no se trabaja la fase previa, la municipalidad puede tener comité conformado pero sin capacidades ni soporte para ejecutar.",
    docs: ["Ruta de implementación Ley 31071", "Díptico", "Tríptico", "Guía orientadora COMPRAGRO"],
  },
  {
    id: "0",
    title: "Toma de decisión política",
    responsible: "Alcalde/sa y funcionarios",
    time: "1-3 semanas",
    summary:
      "La municipalidad formaliza el compromiso político, identifica el programa social que comprará alimentos y encarga el liderazgo técnico.",
    actions: [
      "Tomar la decisión formal de implementar compras públicas a la agricultura familiar.",
      "Identificar el programa social: PCA, comedores populares, Programa Vaso de Leche, alimentación escolar u otros.",
      "Designar un responsable técnico que lidere el proceso, como Desarrollo Social o Desarrollo Económico.",
    ],
    tip: "Sin decisión de la autoridad municipal, el COMPRAGRO no se conforma y la ruta queda detenida.",
    warning: "Deja evidencia del encargo y comunica la decisión a las áreas de presupuesto, logística y área usuaria.",
    docs: ["Ruta de implementación Ley 31071", "D.S. N° 012-2021-MIDAGRI"],
  },
  {
    id: "1",
    title: "Conformación del comité COMPRAGRO",
    responsible: "Alcalde/sa mediante Resolución de Alcaldía",
    time: "1-3 semanas",
    summary:
      "El COMPRAGRO conduce el proceso de compra. Debe crearse formalmente, con integrantes, roles y respaldo administrativo.",
    actions: [
      "Identificar tres miembros mínimos: presidente del área usuaria, secretario de logística o abastecimiento y vocal de Desarrollo Económico o área agraria.",
      "Emitir la Resolución de Alcaldía con nombres completos, cargos y funciones del comité.",
      "Notificar formalmente a cada integrante y programar la instalación del comité.",
      "Adecuar instrumentos de gestión: POI, PAC, presupuesto y procedimientos internos cuando corresponda.",
      "Revisar normativa y procesos administrativos internos para evitar trabas durante la compra.",
    ],
    tip: "En municipalidades pequeñas puede funcionar con tres personas si cada integrante entiende su rol.",
    warning: "Sin resolución de alcaldía, las acciones del comité carecen de respaldo formal.",
    docs: [
      "Modelo de resolución COMPRAGRO",
      "Resolución de Alcaldía MPS",
      "Guía orientadora COMPRAGRO",
      "Ruta de implementación Ley 31071",
    ],
  },
  {
    id: "2",
    title: "Planificación de la compra pública",
    responsible: "COMPRAGRO, Desarrollo Social, Presupuesto y Logística",
    time: "2-4 semanas",
    summary:
      "Se organiza la oferta local, se diagnostica la demanda pública y se define qué comprar, cuánto, cuándo y a quién.",
    actions: [
      "Mapear productores de agricultura familiar, productos disponibles, estacionalidad y volúmenes.",
      "Promover organización de productores mediante asociaciones o cooperativas agrarias cuando sea necesario.",
      "Identificar programas que requieren alimentos: PCA, comedores, Vaso de Leche, PAE, Cuna Más, INABIF, Aurora u otros.",
      "Estimar la demanda institucional en kilos, unidades, entregas, puntos de recepción y periodo de atención.",
      "Consultar calendarios de siembra y cosecha de MIDAGRI o Juntas de Usuarios de Agua.",
      "Realizar indagación de mercado y elaborar el cuadro de alimentos de la agricultura familiar.",
      "Organizar un espacio participativo con productores y aprobar la planificación con la autoridad municipal.",
    ],
    tip: "Desarrollo Económico conoce la oferta productiva; Desarrollo Social conoce la demanda del programa. La ruta necesita ambos lados.",
    warning:
      "Si la compra no se articula con presupuesto, PAC y cronograma institucional, puede quedar lista técnicamente pero sin ejecución.",
    docs: ["Ruta de implementación Ley 31071", "Licenciatarios", "Hoja de ruta compras menores COMPRAGRO"],
  },
  {
    id: "3",
    title: "Requerimiento y precio estimado",
    responsible: "Área usuaria y COMPRAGRO",
    time: "1 semana",
    summary:
      "El área usuaria formula el requerimiento técnico y el COMPRAGRO estima el precio para definir si corresponde compra menor o mayor.",
    actions: [
      "Elaborar el requerimiento con alimento, cantidad, peso, presentación, frecuencia, punto de entrega e inocuidad.",
      "Definir especificaciones técnicas compatibles con alimentos frescos de agricultura familiar.",
      "Sustentar el precio estimado con indagación de mercado, precios locales y referencias mayoristas o minoristas.",
      `Determinar el procedimiento: compra menor si el monto es igual o menor a 8 UIT (S/ ${uit2026.eightUit.toLocaleString("es-PE")} en 2026) o compra mayor si supera ese monto.`,
    ],
    tip: "El requerimiento debe ser técnico, pero no debe exigir condiciones propias de proveedores industriales si no son necesarias.",
    warning: "Sin indagación de mercado, el precio estimado pierde sustento y el proceso queda expuesto a observaciones.",
    docs: [
      "Modelo de requerimiento 31071",
      "Requerimiento de compra de arroz MPS",
      "D.S. N° 012-2021-MIDAGRI",
    ],
  },
  {
    id: "4A",
    title: "Proceso de compra menor",
    responsible: "COMPRAGRO",
    time: "1-2 semanas",
    summary:
      "Procedimiento simplificado para montos iguales o menores a 8 UIT, usando bases simplificadas y procedimientos internos del gobierno local.",
    actions: [
      "Contactar directamente a productores u organizaciones identificadas en la planificación.",
      "Solicitar propuesta técnica y económica.",
      "Evaluar y seleccionar al productor que cumple requisitos, disponibilidad y condiciones de entrega.",
      "Suscribir contrato o emitir liquidación de compra cuando corresponda.",
      "Recibir los alimentos y emitir la conformidad.",
    ],
    tip: "Para iniciar con una experiencia piloto, la compra menor suele ser el camino más rápido y manejable.",
    warning: "Aunque sea simplificada, conserva sustento de requerimiento, evaluación, recepción y conformidad.",
    docs: ["Hoja de ruta compras menores COMPRAGRO", "Modelo de requerimiento 31071"],
  },
  {
    id: "4B",
    title: "Proceso de compra mayor",
    responsible: "COMPRAGRO",
    time: "3-6 semanas",
    summary:
      "Procedimiento formal para montos mayores a 8 UIT, con convocatoria pública, bases estándar y etapas previstas por normativa.",
    actions: [
      "Publicar la convocatoria y bases en el portal institucional del municipio.",
      "Registrar participantes gratuitamente, de forma presencial o por correo electrónico.",
      "Recibir consultas y observaciones; el COMPRAGRO las absuelve e integra bases.",
      "Recibir propuestas dentro del plazo establecido.",
      "Evaluar propuestas sobre 100 puntos y aplicar bonificaciones cuando correspondan.",
      "Otorgar la buena pro en acto público y publicar resultados.",
      "Esperar consentimiento si hay dos o más ofertas y no se presenta apelación.",
    ],
    tip: "Los productores de agricultura familiar no necesitan RNP para participar bajo la Ley N° 31071.",
    warning: "La propuesta económica no debe ser mayor al precio estimado sustentado por el COMPRAGRO.",
    docs: ["Bases estándar para compras mayores", "Bases integradas COMPRE", "Guía estándar"],
  },
  {
    id: "5",
    title: "Ejecución contractual y gestión de pagos",
    responsible: "Área usuaria y Logística",
    time: "Según contrato; normalmente 3 a 5 remesas",
    summary:
      "Se supervisa el cumplimiento contractual, la recepción de alimentos y el pago oportuno a productores.",
    actions: [
      "Suscribir contrato con objeto, obligaciones, forma de pago, penalidades, solución de controversias e integridad.",
      "Recibir alimentos en el lugar, cantidad, plazo y calidad pactados.",
      "Emitir conformidad dentro del plazo aplicable después de cada recepción.",
      "Gestionar el pago conforme a tesorería y reconocer intereses legales si hubiera retraso injustificado.",
    ],
    tip: "El pago oportuno sostiene la confianza del productor en la compra pública.",
    warning: "Documenta cada remesa, conformidad y observación de calidad o inocuidad.",
    docs: ["Bases estándar para compras mayores", "Modelo de requerimiento 31071"],
  },
  {
    id: "6",
    title: "Seguimiento y reporte semestral",
    responsible: "COMPRAGRO y Gerencia Municipal",
    time: "Julio y enero",
    summary:
      "La municipalidad sistematiza resultados, evalúa el proceso y reporta avances semestrales para mejorar el siguiente ciclo.",
    actions: [
      "Preparar informe de seguimiento con resumen ejecutivo, alimentos comprados, cantidades, montos y análisis presupuestal.",
      "Registrar logros, dificultades, aspectos a mejorar y proyecciones.",
      "Remitir el informe a MIDAGRI y PRODUCE en julio y enero.",
      "Usar el informe para mejorar la planificación del siguiente año.",
    ],
    tip: "El reporte convierte la experiencia en aprendizaje institucional y evidencia para continuidad política.",
    warning: "No reportar semestralmente puede generar responsabilidades funcionales.",
    docs: ["Ruta de implementación Ley 31071", "D.S. N° 012-2021-MIDAGRI"],
  },
];

const quickPrompts = [
  "Necesito un modelo de resolución COMPRAGRO",
  "Necesito un modelo de requerimiento",
  "¿Qué hago en la fase previa?",
  "¿Cuándo es compra menor?",
  "Dame las bases para compra mayor",
  "¿Cómo planifico oferta y demanda?",
  "Necesito asistencia técnica",
  "¿Qué errores debo evitar?",
];

const responseRules = [
  {
    keys: ["asistencia", "soporte", "contacto", "edson", "midagri", "ayuda tecnica", "ayuda técnica"],
    response:
      "Para solicitar asistencia técnica, complete el formulario de esta página indicando fase, cargo, municipalidad y necesidad concreta. Cuando el servidor privado esté conectado, los datos se enviarán solo a la base administrada por el responsable de la herramienta.",
    resources: ["Ruta de implementación Ley 31071", "Guía orientadora COMPRAGRO"],
  },
  {
    keys: ["resolucion", "resolución", "alcaldia", "alcaldía", "conformar compragro", "comité compragro", "comite compragro"],
    response:
      "Para conformar el COMPRAGRO, la municipalidad debe emitir una Resolución de Alcaldía con integrantes y roles mínimos: presidencia del área usuaria, secretaría de logística o abastecimiento y vocal de Desarrollo Económico o área agraria.\n\nEstructura sugerida:\n1. Vistos y base legal: Ley N° 31071 y D.S. N° 012-2021-MIDAGRI.\n2. Considerandos: necesidad de implementar compras de alimentos de origen en la agricultura familiar.\n3. Artículo 1: conformar el COMPRAGRO.\n4. Artículo 2: designar integrantes con nombres, cargos y roles.\n5. Artículo 3: disponer instalación, funciones y coordinación con áreas competentes.\n6. Artículo 4: notificar a integrantes y publicar o archivar según procedimiento interno.",
    resources: ["Modelo de resolución COMPRAGRO", "Resolución de Alcaldía MPS", "Guía orientadora COMPRAGRO"],
  },
  {
    keys: ["requerimiento", "requerir", "informe tecnico", "informe técnico", "especificaciones"],
    response:
      "Para un requerimiento de compra, adapta: área usuaria, programa social, base legal, finalidad pública, productos, cantidades, presentación, condiciones de entrega, inocuidad, requisitos de admisión, presupuesto y conclusiones.\n\nIncluye una justificación clara de finalidad pública: mejorar alimentación de beneficiarios y promover compra directa a agricultores familiares.",
    resources: ["Modelo de requerimiento 31071", "Requerimiento de compra de arroz MPS"],
  },
  {
    keys: ["fase previa", "fortalecimiento", "incidencia", "sensibilizacion", "sensibilización", "capacidades"],
    response:
      "La fase previa prepara el terreno institucional. Trabaja cuatro líneas: incidencia política con alcalde y regidores; capacitación a logística, presupuesto, desarrollo social y económico; articulación con MIDAGRI, PRODUCE y otros actores; y comunicación con comunidad y productores. Puede tomar alrededor de 6 meses y es transversal al proceso.",
    resources: ["Ruta de implementación Ley 31071", "Díptico", "Tríptico", "Guía orientadora COMPRAGRO"],
  },
  {
    keys: ["compra menor", "8 uit", "ocho uit", "menor", "piloto", "bases simplificadas"],
    response:
      `La compra menor aplica cuando el monto estimado es igual o menor a 8 UIT. Para 2026, la UIT es S/ ${uit2026.amount.toLocaleString("es-PE")}, por lo que 8 UIT equivalen a S/ ${uit2026.eightUit.toLocaleString("es-PE")}. El proceso es simplificado: contactar productores, solicitar propuesta técnica y económica, evaluar, contratar o emitir liquidación de compra, recibir alimentos y emitir conformidad.`,
    resources: ["Hoja de ruta compras menores COMPRAGRO", "Modelo de requerimiento 31071"],
  },
  {
    keys: ["compra mayor", "bases", "convocatoria", "buena pro", "propuestas", "apelacion", "apelación"],
    response:
      `La compra mayor aplica cuando el monto estimado supera 8 UIT, es decir, más de S/ ${uit2026.eightUit.toLocaleString("es-PE")} en 2026. Requiere convocatoria pública, registro de participantes, consultas y observaciones, integración de bases, presentación de propuestas, evaluación, otorgamiento y consentimiento de la buena pro.`,
    resources: ["Bases estándar para compras mayores", "Bases integradas COMPRE", "Guía estándar"],
  },
  {
    keys: ["oferta", "demanda", "productores", "calendario", "siembra", "cosecha", "espacio participativo"],
    response:
      "Para planificar, cruza dos mapas: demanda pública y oferta local. En demanda identifica programas, beneficiarios, alimentos, cantidades, frecuencia y puntos de entrega. En oferta mapea productores, productos, estacionalidad, volúmenes, asociaciones o cooperativas. Luego valida en un espacio participativo y usa la indagación de mercado para precios y disponibilidad.",
    resources: ["Ruta de implementación Ley 31071", "Licenciatarios", "Hoja de ruta compras menores COMPRAGRO"],
  },
  {
    keys: ["pac", "poi", "plan anual", "presupuesto", "financiamiento", "instrumentos de gestion", "instrumentos de gestión"],
    response:
      "La ruta debe articularse con POI, presupuesto, logística y PAC cuando corresponda. La recomendación es revisar estos instrumentos desde la conformación del COMPRAGRO y cerrar la planificación solo cuando el área de presupuesto y logística confirmen viabilidad.",
    resources: ["Ruta de implementación Ley 31071", "Guía orientadora COMPRAGRO"],
  },
  {
    keys: ["precio", "indagacion", "indagación", "mercado", "estimado", "valor referencial"],
    response:
      "El precio estimado se sustenta con indagación de mercado: visitas o consultas a productores, asociaciones o comunidades, precios locales, referencias mayoristas o minoristas y condiciones reales de entrega. Ese monto define si la compra será menor o mayor.",
    resources: ["Modelo de requerimiento 31071", "Ruta de implementación Ley 31071"],
  },
  {
    keys: ["contrato", "pago", "conformidad", "remesa", "penalidad", "penalidades", "intereses"],
    response:
      "En ejecución contractual, el contrato debe precisar objeto, obligaciones, entregas o remesas, forma de pago, penalidades, solución de controversias e integridad. El área usuaria emite conformidad tras recibir alimentos y logística o tesorería gestiona el pago. Si hay retraso injustificado, corresponde reconocer intereses legales.",
    resources: ["Bases estándar para compras mayores", "Modelo de requerimiento 31071"],
  },
  {
    keys: ["reporte", "semestral", "midagri", "produce", "seguimiento", "informe"],
    response:
      "El seguimiento semestral se reporta en julio y enero. Debe incluir resumen ejecutivo, alimentos comprados, cantidades, montos, análisis presupuestal, logros, dificultades, mejoras y proyecciones para el siguiente año.",
    resources: ["Ruta de implementación Ley 31071", "D.S. N° 012-2021-MIDAGRI"],
  },
  {
    keys: ["sello", "licenciatarios", "agricultura familiar", "registro", "senasa", "bpa"],
    response:
      "Para validar productores, revisa condición de agricultura familiar, sello o registro aplicable, disponibilidad productiva y requisitos sanitarios pertinentes. En productos frescos, pide condiciones proporcionales al riesgo y evita requisitos que excluyan sin necesidad a agricultores familiares.",
    resources: ["Licenciatarios", "Guía orientadora COMPRAGRO"],
  },
  {
    keys: ["rnp", "registro nacional de proveedores"],
    response:
      "En compras de alimentos de agricultura familiar bajo la Ley N° 31071, no se debe exigir RNP a productores. Exigirlo puede desincentivar participación y dejar desierto el proceso.",
    resources: ["Ruta de implementación Ley 31071", "D.S. N° 012-2021-MIDAGRI"],
  },
  {
    keys: ["errores", "evitar", "observacion", "observación", "riesgos"],
    response:
      "Errores frecuentes: no conformar formalmente el COMPRAGRO, no articular POI/PAC/presupuesto, exigir RNP, no hacer indagación de mercado, pedir requisitos de grandes empresas, no documentar conformidades y olvidar el reporte semestral.",
    resources: ["Ruta de implementación Ley 31071", "Guía orientadora COMPRAGRO"],
  },
  {
    keys: ["documentos", "modelos", "formatos", "drive", "archivos", "biblioteca"],
    response:
      "La biblioteca incluye ruta de implementación, modelo de resolución COMPRAGRO, resolución de referencia de Sechura, modelo de requerimiento, requerimiento de arroz, bases estándar, hoja de ruta de compras menores, normativa, guías, licenciatarios y materiales de difusión.",
    resources: resources.map((resource) => resource.title),
  },
];

const resourceFilters = [
  { label: "Todos", value: "todos" },
  { label: "Modelos", value: "modelos" },
  { label: "Casos", value: "casos" },
  { label: "Guías", value: "guías" },
  { label: "Normativa", value: "normativa" },
  { label: "Herramientas", value: "herramientas" },
  { label: "Difusión", value: "difusión" },
];

let activeResourceFilter = "todos";
let showAllResources = false;

const phaseList = document.querySelector("#phaseList");
const phaseDetail = document.querySelector("#phaseDetail");
const resourceGrid = document.querySelector("#resourceGrid");
const resourceSearch = document.querySelector("#resourceSearch");
const resourceFiltersNode = document.querySelector("#resourceFilters");
const toggleResourceLimit = document.querySelector("#toggleResourceLimit");
const quickPromptsNode = document.querySelector("#quickPrompts");
const chatMessages = document.querySelector("#chatMessages");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const assistanceForm = document.querySelector("#assistanceForm");
const formStatus = document.querySelector("#formStatus");

function resourceByTitle(title) {
  return resources.find((resource) => resource.title === title);
}

function renderPhases() {
  phaseList.innerHTML = phases
    .map(
      (phase, index) => `
        <button class="phase-button${index === 0 ? " is-active" : ""}" type="button" data-phase="${phase.id}">
          <span class="phase-number">${phase.shortId || phase.id}</span>
          <span>
            <span class="phase-title">${phase.title}</span>
            <span class="phase-meta">${phase.time} · ${phase.responsible}</span>
          </span>
        </button>
      `,
    )
    .join("");

  phaseList.addEventListener("click", (event) => {
    const button = event.target.closest(".phase-button");
    if (!button) return;
    const phase = phases.find((item) => item.id === button.dataset.phase);
    setActivePhase(phase.id);
  });

  renderPhaseDetail(phases[0]);
}

function setActivePhase(id) {
  document.querySelectorAll(".phase-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.phase === id);
  });
  renderPhaseDetail(phases.find((phase) => phase.id === id));
}

function renderPhaseDetail(phase) {
  const docLinks = phase.docs
    .map(resourceByTitle)
    .filter(Boolean)
    .map(
      (resource) =>
        `<a class="pill" href="${resource.url}" target="_blank" rel="noreferrer">${resource.title}</a>`,
    )
    .join("");

  phaseDetail.innerHTML = `
    <span class="detail-kicker">${phase.kicker || `Fase ${phase.id}`}</span>
    <h3>${phase.title}</h3>
    <p class="detail-summary">${phase.summary}</p>
    <div class="detail-meta">
      <div class="meta-item">
        <span>Responsable</span>
        <strong>${phase.responsible}</strong>
      </div>
      <div class="meta-item">
        <span>Tiempo estimado</span>
        <strong>${phase.time}</strong>
      </div>
    </div>
    <h4>Acciones clave</h4>
    <ol>${phase.actions.map((action) => `<li>${action}</li>`).join("")}</ol>
    <div class="notice"><strong>Consejo:</strong> ${phase.tip}</div>
    <div class="notice warning"><strong>Alerta:</strong> ${phase.warning}</div>
    <div class="phase-docs">${docLinks}</div>
  `;
}

function renderResourceFilters() {
  resourceFiltersNode.innerHTML = resourceFilters
    .map(
      (filter) =>
        `<button class="filter-chip${filter.value === activeResourceFilter ? " is-active" : ""}" type="button" data-filter="${filter.value}">${filter.label}</button>`,
    )
    .join("");

  resourceFiltersNode.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-chip");
    if (!button) return;
    activeResourceFilter = button.dataset.filter;
    renderResourceFilters();
    renderResources(resourceSearch.value);
  });
}

function renderResources(filter = "") {
  const query = normalize(filter);
  const visibleResources = resources.filter((resource) => {
    const categoryMatch = activeResourceFilter === "todos" || resource.category === activeResourceFilter;
    const haystack = normalize(
      `${resource.title} ${resource.type} ${resource.tag} ${resource.category} ${resource.description} ${resource.keywords}`,
    );
    return categoryMatch && haystack.includes(query);
  });
  const displayedResources = showAllResources ? visibleResources : visibleResources.slice(0, 3);

  resourceGrid.innerHTML = displayedResources.length
    ? displayedResources
        .map(
          (resource) => `
            <article class="resource-card">
              <span class="pill">${resource.type}</span>
              <h3>${resource.title}</h3>
              <p>${resource.description}</p>
              <small class="doc-version">Recurso adaptable · revisión ${libraryReviewedAt}</small>
              <footer>
                <span class="phase-meta">${resource.tag}</span>
                <a class="button secondary" href="${resource.url}" target="_blank" rel="noreferrer">Abrir</a>
              </footer>
            </article>
          `,
        )
        .join("")
    : `<p class="empty-state">No se encontraron documentos con ese filtro.</p>`;

  if (toggleResourceLimit) {
    toggleResourceLimit.hidden = visibleResources.length <= 3;
    toggleResourceLimit.textContent = showAllResources
      ? "Mostrar solo 3 documentos"
      : `Ver biblioteca completa (${visibleResources.length})`;
  }
}

function renderQuickPrompts() {
  quickPromptsNode.innerHTML = quickPrompts
    .map((prompt) => `<button class="prompt-chip" type="button">${prompt}</button>`)
    .join("");

  quickPromptsNode.addEventListener("click", (event) => {
    const button = event.target.closest(".prompt-chip");
    if (!button) return;
    askAssistant(button.textContent);
  });
}

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function linkedResources(titles) {
  const links = titles
    .map((title) => resourceByTitle(title))
    .filter(Boolean)
    .map((resource) => `<a href="${resource.url}" target="_blank" rel="noreferrer">${resource.title}</a>`);

  if (!links.length) return "";
  return `\n\nRecursos: ${links.join(" · ")}`;
}

function getAssistantResponse(question) {
  const normalizedQuestion = normalize(question);
  const rule = responseRules.find((item) =>
    item.keys.some((key) => normalizedQuestion.includes(normalize(key))),
  );

  if (rule) {
    return `${rule.response}${linkedResources(rule.resources)}`;
  }

  return `Puedo orientarte por fase, tipo de compra o documento. Prueba con: resolución COMPRAGRO, modelo de requerimiento, fase previa, oferta y demanda, compra menor, compra mayor, UIT 2026, PAC/POI, contrato, reporte semestral, asistencia técnica o errores frecuentes.\n\nSi la consulta requiere seguimiento, completa el formulario de asistencia técnica. El contacto institucional está al final de la página.\n\nBiblioteca completa: <a href="${driveFolder}" target="_blank" rel="noreferrer">abrir carpeta Drive</a>`;
}

function addMessage(role, html) {
  const message = document.createElement("div");
  message.className = `message ${role}`;
  message.innerHTML = html;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function askAssistant(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;
  addMessage("user", escapeHtml(cleanQuestion));
  addMessage("bot", getAssistantResponse(cleanQuestion));
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function buildAssistanceRecord(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  return {
    fecha: new Date().toLocaleString("es-PE"),
    nombre: (data.nombre || "").trim(),
    cargo: (data.cargo || "").trim(),
    municipalidad: (data.municipalidad || "").trim(),
    region: (data.region || "").trim(),
    provincia: (data.provincia || "").trim(),
    distrito: (data.distrito || "").trim(),
    correo: (data.correo || "").trim(),
    telefono: (data.telefono || "").trim(),
    fase: (data.fase || "").trim(),
    necesidad: (data.necesidad || "").trim(),
  };
}

async function sendAssistanceRecord(record) {
  if (!assistanceEndpoint) return false;
  await fetch(assistanceEndpoint, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(record),
  });
  return true;
}

resourceSearch.addEventListener("input", (event) => renderResources(event.target.value));

toggleResourceLimit.addEventListener("click", () => {
  showAllResources = !showAllResources;
  renderResources(resourceSearch.value);
});

assistanceForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const record = buildAssistanceRecord(assistanceForm);

  if (!assistanceEndpoint) {
    formStatus.textContent =
      "El formulario está listo, pero falta conectar un servidor privado. Por seguridad, los datos no se guardaron en esta página.";
    return;
  }

  formStatus.textContent = "Enviando solicitud al servidor privado...";

  try {
    await sendAssistanceRecord(record);
    assistanceForm.reset();
    formStatus.textContent =
      "Solicitud enviada. Los datos no se muestran en la página pública y serán revisados desde el servidor privado.";
  } catch (error) {
    formStatus.textContent =
      "No se pudo enviar la solicitud al servidor privado. Intente nuevamente o verifique la configuración del endpoint.";
  }
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  askAssistant(chatInput.value);
  chatInput.value = "";
  chatInput.focus();
});

renderPhases();
renderResourceFilters();
renderResources();
renderQuickPrompts();
addMessage(
  "bot",
  "Hola. Puedo ayudarte a ubicar fases, documentos y modelos para implementar la Ley N° 31071 en una municipalidad.",
);
