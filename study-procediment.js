// ═══════════════════════════════════════════════════════════════════
// PROCEDIMENT ADMINISTRATIU — Temes T.13, T.16, T.17, T.20, T.35
// ═══════════════════════════════════════════════════════════════════

const STUDY_PROCEDIMENT = [

  {
    id: "C13",
    part: "comuna",
    bloc: "CB004",
    numero: 13,
    titol: "El concepte d'Administració pública. El principi de legalitat. Les potestats administratives. Drets i deures de les persones. Els òrgans col·legiats.",
    resum: "Els òrgans col·legiats de les AAPP catalanes estan regulats per la Llei 26/2010 de règim jurídic de les AAPP de Catalunya.",
    apartats: [
      {
        titol: "Òrgans col·legiats — quòrum de constitució",
        contingut: `
D'acord amb l'**article 17 de la Llei 26/2010**, els òrgans col·legiats queden vàlidament constituïts:

| Convocatòria | Quòrum necessari |
|-------------|-----------------|
| **1a convocatòria** | Majoria **absoluta** dels membres |
| **2a convocatòria** | **1/3** dels membres, amb un mínim de **3** |

*Aplicable quan les normes pròpies de l'òrgan no preveuen res específic.*

> 📌 **Examen 871, P.27** — la pregunta era sobre la 2a convocatòria: 1/3 dels membres, mínim 3.
        `
      },
      {
        titol: "La competència administrativa",
        contingut: `
D'acord amb l'**article 8 de la Llei 40/2015**, la competència administrativa és:

- **IRRENUNCIABLE** ← la paraula clau
- L'han d'exercir els òrgans que la tinguin atribuïda com a pròpia
- Excepció: casos de **delegació** o **avocació** si s'efectuen en els termes previstos per la llei

> 📌 **Examen 871, P.10** — resposta correcta: *c) irrenunciable.*
> Les opcions incorrectes eren: intransferible, ineludible, irrevocable — tots semblants però incorrectes.
        `
      }
    ],
    claus: [
      { concepte: "Òrgan col·legiat 1a convocatòria", valor: "Majoria ABSOLUTA dels membres" },
      { concepte: "Òrgan col·legiat 2a convocatòria", valor: "1/3 dels membres, mínim 3 (Llei 26/2010 art.17)" },
      { concepte: "La competència és", valor: "IRRENUNCIABLE (Llei 40/2015 art.8)" },
    ],
    nota: "L'examen 871 va preguntar la 2a convocatòria (P.27) i el caràcter de la competència (P.10). El distractor clàssic per a la competència és confondre irrenunciable amb irrevocable o intransferible.",
    questions: []
  },

  {
    id: "C16",
    part: "comuna",
    bloc: "CB004",
    numero: 16,
    titol: "L'acte administratiu: concepte i classes. Elements. Motivació i forma. Silenci administratiu. Eficàcia. Executivitat. Notificació i publicació. Invalidesa. Convalidació.",
    resum: "L'acte administratiu és la declaració unilateral de voluntat de l'Administració que produeix efectes jurídics sobre tercers. La seva invalidesa pot ser nul·litat de ple dret o anul·labilitat.",
    apartats: [
      {
        titol: "Nul·litat de ple dret vs. Anul·labilitat",
        contingut: `
**Diferència fonamental:**

| | Nul·litat de ple dret | Anul·labilitat |
|-|----------------------|----------------|
| **Efectes** | L'acte no produeix efectes des del principi | L'acte és vàlid fins que s'anul·la |
| **Qui pot invocar-la** | Qualsevol (d'ofici o a instància de part) | Només la persona interessada en termini |
| **Prescripció** | No prescriu (revisió d'ofici sense termini) | Prescriu si no s'impugna en termini |

**Supòsits de nul·litat de ple dret (art. 47.1 Llei 39/2015):**

1. Lesionen drets i llibertats susceptibles d'empara constitucional
2. Dictats per òrgan **manifestament incompetent** per raó de la matèria o el territori
3. Contingut **impossible**
4. Constitutius d'**infracció penal** o dictats com a conseqüència d'aquesta
5. Prescindir **totalment i absolutament** del procediment legalment establert
6. **Actes expressos** pels quals s'adquireixen facultats o drets mancats dels requisits essencials ← *P.22 examen 871*
7. Els que la llei taxativament declari nuls

> 📌 **Examen 871, P.22** — resposta correcta: *d) Acte exprés pel qual s'atorga un dret subjectiu sense complir els requisits essencials.*
        `
      },
      {
        titol: "Termini de notificació dels actes",
        contingut: `
D'acord amb la **Llei 39/2015**, les notificacions s'han de practicar en el termini màxim de:

**10 dies HÀBILS** des de la data en què s'ha dictat l'acte.

**Important:** L'incompliment d'aquest termini **NO determina per si sol la nul·litat** de l'acte.

> 📌 **Examen 871, P.13** — PREGUNTA ANUL·LADA. La resposta prevista era *a) Les notificacions s'han de practicar en el termini màxim de 10 dies hàbils des de la data en què s'ha dictat l'acte.*
        `
      }
    ],
    claus: [
      { concepte: "Termini notificació actes", valor: "10 dies HÀBILS des de la data de l'acte" },
      { concepte: "Nul·litat — acte exprés amb dret sense requisits", valor: "Nul de ple dret (art. 47.1.f Llei 39/2015)" },
      { concepte: "Incompliment termini notificació", valor: "NO determina per si sol la nul·litat" },
    ],
    nota: "La distinció entre NULS (de ple dret, art. 47) i ANUL·LABLES (art. 48) és fonamental. Els 7 supòsits de l'art. 47.1 s'han de memoritzar. L'examen 871 P.22 anava directament al supòsit 6.",
    questions: []
  },

  {
    id: "C17",
    part: "comuna",
    bloc: "CB004",
    numero: 17,
    titol: "Les persones interessades en el procediment. El procediment administratiu comú. El procediment administratiu derivat de l'organització pròpia de la Generalitat.",
    resum: "El procediment administratiu comú es regula per la Llei 39/2015, i el procediment específic de la Generalitat per la Llei 26/2010.",
    apartats: [
      {
        titol: "Principis del procediment administratiu",
        contingut: `
Principis rellevants per a l'examen:

**Principi d'economia procedimental** — les qüestions incidentals plantejades durant la tramitació del procediment **NO suspenen**, amb caràcter general, el procediment principal.
> 📌 **Examen 871, P.14** — resposta correcta: *c) principi d'economia procedimental.*

**Principi non bis in idem** — si hi ha un **procés penal** en curs pels mateixos fets que un procediment sancionador, cal la **SUSPENSIÓ** del procediment sancionador (prioritat de l'ordre penal).
> 📌 **Examen 871, P.4** — resposta correcta: *a) suspensió del procediment sancionador.*
        `
      },
      {
        titol: "Apoderaments i representació",
        contingut: `
**Registre Electrònic d'Apoderaments:**
- Validesa dels apoderaments inscrits: **4 ANYS** des de la data d'inscripció
> 📌 **Examen 871, P.97**

**Incorporació de l'acreditació del representant:**
- L'incorpora a l'expedient l'**òrgan competent per tramitar** (art. 5.5 Llei 39/2015)
> 📌 **Examen 871 reserva, P.108**
        `
      }
    ],
    claus: [
      { concepte: "Principi que permet no suspendre per incidents", valor: "Principi d'economia procedimental" },
      { concepte: "Procés penal + sancionador paral·lels", valor: "Cal SUSPENDRE el sancionador (prioritat penal)" },
      { concepte: "Validesa apoderaments inscrits", valor: "4 anys des de la inscripció" },
      { concepte: "Qui incorpora acreditació representant", valor: "L'òrgan competent per tramitar (art. 5.5 Llei 39/2015)" },
    ],
    nota: "La Llei 39/2015 i la Llei 26/2010 son les normes bàsiques del procediment. Les preguntes de l'examen 871 sobre procediment han estat més concretes del que s'esperava.",
    questions: []
  },

  {
    id: "C20",
    part: "comuna",
    bloc: "CB004",
    numero: 20,
    titol: "La revisió dels actes en via administrativa: la revisió d'ofici. La revocació. Els recursos administratius: objecte i classes.",
    resum: "La revisió d'ofici permet a l'Administració revisar els seus propis actes sense que hi hagi recurs. Els recursos administratius permeten la impugnació dels actes en via administrativa.",
    apartats: [
      {
        titol: "Revisió d'ofici d'actes nuls",
        contingut: `
**Qui pot iniciar-la:** D'ofici **O** a sol·licitud d'una persona interessada.

**Requisit PREVI obligatori:** El dictamen **FAVORABLE** de l'òrgan consultiu corresponent.
- A la Generalitat de Catalunya: la **Comissió Jurídica Assessora (CJA)**

**Distingeix bé:**

| Situació | Mecanisme |
|----------|-----------|
| Acte **NUL** de ple dret | Revisió d'ofici (requereix dictamen favorable CJA) |
| Acte **ANUL·LABLE** | Declaració de lesivitat + recurs contenciós administratiu |

> 📌 **Examen 871, P.15** — resposta correcta: *a) Pot iniciar-se d'ofici o a sol·licitud d'interessat i requereix dictamen favorable de l'òrgan consultiu.*
        `
      },
      {
        titol: "Recursos administratius",
        contingut: `
**Tipus de recursos:**

| Recurs | Contra qui | Termini interposició |
|--------|-----------|---------------------|
| **Alçada** | Actes que no posen fi a la via adm. | 1 mes (actes expressos) |
| **Reposició** | Actes que posen fi a la via adm. | 1 mes (actes expressos) |
| **Extraordinari de revisió** | Actes ferms en via adm. (motius taxats) | Terminis especials |
        `
      }
    ],
    claus: [
      { concepte: "Revisió d'ofici — qui pot iniciar", valor: "D'ofici O a sol·licitud d'interessat" },
      { concepte: "Requisit previ revisió d'ofici (nuls)", valor: "Dictamen FAVORABLE de la CJA" },
      { concepte: "Acte ANUL·LABLE — mecanisme de revisió", valor: "Declaració de lesivitat + recurs contenciós" },
    ],
    nota: "Distingeix bé: revisió d'ofici per a actes NUL·LS (necessita dictamen CJA), vs. declaració de lesivitat per a actes ANUL·LABLES. P.15 examen 871.",
    questions: []
  },

  {
    id: "C35",
    part: "comuna",
    bloc: "CB004",
    numero: 35,
    titol: "Delictes contra l'Administració pública: prevaricació, abandó de destinació, desobediència, infidelitat en custòdia de documents, suborn, tràfic d'influències, malversació, fraus, negociacions prohibides, falsedat.",
    resum: "Els delictes contra l'Administració pública estan regulats al Codi Penal (Títol XIX). Afecten funcionaris públics i autoritats.",
    apartats: [
      {
        titol: "Delicte de prevaricació (art. 404 CP)",
        contingut: `
**Conducta típica:** Dictar una resolució injusta sabent-ho (dol directe).

**Pena:** Inhabilitació especial per a:
- **Ocupació o càrrec públic**, I
- **Exercici del dret de sufragi passiu**

**Durada:** De **9 a 15 anys**

> 📌 **Examen 871, P.26** — la clau de la pregunta era que la pena inclou també la inhabilitació per al dret de **SUFRAGI PASSIU**, no només per a l'ocupació/càrrec. Resposta correcta: *b)*
        `
      },
      {
        titol: "Altres delictes rellevants",
        contingut: `
| Delicte | Essència |
|---------|---------|
| **Abandó de destinació** | Funcionari que abandona el càrrec sense causa justificada |
| **Desobediència** | Negativa a complir ordres de superiors jeràrquics |
| **Malversació** | Apropiació o desviació de cabals públics |
| **Suborn** | Sol·licitar o rebre dàdives per actuar en l'exercici del càrrec |
| **Tràfic d'influències** | Influir en un funcionari o autoritat per obtenir una resolució favorable |
| **Falsedat documental** | Falsificar documents públics o privats |
        `
      }
    ],
    claus: [
      { concepte: "Prevaricació — pena", valor: "Inhabilitació especial per ocupació/càrrec públic + sufragi passiu: 9-15 anys" },
      { concepte: "Prevaricació — conducta", valor: "Dictar resolució injusta SABENT-HO (dol directe)" },
    ],
    nota: "La clau de la P.26 de l'examen 871 era que la pena de prevaricació inclou la inhabilitació per al dret de SUFRAGI PASSIU, no només per a l'ocupació/càrrec. És el detall que distingeix les opcions correctes de les incorrectes.",
    questions: []
  },

];
