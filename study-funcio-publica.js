// ═══════════════════════════════════════════════════════════════════
// FUNCIÓ PÚBLICA — Temes T.32-33 (part comuna) + T.16-22 (part específica)
// ═══════════════════════════════════════════════════════════════════

const STUDY_FP = [

  {
    id: "C32",
    part: "comuna",
    bloc: "EB005",
    numero: 32,
    titol: "Classes de personal. Ordenació dels cossos. Oferta d'ocupació pública. Accés. Reserva per a persones amb discapacitat. Gestió de RRHH. Situacions administratives. Grau personal.",
    resum: "El règim del personal de la Generalitat de Catalunya es regula principalment pel DL 1/1997 (Text únic de la Llei de funció pública) i pel TREBEP (RDL 5/2015).",
    apartats: [
      {
        titol: "Classes de personal de la Generalitat",
        contingut: `
| Classe | Règim jurídic | Característiques |
|--------|--------------|-----------------|
| **Funcionari de carrera** | DL 1/1997 + TREBEP | Vincle permanent, supera oposició |
| **Funcionari interí** | DL 1/1997 + TREBEP | Cobertura provisional, temporal |
| **Personal laboral** | VI Conveni col·lectiu + ET | Contracte laboral |
| **Personal eventual** | Decret 2/2005 | Confiança/assessoria, cessa amb l'autoritat que el nomena |
        `
      },
      {
        titol: "Reserva per a persones amb discapacitat",
        contingut: `
D'acord amb l'**article 59 del TREBEP** (norma bàsica estatal), les ofertes d'ocupació pública han de reservar:

**≥ 7%** de les vacants per a persones amb discapacitat.

⚠️ **Compte amb el distractor:** L'antic DL 1/1997 de la Generalitat preveia el 5%, però ha estat **derogat** per l'article 59 del TREBEP. La resposta correcta sempre és el **7%**.

> 📌 **Examen 871, P.92** — resposta correcta: *b) No inferior al 7%.*
        `
      },
      {
        titol: "Carrera professional i grau personal",
        contingut: `
**Tipus de carrera professional (TREBEP art. 16-19):**

| Tipus | En què consisteix |
|-------|------------------|
| **Horitzontal** | Progressió dins del mateix cos/escala sense canviar de categoria. Inclou la **consolidació del grau personal** |
| **Vertical** | Ascens a un nivell o categoria superior |
| **Promoció interna vertical** | Accés a un cos/escala superior |
| **Promoció interna horitzontal** | Accés a un cos/escala del mateix grup |

> 📌 **Examen 871 reserva, P.110** — la consolidació del grau 24 és **carrera horitzontal**.
        `
      }
    ],
    claus: [
      { concepte: "Reserva discapacitat en OPO (TREBEP art.59)", valor: "No inferior al 7%" },
      { concepte: "Consolidació de grau personal", valor: "Carrera HORITZONTAL" },
      { concepte: "Reserva discapacitat — norma aplicable", valor: "TREBEP art.59 (derogat el 5% del DL 1/1997)" },
    ],
    nota: "La reserva per discapacitat és el 7% (TREBEP). L'examen 871 va confirmar el 7% com a resposta correcta (P.92). El 5% és l'antiga norma derogada — és el distractor habitual.",
    questions: [24]
  },

  {
    id: "C33",
    part: "comuna",
    bloc: "EB005",
    numero: 33,
    titol: "Drets i deures del personal. Incompatibilitats. Avaluació de l'acompliment. Règim disciplinari. Les relacions laborals i els sistemes de representació a l'Administració pública.",
    resum: "El règim disciplinari del personal de la Generalitat es regula pel Decret 243/1995 i el TREBEP. Les relacions laborals col·lectives estan regulades pel TREBEP i el VI Conveni col·lectiu.",
    apartats: [
      {
        titol: "Règim disciplinari — prescripció de faltes i sancions",
        contingut: `
⚠️ **Distinció fonamental: Prescripció de la FALTA vs. Prescripció de la SANCIÓ**

**Prescripció de les FALTES** (des de la comissió de la falta):

| Tipus de falta | Termini |
|---------------|---------|
| Molt greus | 3 anys |
| Greus | 2 anys |
| Lleus | 6 mesos (normativa catalana: 1 mes) |

**Prescripció de les SANCIONS** (des de la **fermesa** de la resolució — TREBEP art. 97):

| Sanció per falta | Termini |
|-----------------|---------|
| Lleus | **1 any** |
| Greus | 2 anys |
| Molt greus | 3 anys |

> 📌 **Examen 871, P.51** — preguntava la prescripció de les **sancions** per faltes **lleus**: **1 any**. L'examen 871 va preguntar la prescripció de la SANCIÓ (des de la fermesa), no de la FALTA.
        `
      },
      {
        titol: "Suspensió de funcions com a sanció",
        contingut: `
La suspensió de funcions com a **SANCIÓ DISCIPLINÀRIA** (TREBEP art. 90):
- Durada **màxima: 6 ANYS**

**No confondre amb:**
- Suspensió **provisional** durant la tramitació de l'expedient → màxim **6 mesos** (prorrogable fins a la resolució)

> 📌 **Examen 871, P.52** — resposta correcta: *d) 6 anys.*
        `
      },
      {
        titol: "Incompatibilitats dels alts càrrecs (Llei 13/2005)",
        contingut: `
**Qui instrueix i resol els expedients** sobre declaracions d'alts càrrecs:
→ La **Secretaria d'Administració i Funció Pública (SAFP)** (art. 16 Llei 13/2005)

**Terminis per formular la declaració patrimonial i d'interessos:**

| Moment | Termini |
|--------|---------|
| Presa de possessió | **3 mesos** |
| Cessament | **3 mesos** |
| Variacions en els fets declarats | **1 mes** |

> 📌 **Examen 871, P.30** (SAFP) i **P.32 reserva** (terminis).
        `
      },
      {
        titol: "Crèdit d'hores sindicals (TREBEP art. 41)",
        contingut: `
Escala de crèdit d'hores mensuals per cens de la unitat electoral:

| Cens de la unitat electoral | Hores/mes |
|---------------------------|-----------|
| Fins a 100 persones | 15 hores |
| 101 - 250 persones | 20 hores |
| 251 - 500 persones | 30 hores |
| 501 - 750 persones | 35 hores |
| 751 - 1.200 persones | **40 hores** |

> 📌 **Examen 871, P.88** — la unitat electoral tenia 1.200 persones → **40 hores mensuals**.
        `
      }
    ],
    claus: [
      { concepte: "Prescripció sancions — lleus (des fermesa)", valor: "1 any (TREBEP art.97)" },
      { concepte: "Prescripció sancions — greus (des fermesa)", valor: "2 anys (TREBEP art.97)" },
      { concepte: "Prescripció sancions — molt greus (des fermesa)", valor: "3 anys (TREBEP art.97)" },
      { concepte: "Suspensió funcions com a SANCIÓ — màxim", valor: "6 anys (TREBEP art.90)" },
      { concepte: "Suspensió PROVISIONAL durant expedient — màxim", valor: "6 mesos (prorrogable)" },
      { concepte: "SAFP — competència expedients alts càrrecs", valor: "Llei 13/2005 art.16" },
      { concepte: "Declaració patrimonial alts càrrecs — termini", valor: "3 mesos (presa possessió/cessament) · 1 mes (variacions)" },
      { concepte: "Crèdit hores sindicals cens 1.200", valor: "40 hores mensuals (TREBEP art.41)" },
    ],
    nota: "Molt important distingir prescripció de la FALTA (des de la comissió) i de la SANCIÓ (des de la fermesa). L'examen 871 va preguntar la prescripció de la SANCIÓ per faltes LLEUS (1 any).",
    questions: [1, 6, 7, 21]
  },

  {
    id: "E16",
    part: "especifica",
    bloc: "EB005",
    numero: 16,
    titol: "Òrgans competents en matèria de personal. Atribució de competències. Relació de llocs de treball. Mesures de racionalització.",
    resum: "Òrgans i atribució de competències departamentals en matèria de personal. Estructura organitzativa, RLT i instruments de racionalització d’efectius.",
    apartats: [
      {
        titol: "Òrgans competents en matèria de personal",
        contingut: `
Decret legislatiu 1/1997. Article 4. 

- a) el Govern; 
- b) El conseller competent en matèria de funció pública; 
- c) la Comissió Tècnica de la Funció Pública; 
- d) el Consell Català de la Funció Pública; 
- e) la Inspecció General de Serveis de Personal. 
        `
      },
      {
        titol: "El Govern",
        contingut: `
Decret legislatiu 1/1997. Article 5.
Correspon al govern:
- Exercir la potestat reglamentària en matèria de personal
- Aprovar l'oferta d'ocupació pública
- Establir la política global de RRHH
- Aprovar els intervals que corresponen a cada cos i escala (30 nivells) 
- Fixar les normes per l'aplicació del règim retributiu dels funcionaris
- Aprovar o modificar les normes de valoració de llocs de treball, la relació de llocs de treball i la valoració i la calssificació d'aquests llocs
- Dictar les instruccions, les directrius i els límits a què s'han de subjectar els representants del Govern en les negociacions amb els representants sindicals dels funcionaris sobre les condicions de treball, aprovar els acords assolits, per donar-los validesa i eficàcia, i establir les condicions de treball en els casos en què no es produeixi acord en la negociació
- Establir els criteris d'actuació a què s'han de subjectar els representants de l'Administració de la Generalitat en les negociacions col·lectives amb el personal laboral. 
- Aprovar, a proposta del departament corresponent, les mesures per garantir els serveis mínims en els casos de vaga en l'Administració de la Generalitat. Aquesta competència pot ser delegada en el conseller competent en matèria de funció pública o en el conseller de Treball. 
- Sotmetre a informe i dictamen del Consell Català de la Funció Pública, si escau, els projectes de llei i de reglament en matèria de funció pública. 
- Assenyalar o fixar les directrius a què s'han d'ajustar els representants de la Generalitat en els organismes d'àmbit estatal, Consell Superior de la Funció Pública i Comissió de Coordinació de la Funció Pública. 
- Exercir les funcions que li són encomanades per la normativa vigent. 
        `
      },
      {
        titol: "El conseller competent en matèria de funció pública",
        contingut: `
Decret legislatiu 1/1997. Article 6.

El conseller competent en matèria de funció pública exerceix les següents competències:

a) Elaborar els projectes de disposicions de caràcter general en matèria de funció pública que hagin de ser aprovats pel Parlament o pel Govern de la Generalitat o emetre informe sobre els dits projectes, i aprovar la resta de normes reglamentàries sobre funció pública, a proposta, si s'escau, del departament interessat. 

b) Impulsar, coordinar i controlar l'execució de les polítiques específiques de personal. 

c) Preparar el projecte d'oferta d'ocupació pública. 

d) Preparar propostes relatives a la relació de llocs de treball i, si s'escau, a la valoració d'aquests llocs. 

e) Elaborar els estudis sobre els intervals de nivells i elevar a l'òrgan competent els que corresponen a cada cos i escala, a proposta, si s'escau, dels departaments interessats. 

f) Establir les normes d'organització i funcionament del Registre General de Personal. 

g) Convocar processos selectius per a funcionaris. 

h) Nomenar els funcionaris que han superat els processos selectius. 

i) Declarar les situacions dels funcionaris. 

j) Convocar i resoldre els concursos de provisió de llocs de treball per a funcionaris, salvant el que estableix l'article 65. 

>  📌 **Article 65:** D'acord amb el que estableix l'article 6.1.j), les convocatòries de concursos per als càrrecs de comandament i els llocs singulars a què s'ha fet referència \ni les convocatòries de lliure designació són competència del titular del departament a què estigui adscrita la plaça.       

k) Proposar les mesures adequades sobre organització i personal dirigides a millorar l'eficàcia dels serveis públics i gestionar les iniciatives i els suggeriments a què fa referència l'article 92.e).

>   📌 **Article 92.e):** Participar en la millora de l'Administració de la Generalitat mitjançant un sistema d'iniciatives i suggeriments que s'haurà de reglamentar amb caràcter general. 

l) Dictar les instruccions i circulars que siguin necessàries en matèria de personal. 

m) Vetllar pel compliment de les normes en matèria de funció pública, i també avaluar les polítiques concretes de personal i exercir i coordinar la inspecció general de serveis sobre tot el personal al servei de l'Administració de la Generalitat. 

n) Declarar les jubilacions dels funcionaris. 

o) Impulsar i coordinar les polítiques de formació dels empleats públics catalans, en els termes establerts per l'article 83. 

>   📌 **Article 83:** Formació i perfecciment dels funcionaris.

p) Exercir les altres competències que li són assignades per la normativa vigent. 

2. Les competències especificades en l'apartat 1 poden ésser exercides mitjançant la Secretaria General d'Administració i Funció Pública, la qual ha de formar part de la Comissió Tècnica de la Funció Pública. 

3. El Govern de la Generalitat, a proposta del departament competent en matèria de funció pública, si ho requereix l'efectivitat dels serveis, pot atribuir selectivament i temporalment als departaments les competències a què fan referència les lletres b), d), g), h), i), j), l), n), o) i p) de l'apartat 1.  

No obstant això, el departament competent en matèria de funció pública mantindrà les facultats d'inspecció sobre les funcions atribuïdes, l'avaluació de la capacitat de gestió en matèria de personal del departament i la fixació de criteris per a l'exercici de les competències atribuïdes. 
        `
      }, 
      {
        titol: "Mesures de racionalització de personal",
        contingut: `
El DL 1/1997 preveu mesures de racionalització com:

- Els **plans de formació i capacitació** per a la recol·locació del personal
- La **redistribució d'efectius**
- Els **plans d'ocupació**

**No és** mesura de racionalització: la modificació puntual de l'horari de treball, la planificació basada exclusivament en criteris pressupostaris, ni l'establiment de mesures de promoció interna.

> 📌 **Examen 871, P.47** — PREGUNTA ANUL·LADA.
        `
      }
    ],
    claus: [
      { concepte: "Accés a la RLT d'un altre departament", valor: "SÍ — és pública, sense necessitat d'autorització" },
    ],
    nota: "La RLT és pública. La P.90 de l'examen 871 va confirmar que qualsevol persona pot accedir a la RLT de qualsevol departament.",
    questions: [22]
  },

  {
    id: "E17",
    part: "especifica",
    bloc: "EB005",
    numero: 17,
    titol: "Selecció del personal funcionari i laboral. Accés de persones amb discapacitat. Accés de ciutadans UE. Promoció interna. Integració.",
    resum: "La selecció de personal de la Generalitat es regula per la Llei de funció pública i el Reglament de selecció (Decret 28/1986).",
    apartats: [
      {
        titol: "El tribunal qualificador",
        contingut: `
D'acord amb el **Reglament de selecció (Decret 28/1986)**, el tribunal qualificador s'ha de constituir amb:

- Nombre **SENAR** de membres
- **No inferior a 5** (pot ser 5, 7, 9, 11...)
- Han de comptar amb el **mateix nombre** de suplents

**Per què nombre senar?** Per evitar empats en les votacions.

> 📌 **Examen 871, P.49** — resposta correcta: *a) Un nombre senar de membres no inferior a 5 i el mateix nombre de suplents.*
> ⚠️ L'opció c) deia "superior a 5" (que exclouria el 5) — incorrecta.
        `
      },
      {
        titol: "Fase de concurs en el concurs-oposició",
        contingut: `
D'acord amb l'**article 7.2 del Reglament de selecció**:

La fase de concurs **no pot superar el 40%** de la puntuació total del procés selectiu.

**Per què?** Garanteix que la fase d'oposició (mèrit propi de l'aspirant) pesi almenys un **60%**.

> 📌 **Examen 871, P.50** — resposta correcta: *d) El 40%.*
        `
      },
      {
        titol: "Reserva per a persones amb discapacitat i acreditació de llengües",
        contingut: `
**Reserva discapacitat:**
- Mínim **7%** de les vacants (TREBEP art. 59)

**Acreditació del coneixement de les llengües:**
- S'especifica a la **CONVOCATÒRIA** de cada procés selectiu (no al Reglament de selecció ni a l'OPO)

> 📌 **Examen 871, P.93** — resposta correcta: *a) A la convocatòria del procés selectiu corresponent.*
        `
      },
      {
        titol: "Sistemes d'accés als cossos i escales",
        contingut: `
D'acord amb el **DL 1/1997**, els sistemes d'accés als cossos i escales de funcionaris o categories laborals de la Generalitat son:

1. **Oposició**
2. **Concurs-oposició**
3. **Concurs**

I, si escau, els **cursos de formació** o la **fase de prova** que determini la convocatòria.

⚠️ **No** és un sistema d'accés: la lliure designació (que és un sistema de *provisió* de llocs) ni la borsa de treball.

> 📌 **Examen 871 reserva, P.65** — resposta correcta: *d) Oposició, concurs-oposició o concurs i, si escau, cursos de formació o fase de prova.*
        `
      }
    ],
    claus: [
      { concepte: "Tribunal qualificador — nombre membres", valor: "Nombre SENAR, no inferior a 5 (+ mateixos suplents)" },
      { concepte: "Fase concurs en concurs-oposició — màxim", valor: "40% de la puntuació total (art. 7.2 Reglament selecció)" },
      { concepte: "Reserva discapacitat OPO", valor: "≥ 7% (TREBEP art.59)" },
      { concepte: "Acreditació de les llengües — on consta", valor: "A la CONVOCATÒRIA del procés selectiu" },
      { concepte: "Sistemes d'accés a cossos i escales", valor: "Oposició, concurs-oposició o concurs (+ cursos formació si escau)" },
    ],
    nota: "Les preguntes sobre selecció van ser molt concretes a l'examen 871: nombre senar del tribunal (P.49), 40% de la fase concurs (P.50), 7% de discapacitat (P.92) i acreditació de llengües (P.93).",
    questions: [4, 5, 24, 25]
  },

  {
    id: "E18",
    part: "especifica",
    bloc: "EB005",
    numero: 18,
    titol: "Condicions de treball: jornada i horaris. Mesures de conciliació. Permisos i llicències. La incapacitat temporal.",
    resum: "Les condicions de treball del personal de la Generalitat es regulen per la Llei 8/2006 de mesures de conciliació, el Decret 56/2012 de jornada, el TREBEP i els acords de Govern.",
    apartats: [
      {
        titol: "Jornada de dedicació especial",
        contingut: `
El personal en règim de **jornada de dedicació especial** **NO** pot gaudir de reducció de jornada per interès particular.

La prohibició és **ABSOLUTA**, sense cap excepció.

No hi ha excepcions per informe favorable de cap òrgan ni per resolució de la Secretaria General.

> 📌 **Examen 871, P.48** — resposta correcta: *c) No, en cap cas.*
        `
      },
      {
        titol: "Vacances i incapacitat temporal (IT)",
        contingut: `
Si el personal no ha pogut gaudir de les vacances durant l'any natural per causa d'**incapacitat temporal**, les pot gaudir:

**Fins a 18 MESOS** des del final de l'any natural en què s'han originat.

**Base normativa:** TREBEP + jurisprudència del **TJUE** (sentències Schultz-Hoff i Stringer).

⚠️ **No és 12 mesos** (distractor habitual) — el TJUE va fixar el mínim en 18 mesos.

> 📌 **Examen 871, P.94** — resposta correcta: *d) 18 mesos des del final de l'any natural.*
        `
      },
      {
        titol: "Llei 1/2026 — modificació del DL 1/1997 (NOVA)",
        contingut: `
La **Llei 1/2026, de 4 de febrer** (DOGC 6/02/2026), ha modificat el DL 1/1997 introduint novetats que **NO estan al material d'estudi de 2022**:

| Novetat | Descripció |
|---------|-----------|
| **Àrees d'especialitat** | Nou instrument d'ordenació dels llocs de treball |
| **Complement variable** | Per nocturnitat, festius i guàrdies (presència efectiva o localització) |
| **Complement de carrera professional** | Retribueix la progressió del personal funcionari |

⚠️ Aquesta llei pot sortir a la propera convocatòria.
        `
      }
    ],
    claus: [
      { concepte: "Reducció jornada en dedicació especial", valor: "NO es pot concedir EN CAP CAS" },
      { concepte: "Vacances i IT — termini per gaudir-les", valor: "Fins a 18 mesos des del final de l'any natural" },
      { concepte: "Llei 1/2026 — novetats", valor: "Àrees d'especialitat + complement variable nocturnitat/festius + carrera professional" },
    ],
    nota: "Les vacances i la IT van sortir a l'examen 871 (P.94). La clau: el termini és 18 mesos, NO 12. La Llei 1/2026 és nova i pot sortir a la propera convocatòria.",
    questions: [3, 26]
  },

  {
    id: "E19",
    part: "especifica",
    bloc: "EB005",
    numero: 19,
    titol: "Situacions administratives del personal funcionari i laboral. Reingrés al servei actiu. Remoció i fi de la relació de servei. Responsabilitat disciplinària.",
    resum: "Les situacions administratives regulen la relació jurídica entre el funcionari i l'Administració quan no és de servei actiu. El règim disciplinari estableix les faltes, sancions i el procediment.",
    apartats: [
      {
        titol: "Situació de serveis en altres Administracions Públiques",
        contingut: `
El **funcionari de carrera** d'una AAPP que passa a ocupar un lloc en **una altra AAPP** (sense ser funcionari de carrera d'aquella altra) queda en situació de:

**SERVEIS EN ALTRES ADMINISTRACIONS PÚBLIQUES**

- **AMB** reserva de plaça i destinació a l'AAPP d'origen

**Atenció:** Si fos nomenat funcionari de carrera de l'altra AAPP, la situació seria diferent.

> 📌 **Examen 871, P.82** — el Xavier Bosch (funcionari Generalitat) és nomenat subdirector general a l'AGE → situació: *d) Serveis en altres AAPP amb reserva de plaça i destinació.*
        `
      },
      {
        titol: "Excedències — quadre resum",
        contingut: `
| Tipus d'excedència | Requisit | Durada | Reserva lloc? | Concessió |
|-------------------|---------|--------|--------------|-----------|
| **Voluntària interès particular** | 5 anys serveis efectius | Mínim 2 anys | NO | Supeditada al servei |
| **Cura de fills** | Naixement, adopció, acolliment | Fins a 3 anys | SÍ (1r any) | Dret subjectiu |
| **Cura de familiars** | Fins 2n grau consanguinitat/afinitat | 3 mesos - 3 anys | NO | A sol·licitud |
| **Agrupació familiar** | Cònjuge en altra localitat (altra AAPP) | Sense límit mentre duri | NO | A sol·licitud |

**Detalls clau de l'excedència per cura de fills:**
- No es poden acumular dos períodes consecutius
- Si durant una excedència neix un nou fill → dret a nou període, però cal un **mínim d'1 any** entre excedències

> 📌 **Examen 871:** P.81 (interès particular), P.95 (acumulació cura fills), P.96 (cura familiars/sogra).
        `
      },
      {
        titol: "Expedient disciplinari al personal interí",
        contingut: `
Si **finalitza el nomenament** del personal interí mentre es tramita un expedient disciplinari:

Cal dictar una **RESOLUCIÓ** que declari extingit el procediment i ordenar l'arxiu.

**Excepció:** Si la part interessada **insta expressament** la continuació de l'expedient.

⚠️ **No** és extinció automàtica *ex lege* — sí cal resolució expressa.

> 📌 **Examen 871, P.80** — resposta correcta: *c) Dictar resolució declarant extingit el procediment i arxivar, llevat que l'interessat insti la continuació.*
        `
      },
      {
        titol: "Personal interí per acumulació de tasques",
        contingut: `
D'acord amb l'**article 10.1.d del TREBEP**, els nomenaments d'interins per acumulació de tasques:

- Durada màxima: **9 MESOS**
- Dins d'un període de: **18 MESOS**

> 📌 **Examen 871, P.85** — resposta correcta: *c) 9 mesos, dins d'un període de 18 mesos.*
        `
      }
    ],
    claus: [
      { concepte: "Excedència interès particular — requisit mínim", valor: "5 anys de serveis efectius" },
      { concepte: "Excedència interès particular — concessió", valor: "Supeditada a les necessitats del servei" },
      { concepte: "Excedència interès particular — durada mínima", valor: "2 anys, sense reserva de lloc" },
      { concepte: "Excedència cura fills — acumulació", valor: "NO possible. Mínim 1 any entre excedències" },
      { concepte: "Excedència cura familiars — durada", valor: "Mínim 3 mesos, màxim 3 anys (fins 2n grau consanguinitat/afinitat)" },
      { concepte: "Serveis en altres AAPP (funcionari carrera)", valor: "AMB reserva de plaça i destinació" },
      { concepte: "Interí acumulació tasques — durada màxima", valor: "9 mesos dins de 18 mesos (TREBEP art.10.1.d)" },
    ],
    nota: "El tema 19 ha estat el que ha generat més preguntes pràctiques a l'examen 871: P.80, P.81, P.82, P.85, P.95, P.96. Cal saber molt bé les excedències amb tots els detalls.",
    questions: [13, 14, 15, 18, 27, 28]
  },

  {
    id: "E20",
    part: "especifica",
    bloc: "EB005",
    numero: 20,
    titol: "Retribucions del personal funcionari i laboral. Indemnitzacions per raó del servei.",
    resum: "Les retribucions del personal de la Generalitat inclouen retribucions bàsiques i complementàries. Les indemnitzacions per raó del servei es regulen pel Decret 138/2008.",
    apartats: [
      {
        titol: "Retribucions del personal funcionari",
        contingut: `
**RETRIBUCIONS BÀSIQUES:**
- Sou
- Triennis
- Pagues extraordinàries (2 l'any)

**RETRIBUCIONS COMPLEMENTÀRIES:**
- Complement de destinació (nivell del lloc)
- Complement específic (condicions del lloc)
- Complement de productivitat
- **Gratificacions per serveis extraordinaris** ← única complementària que no és periòdica

> 📌 **Examen 871 reserva, P.66** — les gratificacions per serveis extraordinaris són retribució **complementària**, no bàsica.
        `
      },
      {
        titol: "Retribucions del personal laboral (VI Conveni)",
        contingut: `
**Complement de grup:**
- Retribució **bàsica** del personal laboral
- Retribueix la **preparació i capacitació professional**

> 📌 **Examen 871, P.83** — el complement de grup és retribució bàsica que retribueix la preparació i capacitació professional.
        `
      },
      {
        titol: "Comissions de servei — durada i liquidació (Decret 138/2008)",
        contingut: `
**Durada màxima (art. 5 Decret 138/2008):**

| Àmbit | Durada màxima | Prorrogable? |
|-------|--------------|-------------|
| **Territori nacional** | **1 mes** | Sí, per l'òrgan competent |
| **Territori estranger** | **3 mesos** | Sí, per l'òrgan competent |

**Termini per presentar la liquidació de despeses:**
- **2 MESOS** des de la finalització de la comesa
- Si no es presenta en termini → s'entén que es renuncia a les indemnitzacions

> 📌 **Examen 871:** P.53 (durada comissions) i P.84 (termini liquidació).
        `
      },
      {
        titol: "Personal eventual — règim específic (Decret 2/2005)",
        contingut: `
| Aspecte | Règim |
|---------|-------|
| Convocatòria pública | **NO** es requereix |
| Publicació del nomenament | **SÍ** es publica al DOGC |
| Inscripció al Registre General de Personal | **SÍ** (presa de possessió) |

> 📌 **Examen 871, P.54** — resposta correcta: *c) La presa de possessió als llocs de personal eventual ha de ser objecte d'inscripció al Registre General de Personal.*
        `
      }
    ],
    claus: [
      { concepte: "Retribucions BÀSIQUES funcionari", valor: "Sou + triennis + pagues extraordinàries" },
      { concepte: "Retribucions COMPLEMENTÀRIES funcionari", valor: "Complement destinació + específic + productivitat + gratificacions serveis extraordinaris" },
      { concepte: "Complement de grup (laboral)", valor: "Retribució BÀSICA — preparació i capacitació professional" },
      { concepte: "Comissions servei — durada màxima nacional", valor: "1 mes (prorrogable)" },
      { concepte: "Comissions servei — durada màxima estranger", valor: "3 mesos (prorrogable)" },
      { concepte: "Comissions servei — termini liquidació", valor: "2 mesos des de finalització" },
    ],
    nota: "Les retribucions i les comissions de servei van generar múltiples preguntes a l'examen 871. Distingeix bé les retribucions BÀSIQUES de les COMPLEMENTÀRIES dels funcionaris.",
    questions: [8, 16, 17]
  },

  {
    id: "E21",
    part: "especifica",
    bloc: "EB005",
    numero: 21,
    titol: "Personal eventual. Personal directiu. Personal interí i temporal.",
    resum: "El personal eventual, directiu i interí de la Generalitat estan regulats per normatives específiques que els distingeixen del personal funcionari de carrera.",
    apartats: [
      {
        titol: "Personal directiu de societats mercantils públiques",
        contingut: `
D'acord amb la **Disposició Addicional 21a de la Llei 2/2014**, el personal directiu d'una SA participada íntegrament per la Generalitat pot tenir:

1. **Contracte laboral especial d'alta direcció** (regla general)
2. **Contracte mercantil** si els estatuts de la societat ho preveuen

⚠️ **No** pot ser: contracte laboral ordinari, ni vinculació com a personal eventual.

> 📌 **Examen 871, P.86** — resposta correcta: *d) Contracte laboral especial d'alta direcció o, si els estatuts ho preveuen, contracte mercantil.*
        `
      }
    ],
    claus: [
      { concepte: "Personal eventual — convocatòria pública", valor: "NO (però SÍ es publica el nomenament al DOGC)" },
      { concepte: "Personal eventual — presa de possessió", valor: "SÍ s'inscriu al Registre General de Personal" },
      { concepte: "Directiu SA pública — vinculació", valor: "Contracte alt direcció O mercantil (si estatuts ho preveuen)" },
      { concepte: "Interí acumulació — durada màxima", valor: "9 mesos / 18 mesos (TREBEP art.10.1.d)" },
    ],
    nota: "Les diferències entre personal eventual (nomenament sense OPO, de confiança) i personal interí (cobertura provisional de places) son importants per a l'examen.",
    questions: [9, 18, 19]
  },

  {
    id: "E22",
    part: "especifica",
    bloc: "EB005",
    numero: 22,
    titol: "Drets de representació col·lectiva. Meses de negociació i òrgans de representació. Acords, pactes i convenis. Dret de vaga. Conveni col·lectiu únic de Catalunya del personal laboral.",
    resum: "La representació col·lectiva del personal de la Generalitat es canalitza a través de juntes de personal (funcionaris) i comitès d'empresa (personal laboral), regulats pel TREBEP i el VI Conveni.",
    apartats: [
      {
        titol: "Crèdit d'hores sindicals (TREBEP art. 41)",
        contingut: `
| Cens unitat electoral | Hores mensuals |
|----------------------|----------------|
| Fins a 100 persones | **15 hores** |
| 101 - 250 persones | **20 hores** |
| 251 - 500 persones | **30 hores** |
| 501 - 750 persones | **35 hores** |
| 751 - 1.200 persones | **40 hores** |

> 📌 **Examen 871, P.88** — unitat electoral de 1.200 persones → **40 hores mensuals**.
        `
      },
      {
        titol: "VI Conveni col·lectiu únic — mobilitat funcional",
        contingut: `
**Tasques de categoria INFERIOR:**

El personal laboral fix pot ser destinat a tasques de categoria inferior per:
- Necessitats **peremptòries i imprevisibles**
- Pel temps imprescindible
- Màxim **2 MESOS per any**

> 📌 **Examen 871, P.55** — resposta correcta: *a) Sí, per necessitats peremptòries i imprevisibles, màxim 2 mesos per any.*

**Concurs de canvi de destinació:**

En la valoració de mèrits i capacitats, les **capacitats professionals** han de representar exactament el **40%**.

> 📌 **Examen 871, P.87** — resposta correcta: *b) El 40%* (no "com a mínim", és exactament el 40%).
        `
      }
    ],
    claus: [
      { concepte: "Crèdit hores sindicals cens fins 100", valor: "15 hores/mes" },
      { concepte: "Crèdit hores sindicals cens 101-250", valor: "20 hores/mes" },
      { concepte: "Crèdit hores sindicals cens 251-500", valor: "30 hores/mes" },
      { concepte: "Crèdit hores sindicals cens 501-750", valor: "35 hores/mes" },
      { concepte: "Crèdit hores sindicals cens 751-1.200", valor: "40 hores/mes" },
      { concepte: "VI Conveni — tasques categoria inferior — màxim", valor: "2 mesos per any (necessitats peremptòries i imprevisibles)" },
      { concepte: "VI Conveni — capacitats professionals concurs canvi destinació", valor: "Exactament 40%" },
    ],
    nota: "L'escala de crèdit d'hores sindicals és una taula que cal memoritzar sencera. L'examen 871 va preguntar el cas de cens 1.200 persones → 40 hores (P.88).",
    questions: [10, 20, 21]
  },

];
