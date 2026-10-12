// ═══════════════════════════════════════════════════════════════════
// PART ESPECÍFICA GENERAL — Temes T.1 a T.10 (opció general)
// ═══════════════════════════════════════════════════════════════════

const STUDY_PE_GENERAL = [

  {
    id: "E01",
    part: "especifica",
    bloc: "EB001",
    numero: 1,
    titol: "Democràcia participativa: instruments. Planificació, execució i avaluació dels processos de participació.",
    resum: "La participació ciutadana és un dret reconegut a l'EAC i es concreta en diverses formes de democràcia directa i semidirecta regulades per la Llei 10/2014.",
    apartats: [
      {
        titol: "Llei 10/2014 — Instruments de participació ciutadana",
        contingut: `
La **Llei 10/2014, de 26 de setembre**, de consultes populars no referendàries i d'altres formes de participació ciutadana, regula:

**Processos de participació per INICIATIVA CIUTADANA:**
- La convocatòria és **preceptiva** (obligatòria) si té el suport de:
- **Mínim 20.000 persones** majors de **16 anys** que puguin participar en el procés

> 📌 **Examen 871, P.34** — resposta correcta: *c) Un mínim de 20.000 persones majors de 16 anys.*
> ⚠️ Distractors: 50.000 persones, o majors de 18 anys — tots incorrectes.

**Resultat de consultes populars locals:**
El resultat d'una consulta popular no referendària convocada per un ajuntament és **NO VINCULANT**.
> 📌 **Examen 871, P.100** — resposta correcta: *c) No vinculant.*
        `
      },
      {
        titol: "Processos participatius i normativa",
        contingut: `
**Quan es pot exercir el dret a participar en un procés participatiu relatiu a una iniciativa normativa?**

Per la **importància o la matèria** que regulen les iniciatives normatives pertinents.

> 📌 **Examen 871, P.101** — resposta correcta: *b) Per la importància o la matèria que regulen.*

**On es pot consultar la consulta pública prèvia a un projecte de decret?**

Al portal **processosparticipatius.cat**

> 📌 **Examen 871, P.102** — resposta correcta: *d) Al portal processosparticipatius.cat.*
        `
      }
    ],
    claus: [
      { concepte: "Iniciativa ciutadana — suport mínim", valor: "20.000 persones majors de 16 anys (Llei 10/2014 art.44.1)" },
      { concepte: "Resultat consultes locals no referendàries", valor: "No vinculant" },
      { concepte: "Consulta pública prèvia — on consultar", valor: "processosparticipatius.cat" },
    ],
    nota: "La Llei 10/2014 va tenir 4 preguntes a l'examen 871 (P.34, P.100, P.101, P.102). Cal conèixer bé les diferències entre vinculant/no vinculant i preceptiu/no preceptiu.",
    questions: []
  },

  {
    id: "E03",
    part: "especifica",
    bloc: "EB001",
    numero: 3,
    titol: "El Pla de Govern com a eina de planificació. Plans departamentals i plans sectorials.",
    resum: "El Pla de Govern és el principal instrument de planificació estratègica del Govern de la Generalitat, que recull les prioritats i compromisos per a la legislatura.",
    apartats: [
      {
        titol: "Pla de Govern XV legislatura",
        contingut: `
El Pla de Govern de la **XV legislatura** estableix prioritats amb indicadors de seguiment.

**Prioritat 1:** *"Prosperitat compartida basada en el coneixement, per millorar la qualitat de vida i l'accés a l'habitatge"*

Indicadors de la Prioritat 1 inclouen:
- Preus dels graus i màsters universitaris habilitants
- Nombre d'habitatges de lloguer protegit disponibles
- Nombre de places públiques d'escola bressol (0-3 anys)

⚠️ **No** és indicador de la Prioritat 1: el percentatge del pes de la indústria en el valor afegit brut de Catalunya (correspon a una altra prioritat).

> 📌 **Examen 871, P.35** — PREGUNTA ANUL·LADA. Caldria confirmar els indicadors exactes del Pla de Govern vigent.
        `
      }
    ],
    claus: [
      { concepte: "Pla de Govern — prioritat 1 (XV legislatura)", valor: "Prosperitat compartida, qualitat de vida i accés a l'habitatge" },
    ],
    nota: "La pregunta sobre el Pla de Govern (P.35) va ser ANUL·LADA a l'examen 871. De totes maneres, cal conèixer les prioritats del Pla de Govern actual per possibles convocatòries futures.",
    questions: []
  },

  {
    id: "E04",
    part: "especifica",
    bloc: "EB001",
    numero: 4,
    titol: "Pressupostos orientats a resultats. Programes pressupostaris: missió, objectius, indicadors. Contractes programa.",
    resum: "El pressupost per programes estructura la despesa pública en programes amb missió, objectius i indicadors de seguiment vinculats a resultats.",
    apartats: [
      {
        titol: "Tipus d'indicadors de seguiment",
        contingut: `
En el marc del pressupost per programes, els indicadors s'organitzen en quatre tipus:

| Tipus | Mesura | Exemple |
|-------|--------|---------|
| **INPUT** | Recursos utilitzats | Pressupost executat, hores de personal |
| **OUTPUT** | Productes o serveis generats, nombre de clients servits | Nombre d'expedients resolts, alumnes formats |
| **RESULTAT** | Canvis en la situació dels destinataris | % de persones que troben feina, reducció de la sinistralitat |
| **EFICIÈNCIA** | Relació entre inputs i outputs | Cost per expedient resolt |

> 📌 **Examen 871, P.36** — pregunta: quins indicadors mesuren la **quantitat de productes o serveis públics produïts** o el **nombre de clients servits**?
> Resposta correcta: *b) Indicadors d'OUTPUT.*
        `
      },
      {
        titol: "Contracte programa",
        contingut: `
El **contracte programa** és una fórmula de **finançament vinculada a resultats**.

S'usa per finançar:
- Entitats del sector públic de la Generalitat
- **Universitats públiques** que han d'assolir objectius específics

**No és** una subvenció ordinària — és un instrument de finançament condicionat al compliment d'objectius pactats.

> 📌 **Examen 871, P.78** — el Dep. de Recerca vol fer una aportació vinculada a resultats a una universitat pública → instrument: **contracte programa**.
        `
      }
    ],
    claus: [
      { concepte: "Indicadors que mesuren quantitat productes/serveis", valor: "Indicadors d'OUTPUT" },
      { concepte: "Indicadors que mesuren recursos utilitzats", valor: "Indicadors d'INPUT" },
      { concepte: "Finançament vinculat a resultats per a universitats", valor: "Contracte programa" },
    ],
    nota: "Els indicadors output/input/resultats/eficiència surten molt a examen. Memoritza: OUTPUT = productes generats (resultat directe de l'activitat). RESULTAT = canvi en la realitat social.",
    questions: []
  },

  {
    id: "E05",
    part: "especifica",
    bloc: "EB001",
    numero: 5,
    titol: "L'Agenda 2030: transformar Catalunya, millorar el món. Anàlisi dels ODS en el context català.",
    resum: "L'Agenda 2030 de les Nacions Unides estableix 17 Objectius de Desenvolupament Sostenible (ODS). A Catalunya es vehicula a través del Pla d'Acció per a l'Agenda 2030.",
    apartats: [
      {
        titol: "Instrument de la Generalitat per als ODS",
        contingut: `
L'instrument que té com a objectiu principal assegurar l'assoliment dels **17 ODS** mitjançant les polítiques de la Generalitat és:

**El Pla d'Acció Auto+ per a l'Agenda 2030**

⚠️ **No** és: el "Pla nacional per a l'Agenda 2030" (no existeix), l'Estratègia Catalana d'Adaptació al Canvi Climàtic, ni l'Estratègia mediterrània MedCat 2030.

> 📌 **Examen 871 reserva, P.64** — resposta correcta: *c) El Pla d'Acció Auto+ per a l'Agenda 2030.*
        `
      },
      {
        titol: "ODS rellevants per a l'examen",
        contingut: `
| ODS | Nom | Contingut rellevant |
|-----|-----|---------------------|
| **ODS 1** | Fi de la pobresa | Erradicació de la pobresa en totes les formes |
| **ODS 5** | Igualtat de gènere | Igualtat de drets i oportunitats per a dones i nenes |
| **ODS 8** | Treball decent i creixement econòmic | Feina productiva i en condicions de dignitat |
| **ODS 10** | Reducció de les desigualtats | **Polítiques fiscals, salarials i de protecció social** per reduir la desigualtat |
| **ODS 17** | Aliances per als objectius | Cooperació global per implementar l'Agenda 2030 |

> 📌 **Examen 871, P.89** — pregunta sobre quin ODS inclou polítiques fiscals, salarials i de protecció social per reduir la desigualtat → **ODS 10**.
        `
      }
    ],
    claus: [
      { concepte: "Instrument Generalitat per als ODS", valor: "Pla d'Acció Auto+ per a l'Agenda 2030" },
      { concepte: "ODS sobre reducció desigualtats i polítiques fiscals", valor: "ODS 10" },
      { concepte: "ODS sobre treball decent", valor: "ODS 8" },
      { concepte: "ODS sobre pobresa", valor: "ODS 1" },
    ],
    nota: "L'examen 871 va preguntar l'ODS 10 (P.89) i el Pla d'Acció Auto+ (P.64). No confondre ODS 10 (desigualtats) amb ODS 1 (pobresa) ni ODS 8 (treball digne).",
    questions: []
  },

  {
    id: "E06",
    part: "especifica",
    bloc: "EB001",
    numero: 6,
    titol: "Regulació de l'avaluació econòmica de les polítiques públiques a Catalunya. La taxa de descompte social. La monetització. L'informe d'impacte econòmic i social.",
    resum: "L'avaluació econòmica de les polítiques públiques a Catalunya es regula per normativa específica que estableix la taxa de descompte social i la metodologia de l'informe d'impacte econòmic i social.",
    apartats: [
      {
        titol: "Taxa de descompte social (TDS)",
        contingut: `
La **Guia d'avaluació econòmica de polítiques públiques** de la Generalitat de Catalunya, elaborada pel Departament d'Economia i Hisenda, recomana aplicar una TDS del:

**3%**

> 📌 **Examen 871, P.79** — resposta correcta: *a) 3%.*

**Atenció:** No confondre amb altres taxes de descompte que s'usen en el sector privat (que solen ser superiors).
        `
      },
      {
        titol: "Informe d'impacte econòmic i social",
        contingut: `
L'informe d'impacte econòmic i social que ha d'acompanyar els projectes de disposicions reglamentàries avalua:

Els **costos i beneficis** per als destinataris **I** per a la **realitat social i econòmica** en conjunt.

**No** avalua exclusivament els costos/beneficis per als destinataris directes.

> 📌 **Examen 871, P.37** — resposta correcta: *c) Costos i beneficis per als destinataris i per a la realitat social i econòmica.*
        `
      }
    ],
    claus: [
      { concepte: "Taxa de descompte social (TDS) a Catalunya", valor: "3% (Guia avaluació econòmica)" },
      { concepte: "L'informe d'impacte econòmic i social avalua", valor: "Costos i beneficis per als destinataris I per a la realitat social i econòmica" },
    ],
    nota: "La TDS del 3% va sortir directament a l'examen 871 (P.79). És una xifra molt concreta i específica de Catalunya — no la de la UE ni la del sector privat.",
    questions: []
  },

  {
    id: "E08",
    part: "especifica",
    bloc: "EB001",
    numero: 8,
    titol: "Qualitat dels serveis públics. Sistemes de gestió de la qualitat. Les normes ISO. El model EFQM. El model CAF.",
    resum: "Els models de qualitat a les administracions públiques permeten avaluar i millorar el funcionament organitzatiu i els serveis prestats.",
    apartats: [
      {
        titol: "El model CAF (Common Assessment Framework)",
        contingut: `
El **CAF** és una eina de gestió de la qualitat dissenyada específicament per a les:

**Administracions Públiques de la Unió Europea**

**Característiques:**
- **No** és obligatori per la normativa catalana
- **No** és equivalent a una norma ISO
- **No** mesura exclusivament resultats econòmics
- És **gratuït** i d'accés obert per a les AAPP

> 📌 **Examen 871, P.45** — resposta correcta: *b)* (el CAF és per a les AAPP de la UE).
        `
      },
      {
        titol: "La infraestructura ètica",
        contingut: `
La **infraestructura ètica** és el conjunt d'eines que poden utilitzar les administracions per definir i garantir determinats estàndards ètics.

Inclou **dos tipus d'elements**:

| Tipus | Funció |
|-------|--------|
| **Elements de foment** | Promoure comportaments ètics (codis de conducta, formació) |
| **Elements d'avaluació i control** | Verificar el compliment (auditories, mecanismes de denúncia) |

> 📌 **Examen 871, P.44** — resposta correcta: *c) La infraestructura ètica com a conjunt d'eines amb elements de foment i d'avaluació i control.*
        `
      }
    ],
    claus: [
      { concepte: "Model CAF — per a qui", valor: "Administracions públiques de la UE (no és obligatori, no és ISO)" },
      { concepte: "Infraestructura ètica — elements", valor: "De foment + d'avaluació i control" },
    ],
    nota: "El CAF va sortir a l'examen 871 (P.45). La clau: el CAF és per a les AAPP de la UE, no és obligatori i no és equivalent a la ISO. La infraestructura ètica va sortir a P.44.",
    questions: []
  },

  {
    id: "E10",
    part: "especifica",
    bloc: "EB001",
    numero: 10,
    titol: "La direcció en l'organització. Tipus de direcció. La direcció per objectius. Els quadres de comandament.",
    resum: "Els quadres de comandament (Balanced Scorecard) son eines de gestió estratègica que permeten alinear les activitats quotidianes amb els objectius estratègics de l'organització.",
    apartats: [
      {
        titol: "El quadre de comandament — jerarquia d'elements",
        contingut: `
La jerarquia d'elements en un quadre de comandament:

1. **Línies estratègiques** — el nivell superior, les grans direccions de l'organització
2. **Objectius estratègics** — concreció de les línies estratègiques
3. **Objectius operatius** — traducció dels estratègics en termes operacionals
4. **Actuacions** — descripció del que s'ha de fer per assolir els objectius operatius
5. **Indicadors** — mesuren el grau d'assoliment

> 📌 **Examen 871, P.38** — les ACTUACIONS fan referència a la descripció del que s'ha de fer per assolir els **OBJECTIUS OPERATIUS**.
> Resposta correcta: *a) Per assolir els objectius operatius.*
        `
      }
    ],
    claus: [
      { concepte: "Actuacions al quadre de comandament", valor: "Descripció del que s'ha de fer per assolir els OBJECTIUS OPERATIUS" },
      { concepte: "Jerarquia QC", valor: "Línies estratègiques → Obj. estratègics → Obj. operatius → Actuacions → Indicadors" },
    ],
    nota: "Distingeix bé la jerarquia del quadre de comandament. L'examen 871 (P.38) va preguntar específicament a quin nivell corresponen les actuacions: als objectius OPERATIUS (no estratègics).",
    questions: []
  },

];
