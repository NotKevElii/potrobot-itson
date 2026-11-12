/* ITSON – Asistente virtual · app.js */

/* ============ BANCO DE INFORMACIÓN BILINGÜE (ES / EN) ============ */
const BANK = [
  { id: "carrera", name: { es: "Sobre la carrera", en: "About the program" }, items: [
    { q: { es: "¿Qué es la Ingeniería en Software?", en: "What is Software Engineering?" },
      a: { es: `Es una carrera universitaria enfocada en diseñar, desarrollar, probar y mantener programas, aplicaciones y sistemas informáticos.`,
           en: `It is a university degree focused on designing, developing, testing and maintaining programs, applications and computer systems.` } },
    { q: { es: "¿Cuánto dura la carrera en el ITSON?", en: "How long does the program last at ITSON?" },
      a: { es: `Generalmente, una ingeniería universitaria dura alrededor de cuatro años y medio a cinco años, dependiendo de la carga académica y el plan de estudios.`,
           en: `Generally, a university engineering degree lasts about four and a half to five years, depending on the academic load and the curriculum.` } },
    { q: { es: "¿Qué materias se llevan durante los primeros semestres?", en: "What courses are taken during the first semesters?" },
      a: { es: `## Primer semestre
- Salud y Desarrollo Personal.
- Precálculo.
- Introducción a la Ingeniería en Software.
- Programación I con Laboratorio.
- Análisis de la Información y Comunicación.
- Inglés Introductorio.
## Segundo semestre
- Tecnología y Empresa.
- Programación II con Laboratorio.
- Cálculo.
- Matemáticas Discretas.
- Sistemas Operativos y Arquitectura de Computadoras.
- Inglés Universitario A1.
## Tercer semestre
- Redes.
- Matemáticas Computacionales.
- Álgebra Lineal.
- Programación III.
- Bases de Datos.
- Probabilidad y Estadística.
- Democracia y Gestión Ciudadana.
- Estructuras de Datos.
- Inglés Universitario A2.`,
           en: `## First semester
- Health and Personal Development.
- Precalculus.
- Introduction to Software Engineering.
- Programming I with Laboratory.
- Information Analysis and Communication.
- Introductory English.
## Second semester
- Technology and Business.
- Programming II with Laboratory.
- Calculus.
- Discrete Mathematics.
- Operating Systems and Computer Architecture.
- University English A1.
## Third semester
- Networks.
- Computational Mathematics.
- Linear Algebra.
- Programming III.
- Databases.
- Probability and Statistics.
- Democracy and Civic Engagement.
- Data Structures.
- University English A2.` } },
    { q: { es: "¿Necesito saber programar antes de entrar?", en: "Do I need to know how to program before enrolling?" },
      a: { es: `No. Puedes comenzar sin conocimientos previos de programación, ya que la carrera enseña desde los fundamentos.`,
           en: `No. You can start with no prior programming knowledge, since the program teaches from the fundamentals.` } },
    { q: { es: "¿Qué lenguajes de programación se enseñan?", en: "Which programming languages are taught?" },
      a: { es: `Algunos lenguajes comunes en esta área son Python, Java, C++, JavaScript y SQL. Los que se imparten específicamente dependen del plan de estudios.`,
           en: `Some common languages in this field are Python, Java, C++, JavaScript and SQL. The ones actually taught depend on the curriculum.` } },
    { q: { es: "¿La carrera requiere muchos conocimientos de matemáticas?", en: "Does the program require a lot of mathematics?" },
      a: { es: `Sí. Se utilizan matemáticas para resolver problemas, desarrollar algoritmos, analizar información y comprender el funcionamiento de los sistemas.`,
           en: `Yes. Mathematics is used to solve problems, develop algorithms, analyze information and understand how systems work.` } },
    { q: { es: "¿Qué diferencia hay entre Ingeniería en Software e Ingeniería en Sistemas?", en: "What is the difference between Software Engineering and Systems Engineering?" },
      a: { es: `Ingeniería en Software se concentra principalmente en crear y mantener programas y aplicaciones. Ingeniería en Sistemas suele abarcar también infraestructura tecnológica, redes, hardware y administración de sistemas, aunque depende de cada universidad.`,
           en: `Software Engineering focuses mainly on creating and maintaining programs and applications. Systems Engineering usually also covers technological infrastructure, networks, hardware and systems administration, although it depends on each university.` } },
    { q: { es: "¿Qué habilidades necesito para estudiar esta carrera?", en: "What skills do I need to study this program?" },
      a: { es: `Es recomendable desarrollar pensamiento lógico, capacidad para resolver problemas, constancia, organización y disposición para aprender programación y matemáticas.`,
           en: `It is advisable to develop logical thinking, problem-solving ability, perseverance, organization and a willingness to learn programming and mathematics.` } }
  ]},
  { id: "itson", name: { es: "Sobre el ITSON", en: "About ITSON" }, items: [
    { q: { es: "¿En qué campus del ITSON se imparte Ingeniería en Software?", en: "At which ITSON campus is Software Engineering offered?" },
      a: { es: `La carrera se ofrece en las siguientes unidades:
## Unidad Obregón
Responsable del programa: Mtra. Martha Eloisa Larrínaga Hernández.
- Ubicación: Cubículo 31 del Edificio de Computación y Diseño (1800), Campus Náinari.
- Dirección: Antonio Caso S/N y E. Kino, Colonia Villa ITSON. C.P. 85130. Ciudad Obregón, Sonora, México.
- Teléfono: +52 (644) 410-90-01, extensión 1531.
- WhatsApp (únicamente mensajes de texto): +52 (644) 230 8643.
- Correo: isw-obregon@itson.edu.mx
- Correo de responsable: martha.larrinaga@itson.edu.mx
## Unidad Guaymas
Responsable del programa: Mtro. Ricardo Daniel Carrasco Correa.
- Ubicación: Cubículo 1, Centro de Estudios de Ingenierías (CEI), planta alta, Campus Guaymas.
- Dirección: Carretera al Aeropuerto Km 3, C.P. 85400. Apartado Postal 870. Guaymas, Sonora.
- Teléfono: +52 (622) 221-00-32 y 221-00-33, extensión 6074.
- Correo: isw-guaymas@itson.edu.mx
- Correo de responsable: ricardo.carrasco@itson.edu.mx
## Unidad Navojoa
Responsable del programa: Mtro. José de Jesús Soto Padilla.
- Ubicación: Centro Integral de Tecnologías, Laboratorio 710.
- Dirección: Ramón Corona y Aguascalientes S/N, Colonia ITSON, Navojoa, Sonora.
- Teléfono: +52 (642) 422-59-29, extensión 5119.
- Correo: isw-navojoa@itson.edu.mx
- Correo de responsable: jose.soto@itson.edu.mx`,
           en: `The program is offered at the following units:
## Obregón Unit
Program coordinator: Mtra. Martha Eloisa Larrínaga Hernández.
- Location: Cubicle 31, Computing and Design Building (1800), Náinari Campus.
- Address: Antonio Caso S/N and E. Kino, Colonia Villa ITSON. Postal code 85130. Ciudad Obregón, Sonora, Mexico.
- Phone: +52 (644) 410-90-01, extension 1531.
- WhatsApp (text messages only): +52 (644) 230 8643.
- Email: isw-obregon@itson.edu.mx
- Coordinator's email: martha.larrinaga@itson.edu.mx
## Guaymas Unit
Program coordinator: Mtro. Ricardo Daniel Carrasco Correa.
- Location: Cubicle 1, Engineering Studies Center (CEI), upper floor, Guaymas Campus.
- Address: Carretera al Aeropuerto Km 3, postal code 85400. P.O. Box 870. Guaymas, Sonora.
- Phone: +52 (622) 221-00-32 and 221-00-33, extension 6074.
- Email: isw-guaymas@itson.edu.mx
- Coordinator's email: ricardo.carrasco@itson.edu.mx
## Navojoa Unit
Program coordinator: Mtro. José de Jesús Soto Padilla.
- Location: Integral Technology Center, Laboratory 710.
- Address: Ramón Corona and Aguascalientes S/N, Colonia ITSON, Navojoa, Sonora.
- Phone: +52 (642) 422-59-29, extension 5119.
- Email: isw-navojoa@itson.edu.mx
- Coordinator's email: jose.soto@itson.edu.mx` } },
    { q: { es: "¿Cuáles son los requisitos para ingresar?", en: "What are the admission requirements?" },
      a: { es: `Generalmente se necesita:
- Certificado de bachillerato.
- Documentación personal.
- Realizar el proceso de admisión.
- Cumplir con los requisitos establecidos por la universidad.`,
           en: `Generally you need:
- High school certificate.
- Personal documents.
- Completing the admission process.
- Meeting the requirements set by the university.` } },
    { q: { es: "¿Cómo es el proceso de admisión?", en: "How does the admission process work?" },
      a: { es: `El proceso de admisión proporcionado corresponde a la Generación 2027.
## Primera etapa: solicitud de admisión
Del 28 de septiembre al 30 de octubre de 2026.
- Cuota única de $300.00 pesos.
- Descargar la ficha de pago en el Portal de Admisiones.
Alternativas de pago:
- Pago en línea con tarjeta de débito o crédito Visa o MasterCard.
- Pago en tiendas OXXO.
- Pago en ventanillas bancarias Banorte.
El pago en línea se refleja inmediatamente. Los pagos en OXXO y Banorte pueden tardar hasta 48 horas hábiles.
## Beneficio por promedio de 9.0 o superior
Los aspirantes con promedio de 9.0 o superior hasta quinto semestre pueden obtener la exención del pago de admisión de $300.00.
Para validar el promedio deberán presentar:
- Si todavía cursan bachillerato: constancia de estudios con promedio acumulado hasta quinto semestre.
- Si ya terminaron el bachillerato, pero no tienen certificado: constancia de estudios con promedio hasta sexto semestre.
- Si ya cuentan con certificado: certificado de bachillerato.
Los documentos deberán enviarse electrónicamente mediante el Portal de Admisiones, del 28 de septiembre al 4 de noviembre de 2026.
## Segunda etapa: evaluación y acreditación
Del 28 de septiembre al 4 de noviembre de 2026.
La evaluación de aptitud y conocimientos se realizará tomando en cuenta la conclusión de la solicitud de admisión.
Para acreditar el promedio:
Aspirantes que cursan sexto semestre:
- Constancia de inscripción con promedio general acumulado del primero al quinto semestre.
Aspirantes que ya terminaron el bachillerato:
- Certificado de bachillerato; o
- Constancia de conclusión del bachillerato con promedio.
Los documentos deberán enviarse en PDF, ser legibles y no superar los 5 MB, mediante el Portal de Admisiones.
## Tercera etapa: consulta de puntos requeridos
Consultar la tabla de puntos requeridos por programa educativo.
## Cuarta etapa: selección de carrera
Del 30 de septiembre al 6 de noviembre de 2026.
Se realiza mediante el Portal de Admisiones, una vez concluidos y acreditados los pasos anteriores.
## Publicación de resultados e información de inscripción
20 de noviembre de 2026.
Se publicarán:
- ID de estudiante.
- Contraseña.
- Correo institucional con dominio @potros.itson.edu.mx.
## Entrega de documentos para inscripción
Del 25 al 27 de noviembre de 2026.
Documentación requerida:
- Acta de nacimiento.
- Certificado de preparatoria o constancia que acredite la conclusión del bachillerato.
- CURP.
## Calendario académico
Inscripción semestral: del 7 al 13 de enero de 2027.
Inscripción tetramestral: 15 y 16 de diciembre de 2026.
Inicio de clases semestrales: lunes 18 de enero de 2027.
Inicio de clases tetramestrales: lunes 4 de enero de 2027.`,
           en: `The admission process provided corresponds to the 2027 Class.
## First stage: admission application
From September 28 to October 30, 2026.
- Single fee of $300.00 pesos.
- Download the payment slip from the Admissions Portal.
Payment options:
- Online payment with a Visa or MasterCard debit or credit card.
- Payment at OXXO stores.
- Payment at Banorte bank counters.
Online payment is reflected immediately. OXXO and Banorte payments can take up to 48 business hours.
## Benefit for an average of 9.0 or higher
Applicants with an average of 9.0 or higher through the fifth semester can receive an exemption from the $300.00 admission fee.
To validate the average they must submit:
- If still in high school: a certificate of studies with the cumulative average through the fifth semester.
- If they have finished high school but do not have a certificate: a certificate of studies with the average through the sixth semester.
- If they already have a certificate: the high school certificate.
Documents must be submitted electronically through the Admissions Portal, from September 28 to November 4, 2026.
## Second stage: evaluation and accreditation
From September 28 to November 4, 2026.
The aptitude and knowledge assessment will be carried out once the admission application has been completed.
To accredit the average:
Applicants in their sixth semester:
- Enrollment certificate with the cumulative overall average from the first to the fifth semester.
Applicants who have already finished high school:
- High school certificate; or
- Certificate of high school completion with the average.
Documents must be submitted in PDF format, be legible and not exceed 5 MB, through the Admissions Portal.
## Third stage: check required points
Check the table of required points per academic program.
## Fourth stage: program selection
From September 30 to November 6, 2026.
It is done through the Admissions Portal, once the previous steps have been completed and accredited.
## Publication of results and enrollment information
November 20, 2026.
The following will be published:
- Student ID.
- Password.
- Institutional email with the @potros.itson.edu.mx domain.
## Submission of enrollment documents
From November 25 to 27, 2026.
Required documents:
- Birth certificate.
- High school certificate or certificate proving completion of high school.
- CURP.
## Academic calendar
Semester enrollment: January 7 to 13, 2027.
Four-month term enrollment: December 15 and 16, 2026.
Semester classes begin: Monday, January 18, 2027.
Four-month term classes begin: Monday, January 4, 2027.` } },
    { q: { es: "¿El ITSON ofrece becas para estudiantes de Ingeniería en Software?", en: "Does ITSON offer scholarships for Software Engineering students?" },
      a: { es: `Sí. El ITSON cuenta con un fondo de becas para estudiantes de nuevo ingreso a programas de Profesional Asociado y Licenciatura.
La beca Moisés Vázquez Gudiño contempla ocho categorías y ofrece apoyos económicos de $3,000.00 pesos por semestre durante los dos primeros semestres.
Los aspirantes aceptados pueden solicitarla y realizar el proceso de manera electrónica.
Se recomienda completar el proceso de admisión lo antes posible para tener oportunidad de concursar por una beca.
Más información: www.itson.mx/BecaMVG`,
           en: `Yes. ITSON has a scholarship fund for new students entering Associate Professional and Bachelor's programs.
The Moisés Vázquez Gudiño scholarship has eight categories and provides financial support of $3,000.00 pesos per semester during the first two semesters.
Accepted applicants can apply for it and complete the process electronically.
It is recommended to complete the admission process as soon as possible to have a chance to compete for a scholarship.
More information: www.itson.mx/BecaMVG` } }
  ]},
  { id: "clases", name: { es: "Sobre las clases y proyectos", en: "About classes and projects" }, items: [
    { q: { es: "¿Se realizan proyectos de programación desde los primeros semestres?", en: "Are programming projects carried out from the first semesters?" },
      a: { es: `Sí. Desde los primeros semestres se realizan proyectos de programación, como el proyecto final del primer semestre.`,
           en: `Yes. Programming projects are carried out from the first semesters, such as the first-semester final project.` } },
    { q: { es: "¿Qué programas y herramientas se utilizan en las clases?", en: "What programs and tools are used in classes?" },
      a: { es: `Se utilizan herramientas como PSeInt para pseudocódigo, Python y Notepad++, entre otras.`,
           en: `Tools such as PSeInt for pseudocode, Python and Notepad++ are used, among others.` } },
    { q: { es: "¿Se trabaja individualmente o en equipos?", en: "Is the work done individually or in teams?" },
      a: { es: `De ambas maneras, dependiendo de las características y requisitos de cada trabajo.`,
           en: `Both ways, depending on the characteristics and requirements of each assignment.` } },
    { q: { es: "¿Los estudiantes desarrollan aplicaciones o videojuegos?", en: "Do students develop applications or video games?" },
      a: { es: `Pueden desarrollar aplicaciones, páginas web y sistemas de información.`,
           en: `They can develop applications, web pages and information systems.` } },
    { q: { es: "¿Se utilizan herramientas de inteligencia artificial?", en: "Are artificial intelligence tools used?" },
      a: { es: `Sí. Pueden utilizarse herramientas de inteligencia artificial como apoyo para programar, analizar información, automatizar tareas y resolver problemas.`,
           en: `Yes. Artificial intelligence tools can be used as support for programming, analyzing information, automating tasks and solving problems.` } },
    { q: { es: "¿Qué tan difícil es aprender a programar?", en: "How hard is it to learn to program?" },
      a: { es: `Puede ser complicado al principio porque requiere aprender a pensar de manera lógica y resolver problemas paso a paso. Sin embargo, con práctica y constancia se vuelve más sencillo.`,
           en: `It can be difficult at first because it requires learning to think logically and solve problems step by step. However, with practice and perseverance it becomes easier.` } }
  ]},
  { id: "laboral", name: { es: "Sobre el campo laboral", en: "About the job market" }, items: [
    { q: { es: "¿En qué puede trabajar un ingeniero en software?", en: "What can a software engineer work on?" },
      a: { es: `Puede desempeñarse en:
- Especificación y análisis de requisitos.
- Diseño de software.
- Construcción de sistemas.
- Pruebas de software.
- Administración de proyectos.
También puede trabajar en:
- Empresas de desarrollo de software.
- Empresas con áreas de desarrollo de software.
- Organizaciones públicas y privadas con necesidades de software a la medida.
- Ejercicio libre de la profesión (freelance).`,
           en: `They can work in:
- Requirements specification and analysis.
- Software design.
- Systems construction.
- Software testing.
- Project management.
They can also work in:
- Software development companies.
- Companies with software development departments.
- Public and private organizations that need custom software.
- Independent practice of the profession (freelance).` } },
    { q: { es: "¿Cuánto puede ganar un egresado?", en: "How much can a graduate earn?" },
      a: { es: `Depende de su experiencia, especialización, empresa y ubicación. Un recién egresado generalmente gana menos que alguien con varios años de experiencia.`,
           en: `It depends on their experience, specialization, company and location. A recent graduate generally earns less than someone with several years of experience.` } },
    { q: { es: "¿Existe demanda laboral para esta profesión?", en: "Is there job demand for this profession?" },
      a: { es: `Sí. Actualmente muchas empresas necesitan profesionales que desarrollen, mantengan y mejoren sus sistemas y aplicaciones.`,
           en: `Yes. Many companies currently need professionals who develop, maintain and improve their systems and applications.` } },
    { q: { es: "¿Puedo trabajar desde casa para empresas extranjeras?", en: "Can I work from home for foreign companies?" },
      a: { es: `Sí. Muchas empresas permiten trabajar de manera remota y contratar desarrolladores de diferentes países.`,
           en: `Yes. Many companies allow remote work and hire developers from different countries.` } },
    { q: { es: "¿Puedo trabajar en empresas internacionales?", en: "Can I work for international companies?" },
      a: { es: `Sí. Los conocimientos de programación y el dominio del inglés pueden abrir oportunidades laborales en empresas internacionales.`,
           en: `Yes. Programming knowledge and English proficiency can open job opportunities at international companies.` } },
    { q: { es: "¿Qué especializaciones puedo estudiar después de graduarme?", en: "What specializations can I study after graduating?" },
      a: { es: `Algunas opciones son:
- Inteligencia artificial.
- Desarrollo web.
- Desarrollo móvil.
- Ciberseguridad.
- Ciencia de datos.
- Computación en la nube.
- Ingeniería de datos.`,
           en: `Some options are:
- Artificial intelligence.
- Web development.
- Mobile development.
- Cybersecurity.
- Data science.
- Cloud computing.
- Data engineering.` } },
    { q: { es: "¿Puedo crear mi propia empresa de desarrollo de software?", en: "Can I start my own software development company?" },
      a: { es: `Sí. Puedes emprender creando aplicaciones, páginas web, sistemas empresariales o soluciones tecnológicas para otras empresas.`,
           en: `Yes. You can start a business creating applications, web pages, enterprise systems or technology solutions for other companies.` } }
  ]},
  { id: "aspirantes", name: { es: "Preguntas para aspirantes", en: "Questions for applicants" }, items: [
    { q: { es: "¿Es necesario tener una computadora propia?", en: "Is it necessary to have my own computer?" },
      a: { es: `Es muy recomendable, porque facilita realizar tareas, practicar programación y desarrollar proyectos.`,
           en: `It is highly recommended, because it makes it easier to do assignments, practice programming and develop projects.` } },
    { q: { es: "¿Qué características debe tener una computadora para estudiar la carrera?", en: "What features should a computer have to study the program?" },
      a: { es: `Se recomienda una computadora con:
- Procesador Intel Core i5 o AMD Ryzen 5 (o equivalente).
- 8 GB de RAM como mínimo; 16 GB son preferibles.
- Almacenamiento SSD.
- Sistema operativo actualizado.`,
           en: `A computer with the following is recommended:
- Intel Core i5 or AMD Ryzen 5 processor (or equivalent).
- 8 GB of RAM at minimum; 16 GB is preferable.
- SSD storage.
- An up-to-date operating system.` } },
    { q: { es: "¿Es necesario saber inglés?", en: "Is it necessary to know English?" },
      a: { es: `No necesariamente para comenzar, pero es muy importante porque gran parte de la documentación, herramientas y recursos de programación están en inglés.`,
           en: `Not necessarily to get started, but it is very important because much of the documentation, tools and programming resources are in English.` } },
    { q: { es: "¿Qué tan pesada es la carga académica?", en: "How heavy is the academic workload?" },
      a: { es: `Puede ser exigente debido a las tareas, proyectos, prácticas de programación y materias matemáticas. Requiere organización y constancia.`,
           en: `It can be demanding because of assignments, projects, programming practice and mathematics courses. It requires organization and perseverance.` } },
    { q: { es: "¿Hay muchas tareas y proyectos?", en: "Are there a lot of assignments and projects?" },
      a: { es: `Generalmente sí. Es una carrera práctica en la que se necesita realizar ejercicios, investigaciones y proyectos para reforzar los conocimientos.`,
           en: `Generally yes. It is a hands-on program in which you need to do exercises, research and projects to reinforce your knowledge.` } },
    { q: { es: "¿Qué pasa si nunca he programado?", en: "What if I have never programmed?" },
      a: { es: `No hay problema. Puedes aprender desde cero, comenzando con conceptos básicos como variables, condiciones, ciclos y funciones.`,
           en: `No problem. You can learn from scratch, starting with basic concepts such as variables, conditions, loops and functions.` } },
    { q: { es: "¿Cómo puedo prepararme antes de entrar?", en: "How can I prepare before enrolling?" },
      a: { es: `Puedes comenzar aprendiendo:
- Lógica de programación.
- Python básico.
- Matemáticas.
- Inglés técnico.
- Manejo básico de computadoras.`,
           en: `You can start by learning:
- Programming logic.
- Basic Python.
- Mathematics.
- Technical English.
- Basic computer skills.` } }
  ]}
];

