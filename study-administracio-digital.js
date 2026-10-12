// ═══════════════════════════════════════════════════════════════════
// ADMINISTRACIÓ DIGITAL — Temes T.2 (part comuna) + T.15 (part específica)
// ═══════════════════════════════════════════════════════════════════

const STUDY_DIGITAL = [

  {
    id: "C02",
    part: "comuna",
    bloc: "CB002",
    numero: 2,
    titol: "Governança de les dades a l'administració digital. Característiques de les dades. L'administració digital. Model d'administració digital a Catalunya.",
    resum: "La governança de les dades és el conjunt de polítiques, processos i estàndards per gestionar les dades com un actiu estratègic. A Catalunya s'aplica la metodologia DAMA i el model d'administració digital propi.",
    apartats: [
      {
        titol: "Model de govern de les dades a Catalunya",
        contingut: `
El model de govern de les dades de la Generalitat es basa en una adaptació de la metodologia internacional **DAMA** (*Data Administration Management Association*).

Estableix un marc de gestió de les dades com a **actiu estratègic**, amb rols, processos i estàndards definits.

> 📌 **Examen 871, P.23** — resposta correcta: *a) DAMA.*
        `
      },
      {
        titol: "Marc normatiu de l'administració digital a Catalunya",
        contingut: `
| Norma | Contingut |
|-------|-----------|
| **Llei 9/2025** (13 novembre 2025) | Mesures de simplificació i administració digital. **NOVA** — afegeix l'art. 40bis a la Llei 26/2010 |
| **Decret 76/2020** (4 agost 2020) | Administració digital de la Generalitat |
| **Llei 26/2010** | Règim jurídic de les AAPP catalanes (norma base) |

**Atenció:** La Llei 9/2025 és la més recent i va sortir directament a l'examen 871 (publicada el novembre 2025, 6 mesos abans de l'examen).
        `
      },
      {
        titol: "Serveis proactius i personalitzats (Llei 9/2025 — NOU)",
        contingut: `
L'**article 40 bis** de la Llei 26/2010, afegit per la Llei 9/2025, regula els serveis proactius i personalitzats.

Per prestar-los cal el consentiment:
- **Exprés i específic**
- **Informat**
- **Inequívoc** de la persona interessada

> 📌 **Examen 871, P.40** — resposta correcta: *a) Consentiment exprés i específic, informat i inequívoc.*
        `
      }
    ],
    claus: [
      { concepte: "Metodologia govern dades Generalitat", valor: "DAMA (Data Administration Management Association)" },
      { concepte: "Consentiment serveis proactius", valor: "Exprés i ESPECÍFIC, informat i inequívoc (art. 40bis Llei 26/2010)" },
      { concepte: "Decret administració digital Catalunya", valor: "Decret 76/2020, de 4 d'agost" },
      { concepte: "Llei que afegeix l'art. 40bis", valor: "Llei 9/2025, de 13 de novembre" },
    ],
    nota: "La Llei 9/2025 és normativa molt recent i va sortir directament a l'examen 871. El vocal expert en administració digital del tribunal va preguntar sobre aquesta llei publicada 6 mesos abans.",
    questions: []
  },

  {
    id: "E15",
    part: "especifica",
    bloc: "CB002",
    numero: 15,
    titol: "Identificació i signatura electròniques. El certificat digital. Tipus de certificats a les AAPP catalanes. La representació electrònica.",
    resum: "La identificació i signatura electrònica permeten que les persones i les AAPP operin en entorns digitals de manera segura i amb validesa jurídica.",
    apartats: [
      {
        titol: "T-CAT P — Certificat personal de la Generalitat",
        contingut: `
| Característiques | Valor |
|-----------------|-------|
| **Caducitat** | **4 anys** des de la data d'emissió |
| **Renovació** | Des de **60 dies** abans de la caducitat |
| **Tipus** | Signatura avançada |

**Exemple pràctic:** Si el T-CAT P s'emet el 10/11/2022:
- Caduca el **10/11/2026** (4 anys)
- Es pot renovar des del **11/09/2026** (60 dies abans)

> 📌 **Examen 871, P.67** — resposta correcta: *b) El 10.11.2026, amb renovació possible des de 60 dies abans.*
        `
      },
      {
        titol: "eIDAS2 — Cartera europea d'identitat digital",
        contingut: `
**Norma:** Reglament **(UE) 2024/1183**, de l'11 d'abril de 2024 (modifica el Reglament UE 910/2014).

La **Cartera Europea d'Identitat Digital** és:

> Un **mitjà d'identificació electrònica** que permet a l'usuari **emmagatzemar, gestionar i validar** de manera segura dades d'identificació de la persona i declaracions electròniques d'atributs.

**No és:** un llibre major electrònic, un arxiu de serveis qualificats, ni un tipus de signatura avançada.

> 📌 **Examen 871, P.41** — resposta correcta: *b) Un mitjà d'identificació electrònica que permet emmagatzemar, gestionar i validar dades.*
        `
      },
      {
        titol: "Acord GOV/153/2024 — Espais privats digitals",
        contingut: `
L'**Acord GOV/153/2024, de 18 de juny**, de la Generalitat estableix els requisits dels espais privats digitals.

D'acord amb el **punt 3 de l'annex**, els espais privats digitals han de ser:

**Servei finalista majoritari** → més del **50%** dels serveis han de ser finalistes.

> 📌 **Examen 871, P.42** — resposta correcta: *a) Ser un servei finalista majoritari (més del 50% dels serveis).*
        `
      },
      {
        titol: "Interoperabilitat — definicions clau",
        contingut: `
**Definició general (Decret 232/2013, art.3):**
La interoperabilitat és la **capacitat de les organitzacions** per compartir la informació dels seus sistemes d'informació i dels procediments als quals donen suport, per assolir objectius comuns i possibilitar l'intercanvi d'informació.
> 📌 **Examen 871, P.28** — resposta correcta: *d)*

**Dimensions de la interoperabilitat (ENI — RD 4/2010):**

| Dimensió | Descripció |
|----------|-----------|
| **Semàntica** | La informació intercanviada pot ser **interpretada de forma automàtica** i **reutilitzable** per aplicacions que no van intervenir en la seva creació |
| **Organitzativa** | Capacitat de col·laborar entre entitats per assolir objectius mutus |
| **Tècnica** | Relació entre sistemes TIC (interfícies, interconnexió, integració) |
| **Temporal** | Conservació de la informació en suport electrònic |

> 📌 **Examen 871, P.73** — la pregunta era sobre la **interoperabilitat SEMÀNTICA**: *b) informació interpretable automàticament i reutilitzable.*
        `
      },
      {
        titol: "Videoatenció i formularis (Decret 76/2020)",
        contingut: `
**Videoatenció** — el ciutadà pot:
- Rebre ajuda per presentar una **petició genèrica**
- **Intercanviar documentació** mitjançant el xat de la videoatenció
> 📌 **Examen 871, P.106** — resposta correcta: *c)*

**Formularis HTML vs PDF:**
- HTML → **editable a la web**, sense necessitat de descàrrega
- PDF → requereix descàrrega i software específic
> 📌 **Examen 871, P.105** — resposta correcta: *a) HTML editable a la web.*
        `
      }
    ],
    claus: [
      { concepte: "T-CAT P — caducitat", valor: "4 anys des de l'emissió" },
      { concepte: "T-CAT P — renovació", valor: "Des de 60 dies abans de caducar" },
      { concepte: "eIDAS2 — Reglament UE", valor: "Reglament (UE) 2024/1183, d'11 d'abril de 2024" },
      { concepte: "Cartera europea identitat digital", valor: "Emmagatzemar, gestionar i validar dades d'identificació + declaracions d'atributs" },
      { concepte: "Espais privats digitals (GOV/153/2024)", valor: "Servei finalista majoritari (>50% dels serveis)" },
      { concepte: "Interoperabilitat semàntica", valor: "Informació interpretable automàticament i reutilitzable per a tercers" },
      { concepte: "Interoperabilitat — definició", valor: "Capacitat de les organitzacions de compartir informació per assolir objectius comuns" },
    ],
    nota: "L'administració digital va generar 14 preguntes a l'examen 871, moltes sobre normativa molt recent. El Reglament UE 2024/1183 (eIDAS2), l'Acord GOV/153/2024 i la Llei 9/2025 son les normes que més risc tenen de sortir a la propera convocatòria.",
    questions: []
  },

];
