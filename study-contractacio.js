// ═══════════════════════════════════════════════════════════════════
// CONTRACTACIÓ PÚBLICA — Temes T.24 (part comuna) + T.23-30 (part específica)
// ═══════════════════════════════════════════════════════════════════

const STUDY_CONTRACTACIO = [

  {
    id: "C24",
    part: "comuna",
    bloc: "EB006",
    numero: 24,
    titol: "La contractació pública. La classificació dels contractes. Les formes d'adjudicació. Drets i obligacions. La contractació electrònica.",
    resum: "La Llei 9/2017, de 8 de novembre, de contractes del sector públic (LCSP) regula la contractació pública a Espanya. Els llindars SARA han canviat des de l'1 de gener de 2026.",
    apartats: [
      {
        titol: "Llindars SARA vigents des de l'1/1/2026",
        contingut: `
⚠️ **ACTUALITZACIÓ IMPORTANT:** L'**Ordre HAC/1517/2025** (BOE 26/12/2025) ha modificat els llindars aplicant els Reglaments Delegats UE 2025/2151, 2025/2152 i 2025/2150. En vigor des de l'**1 de gener de 2026**.

| Tipus de contracte | Ens contractant | Fins 31/12/2025 | **Des 01/01/2026** |
|-------------------|----------------|----------------|-------------------|
| Obres, concessió d'obres i serveis | Tots els PA | 5.538.000 € | **5.404.000 €** |
| Subministrament i serveis | AGE i OO.AA. | 143.000 € | **140.000 €** |
| Subministrament i serveis | Generalitat i resta | 221.000 € | **216.000 €** |
| Serveis especials Annex IV | Tots | 750.000 € | **750.000 €** (sense canvis) |

**Llindars que NO han canviat:**

| Concepte | Import |
|---------|--------|
| Contracte menor d'obres | ≤ 40.000 € |
| Contracte menor de serveis/subm. | ≤ 15.000 € |
| Recurs especial obres/concessions | > 3.000.000 € |
| Recurs especial serveis/subm. | > 100.000 € |

> 📌 **Examen 871, P.20** — va preguntar el llindar d'obres. La resposta correcta era 5.538.000 € (els llindars pre-2026, ja que l'examen es va preparar amb la normativa anterior). Per a la **propera convocatòria**: **5.404.000 €**.
        `
      },
      {
        titol: "Publicitat dels contractes per internet",
        contingut: `
Els òrgans de contractació han de donar publicitat per internet de:

**TOTA LA DOCUMENTACIÓ** necessària per licitar

No només els anuncis de licitació, ni només els plecs — **tota la documentació**.

> 📌 **Examen 871, P.58** — resposta correcta: *d) De tota la documentació necessària per licitar.*
        `
      },
      {
        titol: "Contractes subvencionats",
        contingut: `
Els contractes d'obres i de serveis subvencionats per poders adjudicadors estan subjectes a regulació harmonitzada (SARA) quan:

- Subvencionats de forma **DIRECTA**
- En **MÉS D'UN 50%** del seu import

> 📌 **Examen 871, P.57** — resposta correcta: *b) Quan siguin subvencionats directament en més del 50%.*
        `
      }
    ],
    claus: [
      { concepte: "Llindar SARA obres/concessions (des 1/1/2026)", valor: "5.404.000 €" },
      { concepte: "Llindar SARA serveis Generalitat (des 1/1/2026)", valor: "216.000 €" },
      { concepte: "Llindar SARA serveis AGE (des 1/1/2026)", valor: "140.000 €" },
      { concepte: "Llindar SARA serveis especials Annex IV", valor: "750.000 € (sense canvis)" },
      { concepte: "Contractes menors obres", valor: "≤ 40.000 €" },
      { concepte: "Contractes menors serveis/subm.", valor: "≤ 15.000 €" },
      { concepte: "Publicitat per internet", valor: "TOTA la documentació necessària per licitar" },
    ],
    nota: "Els llindars SARA han canviat l'01/01/2026. L'examen 871 va usar els llindars antics. Per a la propera convocatòria, memoritza els nous: 5.404.000 € per a obres.",
    questions: []
  },

  {
    id: "E23",
    part: "especifica",
    bloc: "EB006",
    numero: 23,
    titol: "Objecte i àmbit d'aplicació de la LCSP. Àmbit subjectiu. Negocis i contractes exclosos.",
    resum: "La Llei 9/2017, de 8 de novembre, de contractes del sector públic (LCSP) estableix el marc jurídic de la contractació pública a Espanya. L'àmbit subjectiu determina qui està sotmès a la llei.",
    apartats: [
      {
        titol: "El triple àmbit subjectiu de la LCSP",
        contingut: `
La LCSP distingeix tres categories d'entitats amb diferent grau de subjecció:

| Categoria | Sigles | Subjecció a la LCSP | Exemples |
|-----------|--------|--------------------|---------| 
| Poders Adjudicadors = Administracions Públiques | **PAAP** | **ÍNTEGRA** (totes les normes) | Generalitat, ajuntaments, universitats públiques |
| Poders Adjudicadors NO Administracions Públiques | **PAnoAP** | **PARCIAL** (alta en harmonitzats, baixa en la resta) | CTTI, SEM, Servei Meteorològic |
| Altres ens del sector públic | — | **RESIDUAL** (principis + publicació normes per internet) | Societats mercantils amb <50% capital públic |

**Clau per identificar PAnoAP (art. 3.3.d LCSP):**
L'entitat satisfà necessitats d'interès general, NO té caràcter mercantil/industrial, I algun Poder Adjudicador:
- Finança majoritàriament la seva activitat, **O**
- Controla la seva gestió, **O**
- Nomeni >meitat dels membres del seu òrgan directiu
        `
      },
      {
        titol: "Identificació dels contractes — CPV",
        contingut: `
Els contractes s'identifiquen per l'aplicació del:

**Vocabulari Comú de Contractes Públics (CPV)**

Aprovat pel **Reglament (CE) 213/2008** de la Comissió Europea.

> 📌 **Examen 871, P.56** — resposta correcta: *d) El CPV (Vocabulari Comú de Contractes Públics).*
        `
      },
      {
        titol: "Convenis entre PA — exclusió de la LCSP",
        contingut: `
Els convenis entre poders adjudicadors queden exclosos de la LCSP si es compleixen **3 condicions acumulatives**:

1. Les entitats **no** han de tenir vocació de mercat
   - Es *presumeix* que SÍ la tenen quan fan al mercat obert **≥ 20%** de les activitats objecte de col·laboració

2. El conveni estableix cooperació per garantir que els **serveis públics** que els incumbeixen s'aconsegueixin els objectius comuns

3. La cooperació es guia únicament per consideracions de l'**interès públic**

> ⚠️ El **20%** és el llindar clau — si les entitats fan >20% al mercat obert, es presumeix vocació de mercat i el conveni NO queda exclòs.
        `
      }
    ],
    claus: [
      { concepte: "PAAP — subjecció a la LCSP", valor: "ÍNTEGRA" },
      { concepte: "PAnoAP — subjecció a la LCSP", valor: "PARCIAL (alta en harmonitzats, baixa en la resta)" },
      { concepte: "Altres ens sector públic — subjecció", valor: "RESIDUAL (principis + publicació normes internet)" },
      { concepte: "Sistema identificació contractes", valor: "CPV (Vocabulari Comú Contractes Públics — Regl. CE 213/2008)" },
      { concepte: "Llindar vocació de mercat (convenis entre PA)", valor: "≥ 20% activitats al mercat obert" },
    ],
    nota: "La distinció PAAP/PAnoAP/Altres ens és fonamental i surt a moltes preguntes pràctiques (CTTI, SEM, Servei Meteorològic...). Cal saber classificar ràpidament qualsevol entitat de la Generalitat.",
    questions: []
  },

  {
    id: "E28",
    part: "especifica",
    bloc: "EB006",
    numero: 28,
    titol: "Els procediments d'adjudicació dels contractes. La invalidesa dels contractes. El recurs especial. La selecció del contractista i l'adjudicació.",
    resum: "La LCSP regula els procediments per adjudicar els contractes públics, garantint la competència i la transparència. El recurs especial en matèria de contractació és el mecanisme de control específic.",
    apartats: [
      {
        titol: "Modificació del contracte — dictamen previ de la CJA",
        contingut: `
Cal el dictamen **PREVI** de la **Comissió Jurídica Assessora (CJA)** per modificar un contracte quan es compleixen les 3 condicions **acumulatives**:

1. La modificació **NO** estava prevista al PCAP (plec de clàusules administratives particulars)
2. La quantia de la modificació és **superior al 20%** del preu inicial (IVA exclòs)
3. El preu del contracte és **≥ 6.000.000 €** (IVA exclòs)

**Si falta qualsevol de les 3 condicions → no cal el dictamen de la CJA.**

> 📌 **Examen 871, P.62** — resposta correcta: *d) No cal si l'import de la modificació és inferior al 20% o si el preu del contracte és inferior a 6M€.*
> 📌 **Examen 871, P.72 (pràctica)** — contracte de 13,1M€ + modificació de 4M€ (>20% i >6M€) → **SÍ cal dictamen CJA**.
        `
      },
      {
        titol: "Modificació de contractes — règim del PAnoAP",
        contingut: `
La modificació d'un contracte celebrat per un **PAnoAP** (poder adjudicador que NO és administració pública) es regeix per:

- **Normes de DRET PRIVAT** (per als efectes, compliment i extinció)
- **LCSP (Llei 9/2017)** → pel que fa als **SUPÒSITS DE MODIFICACIÓ** del contracte

> 📌 **Examen 871, P.61** — resposta correcta: *c) Normes de dret privat però amb aplicació de la LCSP pels supòsits de modificació.*
        `
      },
      {
        titol: "Tramitació d'emergència",
        contingut: `
S'usa quan hi ha situació que comprometi greument **serveis essencials** o bé urgència inajornable.

El procediment d'emergència permet:
- Prescindir dels tràmits ordinaris
- Actuació immediata
- Formalitzar el contracte posteriorment

> 📌 **Examen 871, P.71** — atenció urgent a menors estrangers → procediment d'**EMERGÈNCIA**.
        `
      }
    ],
    claus: [
      { concepte: "Dictamen CJA — 3 condicions", valor: "Modificació NO prevista al PCAP + >20% preu inicial + preu contracte ≥6M€" },
      { concepte: "Modificació PAnoAP — règim", valor: "Dret privat + LCSP pels supòsits de modificació" },
      { concepte: "Urgència extrema serveis essencials", valor: "Tramitació d'EMERGÈNCIA" },
    ],
    nota: "Les modificacions contractuals son un dels temes que més preguntes genera. Els llindars per al dictamen de la CJA (>20% + ≥6M€) son les xifres clau a memoritzar.",
    questions: []
  },

  {
    id: "E29",
    part: "especifica",
    bloc: "EB006",
    numero: 29,
    titol: "Les modificacions contractuals. Les garanties exigibles. Efectes, compliment i extinció dels contractes administratius.",
    resum: "Les modificacions contractuals estan molt restringides per la LCSP per garantir la integritat del procediment de licitació inicial.",
    apartats: [
      {
        titol: "Càlcul del Valor Estimat del Contracte (VEC)",
        contingut: `
El **VEC** és l'import que determina si el contracte és SARA o no, i quin procediment d'adjudicació s'aplica.

**Fórmula:**

> VEC = PBL **sense IVA** × durada total (any base + pròrrogues) × (1 + % modificació màxima)

**Exemple pràctic (Examen 871, P.68):**
- PBL: 121.000 € (IVA del 21% inclòs) → sense IVA: **100.000 €**
- Durada: 1 any + pròrroga 2 anys = **3 anys**
- Modificació prevista: 20% anual

> VEC = 100.000 × 3 × 1,20 = **360.000 €**

> 📌 **Examen 871, P.68** — resposta correcta: *b) 360.000 euros.*
        `
      },
      {
        titol: "Modificació del PPT post-adjudicació",
        contingut: `
La modificació del **Plec de Prescripcions Tècniques Particulars (PPT)** DESPRÉS de l'adjudicació del contracte:

**POT COMPORTAR** la retroacció d'actuacions.

> 📌 **Examen 871, P.59** — resposta correcta: *a) Pot comportar la retroacció d'actuacions.*
        `
      }
    ],
    claus: [
      { concepte: "Càlcul VEC", valor: "PBL sense IVA × durada total (base + pròrrogues) × (1 + % modificació màxima)" },
      { concepte: "Dictamen CJA — llindar preu", valor: "≥ 6.000.000 € (IVA exclòs)" },
      { concepte: "Dictamen CJA — llindar %", valor: "> 20% del preu inicial (IVA exclòs)" },
    ],
    nota: "El càlcul del VEC (P.68) va ser una de les preguntes pràctiques més importants de l'examen 871. Practica la fórmula: PBL sense IVA → multiplica per anys totals → multiplica per (1 + % modificació màxim).",
    questions: []
  },

  {
    id: "E30",
    part: "especifica",
    bloc: "EB006",
    numero: 30,
    titol: "L'activitat subvencional de les administracions públiques. Procediments de concessió. Reintegrament i control. Infraccions i sancions. Subvencions UE. Ajuts.",
    resum: "Les subvencions es regulen per la Llei 38/2003, de 17 de novembre, General de Subvencions, i pel seu Reglament (RD 887/2006).",
    apartats: [
      {
        titol: "Procediment de reintegrament",
        contingut: `
D'acord amb l'**article 42.4 de la Llei 38/2003**, el termini màxim per resoldre i notificar la resolució del procediment de reintegrament és:

**12 MESOS** des de la data de l'acord d'iniciació.

> 📌 **Examen 871, P.21** — resposta correcta: *c) 12 mesos.*
        `
      },
      {
        titol: "Responsabilitat de la comunitat de béns",
        contingut: `
Els membres d'una **comunitat de béns** beneficiària d'una subvenció responen de les obligacions econòmiques (sancions, reintegraments) de manera:

**SOLIDÀRIA**

> 📌 **Examen 871, P.63** — resposta correcta: *a) Responsabilitat solidària.*
        `
      },
      {
        titol: "Justificació parcial de la subvenció",
        contingut: `
Si el beneficiari ha justificat **parcialment** la subvenció dins del termini previst, l'Administració ha de:

**Requerir** al beneficiari que presenti la documentació justificativa en el termini **IMPRORROGABLE de 15 DIES**.

> 📌 **Examen 871, P.77** — resposta correcta: *d) Requerir la documentació en el termini improrrogable de 15 dies.*
        `
      }
    ],
    claus: [
      { concepte: "Termini màxim procediment de reintegrament", valor: "12 mesos des de l'acord d'iniciació (Llei 38/2003 art.42.4)" },
      { concepte: "Responsabilitat comunitat de béns", valor: "SOLIDÀRIA" },
      { concepte: "Justificació parcial — requeriment termini", valor: "15 dies IMPRORROGABLES" },
    ],
    nota: "Les subvencions van generar 4 preguntes a l'examen 871 (P.21, P.63, P.77, P.78). El termini de reintegrament (12 mesos) i la responsabilitat solidària de la comunitat de béns son les dades clau.",
    questions: []
  },

];