/* Lista plana: cada pregunta conserva su categoría */
const QS = [];
BANK.forEach((c, ci) => c.items.forEach((it, ii) => QS.push({ cat: ci, q: it.q, a: it.a, key: c.id + "-" + ii })));

/* ============ TEXTOS DE INTERFAZ (ES / EN) ============ */
const UI = {
  es: {
    nav3: "Asistente virtual ↓",
    nav4: "Mayores informes",
    h1: "Asistente virtual",
    lead: "¿Necesitas ayuda? PotroBot está aquí para resolver tus dudas y brindarte la información que necesitas.",
    desc: "Seleccione el tema de su interés. En la parte inferior encontrará preguntas frecuentes que podrán orientarle y ayudarle a resolver sus dudas. Si no encuentra la respuesta que busca, puede dirigirse al apartado <b>Mayores informes</b> para obtener información adicional.",
    faq: "Preguntas frecuentes",
    q: "Pregunta",
    welcome: "¡Hola! Soy PotroBot. Selecciona una categoría o haz clic en cualquiera de las preguntas frecuentes para ayudarte.",
    f1: "Mayores informes",
    f2: "Responsable de programa",
    f3: "Correo",
    f4: "Teléfono",
    f5: "Ubicación",
    f6: "Redes sociales",
    ftitle: "Ingeniería en Software – ITSON",
    fcred: "© 2026 Instituto Tecnológico de Sonora · Ingeniería en Software"
  },
  en: {
    nav3: "Virtual assistant ↓",
    nav4: "More information",
    h1: "Virtual assistant",
    lead: "Need help? PotroBot is here to answer your questions and give you the information you need.",
    desc: "Select the topic you are interested in. Below you will find frequently asked questions that can guide you and help resolve your doubts. If you can't find the answer you're looking for, go to the <b>More information</b> section for additional details.",
    faq: "Frequently asked questions",
    q: "Question",
    welcome: "Hi! I'm PotroBot. Select a category or click any of the frequently asked questions and I'll help you.",
    f1: "More information",
    f2: "Program coordinator",
    f3: "Email",
    f4: "Phone",
    f5: "Location",
    f6: "Social",
    ftitle: "Software Engineering – ITSON",
    fcred: "© 2026 Instituto Tecnológico de Sonora · Software Engineering"
  }
};

