// ═══════════════════════════════════════════════════════════════════
// PART COMUNA — Temes generals (T.1, T.3, T.7, T.8, T.9, T.11, T.22, T.29)
// ═══════════════════════════════════════════════════════════════════
//
// FORMAT MARKDOWN: pots usar ## títols, **negreta**, *cursiva*,
// taules (| col | col |), llistes (- element) i numeracions (1. element)
// dins dels camps 'contingut', 'resum' i 'nota'.
// ═══════════════════════════════════════════════════════════════════

const STUDY_PC_GENERAL = [

  {
    id: "C01",
    part: "comuna",
    bloc: "CB001",
    numero: 1,
    titol: "Bon govern. Principis ètics i de conducta dels empleats públics. Dret a una bona administració. Cartes de serveis. Govern obert. Dades obertes.",
    resum: "El bon govern i l'ètica pública constitueixen el marc de referència per a l'actuació dels empleats de la Generalitat. Les cartes de serveis i el govern obert són instruments clau per garantir la qualitat dels serveis públics i la participació ciutadana.",
    apartats: [
      {
        titol: "Principis ètics i de conducta",
        contingut: `
El Codi de conducta dels empleats públics de la Generalitat estableix els **valors** que han de guiar l'actuació:

- Integritat
- Objectivitat
- Transparència
- Eficàcia, economia i eficiència

Inclou deures com tractar la ciutadania amb respecte, exercir les funcions amb diligència i **abstenir-se en casos de conflicte d'interessos**.
        `
      },
      {
        titol: "Dret a una bona administració",
        contingut: `
Reconegut a l'**article 30 de l'Estatut d'Autonomia de Catalunya** i a l'article 41 de la Carta dels Drets Fonamentals de la UE. Inclou:

1. Dret a ser tractat de forma imparcial i equitativa
2. Dret a una resolució en termini raonable
3. Dret a obtenir informació sobre l'estat de tramitació dels expedients
4. Dret a la motivació de les decisions
        `
      },
      {
        titol: "Cartes de serveis",
        contingut: `
Les cartes de serveis informen la ciutadania sobre els **serveis prestats**, els drets que els assisteixen i els **compromisos de qualitat** assumits per l'Administració.

**Marc normatiu:** Llei 19/2014 de transparència.

**Qui les aprova:** Resolució del **titular del departament**.

**Suspensió d'estàndards:** Per resolució motivada del titular del departament en casos excepcionals sobrevinguts.

> 📌 **Examen 871:** Les cartes de serveis van generar les preguntes P.12, P.46, P.98 i P.99.
        `
      },
      {
        titol: "Govern obert",
        contingut: `
El govern obert es basa en **tres pilars**:

| Pilar | Significat |
|-------|-----------|
| **Transparència** | Donar compte de l'activitat pública |
| **Participació** | Implicar la ciutadania en les decisions |
| **Col·laboració** | Treballar conjuntament amb la societat |

A Catalunya es materialitza a través del Portal de la Transparència, els processos participatius i les **dades obertes** (open data).
        `
      }
    ],
    claus: [
      { concepte: "Aprovació carta de serveis", valor: "Resolució del titular del departament" },
      { concepte: "Suspensió estàndards carta de serveis", valor: "Resolució motivada del titular en casos excepcionals" },
      { concepte: "Dret bona administració a Catalunya", valor: "Art. 30 EAC" },
    ],
    nota: "Les cartes de serveis han sortit a l'examen 871 (P.12, P.46, P.98, P.99). Distingeix bé qui aprova la carta (titular del departament) i en quins casos es pot suspendre un estàndard.",
    questions: []
  },

  {
    id: "C03",
    part: "comuna",
    bloc: "CB001",
    numero: 3,
    titol: "Transparència i accés a la informació pública: principis generals. Regulació. El portal de la transparència. Accés a la informació pública.",
    resum: "La transparència és un pilar fonamental de la democràcia moderna. A Catalunya es regula per la Llei 19/2014, de 29 de desembre, de transparència, accés a la informació pública i bon govern.",
    apartats: [
      {
        titol: "Llei 19/2014 de transparència",
        contingut: `
La **Llei 19/2014** és la norma bàsica de transparència a Catalunya. Estableix dos instruments principals:

**1. Publicitat activa** — les AAPP han de publicar informació *sense que ningú la demani*.

**2. Dret d'accés** — la ciutadania pot sol·licitar informació pública.

S'aplica a:
- Totes les AAPP catalanes i el sector públic
- Partits polítics, sindicats i organitzacions empresarials que **rebin finançament públic**
        `
      },
      {
        titol: "Portal de la transparència",
        contingut: `
El Portal de la transparència ha d'incloure obligatòriament:

- L'organització institucional
- El **Registre de grups d'interès** ← *P.24 examen 871*
- Les decisions i actuacions amb rellevància jurídica general
- Els contractes i convenis
- Les subvencions
- Els pressupostos i informes de fiscalització
- La informació estadística
        `
      },
      {
        titol: "Dret d'accés a la informació pública",
        contingut: `
**Qui pot demanar-ho:** Tota persona, a títol individual o en nom d'una organització.

**Cal justificar la sol·licitud?** **NO** — no cal motivar-la.

**Termini de resolució:** 1 mes, prorrogable per **1 mes més**.

**Òrgan de reclamació:** La **GAIP** (Comissió de Garantia del Dret d'Accés a la Informació Pública) — òrgan independent.

> ⚠️ Distingeix bé: **publicitat ACTIVA** (l'AAPP publica sense que ningú ho demani) vs **dret d'ACCÉS** (la persona ho sol·licita).
        `
      }
    ],
    claus: [
      { concepte: "Termini resolució accés a la informació", valor: "1 mes (prorrogable 1 mes més)" },
      { concepte: "Cal justificar la sol·licitud?", valor: "NO" },
      { concepte: "Òrgan de reclamació transparència", valor: "GAIP (Comissió de Garantia del Dret d'Accés)" },
      { concepte: "Norma de referència", valor: "Llei 19/2014, de 29 de desembre" },
    ],
    nota: "La transparència apareix en molts contextos. Distingeix bé la publicitat ACTIVA del dret d'ACCÉS — és una distinció conceptual fonamental que pot sortir en qualsevol forma a l'examen.",
    questions: []
  },

  {
    id: "C07",
    part: "comuna",
    bloc: "CB003",
    numero: 7,
    titol: "Marc constitucional. Principis. Drets i deures fonamentals. Garanties. Organització institucional. El poder judicial.",
    resum: "La Constitució espanyola de 1978 és la norma suprema de l'ordenament jurídic. Regula els drets fonamentals (Títol I), l'organització de l'Estat i el poder judicial.",
    apartats: [
      {
        titol: "LO 1/2025 — Reforma del poder judicial",
        contingut: `
La **Llei Orgànica 1/2025, de 2 de gener**, de mesures en matèria d'eficiència del servei públic de justícia, ha transformat l'organització judicial:

| Anterior | Actual (des de 2025) |
|----------|---------------------|
| Jutjats Contenciosos Administratius | **Seccions Contencioses Administratives dels Tribunals d'Instància** |

> 📌 **Examen 871, P.3** — resposta correcta: *c) Seccions contencioses administratives dels tribunals d'instància.*
        `
      },
      {
        titol: "LO 5/2024 — Dret de defensa",
        contingut: `
La **Llei Orgànica 5/2024, d'11 de novembre**, regula el **dret de defensa**.

> 📌 **Examen 871, P.18** — resposta correcta: *c) El dret de defensa.*
        `
      },
      {
        titol: "Consell de Garanties Estatutàries (CGE)",
        contingut: `
Òrgan consultiu del Parlament i del Govern en matèria de constitucionalitat i estatutarietat.

**Composició:**
- **2/3** designats a proposta del **Parlament** (per majoria de 3/5 dels diputats)
- **1/3** a proposta del **Govern**

**Mandat:** 6 anys, no renovable.

> 📌 **Examen 871, P.2** — la pregunta demanava la composició exacta.
        `
      }
    ],
    claus: [
      { concepte: "Jutjats contenciosos → convertits en", valor: "Seccions contencioses adm. dels tribunals d'instància (LO 1/2025)" },
      { concepte: "LO 5/2024 regula", valor: "El dret de defensa" },
      { concepte: "CGE: composició", valor: "2/3 proposta Parlament (majoria 3/5) + 1/3 proposta Govern" },
      { concepte: "CGE: mandat", valor: "6 anys, no renovable" },
    ],
    nota: "La LO 1/2025 i la LO 5/2024 són lleis molt recents que van sortir directament a l'examen 871. Són normativa de 2024-2025 que no pot estar als manuals antics.",
    questions: []
  },

  {
    id: "C08",
    part: "comuna",
    bloc: "CB003",
    numero: 8,
    titol: "Marc estatutari. L'Estatut d'autonomia de Catalunya: naturalesa jurídica, estructura, principis rectors, drets i deures, i competències.",
    resum: "L'Estatut d'Autonomia de Catalunya és una llei orgànica de l'Estat que constitueix la norma institucional bàsica de Catalunya.",
    apartats: [
      {
        titol: "Naturalesa jurídica i aprovació",
        contingut: `
L'Estatut d'Autonomia de Catalunya té naturalesa de **LLEI ORGÀNICA**.

- Aprovat per **LO 6/2006**, de 19 de juliol, de reforma de l'Estatut d'autonomia de Catalunya
- Requereix majoria absoluta del Congrés dels Diputats per ser aprovat o modificat

> 📌 **Examen 871 reserva, P.31** — resposta correcta: *d) Llei orgànica.*
        `
      },
      {
        titol: "Tipus de competències de la Generalitat",
        contingut: `
L'EAC distingeix tres tipus de competències:

| Tipus | Contingut |
|-------|-----------|
| **Exclusives** | La Generalitat té la potestat legislativa, reglamentària i executiva |
| **Compartides** | La Generalitat legisla en el marc dels principis bàsics estatals |
| **Executives** | La Generalitat executa la legislació estatal |

**Atenció:** L'ordenació i prestació de **serveis bàsics a la comunitat** és una competència dels **GOVERNS LOCALS**, no de la Generalitat.

> 📌 **Examen 871, P.1** — resposta correcta: *d) Dels governs locals de Catalunya.*
        `
      }
    ],
    claus: [
      { concepte: "Naturalesa jurídica EAC", valor: "Llei orgànica (LO 6/2006)" },
      { concepte: "Serveis bàsics a la comunitat", valor: "Competència dels GOVERNS LOCALS" },
      { concepte: "Competències exclusives", valor: "Potestat legislativa + reglamentària + executiva" },
    ],
    nota: "L'Estatut és la norma fonamental de Catalunya. Memoritza la seva naturalesa (llei orgànica) i els tipus de competències. La pregunta P.1 sobre serveis bàsics va ser un distractor habitual.",
    questions: []
  },

  {
    id: "C09",
    part: "comuna",
    bloc: "CB003",
    numero: 9,
    titol: "Organització institucional de Catalunya: el Parlament, el Govern i el president. El Consell de Garanties Estatutàries.",
    resum: "Les institucions d'autogovern de Catalunya estan regulades a l'Estatut d'Autonomia i les seves lleis de desenvolupament.",
    apartats: [
      {
        titol: "Parlament de Catalunya",
        contingut: `
**Òrgan representatiu** del poble de Catalunya. Funcions principals:

- Exerceix la **potestat legislativa**
- Aprova els **pressupostos** de la Generalitat
- Controla l'acció del Govern
- Elegeix el **president** de la Generalitat

**Composició:** Entre 135 i 150 diputats (actualment **135**), elegits per **4 anys**.
        `
      },
      {
        titol: "Govern de la Generalitat",
        contingut: `
Exerceix la **funció executiva** i la **potestat reglamentària**.

- Presidit pel **president de la Generalitat**, elegit pel Parlament
- Es reuneix en **Consell Executiu**
- Els consellers dirigeixen els departaments
        `
      },
      {
        titol: "Consell de Garanties Estatutàries (CGE)",
        contingut: `
Òrgan **consultiu** del Parlament i del Govern en matèria de constitucionalitat i estatutarietat.

**Composició:**

| Qui designa | Quants | Com |
|------------|--------|-----|
| Parlament | **2/3** | Majoria de **3/5** dels diputats |
| Govern | **1/3** | Proposta directa |

**Mandat:** 6 anys, **no renovable**.

> 📌 **Examen 871, P.2** — la pregunta demanava la composició exacta. El detall clau: el Parlament designa els seus membres per majoria de 3/5 (no majoria absoluta ni simple).
        `
      }
    ],
    claus: [
      { concepte: "CGE — composició", valor: "2/3 proposta Parlament (3/5 diputats) + 1/3 proposta Govern" },
      { concepte: "CGE — mandat", valor: "6 anys, no renovable" },
      { concepte: "Parlament — nombre de diputats", valor: "135-150 (actualment 135)" },
      { concepte: "Parlament — durada legislatura", valor: "4 anys" },
    ],
    nota: "El CGE ha sortit a l'examen 871 (P.2). La composició exacta és la dada a memoritzar: 2/3 Parlament per majoria de 3/5 + 1/3 Govern.",
    questions: []
  },

  {
    id: "C11",
    part: "comuna",
    bloc: "CB003",
    numero: 11,
    titol: "Sector públic instrumental de la Generalitat de Catalunya. Organismes autònoms, entitats de dret públic, consorcis, societats mercantils i fundacions.",
    resum: "El sector públic instrumental és el conjunt d'ens que la Generalitat crea per a la gestió dels serveis públics i l'exercici de les seves competències, amb formes jurídiques diverses.",
    apartats: [
      {
        titol: "Tipus d'entitats del sector públic instrumental",
        contingut: `
| Tipus | Règim jurídic | Exemples a Catalunya |
|-------|--------------|---------------------|
| **Organismes autònoms** | Dret públic | Agència Tributària de Catalunya |
| **Entitats de dret públic** | Dret privat (exceptes) | CTTI, SEM, ICS |
| **Consorcis** | Dret públic | Consorci Sanitari de Barcelona |
| **Societats mercantils** | Dret privat | Ferrocarrils de la Generalitat SA |
| **Fundacions públiques** | Dret privat | Fundació Josep Irla |
        `
      },
      {
        titol: "Consorcis — característiques clau",
        contingut: `
Els consorcis regulats a la Llei 40/2015 (i a la legislació local i duanera):

- Caràcter **ASSOCIATIU** i naturalesa **VOLUNTÀRIA**
- Són entitats de dret públic amb **personalitat jurídica pròpia**
- Tenen capacitat per crear i gestionar serveis i dur a terme activitats i obres
- **NO** es constitueixen sempre per llei: la seva creació es fa per **ACORD** entre les entitats participants

> 📌 **Examen 871, P.8** — preguntava quina opció sobre els consorcis **NO és certa**. La resposta: *a) "Sempre es constitueixen per llei"* — FALS.
        `
      },
      {
        titol: "Societats mercantils públiques",
        contingut: `
Participades en **més d'un 50%** del capital per entitats del sector públic.

- Es regeixen pel **dret privat**, excepte en matèria pressupostària, comptable, de control financer i contractació
- **No poden** tenir facultats que impliquin exercici d'**autoritat pública**
        `
      }
    ],
    claus: [
      { concepte: "Consorcis — constitució", valor: "Per ACORD (NO sempre per llei). Caràcter voluntari" },
      { concepte: "Societats mercantils públiques — capital", valor: ">50% públic" },
      { concepte: "Consorcis — personalitat jurídica", valor: "Pròpia (entitats de dret públic)" },
    ],
    nota: "La P.8 de l'examen 871 preguntava quina opció sobre els consorcis NO és certa. La resposta era que 'sempre es constitueixen per llei' — FALS. Es constitueixen per acord.",
    questions: []
  },

  {
    id: "C22",
    part: "comuna",
    bloc: "CB001",
    numero: 22,
    titol: "Avaluació de les polítiques públiques. Control de les polítiques públiques.",
    resum: "L'avaluació de les polítiques públiques és el procés sistemàtic d'anàlisi de l'eficàcia, eficiència i impacte de les intervencions públiques.",
    apartats: [
      {
        titol: "La teoria del canvi",
        contingut: `
La **teoria del canvi** de les intervencions públiques descriu una cadena d'hipòtesis:

**RECURSOS** → **ACTIVITATS** → **PRODUCTES** → **BENEFICIS** (curt/mitjà/llarg termini)

Els recursos assignats a una intervenció permeten desenvolupar activitats que produeixen determinats productes, els quals generen beneficis sobre la societat o la població objectiu.

> 📌 **Examen 871, P.9** — resposta correcta: *d) Teoria del canvi de les intervencions públiques.*
        `
      },
      {
        titol: "El cicle de les polítiques públiques",
        contingut: `
El cicle clàssic de les polítiques públiques inclou **5 fases**:

1. **Identificació** del problema
2. **Formulació** de la política
3. **Adopció** de la decisió
4. **Implementació**
5. **Avaluació**

**Tipus d'avaluació:**
- *Ex ante* — prèvia a la implementació
- *In itinere* — durant la implementació
- *Ex post* — posterior a la implementació
        `
      }
    ],
    claus: [
      { concepte: "Teoria que descriu cadena recursos→activitats→productes→beneficis", valor: "Teoria del canvi de les intervencions públiques" },
    ],
    nota: "La P.9 de l'examen 871 preguntava exactament la 'teoria del canvi'. Memoritza la definició: recursos → activitats → productes → beneficis a c/m/l termini.",
    questions: []
  },

  {
    id: "C29",
    part: "comuna",
    bloc: "CB008",
    numero: 29,
    titol: "Els pressupostos de la Generalitat de Catalunya. La Llei de finances públiques. Les lleis de pressupostos anuals. Les estructures pressupostàries. El cicle pressupostari.",
    resum: "Els pressupostos de la Generalitat es regulen per la Llei de finances públiques de Catalunya (DL 3/2002) i les lleis de pressupostos anuals.",
    apartats: [
      {
        titol: "Estructura dels capítols pressupostaris d'ingressos",
        contingut: `
| Capítol | Denominació |
|---------|-------------|
| I | Impostos directes |
| II | Impostos indirectes |
| III | Taxes i altres ingressos |
| IV | Transferències corrents |
| V | Ingressos patrimonials |
| VI | Alienació d'inversions reals |
| VII | Transferències de capital |
| **VIII** | **Variació d'actius financers** |
| **IX** | **Variació de passius financers (deute públic, préstecs)** |

> 📌 **Examen 871, P.16** — la pregunta era sobre el **Capítol IX** (passius financers = deute públic).
        `
      },
      {
        titol: "Sistema Europeu de Comptes (SEC)",
        contingut: `
El SEC és el marc estadístic europeu per a la comptabilitat nacional. Inclou:

- **Annex A** — la Metodologia (definicions, classificacions, normes comptables)
- **Annex B** — el Programa de transmissió de dades

> 📌 **Examen 871, P.6** — resposta correcta: *b) Una metodologia (Annex A) i un programa de transmissió de dades (Annex B).*
        `
      }
    ],
    claus: [
      { concepte: "Capítol IX pressupost ingressos", valor: "Variació de PASSIUS financers (deute públic, préstecs)" },
      { concepte: "Capítol VIII pressupost ingressos", valor: "Variació d'ACTIUS financers" },
      { concepte: "SEC inclou", valor: "Metodologia (Annex A) + Programa transmissió dades (Annex B)" },
    ],
    nota: "El capítol IX d'ingressos (passius financers = deute públic) és el que surt sovint. No el confondre amb el capítol VIII (actius financers).",
    questions: []
  },

];
