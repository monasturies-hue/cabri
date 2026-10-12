// ═══════════════════════════════════════════════════════════════════
// BANC DE PREGUNTES — Oposicions A1 Generalitat de Catalunya
// 201 preguntes validades · Actualitzat 04/10/2026
//
// ESTRUCTURA DE CADA PREGUNTA:
//   id        → identificador únic de l'Excel
//   codi_bloc → codi del bloc temàtic (CB001...CB009, EB001...EB007)
//   codi_tema → codi del tema (C01...C35, E01...E30)
//   pregunta  → text de la pregunta
//   opcions   → array [a, b, c, d]
//   correcta  → índex 0-3 de la resposta correcta
//   llei      → norma principal (omple manualment si buida)
//   article   → article concret
//   explicacio → raonament de la resposta correcta
// ═══════════════════════════════════════════════════════════════════

const QUESTIONS = [

  {
    id: "Q-F002-N002",
    codi_bloc: "EB006",
    codi_tema: "E28",
    pregunta: "D’acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, en quin d’aquests procediments no intervé, en cap cas, la mesa de contractació?",
    opcions: [
    "En el concurs de projectes",
    "En el procediment restringit",
    "En el procediment obert",
    "En el diàleg competitiu"
    ],
    correcta: 0,
    llei: "LCSP — arts. 15, 25, 44, 122, 124, 204, 210, 326",
    article: "",
    explicacio: "En el concurs de projectes",
  },

  {
    id: "Q-F002-N003",
    codi_bloc: "EB002",
    codi_tema: "E06",
    pregunta: "No és un tipus d’avaluació econòmica...",
    opcions: [
    "L’anàlisi cost-efectivitat",
    "L’anàlisi cost-conseqüència",
    "L’anàlisi cost-resultat",
    "L’anàlisi cost-minimització"
    ],
    correcta: 2,
    llei: "ECO — Tècniques d’avaluació econòmica",
    article: "",
    explicacio: "L’anàlisi cost-resultat",
  },

  {
    id: "Q-F002-N006",
    codi_bloc: "EB006",
    codi_tema: "E24",
    pregunta: "D’acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, si un poder adjudicador encarrega a títol onerós, a una o diverses persones –ja siguin naturals o jurídiques– la gestió d’un servei la prestació del qual és de la seva titularitat o competència, amb transferència del risc operacional, estarem davant d’un...",
    opcions: [
    "Contracte de serveis",
    "Contracte de subministraments",
    "Contracte de concessió de serveis",
    "Contracte d’obres"
    ],
    correcta: 2,
    llei: "LCSP — arts. 15, 25, 44, 122, 124, 204, 210, 326",
    article: "",
    explicacio: "Contracte de concessió de serveis",
  },

  {
    id: "Q-F002-N016",
    codi_bloc: "EB006",
    codi_tema: "E27",
    pregunta: "D’acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, en quin document contractual s’han d’incloure els pactes i les condicions definidors dels drets i les obligacions de les parts del contracte?",
    opcions: [
    "Al plec de clàusules administratives particulars",
    "Al plec de prescripcions tècniques particulars",
    "Al document d’aprovació de la despesa",
    "A l’informe justificatiu de la necessitat de contractar"
    ],
    correcta: 0,
    llei: "LCSP — arts. 15, 25, 44, 122, 124, 204, 210, 326",
    article: "",
    explicacio: "Al plec de clàusules administratives particulars",
  },

  {
    id: "Q-F002-N018",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "D’acord amb els límits, requisits i efectes establerts a la Llei 9/2017, de 8 de novembre, de contractes del sector públic, la modificació d’un contracte administratiu per raons d’interès públic...",
    opcions: [
    "És una obligació de l’òrgan de contractació si la persona adjudicatària la sol·licita.",
    "És una prerrogativa de l’òrgan de contractació.",
    "S’ha de formalitzar en escriptura pública per tal que tingui validesa.",
    "S’ha d’inscriure al Registre Electrònic d’Empreses Licitadores (RELI)."
    ],
    correcta: 1,
    llei: "LCSP — arts. 15, 25, 44, 122, 124, 204, 210, 326",
    article: "",
    explicacio: "És una prerrogativa de l’òrgan de contractació.",
  },

  {
    id: "Q-F002-N019",
    codi_bloc: "CB004",
    codi_tema: "C14",
    pregunta: "D’acord amb la Llei 40/2015, d’1 d’octubre, de règim jurídic del sector públic, són convenis:",
    opcions: [
    "Els protocols generals d’actuació o instruments similars que comportin meres declaracions d’intenció de contingut general o que expressin la voluntat de les administracions i parts subscriptores per actuar amb un objectiu comú, sempre que no suposin la formalització de compromisos jurídics concrets i exigibles.",
    "Els acords amb efectes jurídics adoptats per les administracions públiques, els organismes públics i les entitats de dret públic vinculats o dependents o les universitats públiques entre si o amb subjectes de dret privat per a una finalitat comuna, l’objecte dels quals siguin prestacions pròpies dels contractes.",
    "Els acords amb efectes jurídics adoptats per les administracions públiques, els organismes públics i les entitats de dret públic vinculats o dependents o les universitats públiques entre si o amb subjectes de dret privat, per a una finalitat comuna.",
    "Els acords sense efectes jurídics adoptats per les administracions públiques, els organismes públics i les entitats de dret públic vinculats o dependents o les universitats públiques entre si o amb subjectes de dret privat, per a una finalitat comuna."
    ],
    correcta: 2,
    llei: "LRJ — arts. 47 i 49",
    article: "",
    explicacio: "Els acords amb efectes jurídics adoptats per les administracions públiques, els organismes públics i les entitats de dret públic vinculats o dependents o les universitats públiques entre si o amb subjectes de dret privat, per a una finalitat comuna.",
  },

  {
    id: "Q-F002-N023",
    codi_bloc: "EB005",
    codi_tema: "E20",
    pregunta: "D’acord amb el text refós de la Llei de l’Estatut bàsic de l’empleat públic, aprovat pel Reial decret legislatiu 5/2015, de 30 d’octubre, les retribucions del personal funcionari de carrera es classifiquen en:",
    opcions: [
    "Bàsiques, complementàries i extraordinàries",
    "Bàsiques, complementàries i específiques",
    "Bàsiques i específiques",
    "Bàsiques i complementàries"
    ],
    correcta: 3,
    llei: "EBEP — arts. 22, 85–87",
    article: "",
    explicacio: "Bàsiques i complementàries",
  },

  {
    id: "Q-F002-N026",
    codi_bloc: "EB002",
    codi_tema: "E05",
    pregunta: "No és un objectiu de desenvolupament sostenible recollit a l’Agenda 2030...",
    opcions: [
    "Erradicar la pobresa a tot el món i en totes les seves formes.",
    "Aconseguir que les ciutats i els assentaments humans siguin inclusius, segurs, resilients i sostenibles.",
    "Aconseguir la igualtat de gènere i empoderar totes les dones i les nenes.",
    "Aconseguir vies de comunicació mundials en fibra òptica o via satèl·lit."
    ],
    correcta: 3,
    llei: "ODS — Objectius de desenvolupament sostenible",
    article: "",
    explicacio: "Aconseguir vies de comunicació mundials en fibra òptica o via satèl·lit.",
  },

  {
    id: "Q-F002-N028",
    codi_bloc: "CB004",
    codi_tema: "C20",
    pregunta: "D’acord amb la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, contra una disposició administrativa de caràcter general...",
    opcions: [
    "Es pot interposar un recurs d’alçada.",
    "Es pot interposar un recurs de reposició.",
    "Es pot interposar un recurs contenciós administratiu en el termini de tres mesos a comptar de l’endemà de la seva publicació.",
    "No es pot interposar cap recurs en via administrativa."
    ],
    correcta: 3,
    llei: "LPAC — art. 112.3",
    article: "",
    explicacio: "No es pot interposar cap recurs en via administrativa.",
  },

  {
    id: "Q-F002-N030",
    codi_bloc: "EB006",
    codi_tema: "E28",
    pregunta: "Qui és l’òrgan competent per resoldre un recurs especial en matèria de contractació, interposat contra l’adjudicació d’un contracte de concessió d’obres d’un valor estimat de 5 milions d’euros efectuada per l’òrgan de contractació d’un departament de l’Administració de la Generalitat de Catalunya?",
    opcions: [
    "El Tribunal Administratiu Central de Recursos Contractuals.",
    "El Tribunal Català de Contractes del Sector Públic.",
    "El Tribunal Superior de Justícia de Catalunya.",
    "El Tribunal de Recursos Contractuals del Parlament de Catalunya."
    ],
    correcta: 1,
    llei: "LCSP — arts. 15, 25, 44, 122, 124, 204, 210, 326",
    article: "",
    explicacio: "El Tribunal Català de Contractes del Sector Públic.",
  },

  {
    id: "Q-F002-N031",
    codi_bloc: "EB007",
    codi_tema: "E30",
    pregunta: "El procediment ordinari de concessió de subvencions es tramita en règim de:",
    opcions: [
    "Concessió directa",
    "Concurrència no competitiva",
    "Concurrència competitiva",
    "Concessió indirecta"
    ],
    correcta: 2,
    llei: "LGS — art. 22.1",
    article: "",
    explicacio: "Concurrència competitiva",
  },

  {
    id: "Q-F002-N035",
    codi_bloc: "EB006",
    codi_tema: "E27",
    pregunta: "D’acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, els plecs de clàusules administratives particulars i els plecs de prescripcions tècniques particulars, un cop aprovats:",
    opcions: [
    "Poden ser modificats en qualsevol cas i sense necessitat de retrotraure les actuacions.",
    "No poden ser modificats en cap cas.",
    "Només poden ser modificats a instància de les persones licitadores, en el termini de deu dies hàbils a comptar des de l’endemà de la seva publicació al perfil del contractant.",
    "Només poden ser modificats amb posterioritat per error material, de fet o aritmètic; en cas contrari, la modificació del plec comporta la retroacció d’actuacions."
    ],
    correcta: 3,
    llei: "LCSP — arts. 15, 25, 44, 122, 124, 204, 210, 326",
    article: "",
    explicacio: "Només poden ser modificats amb posterioritat per error material, de fet o aritmètic; en cas contrari, la modificació del plec comporta la retroacció d’actuacions.",
  },

  {
    id: "Q-F002-N039",
    codi_bloc: "EB006",
    codi_tema: "E23",
    pregunta: "D’acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, els contractes administratius que no tinguin la consideració de contractes administratius especials es regeixen, quant a la seva preparació, adjudicació, efectes, modificació i extinció:",
    opcions: [
    "Per la Llei 9/2017, de 8 de novembre, de contractes del sector públic i les seves disposicions de desplegament; supletòriament s’apliquen les normes de dret administratiu i, si no n’hi ha, les normes de dret privat.",
    "Únicament per la Llei 9/2017, de 8 de novembre, de contractes del sector públic.",
    "Per les normes de dret privat, en qualsevol cas.",
    "Per la seva normativa específica i, subsidiàriament, per la Llei 9/2017, de 8 de novembre, de contractes del sector públic."
    ],
    correcta: 0,
    llei: "LCSP — arts. 15, 25, 44, 122, 124, 204, 210, 326",
    article: "",
    explicacio: "Per la Llei 9/2017, de 8 de novembre, de contractes del sector públic i les seves disposicions de desplegament; supletòriament s’apliquen les normes de dret administratiu i, si no n’hi ha, les normes de dret privat.",
  },

  {
    id: "Q-F002-N043",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "D’acord amb els requisits establerts a la Llei 9/2017, de 8 de novembre, de contractes del sector públic, en els contractes de les administracions públiques, la garantia provisional respon...",
    opcions: [
    "De l’obligació de formalitzar el contracte en termini.",
    "De les penalitats imposades a la persona contractista.",
    "Del manteniment de les ofertes de les persones licitadores fins a la perfecció del contracte.",
    "De la confiscació que es pot decretar en els casos de resolució del contracte."
    ],
    correcta: 2,
    llei: "LCSP — arts. 15, 25, 44, 122, 124, 204, 210, 326",
    article: "",
    explicacio: "Del manteniment de les ofertes de les persones licitadores fins a la perfecció del contracte.",
  },

  {
    id: "Q-F002-N045",
    codi_bloc: "EB002",
    codi_tema: "E06",
    pregunta: "En quin tipus d’avaluació econòmica a l’hora de comparar dues polítiques alternatives es tenen en compte només els seus costos?",
    opcions: [
    "En la d’anàlisi cost-utilitat",
    "En la d’anàlisi cost-conseqüència",
    "En la d’anàlisi cost-minimització",
    "En la d’anàlisi cost-resultat"
    ],
    correcta: 2,
    llei: "ECO — Tècniques d’avaluació econòmica",
    article: "",
    explicacio: "En la d’anàlisi cost-minimització",
  },

  {
    id: "Q-F002-N046",
    codi_bloc: "CB004",
    codi_tema: "C14",
    pregunta: "D’acord amb la Llei 40/2015, d’1 d’octubre, de règim jurídic del sector públic, i llevat que normativament es prevegi un termini superior, la durada dels convenis:",
    opcions: [
    "No pot ser superior als cinc anys",
    "No pot ser superior als deu anys",
    "No pot ser superior als quatre anys",
    "Es pot establir consensuadament entre les parts"
    ],
    correcta: 2,
    llei: "LRJ — arts. 47 i 49",
    article: "",
    explicacio: "No pot ser superior als quatre anys",
  },

  {
    id: "Q-F002-N048",
    codi_bloc: "EB005",
    codi_tema: "E19",
    pregunta: "La persona que presta serveis en la condició de funcionari o funcionària públic en qualsevol administració o organisme públic o entitat en la qual es troba destinada i no li correspongui quedar en una altra situació, es troba en situació administrativa de:",
    opcions: [
    "Serveis especials",
    "Serveis en altres administracions",
    "Servei actiu",
    "Expectativa de destinació"
    ],
    correcta: 2,
    llei: "EBEP — arts. 22, 85–87",
    article: "",
    explicacio: "Servei actiu",
  },

  {
    id: "Q-F002-R003",
    codi_bloc: "EB005",
    codi_tema: "E19",
    pregunta: "El personal funcionari de carrera, quan adquireixi la condició de personal funcionari al servei d’organitzacions internacionals, serà declarat en situació de:",
    opcions: [
    "Suspensió de funcions",
    "Serveis especials",
    "Excedència",
    "Servei actiu"
    ],
    correcta: 1,
    llei: "EBEP — arts. 22, 85–87",
    article: "",
    explicacio: "Serveis especials",
  },

  {
    id: "Q-F002-R004",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "D’acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, els contractes de les administracions públiques es poden modificar durant la seva vigència quan en els plecs de clàusules administratives particulars s’hagi advertit expressament d’aquesta possibilitat, en la forma i amb el contingut establerts legalment...",
    opcions: [
    "Fins a un màxim del deu per cent del preu inicial del contracte.",
    "Fins a un màxim del vint per cent del preu inicial del contracte.",
    "Fins a un màxim del cinquanta per cent del preu inicial del contracte.",
    "Fins a un màxim del trenta per cent del preu inicial del contracte."
    ],
    correcta: 1,
    llei: "LCSP — arts. 15, 25, 44, 122, 124, 204, 210, 326",
    article: "",
    explicacio: "Fins a un màxim del vint per cent del preu inicial del contracte.",
  },

  {
    id: "Q-F005-N001",
    codi_bloc: "EB002",
    codi_tema: "E05",
    pregunta: "Què és l’Agenda 2030?",
    opcions: [
    "És el programa promogut per l’Organització Mundial de la Salut per avançar en la lluita contra les deu grans amenaces per a la salut del món actual.",
    "És el full de ruta global aprovat per les Nacions Unides per avançar vers el desenvolupament sostenible.",
    "És el programa promogut per les Nacions Unides per millorar els instruments financers de pagament dels països membres.",
    "És un full de ruta aprovat per l’Organització Mundial de la Salut per promoure la salut ambiental a escala mundial."
    ],
    correcta: 1,
    llei: "ODS — Agenda 2030",
    article: "",
    explicacio: "És el full de ruta global aprovat per les Nacions Unides per avançar vers el desenvolupament sostenible.",
  },

  {
    id: "Q-F005-N004",
    codi_bloc: "EB005",
    codi_tema: "E22",
    pregunta: "Quina de les matèries següents queda exclosa de l’obligatorietat de la negociació col·lectiva en l’àmbit de la funció pública?",
    opcions: [
    "L’aplicació de l’increment retributiu del personal que estableixi la Llei de pressupostos generals de l’Estat i de les comunitats autònomes.",
    "Les decisions de les administracions públiques que afecten les seves potestats d’organització.",
    "Els criteris generals sobre ofertes públiques.",
    "Les normes que fixin els criteris en matèria d’accés, carrera i provisió."
    ],
    correcta: 1,
    llei: "EBEP — arts. 37.2 i 87",
    article: "",
    explicacio: "Les decisions de les administracions públiques que afecten les seves potestats d’organització.",
  },

  {
    id: "Q-F005-N008",
    codi_bloc: "EB007",
    codi_tema: "E30",
    pregunta: "Com s’inicia el procediment per a la concessió de subvencions en règim de concurrència competitiva?",
    opcions: [
    "A petició de la persona interessada.",
    "A petició de les persones que determini el Pla estratègic de subvencions.",
    "Sempre d’ofici.",
    "A petició de les persones que estableixi la llei sectorial corresponent."
    ],
    correcta: 2,
    llei: "LGS — arts. 23, 29 i 31",
    article: "",
    explicacio: "Sempre d’ofici.",
  },

  {
    id: "Q-F005-N012",
    codi_bloc: "EB007",
    codi_tema: "E30",
    pregunta: "Si no s'ha establert un termini concret, quan s’han de realitzar les despeses subvencionables?",
    opcions: [
    "Dins del termini d’un any a comptar des de la data de concessió de la subvenció.",
    "En qualsevol moment.",
    "Dins dels tres mesos següents a la data de concessió de la subvenció.",
    "Abans que finalitzi l'any natural en què s'hagi concedit la subvenció."
    ],
    correcta: 3,
    llei: "LGS — arts. 23, 29 i 31",
    article: "",
    explicacio: "Abans que finalitzi l'any natural en què s'hagi concedit la subvenció.",
  },

  {
    id: "Q-F005-N015",
    codi_bloc: "EB004",
    codi_tema: "E15",
    pregunta: "Un idCAT Mòbil és un mecanisme d’identificació i signatura electrònica...",
    opcions: [
    "basat en un certificat digital en programari.",
    "que es pot utilitzar en qualsevol tràmit de forma equivalent a la signatura manuscrita.",
    "que permet produir el tipus de signatura electrònica reconeguda.",
    "basat en l'enviament de contrasenyes d'un sol ús al mòbil."
    ],
    correcta: 3,
    llei: "AOC — Funcionament d’idCAT Mòbil",
    article: "",
    explicacio: "basat en l'enviament de contrasenyes d'un sol ús al mòbil.",
  },

  {
    id: "Q-F005-N020",
    codi_bloc: "EB006",
    codi_tema: "E28",
    pregunta: "En l’àmbit de l’Administració de la Generalitat de Catalunya, quin òrgan té la competència per resoldre els recursos especials en matèria de contractació?",
    opcions: [
    "El Tribunal Constitucional.",
    "El Tribunal Català de Contractes del Sector Públic.",
    "Els tribunals economicoadministratius.",
    "El Tribunal Superior de Justícia de Catalunya."
    ],
    correcta: 1,
    llei: "LCSP — arts. 46, 62, 204 i 210",
    article: "",
    explicacio: "El Tribunal Català de Contractes del Sector Públic.",
  },

  {
    id: "Q-F005-N021",
    codi_bloc: "EB002",
    codi_tema: "E06",
    pregunta: "En el marc de l’avaluació econòmica de polítiques públiques, la monetització...",
    opcions: [
    "converteix en un valor expressat en euros o en una altra moneda els beneficis i costos socials d’una intervenció pública.",
    "és una tècnica pròpia del seguiment dels contractes públics.",
    "és l’instrument propi a utilitzar en la fase d’autorització de la despesa pública.",
    "és una variable que tracta de representar com la societat prefereix més el moment actual que un moment futur."
    ],
    correcta: 0,
    llei: "ECO — Monetització",
    article: "",
    explicacio: "converteix en un valor expressat en euros o en una altra moneda els beneficis i costos socials d’una intervenció pública.",
  },

  {
    id: "Q-F005-N024",
    codi_bloc: "EB007",
    codi_tema: "E30",
    pregunta: "Es pot subcontractar l’activitat objecte d’una subvenció?",
    opcions: [
    "Únicament quan la normativa reguladora de la subvenció ho prevegi.",
    "Sí, sempre.",
    "Sí, en un màxim del trenta per cent de l’import de l’activitat subvencionada.",
    "No es pot subcontractar cap activitat subvencionada."
    ],
    correcta: 0,
    llei: "LGS — arts. 23, 29 i 31",
    article: "",
    explicacio: "Únicament quan la normativa reguladora de la subvenció ho prevegi.",
  },

  {
    id: "Q-F005-N028",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "Si així ho preveuen els plecs de clàusules administratives particulars, es poden modificar els contractes de les administracions públiques durant la seva vigència?",
    opcions: [
    "Sí, fins a un 30% de l’import d’adjudicació.",
    "Sí, fins a un 20% del preu inicial.",
    "Sí, fins a un 60% del preu inicial.",
    "No es poden modificar en cap cas."
    ],
    correcta: 1,
    llei: "LCSP — arts. 46, 62, 204 i 210",
    article: "",
    explicacio: "Sí, fins a un 20% del preu inicial.",
  },

  {
    id: "Q-F005-N032",
    codi_bloc: "EB005",
    codi_tema: "E19",
    pregunta: "El personal funcionari al servei de l'Administració de la Generalitat de Catalunya que sigui nomenat personal eventual d’un departament queda en la situació administrativa següent:",
    opcions: [
    "excedència forçosa, llevat que exerceixi l'opció de seguir en servei actiu si les característiques del lloc eventual ho permeten.",
    "excedència voluntària per incompatibilitats.",
    "excedència per interès particular.",
    "serveis especials, llevat que exerceixi l'opció de seguir en servei actiu si les característiques del lloc eventual ho permeten."
    ],
    correcta: 3,
    llei: "EBEP — arts. 37.2 i 87",
    article: "",
    explicacio: "serveis especials, llevat que exerceixi l'opció de seguir en servei actiu si les característiques del lloc eventual ho permeten.",
  },

  {
    id: "Q-F005-N036",
    codi_bloc: "EB006",
    codi_tema: "E25",
    pregunta: "A qui correspon supervisar l’execució d’un contracte, adoptar les decisions i dictar les instruccions necessàries amb la finalitat d’assegurar la realització correcta de la prestació pactada?",
    opcions: [
    "A l’òrgan de contractació.",
    "A la unitat promotora del contracte.",
    "Al responsable del contracte.",
    "Al Tribunal Català de Contractes del Sector Públic."
    ],
    correcta: 2,
    llei: "LCSP — arts. 46, 62, 204 i 210",
    article: "",
    explicacio: "Al responsable del contracte.",
  },

  {
    id: "Q-F005-N040",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "Per a la constatació que un contracte ha estat complert pel contractista, la llei exigeix per part de l’Administració un acte formal i positiu de recepció o conformitat. Si no es determina en el plec de clàusules administratives particulars, quin és el termini per a aquest acte?",
    opcions: [
    "En el termini de quinze dies a comptar des de la data del lliurament o realització de l’objecte del contracte.",
    "Dins del mes següent al lliurament o realització de l’objecte del contracte.",
    "Dins dels tres mesos següents al lliurament o realització de l’objecte del contracte.",
    "L’endemà del lliurament o realització de l’objecte del contracte."
    ],
    correcta: 1,
    llei: "LCSP — arts. 46, 62, 204 i 210",
    article: "",
    explicacio: "Dins del mes següent al lliurament o realització de l’objecte del contracte.",
  },

  {
    id: "Q-F005-R043",
    codi_bloc: "EB007",
    codi_tema: "E30",
    pregunta: "El procediment ordinari de concessió de subvencions s’ha de tramitar:",
    opcions: [
    "en règim simplificat.",
    "per concessió directa.",
    "en règim de prorrateig.",
    "en règim de concurrència competitiva."
    ],
    correcta: 3,
    llei: "LGS — arts. 23, 29 i 31",
    article: "",
    explicacio: "en règim de concurrència competitiva.",
  },

  {
    id: "Q-F009-N001",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "En relació amb la previsió de les modificacions dels contractes previstes en el plec de clàusules administratives particulars...",
    opcions: [
    "la clàusula de modificació ha de ser tal que en tot cas permeti els candidats i licitadors comprendre el seu abast exacte i interpretar-la de la mateixa manera.",
    "la clàusula de modificació s’ha de formular en termes abstractes, pel que fa a entendre que habilita les modificacions escaients durant la seva execució.",
    "poden suposar una modificació del cinc per cent addicional al vint per cent del preu inicial previst en la normativa reguladora dels contractes del sector públic.",
    "s’entén que s’altera la naturalesa global del contracte quan se substitueixi alguna unitat d’obra puntual."
    ],
    correcta: 0,
    llei: "LCSP — arts. 62, 204 i 209",
    article: "",
    explicacio: "la clàusula de modificació ha de ser tal que en tot cas permeti els candidats i licitadors comprendre el seu abast exacte i interpretar-la de la mateixa manera.",
  },

  {
    id: "Q-F009-N011",
    codi_bloc: "EB005",
    codi_tema: "E21",
    pregunta: "Assenyala quina és l’afirmació correcta en relació amb el personal eventual al servei de l'Administració de la Generalitat de Catalunya:",
    opcions: [
    "La seva condició de personal eventual constitueix un mèrit per a la promoció interna quan hagi obtingut la condició de funcionari.",
    "Cessa quan es produeixi el de l’autoritat a la qual es presti la funció de confiança o assessorament.",
    "El seu cessament, en ser lliure, genera la indemnització que per a cada exercici fixi la Llei de pressupostos de la Generalitat de Catalunya.",
    "Percep un complement específic que es calcula aplicant un percentatge al complement que perceben els funcionaris en funció del grup de pertinença."
    ],
    correcta: 1,
    llei: "EBEP — art. 12",
    article: "",
    explicacio: "Cessa quan es produeixi el de l’autoritat a la qual es presti la funció de confiança o assessorament.",
  },

  {
    id: "Q-F009-N012",
    codi_bloc: "EB002",
    codi_tema: "E05",
    pregunta: "Qui va aprovar l’Agenda 2030?",
    opcions: [
    "El Parlament Europeu.",
    "El Programa de les Nacions Unides per al Medi Ambient.",
    "El Consell d’Europa.",
    "L’Assemblea General de les Nacions Unides."
    ],
    correcta: 3,
    llei: "ODS — Adopció de l’Agenda 2030",
    article: "",
    explicacio: "L’Assemblea General de les Nacions Unides.",
  },

  {
    id: "Q-F009-N016",
    codi_bloc: "CB002",
    codi_tema: "C19",
    pregunta: "En l’àmbit l’administració digital, quin tipus de document té la mateixa validesa i eficàcia que el document original?",
    opcions: [
    "La còpia simple.",
    "La còpia autèntica.",
    "La còpia escanejada.",
    "La còpia habilitada."
    ],
    correcta: 1,
    llei: "LPAC — art. 27",
    article: "",
    explicacio: "La còpia autèntica.",
  },

  {
    id: "Q-F009-N028",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "Els contractes s’extingeixen per:",
    opcions: [
    "la subrogació del contracte.",
    "l’acord de l’interventor membre de la mesa de contractació.",
    "la cessió del contracte a un tercer.",
    "el seu compliment o per resolució."
    ],
    correcta: 3,
    llei: "LCSP — arts. 62, 204 i 209",
    article: "",
    explicacio: "el seu compliment o per resolució.",
  },

  {
    id: "Q-F009-N029",
    codi_bloc: "EB002",
    codi_tema: "E06",
    pregunta: "En el marc de l’avaluació econòmica de polítiques publiques, la taxa de descompte social...",
    opcions: [
    "s’utilitza especialment quant, existint diversos beneficis d’una intervenció pública, aquests no es poden quantificar ni monetitzar.",
    "serveix per ajustar la valoració dels beneficis i dels costos futurs, per portar-los a valors comparables a l’actualitat.",
    "serveix per conèixer els costos socials futurs de les polítiques públiques a partir de la projecció dels costos presents.",
    "converteix en un valor expressat en euros o en una altra moneda els beneficis i costos socials d’una intervenció pública."
    ],
    correcta: 1,
    llei: "ECO — Taxa de descompte i avaluació econòmica",
    article: "",
    explicacio: "serveix per ajustar la valoració dels beneficis i dels costos futurs, per portar-los a valors comparables a l’actualitat.",
  },

  {
    id: "Q-F009-N031",
    codi_bloc: "EB005",
    codi_tema: "E19",
    pregunta: "Per raó de les faltes disciplinàries comeses pel personal funcionari al servei de l’Administració de la Generalitat, es poden imposar les sancions següents:",
    opcions: [
    "La separació del servei per la comissió de faltes molt greus i greus.",
    "La suspensió ferma de funcions amb una durada màxima de 4 anys.",
    "El demèrit, que consisteix en la penalització als efectes de carrera, promoció o mobilitat voluntària.",
    "La pèrdua de fins a 4 graus personals."
    ],
    correcta: 2,
    llei: "EBEP — art. 96.1.e",
    article: "",
    explicacio: "El demèrit, que consisteix en la penalització als efectes de carrera, promoció o mobilitat voluntària.",
  },

  {
    id: "Q-F009-N035",
    codi_bloc: "EB006",
    codi_tema: "E25",
    pregunta: "A qui correspon exercir les facultats del responsable del contracte en els contractes d’obres?",
    opcions: [
    "A l’interventor membre de la mesa de contractació.",
    "Al director facultatiu de l’obra.",
    "Als membres del cos de diplomatura, arquitectes tècnics.",
    "A un funcionari amb coneixements acreditats d’arquitectura tècnica i dret."
    ],
    correcta: 1,
    llei: "LCSP — arts. 62, 204 i 209",
    article: "",
    explicacio: "Al director facultatiu de l’obra.",
  },

  {
    id: "Q-F009-N036",
    codi_bloc: "EB002",
    codi_tema: "E06",
    pregunta: "L’avaluació econòmica d’una política pública...",
    opcions: [
    "és una avaluació o anàlisi de naturalesa pressupostària.",
    "és una avaluació o anàlisi de naturalesa financera.",
    "centra la seva atenció a analitzar els impactes o beneficis socials generats per la intervenció pública en relació amb els costos socials incorreguts.",
    "és pròpia de l’avaluació de les normes de caràcter general i s’efectua un cop aprovada la norma."
    ],
    correcta: 2,
    llei: "ECO — Taxa de descompte i avaluació econòmica",
    article: "",
    explicacio: "centra la seva atenció a analitzar els impactes o beneficis socials generats per la intervenció pública en relació amb els costos socials incorreguts.",
  },

  {
    id: "Q-F009-R002",
    codi_bloc: "EB007",
    codi_tema: "E30",
    pregunta: "Als efectes de la Llei 38/2003, de 17 de novembre, general de subvencions, té la consideració de concurrència competitiva...",
    opcions: [
    "el procediment que sempre s’efectua mitjançant prorrateig, entre els beneficiaris de la subvenció, de l'import global màxim destinat a les subvencions.",
    "el procediment en què exclusivament poden participar entitats sense ànim de lucre.",
    "el procediment pel qual la concessió de les subvencions es fa mitjançant la comparació de les sol·licituds presentades, a fi d'establir una prelació entre aquestes d'acord amb els criteris de valoració.",
    "el procediment que s’inicia a instància de part."
    ],
    correcta: 2,
    llei: "LGS — art. 22.1",
    article: "",
    explicacio: "el procediment pel qual la concessió de les subvencions es fa mitjançant la comparació de les sol·licituds presentades, a fi d'establir una prelació entre aquestes d'acord amb els criteris de valoració.",
  },

  {
    id: "Q-F013-N001",
    codi_bloc: "CB003",
    codi_tema: "C08",
    pregunta: "L’ordenació i la prestació de serveis bàsics a la comunitat és una competència:",
    opcions: [
    "Compartida entre la Generalitat de Catalunya i l’Estat.",
    "Delegada a la Generalitat de Catalunya.",
    "Exclusiva de la Generalitat de Catalunya.",
    "Dels governs local de Catalunya."
    ],
    correcta: 3,
    llei: "EAC — arts. 84, 76 i naturalesa orgànica de la norma",
    article: "",
    explicacio: "Dels governs local de Catalunya.",
  },

  {
    id: "Q-F013-N002",
    codi_bloc: "CB003",
    codi_tema: "C09",
    pregunta: "D’acord amb l’Estatut d’autonomia de Catalunya, el Consell de Garanties Estatutàries està format per:",
    opcions: [
    "Juristes de reconeguda competència 2/3 dels quals són designats a proposta del Parlament (per majoria de 3/5 dels diputats) i el 1/3 restant, a proposta del Govern.",
    "Juristes de reconeguda competència, 1/3 dels quals són juristes designats a proposta del Parlament (per majoria de 2/5 dels diputats) i els 2/3 restants, a proposta del Govern.",
    "Juristes de reconeguda competència nomenats a proposta del President del Govern i del President del Parlament de Catalunya.",
    "Juristes de reconeguda competència designats a proposta del Parlament de Catalunya, per majoria simple dels diputats."
    ],
    correcta: 0,
    llei: "EAC — arts. 84, 76 i naturalesa orgànica de la norma",
    article: "",
    explicacio: "Juristes de reconeguda competència 2/3 dels quals són designats a proposta del Parlament (per majoria de 3/5 dels diputats) i el 1/3 restant, a proposta del Govern.",
  },

  {
    id: "Q-F013-N005",
    codi_bloc: "CB007",
    codi_tema: "C28",
    pregunta: "De conformitat amb la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, les persones interessades poden sol·licitar l’inici d’un procediment de responsabilitat patrimonial:",
    opcions: [
    "En qualsevol moment.",
    "En el termini màxim de 6 mesos.",
    "Quan no hagi prescrit el seu dret a reclamar.",
    "En el termini de 18 mesos."
    ],
    correcta: 2,
    llei: "LPAC — arts. 5, 6, 47, 67 i 106",
    article: "",
    explicacio: "Quan no hagi prescrit el seu dret a reclamar.",
  },

  {
    id: "Q-F013-N010",
    codi_bloc: "CB004",
    codi_tema: "C14",
    pregunta: "D’acord amb l’article 8 de la Llei 40/2015, d’1 d’octubre, de règim jurídic del sector públic, la competència:",
    opcions: [
    "És intransferible i l’han d’exercir els òrgans administratius que la tinguin atribuïda com a pròpia, excepte en els casos de delegació o avocació si s’efectuen en els termes que preveu aquesta Llei o d’altres.",
    "És ineludible i l’han d’exercir els òrgans administratius que la tinguin atribuïda com a pròpia, excepte en els casos de delegació o avocació si s’efectuen en els termes que preveu aquesta Llei o d’altres.",
    "És irrenunciable i l’han d’exercir els òrgans administratius que la tinguin atribuïda com a pròpia, excepte en els casos de delegació o avocació si s’efectuen en els termes que preveu aquesta Llei o d’altres.",
    "És irrevocable i l’han d’exercir els òrgans administratius que la tinguin atribuïda com a pròpia, excepte en els casos de delegació o avocació si s’efectuen en els termes que preveu aquesta Llei o d’altres."
    ],
    correcta: 2,
    llei: "LRJ — art. 8",
    article: "",
    explicacio: "És irrenunciable i l’han d’exercir els òrgans administratius que la tinguin atribuïda com a pròpia, excepte en els casos de delegació o avocació si s’efectuen en els termes que preveu aquesta Llei o d’altres.",
  },

  {
    id: "Q-F013-N015",
    codi_bloc: "CB004",
    codi_tema: "C20",
    pregunta: "La revisió d’ofici d’actes administratius nuls en l’àmbit de l’Administració de la Generalitat de Catalunya:",
    opcions: [
    "Pot iniciar-se d’ofici o a sol·licitud d’una persona interessada i requereix, amb caràcter previ a la declaració de nul·litat, el dictamen favorable de l’òrgan consultiu corresponent.",
    "Només pot iniciar-se a instància d’una persona interessada i el dictamen de la Comissió Jurídica Assessora té caràcter merament facultatiu.",
    "Permet declarar la nul·litat d’actes anul·lables en qualsevol moment, sense necessitat de seguir un procediment contradictori.",
    "Té un termini màxim per resoldre de 3 mesos. Un cop transcorregut aquest termini, es produeix silenci estimatori."
    ],
    correcta: 0,
    llei: "LPAC — arts. 5, 6, 47, 67 i 106",
    article: "",
    explicacio: "Pot iniciar-se d’ofici o a sol·licitud d’una persona interessada i requereix, amb caràcter previ a la declaració de nul·litat, el dictamen favorable de l’òrgan consultiu corresponent.",
  },

  {
    id: "Q-F013-N021",
    codi_bloc: "CB006",
    codi_tema: "C25",
    pregunta: "D’acord amb l’article 42.4 de la Llei 38/2003, de 17 de novembre, general de subvencions, quin és el termini màxim per resoldre i notificar la resolució del procediment de reintegrament des de la data de l’acord d’iniciació?",
    opcions: [
    "6 mesos.",
    "9 mesos.",
    "12 mesos.",
    "18 mesos."
    ],
    correcta: 2,
    llei: "LGS — arts. 42.4 i 69.2",
    article: "",
    explicacio: "12 mesos.",
  },

  {
    id: "Q-F013-N022",
    codi_bloc: "CB004",
    codi_tema: "C16",
    pregunta: "D’acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, quin dels supòsits següents comporta la nul·litat de ple dret d’un acte administratiu?",
    opcions: [
    "Un acte dictat per un òrgan competent per raó de la matèria però incompetent per raó del grau, quan el vici no ha estat objecte de recurs en termini.",
    "Un acte administratiu dictat amb omissió d’un tràmit essencial del procediment, sempre que s’acrediti que el contingut final hauria estat el mateix sense l’omissió del tràmit.",
    "Un acte dictat fora de termini en un procediment sancionador, quan el termini té caràcter ordinari i no essencial.",
    "Un acte exprés mitjançant el qual s’atorga un dret subjectiu sense que es compleixin els requisits essencials exigits per l’ordenament jurídic per a la seva adquisició."
    ],
    correcta: 3,
    llei: "LPAC — arts. 5, 6, 47, 67 i 106",
    article: "",
    explicacio: "Un acte exprés mitjançant el qual s’atorga un dret subjectiu sense que es compleixin els requisits essencials exigits per l’ordenament jurídic per a la seva adquisició.",
  },

  {
    id: "Q-F013-R031",
    codi_bloc: "CB003",
    codi_tema: "C08",
    pregunta: "Quina naturalesa jurídica té l’Estatut d’autonomia de Catalunya?",
    opcions: [
    "Reial decret legislatiu.",
    "Llei ordinària.",
    "Reial decret llei.",
    "Llei orgànica."
    ],
    correcta: 3,
    llei: "EAC — arts. 84, 76 i naturalesa orgànica de la norma",
    article: "",
    explicacio: "Llei orgànica.",
  },

  {
    id: "Q-F013-R033",
    codi_bloc: "CB006",
    codi_tema: "C26",
    pregunta: "D’acord amb l’article 132.1 de la Constitució espanyola, la llei regula el règim jurídic dels béns de domini públic i dels béns comunals inspirant-se en els principis:",
    opcions: [
    "D’imparcialitat, jerarquia i capacitat.",
    "D’igualtat, progressivitat i solidaritat.",
    "D’inalienabilitat, imprescriptibilitat i inembargabilitat.",
    "D’integritat, objectivitat i transparència."
    ],
    correcta: 2,
    llei: "CE — art. 132.1",
    article: "",
    explicacio: "D’inalienabilitat, imprescriptibilitat i inembargabilitat.",
  },

  {
    id: "Q-F013-N040",
    codi_bloc: "EB004",
    codi_tema: "E13",
    pregunta: "D’acord amb l’article 40 bis de la Llei 26/2010, de règim jurídic i de procediment de les administracions públiques de Catalunya, afegit per la Llei 9/2025, de 13 de novembre, quin tipus de consentiment es necessita per a la prestació de serveis proactius i personalitzats?",
    opcions: [
    "Consentiment exprés i específic, informat i inequívoc de la persona interessada.",
    "Consentiment general o indeterminat d’accés a la prestació de serveis proactius i personalitzats.",
    "Consentiment exprés i no específic, informat i inequívoc de la persona interessada.",
    "No cal consentiment exprés en aquests casos; es produeix en el moment d’accés a la prestació de serveis proactius i personalitzats."
    ],
    correcta: 0,
    llei: "L26 — art. 40 bis.3",
    article: "",
    explicacio: "Consentiment exprés i específic, informat i inequívoc de la persona interessada.",
  },

  {
    id: "Q-F013-N046",
    codi_bloc: "EB003",
    codi_tema: "E09",
    pregunta: "D’acord amb la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, quin element ha de contenir necessàriament una carta de serveis?",
    opcions: [
    "La planificació de reorganització dels serveis per als propers exercicis.",
    "Les condicions d’accés als serveis.",
    "Els protocols disciplinaris interns per l’incompliment del serveis.",
    "La memòria econòmica del programa pressupostari dels serveis."
    ],
    correcta: 1,
    llei: "TRANS — art. 59.4",
    article: "",
    explicacio: "Les condicions d’accés als serveis.",
  },

  {
    id: "Q-F013-N051",
    codi_bloc: "EB005",
    codi_tema: "E19",
    pregunta: "D’acord amb l’article 97 del Text refós de la Llei de l’Estatut bàsic de l’empleat públic, quin és el termini de prescripció de les sancions imposades per faltes disciplinàries lleus, comptat des de la fermesa de la resolució sancionadora?",
    opcions: [
    "2 anys",
    "1 any",
    "6 mesos",
    "3 mesos"
    ],
    correcta: 1,
    llei: "EBEP — arts. 10.1.d, 41, 50.2, 59, 90 i 97",
    article: "",
    explicacio: "1 any",
  },

  {
    id: "Q-F013-N052",
    codi_bloc: "EB005",
    codi_tema: "E19",
    pregunta: "D’acord amb l’article 90 del Text refós de la Llei de l’Estatut bàsic de l’empleat públic, la sanció disciplinària de suspensió de funcions no pot tenir una durada superior a:",
    opcions: [
    "2 anys",
    "3 anys",
    "5 anys",
    "6 anys"
    ],
    correcta: 3,
    llei: "EBEP — arts. 10.1.d, 41, 50.2, 59, 90 i 97",
    article: "",
    explicacio: "6 anys",
  },

  {
    id: "Q-F013-N056",
    codi_bloc: "EB006",
    codi_tema: "E24",
    pregunta: "Els contractes sotmesos a la Llei 9/2017, de 8 de novembre, de contractes del sector públic s’identifiquen per l’aplicació:",
    opcions: [
    "Del valor econòmic del contracte.",
    "Del codi CSP.",
    "Del codi que determini cada administració pública.",
    "Del vocabulari comú de contractes públics."
    ],
    correcta: 3,
    llei: "LCSP — arts. 17, 23, 38, 63, 100–102, 120, 124, 191, 204–205 i 319",
    article: "",
    explicacio: "Del vocabulari comú de contractes públics.",
  },

  {
    id: "Q-F013-N057",
    codi_bloc: "EB006",
    codi_tema: "E24",
    pregunta: "D’acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, els contractes d’obres i de serveis subvencionats per poders adjudicadors estan subjectes a regulació harmonitzada quan són subvencionats:",
    opcions: [
    "De forma indirecta i en més d’un 50% del seu import.",
    "De forma directa i en més d’un 50% del seu import.",
    "De forma directa i en més d’un 60% del seu import.",
    "De forma indirecta i en més d’un 60% del seu import."
    ],
    correcta: 1,
    llei: "LCSP — arts. 17, 23, 38, 63, 100–102, 120, 124, 191, 204–205 i 319",
    article: "",
    explicacio: "De forma directa i en més d’un 50% del seu import.",
  },

  {
    id: "Q-F013-N058",
    codi_bloc: "EB006",
    codi_tema: "E26",
    pregunta: "Els òrgans de contractació han de donar publicitat mitjançant internet:",
    opcions: [
    "Només dels anuncis de licitació dels contractes.",
    "Només dels anuncis de licitació i d’adjudicació dels contractes.",
    "Només dels plecs de clàusules administratives i de prescripcions tècniques.",
    "De tota la documentació necessària per licitar."
    ],
    correcta: 3,
    llei: "LCSP — arts. 17, 23, 38, 63, 100–102, 120, 124, 191, 204–205 i 319",
    article: "",
    explicacio: "De tota la documentació necessària per licitar.",
  },

  {
    id: "Q-F013-N059",
    codi_bloc: "EB006",
    codi_tema: "E27",
    pregunta: "En matèria de contractació pública, la modificació del plec de prescripcions tècniques particulars després de l‘adjudicació del contracte:",
    opcions: [
    "Pot comportar la retroacció d’actuacions.",
    "Comporta la retroacció d’actuacions quan es modifiquin d’ofici per l’òrgan de contractació.",
    "Comporta la retroacció d’actuacions quan es modifiquin a petició de l’adjudicatari.",
    "No pot comportar la retroacció d’actuacions, sense excepcions."
    ],
    correcta: 0,
    llei: "LCSP — arts. 17, 23, 38, 63, 100–102, 120, 124, 191, 204–205 i 319",
    article: "",
    explicacio: "Pot comportar la retroacció d’actuacions.",
  },

  {
    id: "Q-F013-N060",
    codi_bloc: "EB006",
    codi_tema: "E28",
    pregunta: "Els contractes subscrits pels poders adjudicadors són invàlids quan:",
    opcions: [
    "La invalidesa no derivi de la il·legalitat de les seves clàusules.",
    "Hi concorri alguna de les causes d’invalidesa de dret natural.",
    "En els actes preparatoris o del procediment d’adjudicació es presentin algunes de les causes d’invalidesa de dret administratiu.",
    "En els actes preparatoris o del procediment d’adjudicació es presentin algunes de les causes d’invalidesa de dret mercantil."
    ],
    correcta: 2,
    llei: "LCSP — arts. 17, 23, 38, 63, 100–102, 120, 124, 191, 204–205 i 319",
    article: "",
    explicacio: "En els actes preparatoris o del procediment d’adjudicació es presentin algunes de les causes d’invalidesa de dret administratiu.",
  },

  {
    id: "Q-F013-N061",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "La modificació d’un contracte celebrat per un poder adjudicador que no és administració pública es regeix per:",
    opcions: [
    "Les normes de dret privat, i no s’hi aplica la Llei 9/2017, de 8 de novembre.",
    "La Llei 9/2017, de 8 de novembre, i no s’hi apliquen les normes de dret privat.",
    "Les normes de dret privat, però s’hi aplica la Llei 9/2017, de 8 de novembre, pel que fa als supòsits de modificació del contracte.",
    "La Llei 9/2017, de 8 de novembre, en el cas que el plec de clàusules administratives particulars no prevegi la modificació del contracte."
    ],
    correcta: 2,
    llei: "LCSP — arts. 17, 23, 38, 63, 100–102, 120, 124, 191, 204–205 i 319",
    article: "",
    explicacio: "Les normes de dret privat, però s’hi aplica la Llei 9/2017, de 8 de novembre, pel que fa als supòsits de modificació del contracte.",
  },

  {
    id: "Q-F013-N062",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "No es pot modificar un contracte:",
    opcions: [
    "Sense el dictamen previ de la Comissió Jurídica Assessora.",
    "Sense el dictamen previ de la Comissió Jurídica Assessora, quan el plec de clàusules administratives no prevegi la modificació i la seva quantia, aïllada o conjuntament, sigui superior a un 20% del preu inicial del contracte, IVA exclòs, i el seu preu sigui superior a 3.000.000 d’euros.",
    "Sense el dictamen previ del Consell d’Estat, quan el plec de clàusules administratives no prevegi la modificació i la seva quantia, aïllada o conjuntament, sigui superior a un 20% del preu inicial del contracte, IVA exclòs, i el seu preu sigui superior a 6.000.000 d’euros.",
    "Sense el dictamen previ de la Comissió Jurídica Assessora, quan el plec de clàusules administratives no prevegi la modificació i la seva quantia, aïllada o conjuntament, sigui superior a un 20% del preu inicial del contracte, IVA exclòs, i el seu preu sigui igual o superior a 6.000.000 d’euros."
    ],
    correcta: 3,
    llei: "LCSP — arts. 17, 23, 38, 63, 100–102, 120, 124, 191, 204–205 i 319",
    article: "",
    explicacio: "Sense el dictamen previ de la Comissió Jurídica Assessora, quan el plec de clàusules administratives no prevegi la modificació i la seva quantia, aïllada o conjuntament, sigui superior a un 20% del preu inicial del contracte, IVA exclòs, i el seu preu sigui igual o superior a 6.000.000 d’euros.",
  },

  {
    id: "Q-F013-N063",
    codi_bloc: "EB007",
    codi_tema: "E30",
    pregunta: "En matèria de subvencions de les administracions públiques, els membres d’una comunitat de béns responen d’una sanció pecuniària de manera:",
    opcions: [
    "Solidària",
    "Mancomunada",
    "Individual",
    "Subsidiària"
    ],
    correcta: 0,
    llei: "LGS — arts. 42.4 i 69.2",
    article: "",
    explicacio: "Solidària",
  },

  {
    id: "Q-F013-N068",
    codi_bloc: "EB006",
    codi_tema: "E27",
    pregunta: "Com a responsable de contractació del Departament de Cultura, us demanen que calculeu el valor estimat del contracte del servei de neteja. El pressupost base de licitació és de 121.000 euros (21 % d’IVA inclòs). El termini d'execució és d’un any, amb una modificació prevista d'un màxim del 20 % anual i una pròrroga per 2 anys més. Quin és el valor estimat del contracte?",
    opcions: [
    "120.000 euros",
    "360.000 euros",
    "439.230 euros",
    "300.000 euros"
    ],
    correcta: 1,
    llei: "LCSP — arts. 17, 23, 38, 63, 100–102, 120, 124, 191, 204–205 i 319",
    article: "",
    explicacio: "360.000 euros",
  },

  {
    id: "Q-F013-N069",
    codi_bloc: "EB006",
    codi_tema: "E24",
    pregunta: "Treballeu com a responsable de contractació al Servei Meteorològic de Catalunya, entitat de dret públic de la Generalitat que té la consideració d’administració pública a l’efecte de la legislació contractual. L’entitat ha de contractar el servei de gestió i manteniment de les estacions meteorològiques automàtiques que hi ha a Catalunya. A un company vostre li han encarregat que redacti el plec de clàusules administratives que ha de regir la licitació, però no té gaire experiència i us demana, com a expert en la matèria, si el contracte està subjecte a regulació harmonitzada. Què li respondríeu?",
    opcions: [
    "No, perquè el Servei Meteorològic de Catalunya no és un poder adjudicador.",
    "Sí, si és un contracte subvencionat de manera directa en més del 40% de l’import.",
    "No, perquè és un contracte que la legislació contractual estableix que no està subjecte a regulació harmonitzada.",
    "Sí, si el valor estimat del contracte és igual o superior a la quantia que estableix la legislació contractual."
    ],
    correcta: 3,
    llei: "LCSP — arts. 17, 23, 38, 63, 100–102, 120, 124, 191, 204–205 i 319",
    article: "",
    explicacio: "Sí, si el valor estimat del contracte és igual o superior a la quantia que estableix la legislació contractual.",
  },

  {
    id: "Q-F013-N071",
    codi_bloc: "EB006",
    codi_tema: "E27",
    pregunta: "Treballeu al Servei de Contractació del departament competent en l’atenció a la infància i l’adolescència i us demanen quin és el procediment adequat per tramitar la prestació del servei social d’atenció a un grup de menors d’edat estrangers no acompanyats que acaba d’arribar a Catalunya. La xarxa de serveis socials està saturada, fet que posa en greu perill els drets i la integritat física dels nouvinguts. Què proposareu?",
    opcions: [
    "Un contracte verbal per urgència",
    "Una tramitació d’emergència",
    "Un procediment obert simplificat",
    "Un contracte menor"
    ],
    correcta: 1,
    llei: "LCSP — arts. 17, 23, 38, 63, 100–102, 120, 124, 191, 204–205 i 319",
    article: "",
    explicacio: "Una tramitació d’emergència",
  },

  {
    id: "Q-F013-N074",
    codi_bloc: "EB006",
    codi_tema: "E23",
    pregunta: "El Servei de Contractació us fa l’observació que el Centre de Telecomunicacions i Tecnologies de la Informació (CTTI), és un poder adjudicador que no té la consideració d’administració pública, i els seus contractes es regeixen per normes de dret privat. Hi esteu d’acord?",
    opcions: [
    "No, perquè no cal distingir entre el règim de preparació i adjudicació i el règim relatiu als efectes i a l’extinció del contracte.",
    "No, perquè els contractes es regeixen per normes de dret públic.",
    "Sí, però només pel que fa als efectes i l’extinció dels contractes, amb algunes excepcions.",
    "Sí, però només pel que fa als efectes i l’extinció dels contractes, sense cap excepció."
    ],
    correcta: 2,
    llei: "LCSP — arts. 17, 23, 38, 63, 100–102, 120, 124, 191, 204–205 i 319",
    article: "",
    explicacio: "Sí, però només pel que fa als efectes i l’extinció dels contractes, amb algunes excepcions.",
  },

  {
    id: "Q-F013-N076",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "Sistema d'Emergències Mèdiques, SA (SEM), societat mercantil adscrita al Servei Català de la Salut, va contractar l’1 de gener de 2022 el servei d’atenció psicològica en ambulàncies. El contracte, adjudicat pel procediment obert, va finalitzar el 31 de desembre de 2024, però l’empresa va continuar prestant el servei a instàncies del SEM, fins a l’1 de gener de 2026, quan es va adjudicar el nou contracte a una altra empresa, també pel procediment obert. Com a responsable de la contractació de l’empresa trobeu correcta la prestació del servei durant el 2025?",
    opcions: [
    "No, perquè és un encàrrec verbal nul.",
    "Sí, perquè el servei és de caràcter essencial.",
    "Sí, perquè hi ha hagut un retard en la tramitació de la licitació del nou contracte.",
    "Sí, perquè la pròrroga és forçosa fins a la nova adjudicació."
    ],
    correcta: 0,
    llei: "LCSP — arts. 17, 23, 38, 63, 100–102, 120, 124, 191, 204–205 i 319",
    article: "",
    explicacio: "No, perquè és un encàrrec verbal nul.",
  },

  {
    id: "Q-F013-N085",
    codi_bloc: "EB005",
    codi_tema: "E21",
    pregunta: "El Departament d’Interior i Seguretat Pública vol nomenar 3 tècnics/tècniques superiors per fer front a una situació d’acumulació de tasques relacionada amb la gestió de sancions administratives imposades en l’àmbit de la seguretat ciutadana. Quina és la durada màxima que podran tenir aquests nomenaments, d’acord amb el que estableix el Text refós de la Llei de l’Estatut bàsic de l’empleat públic, aprovat pel Reial decret legislatiu 5/2015, de 30 d’octubre (TREBEP)?",
    opcions: [
    "6 mesos, dins d'un període de 12 mesos.",
    "3 mesos, dins d'un període de 6 mesos.",
    "9 mesos, dins d'un període de 18 mesos.",
    "12 mesos, dins d'un període de 2 anys."
    ],
    correcta: 2,
    llei: "EBEP — arts. 10.1.d, 41, 50.2, 59, 90 i 97",
    article: "",
    explicacio: "9 mesos, dins d'un període de 18 mesos.",
  },

  {
    id: "Q-F013-N088",
    codi_bloc: "EB005",
    codi_tema: "E22",
    pregunta: "La Montserrat Cucurella és funcionària del cos superior d'administració, amb destinació definitiva des de l’any 2010 en un lloc de treball dels Serveis Territorials de Girona del Departament de la Presidència. En les darreres eleccions sindicals del personal funcionari de l’Administració de la Generalitat, celebrades l’any 2023, la senyora Cucurella va ser escollida delegada de personal de la Junta de Personal dels Serveis Territorials a Girona, que constitueixen una unitat electoral amb un cens de 1.200 persones. D’acord amb el que estableix l’article 41 del Text refós de la Llei de l’Estatut bàsic de l’empleat públic, aprovat pel Reial decret legislatiu 5/2015, de 30 d’octubre (TREBEP), de quin crèdit d’hores mensuals, dins de la jornada de treball i retribuïdes com a treball efectiu disposarà la senyora Cucurella per a l’exercici de la seva funció representativa?",
    opcions: [
    "40 hores",
    "21 hores",
    "30 hores",
    "20 hores"
    ],
    correcta: 0,
    llei: "EBEP — arts. 10.1.d, 41, 50.2, 59, 90 i 97",
    article: "",
    explicacio: "40 hores",
  },

  {
    id: "Q-F013-N089",
    codi_bloc: "EB002",
    codi_tema: "E05",
    pregunta: "Heu de redactar un informe relatiu a l'adopció de polítiques, en especial fiscals, salarials i de protecció social, per aconseguir progressivament una major igualtat, i el vostre cap us ha dit que tingueu en compte l’Agenda 2030 a l’hora de redactar-lo. A quin objectiu de desenvolupament sostenible (ODS) heu de fer referència?",
    opcions: [
    "ODS 8, promoure el creixement econòmic sostingut, inclusiu i sostenible, l’ocupació plena i productiva i el treball digne per a tothom.",
    "ODS 1, erradicar la pobresa a tot el món i en totes les seves formes.",
    "ODS 5, aconseguir la igualtat de gènere i apoderar totes les dones i nenes.",
    "ODS 10, reduir la desigualtat en i entre els països."
    ],
    correcta: 3,
    llei: "ODS — ODS 10",
    article: "",
    explicacio: "ODS 10, reduir la desigualtat en i entre els països.",
  },

  {
    id: "Q-F013-N090",
    codi_bloc: "EB005",
    codi_tema: "E16",
    pregunta: "Treballeu al Servei d’Organització del Departament de Cultura i la vostra cap us ha demanat que li faciliteu la relació de llocs de treball del Departament de la Presidència. Podeu tenir accés a aquesta relació de llocs de treball?",
    opcions: [
    "Sí, sempre que la demani al Departament de la Presidència.",
    "Sí, perquè és pública.",
    "No, perquè només es pot disposar de la relació de llocs de treball del seu Departament.",
    "Sí, però us l’ha de facilitar la Direcció General de Funció Pública."
    ],
    correcta: 1,
    llei: "EBEP — art. 74: RLT pública",
    article: "",
    explicacio: "Sí, perquè és pública.",
  },

  {
    id: "Q-F013-N092",
    codi_bloc: "EB005",
    codi_tema: "E17",
    pregunta: "Heu de preparar l'oferta d'ocupació pública de 2027 i us heu d’assegurar que, d’acord amb el TREBEP, es garanteixi l'accés a la funció pública de les persones amb discapacitat que tinguin reconeguda aquesta condició legal. Quin percentatge cal reservar a aquest efecte?",
    opcions: [
    "El 2 %",
    "No inferior al 7 %",
    "El 3 %",
    "No inferior al 5 %"
    ],
    correcta: 1,
    llei: "EBEP — arts. 10.1.d, 41, 50.2, 59, 90 i 97",
    article: "",
    explicacio: "No inferior al 7 %",
  },

  {
    id: "Q-F013-N094",
    codi_bloc: "EB005",
    codi_tema: "E18",
    pregunta: "Una persona us escriu a la bústia de recursos humans i comenta que es troba en situació de baixa per incapacitat temporal, la qual li impedeix gaudir de les vacances durant l’any natural. Us pregunta si les podrà gaudir més endavant i, en cas afirmatiu, quan. Què li respondríeu?",
    opcions: [
    "Que les vacances es consideren perdudes i no es poden gaudir posteriorment.",
    "Que es podran gaudir en qualsevol moment dins dels 12 mesos següents a l’any en què s’hagin originat.",
    "Que es podran gaudir en el moment de la reincorporació de la baixa, sempre que no hagin transcorregut més de 12 mesos a partir del final de l’any en què s’hagin originat.",
    "Que es podran gaudir en el moment de la reincorporació de la baixa, sempre que no hagin transcorregut més de 18 mesos a partir del final de l’any en què s’hagin originat."
    ],
    correcta: 3,
    llei: "EBEP — arts. 10.1.d, 41, 50.2, 59, 90 i 97",
    article: "",
    explicacio: "Que es podran gaudir en el moment de la reincorporació de la baixa, sempre que no hagin transcorregut més de 18 mesos a partir del final de l’any en què s’hagin originat.",
  },

  {
    id: "Q-F013-N097",
    codi_bloc: "EB004",
    codi_tema: "E15",
    pregunta: "Sou tècnic superior i treballeu a l’Assessoria Jurídica del Departament de la Presidència. El vostre cap està resolent un procediment i us pregunta quina validesa tenen les inscripcions de representacions. Té dubtes sobre una inscripció realitzada l’1 de desembre de 2022. Què li respondríeu?",
    opcions: [
    "No és vàlida. Els apoderaments inscrits tenen una validesa màxima de 3 anys a comptar de la data d’inscripció.",
    "És vàlida. Els apoderaments inscrits tenen una validesa màxima de 4 anys a comptar de la data d’inscripció.",
    "És vàlida. Els apoderaments inscrits tenen una validesa màxima de 5 anys a comptar de la data d’inscripció.",
    "No és valida. Els apoderaments inscrits tenen una validesa màxima de 2 anys a comptar de la data d’inscripció."
    ],
    correcta: 2,
    llei: "LPAC — arts. 5, 6, 47, 67 i 106",
    article: "",
    explicacio: "És vàlida. Els apoderaments inscrits tenen una validesa màxima de 5 anys a comptar de la data d’inscripció.",
  },

  {
    id: "Q-F013-R108",
    codi_bloc: "EB004",
    codi_tema: "E15",
    pregunta: "Treballeu a la Comissió d’Assistència Jurídica Gratuïta i rebeu una impugnació que arriba mitjançant petició genèrica contra una resolució desfavorable a una persona física, a la qual se li denega el dret i que heu de tramitar. Abans de passar la impugnació al Gabinet Jurídic, us adoneu que la persona recurrent no és la mateixa que la persona a qui se li ha denegat el dret. D’acord amb l’article 5.5 de la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, a qui correspon incorporar a l'expedient administratiu l'acreditació de la condició de representant que consti en el Registre electrònic d’apoderaments?",
    opcions: [
    "A l’òrgan competent per tramitar.",
    "A l’òrgan competent per resoldre.",
    "A l’òrgan judicial.",
    "Al vostre superior jeràrquic."
    ],
    correcta: 0,
    llei: "LPAC — arts. 5, 6, 47, 67 i 106",
    article: "",
    explicacio: "A l’òrgan competent per tramitar.",
  },

  {
    id: "Q-F013-R109",
    codi_bloc: "EB006",
    codi_tema: "E24",
    pregunta: "El Centre de Telecomunicacions i Tecnologies de la Informació (CTTI), entitat de dret públic de la Generalitat de Catalunya, necessita adquirir un programa d’ordinador antivirus desenvolupat a mida, per subministrar als departaments de la Generalitat. Com a responsable de contractació de l’entitat, com qualificaríeu el contracte?",
    opcions: [
    "Contracte de concessió de serveis.",
    "Contracte de subministrament.",
    "Contracte de serveis.",
    "Contracte mixt de subministrament i serveis."
    ],
    correcta: 2,
    llei: "LCSP — arts. 17, 23, 38, 63, 100–102, 120, 124, 191, 204–205 i 319",
    article: "",
    explicacio: "Contracte de serveis.",
  },

  {
    id: "Q-F015-N007",
    codi_bloc: "EB001",
    codi_tema: "E01",
    pregunta: "En el context de la democràcia i participació, quan la ciutadania es pronuncia sobre alguna qüestió, a través de consultes i referèndums, es fa referència a:",
    opcions: [
    "Democràcia participativa.",
    "Democràcia directa.",
    "Democràcia representativa.",
    "Democràcia instrumental."
    ],
    correcta: 1,
    llei: "CE — Participació directa; art. 23",
    article: "",
    explicacio: "Democràcia directa.",
  },

  {
    id: "Q-F015-N011",
    codi_bloc: "EB007",
    codi_tema: "E30",
    pregunta: "Tenen caràcter de subvenció:",
    opcions: [
    "Els beneficis fiscals i beneficis en la cotització a la Seguretat Social.",
    "Les prestacions reconegudes pel Fons de garantia salarial.",
    "Les disposicions dineràries a favor de persones públiques o privades sense contraprestació directa, subjectes a l’execució d’un projecte amb l’obligació de complir els requisits establerts i que promogui una finalitat pública.",
    "Les ajudes econòmiques concedides a les víctimes de violències sexuals."
    ],
    correcta: 2,
    llei: "LGS — art. 2.1",
    article: "",
    explicacio: "Les disposicions dineràries a favor de persones públiques o privades sense contraprestació directa, subjectes a l’execució d’un projecte amb l’obligació de complir els requisits establerts i que promogui una finalitat pública.",
  },

  {
    id: "Q-F015-N013",
    codi_bloc: "EB002",
    codi_tema: "E06",
    pregunta: "Què és la taxa de descompte social?",
    opcions: [
    "És la variable i el factor que permet comptabilitzar els descomptes que reben els ciutadans per tenir conductes cíviques.",
    "És la variable que s’utilitza per comptabilitzar el benefici econòmic que obté un país quan augmenta un 1 % la seva població.",
    "És la variable i el factor que permet avaluar el benefici econòmic que representa per a un país el fet de tenir un índex menor d’ingressos penitenciaris.",
    "És una variable i un factor que s’utilitza sovint en l’avaluació econòmica, principalment en l’anàlisi cost-benefici, i tracta de representar com la societat prefereix més el moment actual que un moment futur."
    ],
    correcta: 3,
    llei: "ECO — Taxa de descompte social",
    article: "",
    explicacio: "És una variable i un factor que s’utilitza sovint en l’avaluació econòmica, principalment en l’anàlisi cost-benefici, i tracta de representar com la societat prefereix més el moment actual que un moment futur.",
  },

  {
    id: "Q-F015-N035",
    codi_bloc: "EB005",
    codi_tema: "E19",
    pregunta: "No és una situació administrativa:",
    opcions: [
    "La incapacitat temporal.",
    "L’excedència voluntària per interès particular.",
    "Els serveis especials.",
    "La suspensió de funcions."
    ],
    correcta: 0,
    llei: "EBEP — arts. 12–13, 37, 39, 85 i 89",
    article: "",
    explicacio: "La incapacitat temporal.",
  },

  {
    id: "Q-F015-N036",
    codi_bloc: "EB005",
    codi_tema: "E19",
    pregunta: "D’acord amb l’article 89 del Reial decret legislatiu 5/2015, de 30 d’octubre, pel qual s’aprova el text refós de la Llei de l’Estatut bàsic de l’empleat públic (TREBEP), els funcionaris de carrera poden obtenir l’excedència voluntària per interès particular quan hagin prestat serveis efectius en qualsevol de les administracions públiques durant un període mínim de:",
    opcions: [
    "5 anys.",
    "4 anys.",
    "4 anys immediatament anteriors.",
    "5 anys immediatament anteriors."
    ],
    correcta: 3,
    llei: "EBEP — arts. 12–13, 37, 39, 85 i 89",
    article: "",
    explicacio: "5 anys immediatament anteriors.",
  },

  {
    id: "Q-F015-N039",
    codi_bloc: "EB005",
    codi_tema: "E22",
    pregunta: "En les unitats electorals on el nombre de funcionaris sigui 49, s’elegeix com a òrgan específic de representació:",
    opcions: [
    "2 delegats de personal.",
    "1 delegat/da de personal.",
    "3 delegats de personal.",
    "Correspon a la Junta de Personal."
    ],
    correcta: 2,
    llei: "EBEP — arts. 12–13, 37, 39, 85 i 89",
    article: "",
    explicacio: "3 delegats de personal.",
  },

  {
    id: "Q-F015-N044",
    codi_bloc: "EB005",
    codi_tema: "E21",
    pregunta: "D’acord amb l’article 12 del Reial decret legislatiu 5/2015, de 30 d’octubre, pel qual s’aprova el text refós de la Llei de l’Estatut bàsic de l’empleat públic (TREBEP) i en relació amb el personal eventual, quina de les afirmacions següents no és correcta?",
    opcions: [
    "La condició de personal eventual constitueix mèrit per a l’accés a la funció pública o per a la promoció interna.",
    "És personal eventual qui, en virtut de nomenament i amb caràcter no permanent, només exerceix funcions expressament qualificades de confiança o assessorament especial; és retribuït amb càrrec als crèdits pressupostaris consignats per a aquesta finalitat.",
    "El nomenament i cessament són lliures. El cessament ha de tenir lloc, en tot cas, quan es produeixi el de l’autoritat a la qual es presti la funció de confiança o assessorament.",
    "Al personal eventual és aplicable, en el que sigui adequat a la naturalesa de la seva condició, el règim general dels funcionaris de carrera."
    ],
    correcta: 0,
    llei: "EBEP — arts. 12–13, 37, 39, 85 i 89",
    article: "",
    explicacio: "La condició de personal eventual constitueix mèrit per a l’accés a la funció pública o per a la promoció interna.",
  },

  {
    id: "Q-F015-N048",
    codi_bloc: "EB005",
    codi_tema: "E22",
    pregunta: "Els òrgans de representació dels funcionaris al servei de l’Administració de la Generalitat de Catalunya són:",
    opcions: [
    "Les juntes de personal o, si s’escau, els delegats de personal.",
    "El comitè d’empresa o, si s’escau, els delegats de personal.",
    "El comitè d’empresa o, si s’escau, els delegats sindicals.",
    "Les juntes de personal o, si s’escau, els delegats sindicals."
    ],
    correcta: 0,
    llei: "EBEP — arts. 12–13, 37, 39, 85 i 89",
    article: "",
    explicacio: "Les juntes de personal o, si s’escau, els delegats de personal.",
  },

  {
    id: "Q-F015-N049",
    codi_bloc: "EB005",
    codi_tema: "E22",
    pregunta: "D’acord amb article 37 del Reial decret legislatiu 5/2015, de 30 d’octubre, pel qual s’aprova el text refós de la Llei de l’Estatut bàsic de l’empleat públic (TREBEP), quines matèries no són objecte de negociació:",
    opcions: [
    "Els criteris generals d’acció social.",
    "Els plans de previsió social complementària.",
    "La determinació de condicions de treball del personal directiu.",
    "Les propostes sobre drets sindicals i de participació."
    ],
    correcta: 2,
    llei: "EBEP — arts. 12–13, 37, 39, 85 i 89",
    article: "",
    explicacio: "La determinació de condicions de treball del personal directiu.",
  },

  {
    id: "Q-F015-R004",
    codi_bloc: "EB005",
    codi_tema: "E21",
    pregunta: "Segons l’article 13 del Reial decret legislatiu 5/2015, de 30 d’octubre, pel qual s’aprova el Text refós de la Llei de l’Estatut bàsic de l’empleat públic (TREBEP), quina de les afirmacions següents sobre el personal directiu no és correcta?",
    opcions: [
    "La determinació de les condicions de treball del personal directiu té la consideració de matèria objecte de negociació col·lectiva als efectes d’aquesta Llei.",
    "Exerceix funcions directives professionals en les administracions públiques, definides com a tals a les normes específiques de cada Administració.",
    "La seva designació ha d’atendre els principis de mèrit i capacitat i criteris d’idoneïtat, i s’ha de portar a terme mitjançant procediments que garanteixin la publicitat i concurrència.",
    "Està subjecte a avaluació d’acord amb els criteris d’eficàcia i eficiència, responsabilitat per la seva gestió i control de resultats en relació amb els objectius que els hagin estat fixats."
    ],
    correcta: 0,
    llei: "EBEP — arts. 12–13, 37, 39, 85 i 89",
    article: "",
    explicacio: "La determinació de les condicions de treball del personal directiu té la consideració de matèria objecte de negociació col·lectiva als efectes d’aquesta Llei.",
  },

  {
    id: "Q-F019-N012",
    codi_bloc: "EB001",
    codi_tema: "E07",
    pregunta: "D’acord amb l’article 53 del Reial decret legislatiu 5/2015, de 30 d’octubre, pel qual s’aprova el text refós de la Llei de l’Estatut bàsic de l’empleat públic, quina de les afirmacions següents és un principi ètic que ha regir l’actuació dels empleats públics?",
    opcions: [
    "Mantenir actualitzada la formació i qualificació.",
    "Rebutjar qualsevol regal, favor o servei en condicions avantatjoses que vagi més enllà dels usos habituals, socials i de cortesia.",
    "Observar les normes sobre seguretat i salut laboral.",
    "Actuar d’acord amb els principis d’eficàcia, economia i eficiència, i han de vigilar la consecució de l’interès general i el compliment dels objectius de l’organització."
    ],
    correcta: 3,
    llei: "EBEP — art. 53.8",
    article: "",
    explicacio: "Actuar d’acord amb els principis d’eficàcia, economia i eficiència, i han de vigilar la consecució de l’interès general i el compliment dels objectius de l’organització.",
  },

  {
    id: "Q-F019-N024",
    codi_bloc: "EB004",
    codi_tema: "E15",
    pregunta: "Quin és el termini màxim inicial de validesa dels apoderaments inscrits en el Registre electrònic de representació de l'Administració de la Generalitat de Catalunya?",
    opcions: [
    "Tres anys a comptar de la data de la sol·licitud d’inscripció.",
    "Tres anys a comptar de la data de la inscripció.",
    "Cinc anys a comptar de la data de la inscripció.",
    "Cinc anys a comptar de la data de la sol·licitud d’inscripció."
    ],
    correcta: 2,
    llei: "LPAC — art. 6.6",
    article: "",
    explicacio: "Cinc anys a comptar de la data de la inscripció.",
  },

  {
    id: "Q-F019-N025",
    codi_bloc: "EB006",
    codi_tema: "E28",
    pregunta: "D’acord amb l’article 44 de la Llei 9/2017, de 8 de novembre, de contractes del sector públic, quines de les actuacions següents no poden ser objecte de recurs especial en matèria de contractació?",
    opcions: [
    "Els anuncis de licitació.",
    "Els actes de tràmit no qualificats adoptats en el procediment d’adjudicació.",
    "Els acords d’adjudicació.",
    "Els acords de rescat de concessions."
    ],
    correcta: 1,
    llei: "LCSP — arts. 1, 3, 26, 38, 44, 62, 63, 106–107, 120, 133 i 326",
    article: "",
    explicacio: "Els actes de tràmit no qualificats adoptats en el procediment d’adjudicació.",
  },

  {
    id: "Q-F019-N031",
    codi_bloc: "EB005",
    codi_tema: "E16",
    pregunta: "Pel que fa a la relació de llocs de treball, quina de les opcions següents és correcta?",
    opcions: [
    "Ha d’incloure tots els llocs de personal eventual.",
    "L’ha d’aprovar la direcció general competent en matèria de funció pública.",
    "Ha de contenir el complement de destinació si són llocs de personal laboral.",
    "L’accés al contingut requereix identificació prèvia."
    ],
    correcta: 0,
    llei: "EBEP — art. 74",
    article: "",
    explicacio: "Ha d’incloure tots els llocs de personal eventual.",
  },

  {
    id: "Q-F019-N032",
    codi_bloc: "EB005",
    codi_tema: "E19",
    pregunta: "En el marc de la responsabilitat disciplinària, i en virtut del Reial decret legislatiu 5/2015, de 30 d’octubre, pel qual s’aprova el text refós de la Llei de l’Estatut bàsic de l’empleat públic, en quin termini prescriuen les infraccions lleus?",
    opcions: [
    "Sis mesos a comptar des que s’hagin comès, i des del cessament de la comissió quan es tracti de faltes continuades.",
    "Un any a comptar des que s’hagin comès, i des del cessament de la comissió quan es tracti de faltes continuades.",
    "Dos anys a comptar des que s’hagin comès, i des del cessament de la comissió quan es tracti de faltes continuades.",
    "Tres anys a comptar des que s’hagin comès, i des del cessament de la comissió quan es tracti de faltes continuades."
    ],
    correcta: 0,
    llei: "EBEP — art. 97.1–2",
    article: "",
    explicacio: "Sis mesos a comptar des que s’hagin comès, i des del cessament de la comissió quan es tracti de faltes continuades.",
  },

  {
    id: "Q-F019-N040",
    codi_bloc: "EB001",
    codi_tema: "E07",
    pregunta: "En virtut de l’article 1.3 de la Llei 9/2017, de 8 de novembre, de contractes del sector públic, en tota contractació pública s’han d’incorporar criteris socials i mediambientals, sempre que tinguin relació amb l’objecte del contracte i de manera:",
    opcions: [
    "Vinculant i obligatòria.",
    "Facultativa i no vinculant.",
    "Transversal i preceptiva.",
    "Recomanada."
    ],
    correcta: 2,
    llei: "LCSP — arts. 1, 3, 26, 38, 44, 62, 63, 106–107, 120, 133 i 326",
    article: "",
    explicacio: "Transversal i preceptiva.",
  },

  {
    id: "Q-F019-N041",
    codi_bloc: "EB005",
    codi_tema: "E21",
    pregunta: "Segons la disposició addicional 17a del Reial decret legislatiu 5/2015, de 30 d’octubre, pel qual s’aprova el text refós de la Llei de l’Estatut bàsic de l’empleat públic, l’incompliment del termini màxim de permanència de tres anys donarà lloc a una compensació econòmica per al personal interí afectat equivalent a:",
    opcions: [
    "Quaranta-cinc dies de les seves retribucions fixes per any de servei, prorratejant-se per mesos els períodes de temps inferiors a un any, fins a un màxim de vint-i-quatre mensualitats.",
    "Vint-i-cinc dies de les seves retribucions fixes per any de servei, prorratejant-se per mesos els períodes de temps inferiors a un any, fins a un màxim de divuit mensualitats.",
    "Vint dies de les seves retribucions fixes per any de servei, prorratejant-se per mesos els períodes de temps inferiors a un any, fins a un màxim de dotze mensualitats.",
    "Trenta dies de les seves retribucions fixes per any de servei, prorratejant-se per mesos els períodes de temps inferiors a un any, fins a un màxim de quinze mensualitats."
    ],
    correcta: 2,
    llei: "EBEP — disposició addicional 17a",
    article: "",
    explicacio: "Vint dies de les seves retribucions fixes per any de servei, prorratejant-se per mesos els períodes de temps inferiors a un any, fins a un màxim de dotze mensualitats.",
  },

  {
    id: "Q-F019-N042",
    codi_bloc: "EB006",
    codi_tema: "E24",
    pregunta: "Quina consideració tenen els contractes subscrits per entitats del sector públic que, tot i ser poder adjudicador, no reuneixen la condició d’administracions públiques?",
    opcions: [
    "Públics.",
    "Privats.",
    "Convenis.",
    "Acords de col·laboració."
    ],
    correcta: 1,
    llei: "LCSP — arts. 1, 3, 26, 38, 44, 62, 63, 106–107, 120, 133 i 326",
    article: "",
    explicacio: "Privats.",
  },

  {
    id: "Q-F019-N044",
    codi_bloc: "EB006",
    codi_tema: "E25",
    pregunta: "En el marc dels òrgans d’assistència en matèria de contractació pública, en quin procediment d’adjudicació la Mesa és potestativa?",
    opcions: [
    "Procediment restringit de l’article 160 i següents de la Llei 9/2017, de 8 de novembre, de contractes del sector públic.",
    "Diàleg competitiu de l’article 172 i següents de la Llei 9/2017, de 8 de novembre, de contractes del sector públic.",
    "Procediment amb negociació de l’article 166 de la Llei 9/2017, de 8 de novembre, de contractes del sector públic.",
    "Procediment obert simplificat de l’article 159.6 de la Llei 9/2017, de 8 de novembre, de contractes del sector públic."
    ],
    correcta: 3,
    llei: "LCSP — arts. 1, 3, 26, 38, 44, 62, 63, 106–107, 120, 133 i 326",
    article: "",
    explicacio: "Procediment obert simplificat de l’article 159.6 de la Llei 9/2017, de 8 de novembre, de contractes del sector públic.",
  },

  {
    id: "Q-F019-N045",
    codi_bloc: "EB006",
    codi_tema: "E23",
    pregunta: "Quina de les entitats següents no té la consideració d’Administració pública, segons la Llei 9/2017, de 8 de novembre, de contractes del sector públic?",
    opcions: [
    "Els organismes autònoms.",
    "Les universitats públiques.",
    "Les mútues col·laboradores amb la Seguretat Social.",
    "Les entitats gestores i els serveis comuns de la Seguretat Social."
    ],
    correcta: 2,
    llei: "LCSP — arts. 1, 3, 26, 38, 44, 62, 63, 106–107, 120, 133 i 326",
    article: "",
    explicacio: "Les mútues col·laboradores amb la Seguretat Social.",
  },

  {
    id: "Q-F019-N046",
    codi_bloc: "EB006",
    codi_tema: "E26",
    pregunta: "D’acord amb l’article 63 de la Llei 9/2017, de 8 de novembre, de contractes del sector públic, la publicació de la informació relativa als contractes menors al perfil del contractant, s’ha d’efectuar almenys:",
    opcions: [
    "Mensualment",
    "Trimestralment",
    "Semestralment",
    "Anualment"
    ],
    correcta: 1,
    llei: "LCSP — arts. 1, 3, 26, 38, 44, 62, 63, 106–107, 120, 133 i 326",
    article: "",
    explicacio: "Trimestralment",
  },

  {
    id: "Q-F019-N048",
    codi_bloc: "EB006",
    codi_tema: "E27",
    pregunta: "En quin cas no és obligatòria la tramitació prèvia de l’expedient de contractació?",
    opcions: [
    "En la tramitació d’urgència.",
    "En la tramitació ordinària.",
    "En la tramitació d’emergència.",
    "En la tramitació excepcional."
    ],
    correcta: 2,
    llei: "LCSP — arts. 1, 3, 26, 38, 44, 62, 63, 106–107, 120, 133 i 326",
    article: "",
    explicacio: "En la tramitació d’emergència.",
  },

  {
    id: "Q-F019-N049",
    codi_bloc: "EB006",
    codi_tema: "E26",
    pregunta: "Pel que fa al deure de confidencialitat que han de mantenir els òrgans de contractació, quina de les afirmacions següents és correcta?",
    opcions: [
    "No poden divulgar la informació facilitada pels empresaris que aquests hagin designat com a confidencial en el moment de l'adjudicació de la seva oferta.",
    "Es pot estendre a tot el contingut de l’oferta de l’adjudicatari i a tot el contingut dels informes i la documentació que, si s’escau, generi directament o indirectament l’òrgan de contractació en el curs del procediment de licitació.",
    "Pot impedir la divulgació pública de parts no confidencials dels contractes subscrits, com ara, si s’escau, la liquidació, els terminis finals d’execució de l’obra, i les empreses amb què s’ha contractat i subcontractat.",
    "Únicament es pot estendre a documents que tinguin una difusió restringida, i en cap cas a documents que siguin públicament accessibles."
    ],
    correcta: 3,
    llei: "LCSP — arts. 1, 3, 26, 38, 44, 62, 63, 106–107, 120, 133 i 326",
    article: "",
    explicacio: "Únicament es pot estendre a documents que tinguin una difusió restringida, i en cap cas a documents que siguin públicament accessibles.",
  },

  {
    id: "Q-F019-N050",
    codi_bloc: "EB006",
    codi_tema: "E25",
    pregunta: "D’acord amb l’article 62 de la Llei 9/2017, de 8 de novembre, de contractes del sector públic, la persona responsable del contracte:",
    opcions: [
    "És a qui correspon dictar les instruccions necessàries amb la finalitat d’assegurar la realització correcta de la prestació contractada.",
    "Ha de tenir vinculació amb l’entitat contractant.",
    "No pot ser una persona física.",
    "No pot ser una persona jurídica."
    ],
    correcta: 0,
    llei: "LCSP — arts. 1, 3, 26, 38, 44, 62, 63, 106–107, 120, 133 i 326",
    article: "",
    explicacio: "És a qui correspon dictar les instruccions necessàries amb la finalitat d’assegurar la realització correcta de la prestació contractada.",
  },

  {
    id: "Q-F019-R002",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "Quin tipus de garantia que respongui del manteniment de les seves ofertes fins a la perfecció del contracte es pot exigir als licitadors, quan l’òrgan de contractació excepcionalment i per motius d’interès públic ho consideri necessari i ho justifiqui motivadament en l’expedient?",
    opcions: [
    "Provisional",
    "Extraordinària",
    "Definitiva",
    "Complementària"
    ],
    correcta: 0,
    llei: "LCSP — arts. 1, 3, 26, 38, 44, 62, 63, 106–107, 120, 133 i 326",
    article: "",
    explicacio: "Provisional",
  },

  {
    id: "Q-F019-R004",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "En els supòsits en què l’oferta de l’adjudicatari resulti inicialment incursa en presumpció d’anormalitat, quina afirmació és correcta?",
    opcions: [
    "L’òrgan de contractació l’ha d’excloure en tot cas del procediment de licitació.",
    "L’òrgan de contractació ha de requerir al licitador la seva justificació, a partir de l’aplicació de paràmetres subjectius que s’estableixin per ordre del conseller o consellera del departament.",
    "Es pot preveure la presentació d’una garantia complementària.",
    "Fins que es formalitzi el contracte, el contractista queda obligat, en la forma i amb l’abast que determini l’òrgan de contractació, a adoptar les mesures necessàries per assegurar aspectes qualitatius vinculats a l’objecte del contracte."
    ],
    correcta: 2,
    llei: "LCSP — arts. 1, 3, 26, 38, 44, 62, 63, 106–107, 120, 133 i 326",
    article: "",
    explicacio: "Es pot preveure la presentació d’una garantia complementària.",
  },

  {
    id: "Q-F019-R005",
    codi_bloc: "EB006",
    codi_tema: "E28",
    pregunta: "D’acord amb l’article 38 de la Llei 9/2017, de 8 de novembre, de contractes del sector públic, quan són invàlids els contractes subscrits pels poders adjudicadors, inclosos els contractes subvencionats subjectes a una regulació harmonitzada?",
    opcions: [
    "Quan hi concorri alguna de les causes que els invaliden de conformitat amb les disposicions del dret econòmic, sempre que la il·legalitat no derivi de les seves clàusules.",
    "Quan hi concorri alguna de les causes que els invaliden de conformitat amb les disposicions del dret pressupostari que es refereixin a actes preparatoris o del procediment d’adjudicació.",
    "Quan hi concorri alguna de les causes que els invaliden de conformitat amb les disposicions del dret tributari, sempre que la il·legalitat no derivi de les seves clàusules.",
    "Quan hi concorri alguna de les causes que els invaliden de conformitat amb les disposicions del dret civil."
    ],
    correcta: 3,
    llei: "LCSP — arts. 1, 3, 26, 38, 44, 62, 63, 106–107, 120, 133 i 326",
    article: "",
    explicacio: "Quan hi concorri alguna de les causes que els invaliden de conformitat amb les disposicions del dret civil.",
  },

  {
    id: "Q-F020-N007",
    codi_bloc: "CB003",
    codi_tema: "C07",
    pregunta: "La Constitució espanyola de 1978 estableix com a garanties jurídiques, entre d’altres, els principis següents:",
    opcions: [
    "Legalitat, independència normativa, retroactivitat de les disposicions sancionadores no favorables o restrictives de drets individuals i seguretat jurídica.",
    "Legalitat, jerarquia normativa, publicitat de les normes i no interdicció de l’arbitrarietat dels poders públics.",
    "Legalitat, seguretat jurídica, irretroactivitat de les disposicions sancionadores favorables o no restrictives de drets individuals i interdicció de l’arbitrarietat dels poders públics.",
    "Legalitat, publicitat de les normes, irretroactivitat de les disposicions sancionadores no favorables o restrictives de drets individuals i interdicció de l’arbitrarietat dels poders públics."
    ],
    correcta: 3,
    llei: "CE — art. 9.3",
    article: "",
    explicacio: "Legalitat, publicitat de les normes, irretroactivitat de les disposicions sancionadores no favorables o restrictives de drets individuals i interdicció de l’arbitrarietat dels poders públics.",
  },

  {
    id: "Q-F020-N008",
    codi_bloc: "CB003",
    codi_tema: "C08",
    pregunta: "Quina de les afirmacions referides a la naturalesa jurídica de l’Estatut d’Autonomia de Catalunya que s’indiquen a continuació és correcta?",
    opcions: [
    "És una llei autonòmica.",
    "És una llei ordinària.",
    "És la primera i fonamental llei de l’ordenament jurídic català i és una Llei orgànica de l’Estat.",
    "És una llei que no requereix ser aprovada en referèndum en l’àmbit territorial de Catalunya."
    ],
    correcta: 2,
    llei: "EAC — Naturalesa de l’Estatut",
    article: "",
    explicacio: "És la primera i fonamental llei de l’ordenament jurídic català i és una Llei orgànica de l’Estat.",
  },

  {
    id: "Q-F020-N014",
    codi_bloc: "CB004",
    codi_tema: "C14",
    pregunta: "D’acord amb l’article 10 de la Llei 40/2015, d’1 d’octubre, de règim jurídic del sector públic, quan els òrgans superiors, per circumstàncies d’índole tècnica, econòmica, social, jurídica o territorial ho facin convenient, volen tenir coneixement d’un o diversos afers la resolució dels quals correspongui ordinàriament o per delegació als seus òrgans administratius dependents, podran ...",
    opcions: [
    "Avocar",
    "Encarregar la gestió",
    "Suplir",
    "Delegar el servei"
    ],
    correcta: 0,
    llei: "LRJ — art. 10",
    article: "",
    explicacio: "Avocar",
  },

  {
    id: "Q-F020-N016",
    codi_bloc: "CB004",
    codi_tema: "C16",
    pregunta: "D’acord amb la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, què implica la realització d’actuacions administratives fora del temps establert?",
    opcions: [
    "L’anul·labilitat de l’acte, en tot cas.",
    "L’anul·labilitat de l’acte quan així ho imposi la naturalesa del terme o termini.",
    "La nul·litat absoluta de ple dret de l’acte.",
    "La necessitat de convalidació expressa per part del superior jeràrquic."
    ],
    correcta: 1,
    llei: "LPAC — arts. 48.3, 85.3 i 112",
    article: "",
    explicacio: "L’anul·labilitat de l’acte quan així ho imposi la naturalesa del terme o termini.",
  },

  {
    id: "Q-F020-N020",
    codi_bloc: "CB004",
    codi_tema: "C20",
    pregunta: "D’acord amb l’article 112 de la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, els interessats poden interposar els recursos d'alçada i potestatiu de reposició contra:",
    opcions: [
    "Les resolucions i els actes de tràmit, encara que aquests últims no decideixin directament o indirectament el fons de l'afer, ni determinin la possibilitat de continuar o no el procediment, ni produeixin indefensió o perjudici irreparable a drets i interessos legítims.",
    "Les resolucions i les disposicions administratives de caràcter general.",
    "Les resolucions i els actes de tràmit no qualificats, únicament si aquests últims determinen la impossibilitat de continuar el procediment.",
    "Les resolucions i els actes de tràmit, si aquests últims decideixen directament o indirectament el fons de l'afer, determinen la impossibilitat de continuar el procediment o produeixen indefensió o perjudici irreparable a drets i interessos legítims."
    ],
    correcta: 3,
    llei: "LPAC — arts. 48.3, 85.3 i 112",
    article: "",
    explicacio: "Les resolucions i els actes de tràmit, si aquests últims decideixen directament o indirectament el fons de l'afer, determinen la impossibilitat de continuar el procediment o produeixen indefensió o perjudici irreparable a drets i interessos legítims.",
  },

  {
    id: "Q-F020-N024",
    codi_bloc: "CB006",
    codi_tema: "C24",
    pregunta: "En relació amb els contractes menors regulats a l’article 118 de la Llei 9/2017, de 8 de novembre, de contractes del sector públic, quina de les afirmacions següents és correcta?",
    opcions: [
    "Els contractes menors poden tenir una durada superior a un any i ser objecte de pròrroga.",
    "Es consideren contractes menors els contractes d’un valor estimat inferior a 35.000 euros, quan es tracti de contractes d’obres, o a 10.000 euros, quan es tracti de contractes de subministrament o de serveis.",
    "En els contractes menors la tramitació de l’expedient exigeix l’informe de l’òrgan de contractació que motivi la necessitat del contracte.",
    "Els contractes menors queden exceptuats de la publicació en tots els casos."
    ],
    correcta: 2,
    llei: "LCSP — art. 118",
    article: "",
    explicacio: "En els contractes menors la tramitació de l’expedient exigeix l’informe de l’òrgan de contractació que motivi la necessitat del contracte.",
  },

  {
    id: "Q-F020-N027",
    codi_bloc: "CB007",
    codi_tema: "C27",
    pregunta: "D’acord amb la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, en els procediments sancionadors, quan la sanció tingui únicament caràcter pecuniari, si l’infractor reconeix la seva responsabilitat i realitza, així mateix, el pagament voluntari en qualsevol moment anterior a la resolució, l’òrgan competent per resoldre:",
    opcions: [
    "Ha d’aplicar reduccions d’almenys, el 20% sobre l’import de la sanció proposada, i són acumulables entre si, i la seva efectivitat està condicionada al desistiment o la renúncia de qualsevol acció o recurs en via administrativa contra la sanció.",
    "Pot aplicar reduccions de, com a màxim, el 20% sobre l’import de la sanció proposada, i no són acumulables entre si, i la seva efectivitat està condicionada al desistiment o la renúncia de qualsevol acció o recurs en via administrativa contra la sanció.",
    "Ha d’aplicar reduccions d’almenys, el 20% sobre l’import de la sanció proposada, i no són acumulables entre si, i la seva efectivitat no està condicionada al desistiment o la renúncia de qualsevol acció o recurs en via administrativa contra la sanció.",
    "En els procediments de naturalesa sancionadora la Llei no contempla reduccions de les sancions de naturalesa pecuniària."
    ],
    correcta: 0,
    llei: "LPAC — arts. 48.3, 85.3 i 112",
    article: "",
    explicacio: "Ha d’aplicar reduccions d’almenys, el 20% sobre l’import de la sanció proposada, i són acumulables entre si, i la seva efectivitat està condicionada al desistiment o la renúncia de qualsevol acció o recurs en via administrativa contra la sanció.",
  },

  {
    id: "Q-F020-R001",
    codi_bloc: "CB005",
    codi_tema: "C23",
    pregunta: "En l’àmbit de l’avaluació econòmica de les polítiques públiques, la tècnica que consisteix a identificar, quantificar i monetitzar els beneficis i costos d’una intervenció pública, facilitant així l’obtenció de valors numèrics de síntesi, com ara la diferència entre beneficis o costos o ràtios entre el valor dels beneficis envers el dels costos, s’anomena:",
    opcions: [
    "Anàlisi cost-efectivitat",
    "Anàlisi cost-benefici",
    "Anàlisi cost-conseqüència",
    "Anàlisi cost-minimització"
    ],
    correcta: 1,
    llei: "ECO — Anàlisi cost-benefici",
    article: "",
    explicacio: "Anàlisi cost-benefici",
  },

  {
    id: "Q-F025-N015",
    codi_bloc: "EB005",
    codi_tema: "E22",
    pregunta: "En el si de les meses de negociació corresponents, els representants de les administracions públiques poden concertar pactes i acords amb la representació de les organitzacions sindicals legitimades a aquests efectes, per a la determinació de condicions de treball dels funcionaris de les administracions esmentades. És una característica pròpia dels pactes...:",
    opcions: [
    "Els pactes han de versar sobre matèries competència dels òrgans de govern de les administracions públiques.",
    "Els pactes s’han de subscriure sobre matèries que es corresponguin estrictament amb l’àmbit competencial de l’òrgan administratiu que el subscrigui i s’han d’aplicar directament al personal de l’àmbit corresponent.",
    "Per a la validesa i eficàcia dels pactes és necessària la seva aprovació expressa i formal per part dels òrgans de govern de les administracions públiques.",
    "Quan els pactes hagin estat ratificats i afectin temes que poden ser decidits de manera definitiva pels òrgans de govern, el seu contingut és directament aplicable al personal inclòs en el seu àmbit d’aplicació, sense perjudici que a efectes formals es requereixi la modificació o derogació de la normativa reglamentària corresponent, si s’escau."
    ],
    correcta: 1,
    llei: "EBEP — arts. 10.1.d, 38.2, 48.f i 97",
    article: "",
    explicacio: "Els pactes s’han de subscriure sobre matèries que es corresponguin estrictament amb l’àmbit competencial de l’òrgan administratiu que el subscrigui i s’han d’aplicar directament al personal de l’àmbit corresponent.",
  },

  {
    id: "Q-F025-N019",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "En quant als contractes amb els poders adjudicadors administracions públiques, no procedirà̀ la garantia provisional llevat quan de forma excepcional i per motius d’interès públic, ho consideri adient i ho motivi l’òrgan de contractació en l’expedient de contractació. En aquests casos, la garantia provisional...:",
    opcions: [
    "No podrà ser superior al 3% del pressupost base de licitació (Iva exclòs), i s’haurà̀ de reflectir en el plec de clàusules administratives particulars.",
    "Serà d’un 5% de l‘import de l’adjudicació (Iva exclòs), i s’haurà̀ de reflectir en el plec de clàusules administratives particulars.",
    "No podrà ser superior al 3% del pressupost base de licitació (Iva exclòs), i s’haurà̀ de reflectir en el plec de prescripcions tècniques particulars.",
    "Serà d’un 5% de l‘import de l’adjudicació (Iva exclòs), i s’haurà̀ de reflectir en el plec de prescripcions tècniques particulars."
    ],
    correcta: 0,
    llei: "LCSP — arts. 44 i 106",
    article: "",
    explicacio: "No podrà ser superior al 3% del pressupost base de licitació (Iva exclòs), i s’haurà̀ de reflectir en el plec de clàusules administratives particulars.",
  },

  {
    id: "Q-F025-N020",
    codi_bloc: "CB002",
    codi_tema: "C19",
    pregunta: "Segons la normativa bàsica d’interoperabilitat, els interessats tenen dret a no aportar els documents que ja estiguin en poder de l’Administració actuant o que hagi elaborat qualsevol altra Administració. L’Administració actuant pot consultar o obtenir aquest documents tret que l’interessat s’oposi. No s’escau l’oposició ...:",
    opcions: [
    "Mai.",
    "Sempre.",
    "En l’exercici de potestats sancionadores o d’inspecció.",
    "En l’exercici de potestats tributàries."
    ],
    correcta: 2,
    llei: "LPAC — art. 28.2",
    article: "",
    explicacio: "En l’exercici de potestats sancionadores o d’inspecció.",
  },

  {
    id: "Q-F025-N032",
    codi_bloc: "EB005",
    codi_tema: "E21",
    pregunta: "El nomenament de funcionaris interins per circumstància de l’excés o acumulació de tasques...:",
    opcions: [
    "Tindrà la durada estrictament necessària per a la substitució de la persona titular del lloc de treball.",
    "No podrà tenir una durada superior a tres anys, ampliable fins a dotze mesos més per les lleis de Funció Pública que es dictin en desenvolupament del TREBEP.",
    "Només es podrà realitzar quan no sigui possible la cobertura del lloc de treball per funcionaris de carrera.",
    "Tindrà un termini màxim de nou mesos, dins d'un període de divuit mesos."
    ],
    correcta: 3,
    llei: "EBEP — arts. 10.1.d, 38.2, 48.f i 97",
    article: "",
    explicacio: "Tindrà un termini màxim de nou mesos, dins d'un període de divuit mesos.",
  },

  {
    id: "Q-F025-N034",
    codi_bloc: "EB006",
    codi_tema: "E28",
    pregunta: "Quin dels següents no es tracta d’un acte susceptible de recurs especial en matèria de contractació, d’acord amb el que estableix l’article 44 de la Llei 9/2017, de contractes del sector públic?",
    opcions: [
    "L’anunci de licitació.",
    "L’acord o resolució d’adjudicació.",
    "Una modificació contractual en un cas en el què s’hauria d’haver fet una nova adjudicació.",
    "Un acte de tràmit no qualificat."
    ],
    correcta: 3,
    llei: "LCSP — arts. 44 i 106",
    article: "",
    explicacio: "Un acte de tràmit no qualificat.",
  },

  {
    id: "Q-F025-N041",
    codi_bloc: "EB002",
    codi_tema: "E05",
    pregunta: "L'Agenda 2030 per al Desenvolupament Sostenible...:",
    opcions: [
    "Va ser aprovada l’any 2015 per l’Assemblea General de les Nacions Unides.",
    "Va ser aprovada l’any 2015 pel Parlament Europeu.",
    "Va ser aprovada l’any 2015 per la Comissió Europea.",
    "Va ser aprovada l’any 2015 per un Tractat internacional ratificat per 193 estats."
    ],
    correcta: 0,
    llei: "ODS — Aprovació 2015",
    article: "",
    explicacio: "Va ser aprovada l’any 2015 per l’Assemblea General de les Nacions Unides.",
  },

  {
    id: "Q-F025-N042",
    codi_bloc: "EB005",
    codi_tema: "E18",
    pregunta: "L’article 48.f del Reial decret legislatiu 5/2015, de 30 d’octubre, pel qual s’aprova el Text refós de la Llei de l’Estatut bàsic de l’empleat públic (TREBEP), estableix que per lactància d'un fill de menys de dotze mesos els funcionaris tenen dret a una hora d'absència del treball, que poden dividir en dues fraccions. En relació a la regulació del permís de lactància, quina de les següents afirmacions és incorrecta?",
    opcions: [
    "Aquest dret es pot substituir per una reducció de la jornada normal en mitja hora a l'inici i al final de la jornada, o en una hora a l'inici o al final de la jornada, amb la mateixa finalitat.",
    "Es pot sol·licitar la substitució del temps de lactància per un permís retribuït que acumuli en jornades completes el temps corresponent. Aquesta modalitat es pot gaudir únicament a partir de la finalització del permís per naixement, adopció, guarda, acolliment o del progenitor diferent de la mare biològica respectiu.",
    "Aquest permís s'incrementa proporcionalment en els casos de part, adopció, guarda amb finalitats d'adopció o acolliment múltiple.",
    "La mare biològica pot transferir l'exercici d’aquest permís a l'altre progenitor, adoptant, guardador o acollidor."
    ],
    correcta: 3,
    llei: "EBEP — arts. 10.1.d, 38.2, 48.f i 97",
    article: "",
    explicacio: "La mare biològica pot transferir l'exercici d’aquest permís a l'altre progenitor, adoptant, guardador o acollidor.",
  },

  {
    id: "Q-F025-N044",
    codi_bloc: "EB007",
    codi_tema: "E30",
    pregunta: "En un procediment de concurrència competitiva per atorgar una subvenció...:",
    opcions: [
    "El termini general per dictar la resolució és de 3 mesos, i el silenci seria desestimatori.",
    "El termini general per dictar la resolució és de 6 mesos, i el silenci seria desestimatori.",
    "El termini general per dictar la resolució és de 3 mesos, i el silenci seria estimatori.",
    "El termini general per dictar la resolució és de 6 mesos, i el silenci seria estimatori."
    ],
    correcta: 1,
    llei: "LGS — arts. 22 i 25",
    article: "",
    explicacio: "El termini general per dictar la resolució és de 6 mesos, i el silenci seria desestimatori.",
  },

  {
    id: "Q-F025-R052",
    codi_bloc: "EB005",
    codi_tema: "E19",
    pregunta: "El termini de prescripció d’una sanció imposada a un funcionari del cos auxiliar d’administració de la Generalitat de Catalunya per la comissió d’una falta lleu és de...:",
    opcions: [
    "Un any, a comptar des de la fermesa de la resolució sancionadora.",
    "Un any, a comptar des de la notificació de la resolució sancionadora.",
    "Sis mesos, a comptar des de la fermesa de la resolució sancionadora.",
    "Sis mesos, a comptar des de la notificació de la resolució sancionadora."
    ],
    correcta: 0,
    llei: "EBEP — arts. 10.1.d, 38.2, 48.f i 97",
    article: "",
    explicacio: "Un any, a comptar des de la fermesa de la resolució sancionadora.",
  },

  {
    id: "Q-F025-R053",
    codi_bloc: "EB007",
    codi_tema: "E30",
    pregunta: "El procediment per a la concessió d’una subvenció...:",
    opcions: [
    "És un procediment de concurrència competitiva, en tots els casos.",
    "No és, en cap cas, un procediment de concurrència competitiva.",
    "Com a norma general serà un procediment de concurrència competitiva, però pot ser en determinats casos de concessió directa, si es preveu al pressupost, o, de manera excepcional, si existeix una dificultat de convocatòria pública però s’acrediten raons d’interès públic, social, econòmic o humanitari.",
    "Excepcionalment serà un procediment de concurrència competitiva, normalment serà una concessió directa prevista en el pressupost."
    ],
    correcta: 2,
    llei: "LGS — arts. 22 i 25",
    article: "",
    explicacio: "Com a norma general serà un procediment de concurrència competitiva, però pot ser en determinats casos de concessió directa, si es preveu al pressupost, o, de manera excepcional, si existeix una dificultat de convocatòria pública però s’acrediten raons d’interès públic, social, econòmic o humanitari.",
  },

  {
    id: "Q-F025-R055",
    codi_bloc: "CB003",
    codi_tema: "C07",
    pregunta: "El dret de petició, reconegut a l’article 29 de la Constitució Espanyola de 1978, s’ha de regular mitjançant ...:",
    opcions: [
    "Una llei orgànica.",
    "Una llei ordinària.",
    "Un reglament comunitari.",
    "Un reial decret estatal."
    ],
    correcta: 0,
    llei: "CE — arts. 29 i 81",
    article: "",
    explicacio: "Una llei orgànica.",
  },

  {
    id: "Q-F031-N007",
    codi_bloc: "EB004",
    codi_tema: "E15",
    pregunta: "D’acord amb el Decret 76/2020, de 4 d'agost, d'Administració digital, els apoderaments inscrits en el Registre electrònic de representació:",
    opcions: [
    "No tenen cap validesa màxima a comptar de la data d’inscripció.",
    "Tenen una validesa màxima de 5 anys a comptar de la data d'inscripció. En tot cas, en qualsevol moment abans de la finalització del termini esmentat, es pot revocar o prorrogar l'apoderament mitjançant un formulari normalitzat i per compareixença, electrònica o presencial, a les oficines d'atenció ciutadana amb funcions d'assistència en matèria de registre.",
    "Tenen una validesa màxima de 2 anys a comptar de la data d'inscripció. En tot cas, en qualsevol moment abans de la finalització del termini esmentat, es pot revocar o prorrogar l'apoderament mitjançant un formulari normalitzat i per compareixença, electrònica o presencial, a les oficines d'atenció ciutadana amb funcions d'assistència en matèria de registre.",
    "Tenen una validesa màxima d’1 any a comptar de la data d'inscripció. En tot cas, en qualsevol moment abans de la finalització del termini esmentat, es pot revocar o prorrogar l'apoderament mitjançant un formulari normalitzat i per compareixença, electrònica o presencial, a les oficines d'atenció ciutadana amb funcions d'assistència en matèria de registre."
    ],
    correcta: 1,
    llei: "LPAC — art. 6.6",
    article: "",
    explicacio: "Tenen una validesa màxima de 5 anys a comptar de la data d'inscripció. En tot cas, en qualsevol moment abans de la finalització del termini esmentat, es pot revocar o prorrogar l'apoderament mitjançant un formulari normalitzat i per compareixença, electrònica o presencial, a les oficines d'atenció ciutadana amb funcions d'assistència en matèria de registre.",
  },

  {
    id: "Q-F031-N009",
    codi_bloc: "EB002",
    codi_tema: "E06",
    pregunta: "Quin tipus d’anàlisi per fer una avaluació econòmica d’una política pública compara resultats que poden ser diferents en naturalesa i grau, i els mesura en unitats monetàries?",
    opcions: [
    "L’anàlisi cost-benefici.",
    "L’anàlisi cost-minimització.",
    "L’anàlisi cost-efectivitat.",
    "L’anàlisi cost-utilitat."
    ],
    correcta: 0,
    llei: "ECO — Anàlisi cost-benefici i avaluació econòmica",
    article: "",
    explicacio: "L’anàlisi cost-benefici.",
  },

  {
    id: "Q-F031-N012",
    codi_bloc: "CB004",
    codi_tema: "C20",
    pregunta: "D’acord amb la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, la revocació pot fer -se sempre que es compleixin els requisits exigits legalment, respecte:",
    opcions: [
    "Dels actes tant favorables com desfavorables per a les persones interessades.",
    "Dels actes de gravamen o desfavorables per a les persones interessades.",
    "Dels actes favorables per a les persones interessades.",
    "De les disposicions de caràcter general."
    ],
    correcta: 1,
    llei: "LPAC — art. 109.1",
    article: "",
    explicacio: "Dels actes de gravamen o desfavorables per a les persones interessades.",
  },

  {
    id: "Q-F031-N014",
    codi_bloc: "EB004",
    codi_tema: "E14",
    pregunta: "D’acord amb la Llei 40/2015, d’1 d’octubre, de règim jurídic del sector públic, l’Esquema Nacional d'Interoperabilitat:",
    opcions: [
    "Comprèn el conjunt de criteris i recomanacions en matèria de seguretat, conservació i normalització de la informació, dels formats i de les aplicacions que hauran de ser tinguts en compte per les administracions públiques per a la presa de decisions tecnològiques que garanteixin la interoperabilitat.",
    "Comprèn els serveis o productes que ofereixen les plataformes o sistemes d'interoperabilitat que poden ser objecte d'intercanvi entre les administracions públiques. Aquests serveis o productes permeten que les persones interessades no hagin d'aportar documents o dades que ja estan en poder de les administracions públiques.",
    "Fa referència al marc de treball adoptat per l'Administració de la Generalitat de Catalunya per governar les seves dades, i inclou el conjunt de normes, processos, funcions i responsabilitats que garanteixin l'ús adequat de la informació de què disposa aquesta Administració, amb l'objectiu de millorar la prestació dels serveis públics.",
    "És la solució tecnològica per a l'obertura de les dades de l'Administració pública a la societat, per donar compliment als objectius de transparència i foment de la reutilització de la informació."
    ],
    correcta: 0,
    llei: "LRJ — arts. 49.f i 156.1",
    article: "",
    explicacio: "Comprèn el conjunt de criteris i recomanacions en matèria de seguretat, conservació i normalització de la informació, dels formats i de les aplicacions que hauran de ser tinguts en compte per les administracions públiques per a la presa de decisions tecnològiques que garanteixin la interoperabilitat.",
  },

  {
    id: "Q-F031-N016",
    codi_bloc: "EB006",
    codi_tema: "E27",
    pregunta: "D’acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, quin dels següents imports no s’ha de tenir en compte per al càlcul del valor estimat del contracte (VEC)?",
    opcions: [
    "El de totes les modificacions a l’alça previstes en els plecs de clàusules administratives.",
    "El de les pròrrogues eventuals del contracte.",
    "El de l’impost sobre el valor afegit (IVA).",
    "El de les primes previstes d’abonar als licitadors."
    ],
    correcta: 2,
    llei: "LCSP — arts. 44.5, 101, 106, 119, 204 i 326",
    article: "",
    explicacio: "El de l’impost sobre el valor afegit (IVA).",
  },

  {
    id: "Q-F031-N019",
    codi_bloc: "EB005",
    codi_tema: "E16",
    pregunta: "D’acord amb el text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública aprovat pel Decret legislatiu 1/1997, de 31 d'octubre, la relació de llocs de treball:",
    opcions: [
    "És privada i ha d'incloure tots els llocs de funcionaris, laborals i eventuals existents a l'Administració de la Generalitat.",
    "És formada per les places que figuren dotades en els pressupostos, classificades en grups de cossos i, dins els grups, d’acord amb les escales de cada cos.",
    "És pública i ha d'incloure tots els llocs de funcionaris, laborals i eventuals existents a l'Administració de la Generalitat de Catalunya.",
    "Ha de contenir únicament la denominació i les característiques essencials dels llocs de treball."
    ],
    correcta: 2,
    llei: "EBEP — art. 74",
    article: "",
    explicacio: "És pública i ha d'incloure tots els llocs de funcionaris, laborals i eventuals existents a l'Administració de la Generalitat de Catalunya.",
  },

  {
    id: "Q-F031-N026",
    codi_bloc: "EB002",
    codi_tema: "E06",
    pregunta: "Quin tipus d’avaluació associada a una política pública analitza si els beneficis per a la societat compensen o no els seus costos?",
    opcions: [
    "Avaluació econòmica.",
    "Avaluació de la implementació.",
    "Avaluació de les necessitats.",
    "Avaluació de l’impacte."
    ],
    correcta: 0,
    llei: "ECO — Anàlisi cost-benefici i avaluació econòmica",
    article: "",
    explicacio: "Avaluació econòmica.",
  },

  {
    id: "Q-F031-N027",
    codi_bloc: "EB006",
    codi_tema: "E28",
    pregunta: "D’acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, contra les actuacions que són susceptibles de ser impugnades mitjançant recurs especial en matèria de contractació:",
    opcions: [
    "És procedent interposar recursos administratius ordinaris únicament quan l’acte impugnat sigui relatiu a una licitació amb un valor estimat del contracte superior al del llindar del contracte harmonitzat.",
    "És procedent interposar recursos administratius ordinaris únicament quan l’acte susceptible de ser impugnat és l’acord d’adjudicació.",
    "És procedent interposar recursos administratius ordinaris.",
    "No és procedent interposar recursos administratius ordinaris."
    ],
    correcta: 3,
    llei: "LCSP — arts. 44.5, 101, 106, 119, 204 i 326",
    article: "",
    explicacio: "No és procedent interposar recursos administratius ordinaris.",
  },

  {
    id: "Q-F031-N030",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "D’acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, quina de les afirmacions següents relativa a les modificacions contractuals dels contractes de les administracions públiques és correcta?",
    opcions: [
    "La clàusula de modificació prevista en els plecs de clàusules administratives particulars ha de precisar amb detall suficient el procediment que s’ha de seguir per fer la modificació.",
    "Les modificacions contractuals han d’estar sempre previstes en els plecs de clàusules administratives particulars de la licitació.",
    "Les modificacions contractuals previstes en els plecs de clàusules administratives particulars poden suposar una variació de fins a un màxim del 30% del preu inicial.",
    "Les modificacions contractuals establertes en els plecs de clàusules administratives particulars poden alterar la naturalesa global del contracte inicial quan concorrin circumstàncies d’urgència o d’emergència."
    ],
    correcta: 0,
    llei: "LCSP — arts. 44.5, 101, 106, 119, 204 i 326",
    article: "",
    explicacio: "La clàusula de modificació prevista en els plecs de clàusules administratives particulars ha de precisar amb detall suficient el procediment que s’ha de seguir per fer la modificació.",
  },

  {
    id: "Q-F031-N040",
    codi_bloc: "EB006",
    codi_tema: "E27",
    pregunta: "D’acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, quina de les següents afirmacions relatives a la tramitació urgent d’un expedient d’un contracte públic és incorrecta?",
    opcions: [
    "Poden ser objecte de tramitació urgent els expedients dels contractes que responguin a una necessitat inajornable o l’adjudicació dels quals s’hagi d’accelerar per raons d’interès públic.",
    "El termini d’inici de l’execució del contracte no pot excedir un mes, comptat des de la seva formalització.",
    "Els expedients qualificats d’urgents s’han de tramitar seguint els mateixos procediments que els ordinaris amb les especialitats previstes per la Llei 9/2017 esmentada.",
    "Els contractes per urgència es poden tramitar sense existència de crèdit suficient."
    ],
    correcta: 3,
    llei: "LCSP — arts. 44.5, 101, 106, 119, 204 i 326",
    article: "",
    explicacio: "Els contractes per urgència es poden tramitar sense existència de crèdit suficient.",
  },

  {
    id: "Q-F031-N046",
    codi_bloc: "EB002",
    codi_tema: "E05",
    pregunta: "L’Acord nacional per a l’Agenda 2030 a Catalunya recull:",
    opcions: [
    "5 Objectius de Desenvolupament Sostenible.",
    "169 Objectius de Desenvolupament Sostenible.",
    "920 Objectius de Desenvolupament Sostenible.",
    "17 Objectius de Desenvolupament Sostenible."
    ],
    correcta: 3,
    llei: "ODS — 17 ODS",
    article: "",
    explicacio: "17 Objectius de Desenvolupament Sostenible.",
  },

  {
    id: "Q-F031-N050",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "D’acord amb Llei 9/2017, de 8 de novembre, de contractes del sector públic, l’exigència d’una garantia provisional als licitadors en els contractes subscrits per les administracions públiques:",
    opcions: [
    "S’exigeix de manera ordinària, si bé l’òrgan de contractació pot eximir el licitador de la seva constitució.",
    "Respon de la correcta formalització del contracte, de la seva execució en temps i forma i de la no existència de vicis ocults que apareguin durant el període de garantia.",
    "No pot ser superior al 3% del pressupost base de licitació del contracte (sense IVA).",
    "No pot ser exigida en els contractes de subministraments."
    ],
    correcta: 2,
    llei: "LCSP — arts. 44.5, 101, 106, 119, 204 i 326",
    article: "",
    explicacio: "No pot ser superior al 3% del pressupost base de licitació del contracte (sense IVA).",
  },

  {
    id: "Q-F031-R002",
    codi_bloc: "CB004",
    codi_tema: "C14",
    pregunta: "D’acord amb la Llei 40/2015, d’1 d’octubre, de règim jurídic del sector públic, els mecanismes de seguiment, vigilància i control de l’execució del conveni i dels compromisos adquirits pels signants han de resoldre:",
    opcions: [
    "Només els problemes d’interpretació que es puguin plantejar respecte dels convenis.",
    "Els problemes de validesa i d’eficàcia que es puguin plantejar respecte dels convenis.",
    "Només els problemes de validesa que es puguin plantejar respecte dels convenis.",
    "Els problemes d’interpretació i de compliment que es puguin plantejar respecte dels convenis."
    ],
    correcta: 3,
    llei: "LRJ — arts. 49.f i 156.1",
    article: "",
    explicacio: "Els problemes d’interpretació i de compliment que es puguin plantejar respecte dels convenis.",
  },

  {
    id: "Q-F031-R004",
    codi_bloc: "EB006",
    codi_tema: "E25",
    pregunta: "D’acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, quina de les següents afirmacions relatives a les meses de contractació és incorrecta?",
    opcions: [
    "Una de les seves funcions és la de valorar les proposicions dels licitadors.",
    "El personal funcionari interí no pot formar-ne part en cap cas.",
    "Són òrgans d’assistència tècnica especialitzada.",
    "Els seus membres són nomenats per l’òrgan de contractació."
    ],
    correcta: 1,
    llei: "LCSP — arts. 44.5, 101, 106, 119, 204 i 326",
    article: "",
    explicacio: "El personal funcionari interí no pot formar-ne part en cap cas.",
  },

  {
    id: "Q-F033-N002",
    codi_bloc: "CB001",
    codi_tema: "C01",
    pregunta: "D’acord amb la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, què és el govern obert?",
    opcions: [
    "Són els principis, les obligacions i les regles sobre la qualitat dels serveis i el funcionament de l’Administració, amb l’objectiu que aquesta funcioni amb la màxima transparència, qualitat i equitat, i amb garantia de retiment de comptes.",
    "És l’acció proactiva de l’Administració de donar a conèixer la informació relativa als seus àmbits d’actuació i les seves obligacions, amb caràcter permanent i actualitzada.",
    "És el dret de les persones a sol·licitar i obtenir la informació elaborada per l’Administració i la que aquesta té en el seu poder com a conseqüència de la seva activitat o de l’exercici de les seves funcions.",
    "Són les mesures per a establir una relació i un diàleg permanents i bidireccionals entre l’Administració i les persones a l’hora de definir i aplicar les polítiques públiques."
    ],
    correcta: 3,
    llei: "TRANS — arts. 2, 8–9 i 26",
    article: "",
    explicacio: "Són les mesures per a establir una relació i un diàleg permanents i bidireccionals entre l’Administració i les persones a l’hora de definir i aplicar les polítiques públiques.",
  },

  {
    id: "Q-F033-N004",
    codi_bloc: "CB006",
    codi_tema: "C24",
    pregunta: "Quina és la tipologia de contractes públics atenent el seu objecte?",
    opcions: [
    "Contractes d’obres, de serveis, de subministraments i d'encàrrec a mitjans propis personificats.",
    "Contractes d’obres, de concessió d’obres, de serveis, de concessió de serveis i de subministraments.",
    "Contractes administratius i contractes privats.",
    "Contractes d’obres, de concessió d’obres, de serveis, de concessió de serveis, de subministraments i patrimonials."
    ],
    correcta: 1,
    llei: "LCSP — arts. 12 i 131",
    article: "",
    explicacio: "Contractes d’obres, de concessió d’obres, de serveis, de concessió de serveis i de subministraments.",
  },

  {
    id: "Q-F033-N005",
    codi_bloc: "CB004",
    codi_tema: "C16",
    pregunta: "D’acord amb la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, es pot convalidar un acte administratiu el vici del qual consisteixi en la manca d’alguna a utorització?",
    opcions: [
    "Sí, mitjançant l’atorgament d’aquesta autorització per l’òrgan competent.",
    "No, perquè els actes anul·lables no són convalidables.",
    "No, perquè es tracta d’un acte nul.",
    "Sí, dictant un acte administratiu nou."
    ],
    correcta: 0,
    llei: "LPAC — arts. 3, 9 i 52",
    article: "",
    explicacio: "Sí, mitjançant l’atorgament d’aquesta autorització per l’òrgan competent.",
  },

  {
    id: "Q-F033-N012",
    codi_bloc: "CB004",
    codi_tema: "C17",
    pregunta: "D’acord amb l’article 3 de la Llei 39/2015, d’1 d’octubre, del procediment administratiu comú de les administracions públiques, tenen , entre d’altres, la capacitat d’obrar davant les Administracions Públiques:",
    opcions: [
    "Les entitats sense personalitat jurídica i patrimonis independents quan la llei així ho declari expressament.",
    "Els menors incapacitats sense l’assistència de la persona que exerceixi la pàtria potestat, quan la incapacitació afecti la defensa dels drets de què es tracti.",
    "Les persones físiques o jurídiques tinguin o no capacitat jurídica, d'acord amb les normes civils.",
    "Els menors d’edat no incapacitats amb l’assistència de les persones que exerceixin la seva pàtria potestat."
    ],
    correcta: 0,
    llei: "LPAC — arts. 3, 9 i 52",
    article: "",
    explicacio: "Les entitats sense personalitat jurídica i patrimonis independents quan la llei així ho declari expressament.",
  },

  {
    id: "Q-F033-N013",
    codi_bloc: "CB003",
    codi_tema: "C11",
    pregunta: "D’acord amb la Llei 40/2015, d’1 d’octubre, de règim jurídic del sector públic, en relació amb els consorcis, quina de les afirmacions següents és correcta?",
    opcions: [
    "En el cas de la comunitat autònoma de Catalunya, es creen per acord de Govern a petició de les administracions, organismes públics o entitats participants.",
    "Es creen mitjançant conveni subscrit per les administracions, organismes públics o entitats participants.",
    "Es creen per llei del parlament de la comunitat autònoma on radiquin les administracions, organismes públics o entitats participants.",
    "Van ser suprimits per aquesta Llei."
    ],
    correcta: 1,
    llei: "LRJ — arts. 3 i 123",
    article: "",
    explicacio: "Es creen mitjançant conveni subscrit per les administracions, organismes públics o entitats participants.",
  },

  {
    id: "Q-F033-N015",
    codi_bloc: "CB001",
    codi_tema: "C03",
    pregunta: "D’acord amb la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, quin dels continguts que s’indiquen a continuació no forma part del contingut mínim d’una carta de serveis ?",
    opcions: [
    "L’instrument jurídic de creació.",
    "Els drets i deures dels usuaris.",
    "La manera que tenen els usuaris dels serveis de presentar queixes i suggeriments.",
    "La identificació del responsable del servei."
    ],
    correcta: 0,
    llei: "TRANS — arts. 2, 8–9 i 26",
    article: "",
    explicacio: "L’instrument jurídic de creació.",
  },

  {
    id: "Q-F033-N016",
    codi_bloc: "CB006",
    codi_tema: "C24",
    pregunta: "Quins són els procediments ordinaris d’adjudicació dels contractes públics?",
    opcions: [
    "L’obert, l’obert simplificat i l’obert simplificat abreujat.",
    "L’obert i el restringit.",
    "L’obert, el restringit i el negociat.",
    "L’obert, els acords marc i els sistemes dinàmics d’adquisició."
    ],
    correcta: 1,
    llei: "LCSP — arts. 12 i 131",
    article: "",
    explicacio: "L’obert i el restringit.",
  },

  {
    id: "Q-F033-N017",
    codi_bloc: "CB003",
    codi_tema: "C07",
    pregunta: "D’acord amb la Constitució espanyola de 1978, quina de les afirmacions següents és correcta?",
    opcions: [
    "La llibertat ideològica, religiosa i de culte dels individus i de les comunitats sense cap més limitació són fonament de l’ordre polític i de la pau social.",
    "El dret a la vida i a la integritat física i moral són fonament de l’ordre polític i de la pau social.",
    "La dignitat de la persona, els drets inviolables que li són inherents, el lliure desenvolupament de la personalitat, el respecte a la llei i als drets dels altres són fonament de l’ordre polític i de la pau social.",
    "Només el lliure desenvolupament de la personalitat, el respecte a la llei i als drets dels altres són fonament de l’ordre polític i de la pau social."
    ],
    correcta: 2,
    llei: "CE — art. 10.1",
    article: "",
    explicacio: "La dignitat de la persona, els drets inviolables que li són inherents, el lliure desenvolupament de la personalitat, el respecte a la llei i als drets dels altres són fonament de l’ordre polític i de la pau social.",
  },

  {
    id: "Q-F033-N022",
    codi_bloc: "CB001",
    codi_tema: "C01",
    pregunta: "D’acord amb el Reial decret legislatiu 5/2015, de 30 d’octubre, pel qual s’aprova el text refós de la Llei de l’estatut bàsic de l’empleat públic, quina de les afirmacions següents fa referència a un principi de conducta dels empleats públics?",
    opcions: [
    "No han d’acceptar cap tracte de favor o situació que impliqui privilegi o avantatge injustificat, per part de persones físiques o entitats privades.",
    "S’han d’abstenir en els assumptes en què tinguin un interès personal, així com de tota activitat privada o interès que pugui representar un risc de plantejar conflictes d’interessos amb el seu lloc públic.",
    "L’acompliment de les tasques corresponents al seu lloc de treball s’ha de fer de manera diligent, complint la jornada i l’horari establerts.",
    "No han d’influir en l’agilitació o resolució de tràmit o procediment administratiu sense una causa justa i, en cap cas, quan això comporti un privilegi en benefici dels titulars dels càrrecs públics."
    ],
    correcta: 2,
    llei: "EBEP — arts. 12, 54.2 i 59",
    article: "",
    explicacio: "L’acompliment de les tasques corresponents al seu lloc de treball s’ha de fer de manera diligent, complint la jornada i l’horari establerts.",
  },

  {
    id: "Q-F033-N023",
    codi_bloc: "CB004",
    codi_tema: "C13",
    pregunta: "D’acord amb l’article 3 de la Llei 40/2015, d’1 d’octubre, de règim jurídic del sector públic, les administracions públiques han de respectar en la seva actuació i relacions, entre d’altres, els principis següents :",
    opcions: [
    "Eficàcia en el compliment dels objectius, simplicitat, claredat i proximitat als ciutadans.",
    "Eficiència en el compliment dels objectius, servei efectiu als ciutadans, participació, objectivitat i transparència.",
    "Cooperació, col·laboració i submissió entre les administracions públiques, control de la gestió i no avaluació dels resultats.",
    "Control de la gestió i avaluació de les polítiques públiques, responsabilitat per la gestió pública i confidencialitat i reserva vers altres administracions públiques."
    ],
    correcta: 0,
    llei: "LRJ — arts. 3 i 123",
    article: "",
    explicacio: "Eficàcia en el compliment dels objectius, simplicitat, claredat i proximitat als ciutadans.",
  },

  {
    id: "Q-F033-N025",
    codi_bloc: "CB009",
    codi_tema: "C32",
    pregunta: "D’acord amb l’article 12 del text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, aprovat pel Decret legislatiu 1/1997, de 31 d'octubre, és personal eventual qui en virtut de:",
    opcions: [
    "Lliure designació del president o dels consellers i en règim no permanent, ocupa un lloc de treball considerat de confiança o d'assessorament reservat a funcionaris.",
    "Lliure nomenament del president o dels consellers i en règim no permanent, ocupa un lloc de treball considerat de confiança o d'assessorament reservat a funcionaris.",
    "Lliure nomenament del president o dels consellers i en règim no permanent, ocupa un lloc de treball considerat de confiança o d'assessorament no reservat a funcionaris.",
    "Lliure designació del president o dels consellers i en règim no permanent, ocupa un lloc de treball considerat de confiança o d'assessorament no reservat a funcionaris."
    ],
    correcta: 2,
    llei: "EBEP — arts. 12, 54.2 i 59",
    article: "",
    explicacio: "Lliure nomenament del president o dels consellers i en règim no permanent, ocupa un lloc de treball considerat de confiança o d'assessorament no reservat a funcionaris.",
  },

  {
    id: "Q-F033-N028",
    codi_bloc: "CB001",
    codi_tema: "C03",
    pregunta: "D’acord amb l’article 26 de la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, quina de les afirmacions següents correspon a un requisit de la sol·licitud d’accés a la informació pública?",
    opcions: [
    "Una adreça de contacte, preferentment adreça postal, que serveixi per a les comunicacions entre el sol·licitant i l’Administració.",
    "La informació precisa a la qual es vol tenir accés, indicant document o expedient concrets.",
    "Els motius que justifiquen l’exercici del dret d’accés a la informació pública. L’absència de motivació és causa per a denegar la sol·licitud.",
    "El format en què es prefereix tenir accés a la informació."
    ],
    correcta: 3,
    llei: "TRANS — arts. 2, 8–9 i 26",
    article: "",
    explicacio: "El format en què es prefereix tenir accés a la informació.",
  },

  {
    id: "Q-F033-N030",
    codi_bloc: "CB009",
    codi_tema: "C32",
    pregunta: "D’acord amb l'Estatut bàsic de l'empleat públic, quin percentatge mínim de l’oferta d’ocupació pública s’ha de reservar per a persones amb discapacitat?",
    opcions: [
    "7 %.",
    "10 %.",
    "3 %.",
    "5 %."
    ],
    correcta: 0,
    llei: "EBEP — arts. 12, 54.2 i 59",
    article: "",
    explicacio: "7 %.",
  },

  {
    id: "Q-F033-R004",
    codi_bloc: "CB004",
    codi_tema: "C17",
    pregunta: "D’acord amb l’article 9.1 de la Llei del procediment administratiu comú de les administracions públiques, quan les administracions públiques han de verificar la identitat de l’interessat?",
    opcions: [
    "Mai, amb una declaració responsable és suficient.",
    "Sempre.",
    "Quan la comprovació del seu nom i cognoms o denominació o raó social sigui indispensable per resoldre la seva sol·licitud.",
    "Només quan la persona vol accedir al seu expedient."
    ],
    correcta: 1,
    llei: "LPAC — arts. 3, 9 i 52",
    article: "",
    explicacio: "Sempre.",
  },

  {
    id: "Q-F013-N020-V2",
    codi_bloc: "CB006",
    codi_tema: "C24",
    pregunta: "Segons l’art. 20.1 de la LCSP i els llindars aplicables el 2026–2027, quin valor estimat mínim sotmet els contractes d’obres, concessions d’obres i concessions de serveis a regulació harmonitzada?",
    opcions: [
    "5.404.000 €",
    "5.538.000 €",
    "5.382.000 €",
    "216.000 €"
    ],
    correcta: 0,
    llei: "LCSP — art. 20.1",
    article: "",
    explicacio: "5.404.000 €",
  },

  {
    id: "Q-F015-N041-V2",
    codi_bloc: "EB006",
    codi_tema: "E24",
    pregunta: "El 2026–2027, un contracte ordinari de subministraments adjudicat per un departament de la Generalitat està subjecte a regulació harmonitzada a partir de quin valor estimat?",
    opcions: [
    "140.000 €",
    "215.000 €",
    "216.000 €",
    "221.000 €"
    ],
    correcta: 2,
    llei: "LCSP — art. 21.1.b",
    article: "",
    explicacio: "216.000 €",
  },

  {
    id: "Q-F025-N030-V2",
    codi_bloc: "EB006",
    codi_tema: "E24",
    pregunta: "El 2026–2027, quin és el llindar de regulació harmonitzada d’un contracte de concessió d’obres subjecte a la LCSP?",
    opcions: [
    "216.000 €",
    "5.382.000 €",
    "5.538.000 €",
    "5.404.000 €"
    ],
    correcta: 3,
    llei: "LCSP — art. 20.1",
    article: "",
    explicacio: "5.404.000 €",
  },

  {
    id: "Q-F013-N013-V2",
    codi_bloc: "CB004",
    codi_tema: "C16",
    pregunta: "D’acord amb l’article 40.2 de la Llei 39/2015, dins de quin termini s’ha de cursar una notificació des de la data de l’acte?",
    opcions: [
    "10 dies hàbils",
    "10 dies naturals",
    "15 dies hàbils",
    "Un mes"
    ],
    correcta: 0,
    llei: "LPAC — arts. 40.2 i 30.2",
    article: "",
    explicacio: "10 dies hàbils",
  },

  {
    id: "Q-F033-N018-V2",
    codi_bloc: "CB009",
    codi_tema: "C33",
    pregunta: "Segons l’article 39.2 del TREBEP, a partir de quin nombre de funcionaris es constitueixen juntes de personal en una unitat electoral?",
    opcions: [
    "25",
    "30",
    "50",
    "100"
    ],
    correcta: 2,
    llei: "EBEP — art. 39.2",
    article: "",
    explicacio: "50",
  },

  {
    id: "Q-F033-R005-V2",
    codi_bloc: "CB006",
    codi_tema: "C24",
    pregunta: "Una administració encarrega un servei de cafeteria i transfereix al contractista el risc operacional de la seva explotació. Com es qualifica el contracte segons la LCSP?",
    opcions: [
    "Contracte de subministraments",
    "Concessió de serveis",
    "Contracte d’obres",
    "Conveni de col·laboració"
    ],
    correcta: 1,
    llei: "LCSP — art. 15",
    article: "",
    explicacio: "Concessió de serveis",
  },

  {
    id: "Q-F002-N010-V2",
    codi_bloc: "EB006",
    codi_tema: "E28",
    pregunta: "Segons l’article 159.1 de la LCSP, quin límit de valor estimat s’estableix per a contractes d’obres en el procediment obert simplificat, si es compleixen els altres requisits?",
    opcions: [
    "Inferior a 80.000 €",
    "Igual o inferior a 2.000.000 €",
    "Igual o superior a 5.404.000 €",
    "Sense cap límit"
    ],
    correcta: 1,
    llei: "LCSP — art. 159.1.a",
    article: "",
    explicacio: "Igual o inferior a 2.000.000 €",
  },

  {
    id: "Q-F029-N146-V2",
    codi_bloc: "EB006",
    codi_tema: "E24",
    pregunta: "Quin llindar de valor estimat s’aplica el 2026–2027 als contractes d’obres harmonitzats segons la LCSP?",
    opcions: [
    "5.382.000 €",
    "5.538.000 €",
    "5.404.000 €",
    "750.000 €"
    ],
    correcta: 2,
    llei: "LCSP — art. 20.1",
    article: "",
    explicacio: "5.404.000 €",
  },

  {
    id: "Q-F029-N455-V2",
    codi_bloc: "EB005",
    codi_tema: "E18",
    pregunta: "Segons el TREBEP vigent, quina és la durada ordinària del permís per naixement per a la mare biològica, sense monoparentalitat ni ampliacions addicionals?",
    opcions: [
    "16 setmanes",
    "17 setmanes",
    "19 setmanes",
    "32 setmanes"
    ],
    correcta: 2,
    llei: "EBEP — art. 49.a",
    article: "",
    explicacio: "19 setmanes",
  },

  {
    id: "Q-F029-N461-V2",
    codi_bloc: "EB005",
    codi_tema: "E18",
    pregunta: "Segons l’art. 48.a del TREBEP, quants dies hàbils corresponen per hospitalització del cònjuge, parella de fet o familiar de primer grau?",
    opcions: [
    "2",
    "3",
    "4",
    "5"
    ],
    correcta: 3,
    llei: "EBEP — art. 48.a",
    article: "",
    explicacio: "5",
  },

  {
    id: "Q-F029-N529-V2",
    codi_bloc: "EB005",
    codi_tema: "E19",
    pregunta: "Segons el TREBEP, quin termini de prescripció correspon a una sanció imposada per una falta lleu, des de la fermesa de la resolució?",
    opcions: [
    "6 mesos",
    "1 any",
    "2 anys",
    "3 anys"
    ],
    correcta: 1,
    llei: "EBEP — art. 97",
    article: "",
    explicacio: "1 any",
  },

  {
    id: "Q-F029-N096-V2",
    codi_bloc: "EB004",
    codi_tema: "E15",
    pregunta: "Segons la LPAC, les pròrrogues dels apoderaments inscrits en un registre electrònic tenen una validesa:",
    opcions: [
    "Mínima de 5 anys",
    "Màxima de 5 anys des de la inscripció de la pròrroga",
    "Indefinida",
    "Màxima d’un any"
    ],
    correcta: 1,
    llei: "LPAC — art. 6.6",
    article: "",
    explicacio: "Màxima de 5 anys des de la inscripció de la pròrroga",
  },

  {
    id: "Q-F029-N045-V2",
    codi_bloc: "EB003",
    codi_tema: "E09",
    pregunta: "Les cartes de serveis aprovades en l’àmbit de l’Administració de la Generalitat, segons la Llei 19/2014 vigent:",
    opcions: [
    "Tenen sempre naturalesa reglamentària",
    "Tenen naturalesa reglamentària si s’anomenen carta base",
    "No tenen naturalesa reglamentària",
    "No poden fixar estàndards de qualitat"
    ],
    correcta: 2,
    llei: "TRANS — art. 59; reforma per l’art. 179.1 de la Llei 5/2020",
    article: "",
    explicacio: "No tenen naturalesa reglamentària",
  },

  {
    id: "Q-F029-N046-V2",
    codi_bloc: "EB003",
    codi_tema: "E09",
    pregunta: "Segons la Llei 19/2014, qui aprova les cartes de serveis en l’àmbit de l’Administració de la Generalitat?",
    opcions: [
    "El Govern sempre per decret",
    "El titular del departament competent del servei, per resolució",
    "El Parlament per llei",
    "La GAIP"
    ],
    correcta: 1,
    llei: "TRANS — art. 59.6",
    article: "",
    explicacio: "El titular del departament competent del servei, per resolució",
  },

  {
    id: "Q-F029-N595-V2",
    codi_bloc: "CB002",
    codi_tema: "C19",
    pregunta: "Segons la LPAC, les còpies autèntiques:",
    opcions: [
    "Tenen la mateixa validesa i eficàcia que els documents originals",
    "Només tenen valor informatiu",
    "Sempre exigeixen una compulsa notarial",
    "Només són vàlides en l’Administració que les expedeix"
    ],
    correcta: 0,
    llei: "LPAC — art. 27.2",
    article: "",
    explicacio: "Tenen la mateixa validesa i eficàcia que els documents originals",
  },

  {
    id: "Q-F029-N574-V2",
    codi_bloc: "CB002",
    codi_tema: "C19",
    pregunta: "Les notificacions administratives per mitjans electrònics són obligatòries:",
    opcions: [
    "Per a totes les persones físiques",
    "Quan l’interessat estigui obligat a rebre-les així; també es poden practicar electrònicament si les ha escollit",
    "Només per a funcionaris",
    "Només quan l’acte és favorable"
    ],
    correcta: 1,
    llei: "LPAC — arts. 41 i 43",
    article: "",
    explicacio: "Quan l’interessat estigui obligat a rebre-les així; també es poden practicar electrònicament si les ha escollit",
  },

  {
    id: "Q-F029-N576-V2",
    codi_bloc: "CB002",
    codi_tema: "C19",
    pregunta: "A l’efecte específic de complir l’obligació de notificar dins del termini màxim del procediment, l’art. 43.3 de la LPAC considera suficient:",
    opcions: [
    "Enviar un SMS",
    "Publicar sempre al BOE",
    "Posar la notificació a disposició a la seu electrònica o a l’adreça electrònica habilitada única",
    "Que l’interessat respongui el correu"
    ],
    correcta: 2,
    llei: "LPAC — arts. 40.4 i 43.3",
    article: "",
    explicacio: "Posar la notificació a disposició a la seu electrònica o a l’adreça electrònica habilitada única",
  },

  {
    id: "Q-F029-N605-V2",
    codi_bloc: "CB002",
    codi_tema: "C18",
    pregunta: "Si una sol·licitud d’iniciació no conté una signatura exigida, quina regla general aplica la LPAC?",
    opcions: [
    "Rebuig definitiu sense requeriment",
    "Requeriment d’esmena en 10 dies, amb advertiment de desistiment i resolució si no s’esmena",
    "Arxiu immediat sense resolució",
    "Concessió automàtica"
    ],
    correcta: 1,
    llei: "LPAC — arts. 66.1.e i 68.1",
    article: "",
    explicacio: "Requeriment d’esmena en 10 dies, amb advertiment de desistiment i resolució si no s’esmena",
  },

  {
    id: "Q-F029-N612-V2",
    codi_bloc: "EB004",
    codi_tema: "E15",
    pregunta: "L’idCAT Mòbil pot utilitzar-se com a mecanisme de signatura electrònica?",
    opcions: [
    "No, perquè no és un certificat",
    "Sí, si el prestador del tràmit ha desenvolupat aquesta funcionalitat",
    "Només per signar qualsevol PDF amb Adobe",
    "Només per a persones jurídiques"
    ],
    correcta: 1,
    llei: "AOC — Funcionament d’idCAT Mòbil",
    article: "",
    explicacio: "Sí, si el prestador del tràmit ha desenvolupat aquesta funcionalitat",
  },

  {
    id: "Q-F029-N614-V2",
    codi_bloc: "EB004",
    codi_tema: "E15",
    pregunta: "Segons l’art. 10 de la LPAC, quin efecte té l’ús d’un sistema de signatura admès?",
    opcions: [
    "Només mostra el número de DNI",
    "Permet acreditar l’autenticitat de la voluntat i consentiment, i la integritat i inalterabilitat del document",
    "No té efectes administratius",
    "Substitueix sempre qualsevol document annex"
    ],
    correcta: 1,
    llei: "LPAC — art. 10.1",
    article: "",
    explicacio: "Permet acreditar l’autenticitat de la voluntat i consentiment, i la integritat i inalterabilitat del document",
  },

  {
    id: "Q-F029-N613-V2",
    codi_bloc: "EB004",
    codi_tema: "E15",
    pregunta: "Segons la LPAC, per signar un tràmit administratiu electrònic:",
    opcions: [
    "Sempre és imprescindible un certificat físic",
    "Es poden admetre sistemes diferents dels certificats, en les condicions legals establertes",
    "Només és vàlid un DNI escanejat",
    "Mai es poden emprar claus concertades"
    ],
    correcta: 1,
    llei: "LPAC — art. 10.2.c",
    article: "",
    explicacio: "Es poden admetre sistemes diferents dels certificats, en les condicions legals establertes",
  },

  {
    id: "Q-F029-N001-V2",
    codi_bloc: "EB002",
    codi_tema: "E05",
    pregunta: "Quants objectius de desenvolupament sostenible té l’Agenda 2030?",
    opcions: [
    "15",
    "16",
    "17",
    "20"
    ],
    correcta: 2,
    llei: "ODS — 17 ODS",
    article: "",
    explicacio: "17",
  },

  {
    id: "Q-F029-N005-V2",
    codi_bloc: "EB002",
    codi_tema: "E05",
    pregunta: "En quin any es va aprovar l’Agenda 2030 de les Nacions Unides?",
    opcions: [
    "2000",
    "2010",
    "2015",
    "2020"
    ],
    correcta: 2,
    llei: "ODS — Adopció 2015",
    article: "",
    explicacio: "2015",
  },

  {
    id: "Q-F029-N012-V2",
    codi_bloc: "EB002",
    codi_tema: "E05",
    pregunta: "Quines són les cinc àrees conegudes com les cinc P de l’Agenda 2030?",
    opcions: [
    "Persones, planeta, prosperitat, pau i partenariat",
    "Persones, política, patrimoni, productivitat i pressupost",
    "Planificació, programes, participació, pressupost i pagament",
    "Pobresa, pensions, policia, patrimoni i procés"
    ],
    correcta: 0,
    llei: "ODS — Cinc àrees",
    article: "",
    explicacio: "Persones, planeta, prosperitat, pau i partenariat",
  },

  {
    id: "Q-F029-N013-V2",
    codi_bloc: "EB002",
    codi_tema: "E05",
    pregunta: "Quin òrgan de les Nacions Unides va aprovar l’Agenda 2030?",
    opcions: [
    "Consell de Seguretat",
    "Secretaria General",
    "Assemblea General",
    "Tribunal Internacional de Justícia"
    ],
    correcta: 2,
    llei: "ODS — Aprovació de l’Agenda",
    article: "",
    explicacio: "Assemblea General",
  },

  {
    id: "Q-F029-N061-V2",
    codi_bloc: "CB004",
    codi_tema: "C20",
    pregunta: "Quin termini de sis mesos preveu l’article 106.5 de la LPAC en la revisió d’ofici?",
    opcions: [
    "Transcorregut sense resolució, caduca si s’inicia d’ofici; si s’inicia a sol·licitud, es pot entendre desestimada",
    "Sempre estima la sol·licitud",
    "Sempre declara nul l’acte",
    "Fa prescriure qualsevol acció de nul·litat"
    ],
    correcta: 0,
    llei: "LPAC — art. 106.5",
    article: "",
    explicacio: "Transcorregut sense resolució, caduca si s’inicia d’ofici; si s’inicia a sol·licitud, es pot entendre desestimada",
  },

  {
    id: "Q-F029-N063-V2",
    codi_bloc: "CB004",
    codi_tema: "C16",
    pregunta: "Quan determina l’anul·labilitat un defecte de forma, segons la LPAC?",
    opcions: [
    "Sempre",
    "Mai",
    "Si manquen requisits formals indispensables per assolir la finalitat o es produeix indefensió",
    "Només quan l’acte és desfavorable"
    ],
    correcta: 2,
    llei: "LPAC — art. 48.2",
    article: "",
    explicacio: "Si manquen requisits formals indispensables per assolir la finalitat o es produeix indefensió",
  },

  {
    id: "Q-F029-N064-V2",
    codi_bloc: "CB004",
    codi_tema: "C16",
    pregunta: "Fer actuacions administratives fora del temps establert comporta anul·labilitat:",
    opcions: [
    "Sempre",
    "Només quan ho imposi la naturalesa del terme o termini",
    "Només si el retard supera deu dies",
    "Mai"
    ],
    correcta: 1,
    llei: "LPAC — art. 48.3",
    article: "",
    explicacio: "Només quan ho imposi la naturalesa del terme o termini",
  },

  {
    id: "Q-F029-N068-V2",
    codi_bloc: "CB004",
    codi_tema: "C20",
    pregunta: "Quins actes poden revocar les administracions segons l’art. 109.1 de la LPAC, amb els límits que estableix?",
    opcions: [
    "Tots els actes favorables",
    "Només els reglaments",
    "Els actes de gravamen o desfavorables",
    "Només els actes ferms judicialment"
    ],
    correcta: 2,
    llei: "LPAC — art. 109.1",
    article: "",
    explicacio: "Els actes de gravamen o desfavorables",
  },

  {
    id: "Q-F029-N074-V2",
    codi_bloc: "CB004",
    codi_tema: "C20",
    pregunta: "Contra una disposició administrativa de caràcter general es pot interposar recurs administratiu?",
    opcions: [
    "Sempre recurs d’alçada",
    "Sempre reposició",
    "No; la LPAC exclou els recursos administratius contra aquestes disposicions",
    "Només extraordinari de revisió"
    ],
    correcta: 2,
    llei: "LPAC — art. 112.3",
    article: "",
    explicacio: "No; la LPAC exclou els recursos administratius contra aquestes disposicions",
  },

  {
    id: "Q-F029-N075-V2",
    codi_bloc: "CB004",
    codi_tema: "C20",
    pregunta: "Un error o l’absència de qualificació del recurs per part del recurrent:",
    opcions: [
    "N’impedeix sempre la tramitació",
    "No impedeix tramitar-lo si se’n dedueix el caràcter vertader",
    "El converteix automàticament en demanda judicial",
    "Provoca nul·litat de l’acte recorregut"
    ],
    correcta: 1,
    llei: "LPAC — art. 115.2",
    article: "",
    explicacio: "No impedeix tramitar-lo si se’n dedueix el caràcter vertader",
  },

  {
    id: "Q-F029-N080-V2",
    codi_bloc: "CB004",
    codi_tema: "C20",
    pregunta: "Davant de qui es pot interposar un recurs d’alçada?",
    opcions: [
    "Només davant el jutge",
    "Davant l’òrgan que va dictar l’acte o davant el competent per resoldre’l",
    "Només davant el Síndic",
    "Davant qualsevol particular"
    ],
    correcta: 1,
    llei: "LPAC — art. 121.2",
    article: "",
    explicacio: "Davant l’òrgan que va dictar l’acte o davant el competent per resoldre’l",
  },

  {
    id: "Q-F029-N083-V2",
    codi_bloc: "CB004",
    codi_tema: "C20",
    pregunta: "Qui resol un recurs potestatiu de reposició?",
    opcions: [
    "L’òrgan que va dictar l’acte",
    "Sempre el superior jeràrquic",
    "La GAIP",
    "El tribunal contenciós"
    ],
    correcta: 0,
    llei: "LPAC — art. 123.1",
    article: "",
    explicacio: "L’òrgan que va dictar l’acte",
  },

  {
    id: "Q-F029-N127-V2",
    codi_bloc: "EB006",
    codi_tema: "E25",
    pregunta: "En un contracte d’obres, qui exerceix les facultats del responsable del contracte?",
    opcions: [
    "El licitador amb l’oferta més baixa",
    "El director facultatiu",
    "L’interventor en exclusiva",
    "El secretari de la mesa"
    ],
    correcta: 1,
    llei: "LCSP — art. 62.2",
    article: "",
    explicacio: "El director facultatiu",
  },

  {
    id: "Q-F029-N154-V2",
    codi_bloc: "EB006",
    codi_tema: "E26",
    pregunta: "Segons la LCSP, en quin contracte d’obres és indispensable la classificació de l’empresari, amb les excepcions legals?",
    opcions: [
    "Valor estimat igual o superior a 500.000 €",
    "Qualsevol obra de 1.000 €",
    "Només obres superiors a 5.404.000 €",
    "Mai"
    ],
    correcta: 0,
    llei: "LCSP — art. 77.1.a",
    article: "",
    explicacio: "Valor estimat igual o superior a 500.000 €",
  },

  {
    id: "Q-F029-N166-V2",
    codi_bloc: "EB006",
    codi_tema: "E27",
    pregunta: "El pressupost base de licitació inclou l’IVA, llevat de disposició en contra?",
    opcions: [
    "Sí",
    "No",
    "Només en concessions",
    "Només en contractes menors"
    ],
    correcta: 0,
    llei: "LCSP — art. 100.1",
    article: "",
    explicacio: "Sí",
  },

  {
    id: "Q-F029-N167-V2",
    codi_bloc: "EB006",
    codi_tema: "E27",
    pregunta: "Per calcular el valor estimat d’un contracte segons la LCSP:",
    opcions: [
    "S’inclou sempre l’IVA",
    "S’exclou l’IVA i s’inclouen, entre altres conceptes, les eventuals pròrrogues i opcions",
    "S’agafa únicament el primer pagament mensual",
    "Només s’inclou el benefici industrial"
    ],
    correcta: 1,
    llei: "LCSP — art. 101",
    article: "",
    explicacio: "S’exclou l’IVA i s’inclouen, entre altres conceptes, les eventuals pròrrogues i opcions",
  },

  {
    id: "Q-F029-N177-V2",
    codi_bloc: "EB006",
    codi_tema: "E27",
    pregunta: "Quin límit de valor estimat defineix un contracte menor ordinari d’obres segons la LCSP?",
    opcions: [
    "Igual o inferior a 40.000 €",
    "Inferior a 40.000 €",
    "Inferior a 80.000 €",
    "Igual o inferior a 15.000 €"
    ],
    correcta: 1,
    llei: "LCSP — art. 118.1",
    article: "",
    explicacio: "Inferior a 40.000 €",
  },

  {
    id: "Q-F029-N235-V2",
    codi_bloc: "EB006",
    codi_tema: "E29",
    pregunta: "Quin percentatge màxim del preu inicial pot arribar a tenir una modificació prevista als plecs segons l’art. 204 de la LCSP?",
    opcions: [
    "10 %",
    "20 %",
    "50 %",
    "100 %"
    ],
    correcta: 1,
    llei: "LCSP — art. 204.1",
    article: "",
    explicacio: "20 %",
  },

  {
    id: "Q-F029-N268-V2",
    codi_bloc: "CB004",
    codi_tema: "C14",
    pregunta: "Quina durada màxima ordinària han de tenir els convenis segons la Llei 40/2015, si una norma no preveu un termini superior?",
    opcions: [
    "2 anys",
    "4 anys",
    "6 anys",
    "Indefinida"
    ],
    correcta: 1,
    llei: "LRJ — art. 49.h.1",
    article: "",
    explicacio: "4 anys",
  },

  {
    id: "Q-F029-N283-V2",
    codi_bloc: "EB007",
    codi_tema: "E30",
    pregunta: "Segons la LGS, el procediment ordinari de concessió de subvencions es tramita en règim de:",
    opcions: [
    "Concurrència competitiva",
    "Adjudicació directa sempre",
    "Lliure designació",
    "Subhasta inversa sempre"
    ],
    correcta: 0,
    llei: "LGS — art. 22.1",
    article: "",
    explicacio: "Concurrència competitiva",
  },

  {
    id: "Q-F029-N285-V2",
    codi_bloc: "EB007",
    codi_tema: "E30",
    pregunta: "Com s’inicia el procediment de concessió de subvencions en concurrència competitiva segons la LGS?",
    opcions: [
    "Sempre d’ofici mitjançant convocatòria",
    "Sempre a instància del beneficiari amb concessió automàtica",
    "Per contracte privat",
    "Per comunicació verbal"
    ],
    correcta: 0,
    llei: "LGS — art. 23.1",
    article: "",
    explicacio: "Sempre d’ofici mitjançant convocatòria",
  },

  {
    id: "Q-F029-N318-V2",
    codi_bloc: "CB006",
    codi_tema: "C26",
    pregunta: "Segons l’article 132.1 de la Constitució, el règim dels béns de domini públic s’inspira en:",
    opcions: [
    "Alienabilitat i embargabilitat",
    "Inalienabilitat, imprescriptibilitat i inembargabilitat",
    "Lliure venda i prescripció anual",
    "Disponibilitat privada il·limitada"
    ],
    correcta: 1,
    llei: "CE — art. 132.1",
    article: "",
    explicacio: "Inalienabilitat, imprescriptibilitat i inembargabilitat",
  },

  {
    id: "Q-F029-N477-V2",
    codi_bloc: "EB005",
    codi_tema: "E18",
    pregunta: "Quants dies anuals per assumptes particulars preveu, com a regla bàsica, l’art. 48.k del TREBEP?",
    opcions: [
    "3",
    "5",
    "6",
    "9"
    ],
    correcta: 2,
    llei: "EBEP — art. 48.k",
    article: "",
    explicacio: "6",
  },

  {
    id: "Q-F029-N481-V2",
    codi_bloc: "EB005",
    codi_tema: "E18",
    pregunta: "Segons el TREBEP, quants dies hàbils de vacances retribuïdes corresponen, com a regla general, per any complet de servei?",
    opcions: [
    "20",
    "22",
    "25",
    "30"
    ],
    correcta: 1,
    llei: "EBEP — art. 50.1",
    article: "",
    explicacio: "22",
  },

  {
    id: "Q-F029-N577-V2",
    codi_bloc: "CB002",
    codi_tema: "C19",
    pregunta: "Quan s’entén practicada una notificació electrònica segons l’art. 43.2 de la LPAC?",
    opcions: [
    "Quan s’envia l’avís SMS",
    "Quan s’accedeix al contingut",
    "Quan es dicta l’acte",
    "Quan s’obre qualsevol pàgina del portal"
    ],
    correcta: 1,
    llei: "LPAC — art. 43.2",
    article: "",
    explicacio: "Quan s’accedeix al contingut",
  },

  {
    id: "Q-F029-N578-V2",
    codi_bloc: "CB002",
    codi_tema: "C19",
    pregunta: "Quan es considera rebutjada una notificació electrònica obligatòria o expressament escollida, sense accedir al contingut?",
    opcions: [
    "Després de 5 dies hàbils",
    "Després de 10 dies naturals des de la posada a disposició",
    "Després d’un mes",
    "Immediatament després de l’avís SMS"
    ],
    correcta: 1,
    llei: "LPAC — art. 43.2",
    article: "",
    explicacio: "Després de 10 dies naturals des de la posada a disposició",
  },

  {
    id: "Q-F029-N596-V2",
    codi_bloc: "CB002",
    codi_tema: "C19",
    pregunta: "Les còpies autèntiques de documents privats segons la LPAC produeixen:",
    opcions: [
    "Únicament efectes administratius",
    "Els mateixos efectes civils que una escriptura pública",
    "Cap efecte administratiu",
    "Efectes només en el país d’emissió"
    ],
    correcta: 0,
    llei: "LPAC — art. 27.1",
    article: "",
    explicacio: "Únicament efectes administratius",
  },

  {
    id: "Q-F009-N022-V2",
    codi_bloc: "CB002",
    codi_tema: "C18",
    pregunta: "Segons l’article 31.2.a de la LPAC, quan permet presentar documents el registre electrònic?",
    opcions: [
    "Tots els dies de 8 a 15 hores",
    "Tots els dies hàbils durant les 24 hores",
    "De dilluns a divendres de 8 a 18 hores",
    "Tots els dies de l’any durant les 24 hores"
    ],
    correcta: 3,
    llei: "LPAC — art. 31.2.a",
    article: "",
    explicacio: "Tots els dies de l’any durant les 24 hores",
  },

  {
    id: "Q-F013-N047-V2",
    codi_bloc: "EB005",
    codi_tema: "E16",
    pregunta: "Quina d’aquestes mesures figura expressament a l’art. 68 del DL 1/1997 com a instrument de racionalització de l’organització i del personal?",
    opcions: [
    "Plans de formació i capacitació per a la recol·locació del personal",
    "Supressió de l’obligació de publicar la RLT",
    "Eliminació de tots els processos selectius",
    "Conversió automàtica de funcionaris en personal laboral"
    ],
    correcta: 0,
    llei: "DL1 — art. 68.e",
    article: "",
    explicacio: "Plans de formació i capacitació per a la recol·locació del personal",
  },

];