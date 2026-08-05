// clean_data_emojis.cjs — Fix all corrupted CP437/OEM mojibake in data.js
const fs = require('fs');
const path = require('path');

const targetPaths = [
  path.join(__dirname, 'src', 'data.js'),
  'c:\\Users\\Husse\\Documents\\JobOffer\\90_day_interactive_site\\src\\data.js'
];

let content = fs.readFileSync(targetPaths[0], 'utf8');

const replacements = [
  ['┬╖', '·'],
  ['ΓëÑ', '≥'],
  ['Γåö', '↔'],
  ['ΓÇö', '—'],
  ['ΓåÆ', '→'],
  ['≡ƒç╕≡ƒçª', '🇸🇦'],
  ['≡ƒç╢≡ƒçª', '🇶🇦'],
  ['≡ƒç«≡ƒç⌐', '🇮🇩'],
  ['ΓÇô', '–'],
  ['≡ƒç╣≡ƒç¡', '🇹🇭'],
  ['≡ƒç»≡ƒç╡', '🇯🇵'],
  ['≡ƒöÆ', '🔒'],
  ['├ù', '×'],
  ['├ú', 'ã'],
  ['≡ƒº¼', '🧬'],
  ['≡ƒîì', '🌍'],
  ['≡ƒôï', '📋'],
  ['≡ƒöÉ', '🔐'],
  ['ΓÜí', '⚡'],
  ['ΓÿÇ∩╕Å', '☀️'],
  ['≡ƒî▒', '🌱'],
  ['ΓÜ¢∩╕Å', '⚡️'],
  ['≡ƒÜÜ', '🚚'],
  ['≡ƒôè', '📊'],
  ['≡ƒñ¥', '🤝'],
  ['≡ƒöº', '🔧'],
  ['≡ƒôú', '📣'],
  ['ΓÜÖ∩╕Å', '⚙️'],
  ['≡ƒæö', '👔'],
  ['≡ƒÄô', '🎓'],
  ['≡ƒôê', '📈'],
  ['≡ƒîÉ', '🌐'],
  ['≡ƒù║∩╕Å', '🗺️'],
  ['≡ƒö¼', '🔬'],
  ['≡ƒÅ¡', '🏭'],
  ['≡ƒº¬', '🧪'],
  ['≡ƒç║≡ƒç╕', '🇺🇸'],
  ['≡ƒç¬≡ƒç║', '🇪🇺'],
  ['≡ƒçª≡ƒç¬', '🇦🇪'],
  ['≡ƒî┐', '🌿'],
  ['≡ƒôí', '📡'],
  ['≡ƒÆ¿', '💨'],
  ['≡ƒ¢░∩╕Å', '🛢️'],
  ['≡ƒ¢ó∩╕Å', '🛳️'],
  ['Γ¢Å∩╕Å', '⛽'],
  ['≡ƒºá', '🧠'],
  ['≡ƒÅù∩╕Å', '🏗️'],
  ['≡ƒÅ¢∩╕Å', '🏛️'],
  ['Γéé', '₂'],
  ['≡ƒñû', '🤖'],
  ['ΓöÇ', '─'],
];

let totalFixes = 0;
for (const [bad, good] of replacements) {
  const parts = content.split(bad);
  if (parts.length > 1) {
    const count = parts.length - 1;
    totalFixes += count;
    content = parts.join(good);
    console.log(`Replaced "${bad}" -> "${good}" (${count} times)`);
  }
}

for (const target of targetPaths) {
  fs.writeFileSync(target, content, 'utf8');
  console.log(`Updated ${target}`);
}

console.log(`\nTotal replacements made: ${totalFixes}`);

// Check remaining non-ASCII strings
const matches = content.match(/[^\x00-\x7F]+/g);
const unique = Array.from(new Set(matches));
console.log('\nRemaining non-ASCII unique strings:', unique.length);
unique.forEach((s, i) => console.log(`${i}: ${JSON.stringify(s)}`));