let lang = "es", filter = 0; // Categoría 1 seleccionada por defecto
const msgs = []; // Estado inicial limpio
const $ = id => document.getElementById(id);
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

/* ============ CHAT ============ */
function fmt(t) {
  let h = "", ul = false;
  t.split("\n").forEach(l => {
    if (l.startsWith("- ")) { if (!ul) { h += "<ul>"; ul = true; } h += "<li>" + esc(l.slice(2)) + "</li>"; return; }
    if (ul) { h += "</ul>"; ul = false; }
    if (!l.trim()) return;
    h += l.startsWith("## ") ? "<h4>" + esc(l.slice(3)) + "</h4>" : "<p>" + esc(l) + "</p>";
  });
  return h + (ul ? "</ul>" : "");
}

const AV = '<div class="av"><img src="assets/PotroAsistente.png" alt="PotroBot"></div>';

function renderChat(focusLast) {
  const c = $("chat");
  c.innerHTML = "";
  const add = (cls, html) => {
    const d = document.createElement("div");
    d.className = "msg " + cls;
    d.innerHTML = html;
    c.appendChild(d);
  };
  if (!msgs.length) {
    add("bot", AV + '<div class="txt"><p>' + esc(UI[lang].welcome) + "</p></div>");
  }
  msgs.forEach(m => {
    if (m.typing) add("bot", AV + '<div class="txt typing">…</div>');
    else if (m.bot) add("bot", AV + '<div class="txt">' + fmt(QS[m.i].a[lang]) + "</div>");
    else add("user", '<div class="txt">' + esc(QS[m.i].q[lang]) + "</div>");
  });
  if (focusLast) {
    const u = c.querySelectorAll(".msg.user");
    if (u.length) u[u.length - 1].scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

let askId = 0;
function ask(i) {
  const id = ++askId;
  msgs.length = 0;
  msgs.push({ i, bot: 0 }, { typing: 1 });
  renderChat(true);
  setTimeout(() => {
    if (id !== askId) return;
    msgs.length = 0;
    msgs.push({ i, bot: 0 }, { i, bot: 1 });
    renderChat(true);
  }, 450);
}

/* ============ CHIPS (Cápsula unificada) ============ */
function renderChips() {
  const w = $("chips");
  w.innerHTML = "";
  BANK.forEach((c, i) => {
    const b = document.createElement("button");
    b.className = "chip" + (filter === i ? " on" : "");
    b.textContent = c.name[lang];
    b.onclick = () => {
      filter = i;
      renderChips();
      renderCards();
    };
    w.appendChild(b);
  });
}

/* ============ CARRUSEL ============ */
const track = $("track");
let dragMoved = false;
const padL = () => parseFloat(getComputedStyle(track).paddingLeft) || 0;

function renderCards() {
  track.innerHTML = "";
  track.scrollLeft = 0;
  const list = QS.map((o, i) => ({ o, i })).filter(x => filter === null || x.o.cat === filter);
  list.forEach((x, n) => {
    const w = document.createElement("div");
    w.className = "card-wrapper";
    w.innerHTML =
      "<button class='card card-normal'><b>" + UI[lang].q + " " + String(n + 1).padStart(2, "0") + "</b>" +
      "<em>" + BANK[x.o.cat].name[lang] + "</em>" +
      "<span class='q'>" + esc(x.o.q[lang]) + "</span></button>" +
      "<div class='card-ascii' aria-hidden='true'></div>";
    w.onclick = () => { if (!dragMoved) ask(x.i); };
    track.appendChild(w);
  });
  const d = $("dots");
  d.innerHTML = "";
  list.forEach((_, n) => {
    const i = document.createElement("i");
    i.onclick = () => goTo(n);
    d.appendChild(i);
  });
  updPos();
}

function goTo(n) {
  const c = track.children[n];
  if (c) track.scrollTo({ left: c.offsetLeft - padL(), behavior: "smooth" });
}

function curIdx() {
  const cs = [...track.children];
  if (!cs.length) return 0;
  if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) return cs.length - 1;
  const p = padL();
  let b = 0, m = 1e9;
  cs.forEach((c, i) => {
    const x = Math.abs(c.offsetLeft - p - track.scrollLeft);
    if (x < m) { m = x; b = i; }
  });
  return b;
}

function updPos() {
  const n = track.children.length;
  if (!n) { $("count").textContent = ""; return; }
  const k = curIdx();
  [...$("dots").children].forEach((d, i) => d.classList.toggle("on", i === k));
  [...track.children].forEach((c, i) => c.classList.toggle("on", i === k));
  $("count").textContent = (k + 1) + " / " + n;
}

track.addEventListener("scroll", () => requestAnimationFrame(updPos), { passive: true });
window.addEventListener("resize", updPos);

/* Arrastre con mouse */
let sx = 0, sl = 0, down = false;
track.addEventListener("pointerdown", e => {
  if (e.pointerType !== "mouse") return;
  down = true;
  dragMoved = false;
  sx = e.clientX;
  sl = track.scrollLeft;
});
window.addEventListener("pointermove", e => {
  if (!down) return;
  const dx = e.clientX - sx;
  if (Math.abs(dx) > 5) { dragMoved = true; track.classList.add("drag"); }
  if (dragMoved) track.scrollLeft = sl - dx;
});
window.addEventListener("pointerup", () => {
  if (!down) return;
  down = false;
  if (dragMoved) {
    track.classList.remove("drag");
    goTo(curIdx());
    setTimeout(() => dragMoved = false, 0);
  }
});

/* Rueda del ratón: desplazamiento horizontal */
let wheelT;
track.addEventListener("wheel", e => {
  const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  const max = track.scrollWidth - track.clientWidth;
  if (!d || (d < 0 && track.scrollLeft <= 0) || (d > 0 && track.scrollLeft >= max - 1)) return;
  e.preventDefault();
  track.classList.add("drag");
  track.scrollLeft += d;
  clearTimeout(wheelT);
  wheelT = setTimeout(() => { track.classList.remove("drag"); goTo(curIdx()); }, 140);
}, { passive: false });

/* Escáner vertical con partículas (eliminación total de parte anterior de la tarjeta) */
(function scanner() {
  const stage = track.parentElement, cv = $("scannerCanvas"), ctx = cv.getContext("2d");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const CH = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789(){}[]<>;:,._-+=!@#$%^&*|\\/\"'`~?";
  let W = 0, H = 0, parts = [], lastSL = -1, lastMove = 0, inten = 0, tick = 0;
  const rnd = (a, b) => a + Math.random() * (b - a);
  const gen = n => { let t = ""; for (let i = 0; i < n; i++) t += CH[Math.floor(Math.random() * CH.length)]; return t; };

  function size() {
    const dpr = window.devicePixelRatio || 1;
    W = stage.clientWidth;
    H = stage.clientHeight;
    cv.width = W * dpr;
    cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size();
  window.addEventListener("resize", size);
  if (window.ResizeObserver) new ResizeObserver(size).observe(stage);

  function frame(now) {
    const sl = track.scrollLeft;
    const cx = Math.min(Math.max(W * 0.1, 70), 140);
    if (sl !== lastSL) lastMove = now;
    lastSL = sl;
    inten += ((now - lastMove < 260 && !still ? 1 : 0) - inten) * 0.14;
    const active = inten > 0.02;

    for (const c of track.children) {
      const w = c.offsetWidth;
      const l = c.offsetLeft - sl;
      const ar = Math.max(0, Math.min(w, cx - l));
      const a = c.lastElementChild;
      const on = active && ar > 0;

      // Recorta por completo la porción izquierda de la tarjeta normal en cuanto toca el escáner
      c.style.setProperty("--clip-right", on ? ar + "px" : "0px");
      c.style.setProperty("--ar", (on ? ar : 0) + "px");
      a.style.opacity = on ? Math.min(1, inten * 2) : 0;
      if (on && l + w > 0 && tick % 4 === 0) a.textContent = gen(800);
    }

    tick++;
    ctx.clearRect(0, 0, W, H);
    if (inten > 0.02) {
      const glow = 0.15 + 0.85 * inten;
      const hl = ctx.createLinearGradient(cx - 40, 0, cx + 40, 0);
      hl.addColorStop(0, "rgba(68,68,68,0)");
      hl.addColorStop(0.5, "rgba(43,43,43," + 0.16 * glow + ")");
      hl.addColorStop(1, "rgba(68,68,68,0)");
      ctx.fillStyle = hl;
      ctx.fillRect(cx - 40, 0, 80, H);

      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, "rgba(68,68,68,0)");
      g.addColorStop(0.5, "rgba(68,68,68," + glow + ")");
      g.addColorStop(1, "rgba(68,68,68,0)");
      ctx.fillStyle = g;
      ctx.shadowColor = document.documentElement.dataset.theme === "dark" ? "rgba(255,255,255,.55)" : "rgba(43,43,43,.6)";
      ctx.shadowBlur = 14 * glow;
      ctx.fillRect(cx - 1.5, 0, 3, H);
      ctx.shadowBlur = 0;

      for (let i = 0; i < Math.ceil(inten * 4) && parts.length < 180; i++) {
        parts.push({ x: cx + rnd(-2, 2), y: rnd(0, H), vx: rnd(-0.3, 2.4), vy: rnd(-0.5, 0.5), r: rnd(1, 2.4), life: 1 });
      }
    }
    parts = parts.filter(p => (p.life -= 0.02) > 0);
    for (const p of parts) {
      p.x += p.vx;
      p.y += p.vy;
      ctx.fillStyle = "rgba(102,102,102," + p.life + ")";
      ctx.fillRect(p.x, p.y, p.r, p.r);
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

/* Desplazamiento automático continuo hacia la derecha */
(function autoScroll() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  track.classList.add("auto");
  const SPEED = 45;
  let pos = 0, last = 0, f = 1, hover = false, holdUntil = 0, ret = false, endAt = 0;
  const hold = ms => holdUntil = performance.now() + ms;

  track.addEventListener("mouseenter", () => hover = true);
  track.addEventListener("mouseleave", () => hover = false);
  track.addEventListener("pointerdown", () => holdUntil = Infinity);
  window.addEventListener("pointerup", () => hold(1500));
  track.addEventListener("wheel", () => hold(1800), { passive: true });
  track.addEventListener("touchstart", () => holdUntil = Infinity, { passive: true });
  track.addEventListener("touchend", () => hold(1500), { passive: true });

  function step(now) {
    const dt = Math.min(50, now - (last || now));
    last = now;
    const max = track.scrollWidth - track.clientWidth;
    if (Math.abs(track.scrollLeft - pos) > 2) pos = track.scrollLeft;
    const paused = hover || now < holdUntil || ret || max <= 0;
    f += ((paused ? 0 : 1) - f) * 0.08;
    if (ret) {
      if (track.scrollLeft <= 1) { ret = false; pos = 0; endAt = 0; hold(600); }
    } else if (f > 0.01) {
      pos = Math.min(max, pos + SPEED * f * dt / 1000);
      track.scrollLeft = pos;
    }
    if (!ret && max > 0 && track.scrollLeft >= max - 1) {
      if (!hover && now >= holdUntil) {
        if (!endAt) endAt = now;
        else if (now - endAt > 1200) { ret = true; track.scrollTo({ left: 0, behavior: "smooth" }); }
      }
    } else {
      endAt = 0;
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();

/* ============ IDIOMA Y TEMA ============ */
function applyLang() {
  document.documentElement.lang = lang;
  $("langLbl").textContent = lang.toUpperCase();
  document.querySelectorAll("[data-i18n]").forEach(e => {
    const v = UI[lang][e.dataset.i18n];
    if (v !== undefined) e.innerHTML = v;
  });
  renderChips();
  renderCards();
  renderChat();
}

$("lang").onclick = () => {
  lang = lang === "es" ? "en" : "es";
  applyLang();
  const g = $("lang").querySelector(".globe");
  g.classList.remove("spin");
  void g.offsetWidth;
  g.classList.add("spin");
};

$("theme").onclick = () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  const ic = $("theme").querySelector(".ico");
  ic.textContent = dark ? "🌙" : "☀";
  ic.classList.remove("spin");
  void ic.offsetWidth;
  ic.classList.add("spin");
};

/* ============ NAVEGACIÓN ============ */
const ROUTES = { home: "#", isw: "#", mapa: "#", asistente: "#", informes: "#" };
document.querySelectorAll("[data-href]").forEach(a => {
  a.href = ROUTES[a.dataset.href] || "#";
  a.addEventListener("click", e => { if (a.getAttribute("href") === "#") e.preventDefault(); });
});

/* ============ CARTELFOOTER: logotipo ITSON 8 bits ============ */
const GLYPH = {
  I: ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "#####"],
  T: ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "..#.."],
  S: [".####", "#....", "#....", ".###.", "....#", "....#", "####."],
  O: [".###.", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
  N: ["#...#", "##..#", "##..#", "#.#.#", "#..##", "#..##", "#...#"]
};

function canvasURL(w, h, draw) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d"));
  return c.toDataURL();
}

function logoURL() {
  const W = 33, H = 11;
  return {
    w: W,
    h: H,
    url: canvasURL(W, H, x => {
      x.fillStyle = "#2f7df0";
      x.fillRect(0, 0, W, H);
      x.fillStyle = "#fff";
      [..."ITSON"].forEach((L, k) =>
        GLYPH[L].forEach((r, y) =>
          [...r].forEach((p, i) => {
            if (p === "#") x.fillRect(2 + k * 6 + i, 2 + y, 1, 1);
          })
        )
      );
    })
  };
}

(function buildCartel() {
  const run = $("run"), H = 25.6, lg = logoURL(), w = H * lg.w / lg.h;
  const half = document.createDocumentFragment();
  for (let r = 0; r < 30; r++) {
    const i = new Image();
    i.src = lg.url;
    i.alt = "";
    i.style.width = w + "px";
    half.appendChild(i);
  }
  run.appendChild(half.cloneNode(true));
  run.appendChild(half);
  run.style.animationDuration = (run.offsetWidth / 2 / 44) + "s";
})();

applyLang();