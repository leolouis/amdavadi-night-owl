import fs from 'node:fs';

const errors = [];
const warnings = [];
let places;
try {
  places = JSON.parse(fs.readFileSync('places.json', 'utf8'));
} catch (e) {
  console.error(`::error file=places.json::Invalid JSON: ${e.message}`);
  process.exit(1);
}
if (!Array.isArray(places)) {
  console.error('::error file=places.json::Root must be an array');
  process.exit(1);
}

const CATEGORIES = new Set(['food', 'tea', 'cafe', 'dessert', 'other']);
const TIME = /^([01]\d|2[0-3]):[0-5]\d$/;
const ids = new Set();
const coords = new Map();
let allSafe = true;

places.forEach((p, i) => {
  const tag = `#${p.id ?? '?'} "${p.name ?? 'no name'}" (index ${i})`;
  if (typeof p.name !== 'string' || !p.name.trim()) errors.push(`${tag}: missing name`);
  if (p.id === undefined) errors.push(`${tag}: missing id`);
  else if (ids.has(p.id)) errors.push(`${tag}: duplicate id`);
  else ids.add(p.id);

  if (typeof p.lat !== 'number' || typeof p.lng !== 'number') {
    errors.push(`${tag}: lat/lng must be numbers`);
  } else {
    if (p.lat < 22.8 || p.lat > 23.4 || p.lng < 72.3 || p.lng > 72.8)
      warnings.push(`${tag}: coordinates look outside Ahmedabad`);
    const key = `${p.lat.toFixed(4)},${p.lng.toFixed(4)}`;
    if (coords.has(key)) warnings.push(`${tag}: same coordinates as "${coords.get(key)}" (possible duplicate)`);
    else coords.set(key, p.name);
  }

  for (const f of ['open', 'close'])
    if (p[f] !== undefined && !TIME.test(p[f])) errors.push(`${tag}: ${f} must be HH:MM (24h), got "${p[f]}"`);
  if (!CATEGORIES.has(p.category)) warnings.push(`${tag}: unknown category "${p.category}"`);
  if (p.rating !== undefined && (typeof p.rating !== 'number' || p.rating < 0 || p.rating > 5))
    warnings.push(`${tag}: rating should be a number from 0 to 5`);
  if (p.safe !== true) allSafe = false;
});

if (allSafe && places.length > 5)
  warnings.push('Every place has "safe": true. This field carries no information; consider replacing it with specific tags.');

warnings.forEach(w => console.log(`::warning file=places.json::${w}`));
errors.forEach(e => console.log(`::error file=places.json::${e}`));
console.log(`Checked ${places.length} places: ${errors.length} errors, ${warnings.length} warnings.`);
process.exit(errors.length ? 1 : 0);
