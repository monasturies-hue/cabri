// ═══════════════════════════════════════════════════════════════════
// STUDY LOADER v4 — combina tots els fitxers de contingut d'estudi
// ═══════════════════════════════════════════════════════════════════
//
// ESTRUCTURA:
//   data.js                      → blocs, temes i relacions (Excel)
//   study-part-comuna-general.js → T.1,3,7,8,9,11,22,29 (part comuna)
//   study-procediment.js         → T.13,16,17,20,35
//   study-administracio-digital.js → T.2 + T.15 (específica)
//   study-funcio-publica.js      → T.32,33 + T.16-22 (específica)
//   study-contractacio.js        → T.24 + T.23-30 (específica)
//   study-especifica-general.js  → T.1-10 (específica)
//
// PER AFEGIR CONTINGUT A UN TEMA:
//   Obre el fitxer del bloc corresponent i afegeix/edita l'objecte
//   amb el camp 'apartats' en format Markdown.
// ═══════════════════════════════════════════════════════════════════

const STUDY = [
  ...(typeof STUDY_PC_GENERAL !== 'undefined' ? STUDY_PC_GENERAL : []),
  ...(typeof STUDY_PROCEDIMENT !== 'undefined' ? STUDY_PROCEDIMENT : []),
  ...(typeof STUDY_DIGITAL !== 'undefined' ? STUDY_DIGITAL : []),
  ...(typeof STUDY_FP !== 'undefined' ? STUDY_FP : []),
  ...(typeof STUDY_CONTRACTACIO !== 'undefined' ? STUDY_CONTRACTACIO : []),
  ...(typeof STUDY_PE_GENERAL !== 'undefined' ? STUDY_PE_GENERAL : []),
];

// Index ràpid per ID de tema
const STUDY_INDEX = {};
STUDY.forEach(s => { STUDY_INDEX[s.id] = s; });
