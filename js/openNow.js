const toMin = (t) => { const [h, m] = String(t).split(':').map(Number); return h * 60 + m; };

export function nowMinutesIST(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false
  }).formatToParts(date);
  const h = Number(parts.find((p) => p.type === 'hour').value) % 24;
  const m = Number(parts.find((p) => p.type === 'minute').value);
  return h * 60 + m;
}

export function isOpenNow(place, date = new Date()) {
  const o = toMin(place.open), c = toMin(place.close), n = nowMinutesIST(date);
  if (o === 0 && c >= 1439) return true;              // 24-hour place
  return o <= c ? n >= o && n < c : n >= o || n < c;  // handles closing after midnight
}

export function minutesUntilClose(place, date = new Date()) {
  if (!isOpenNow(place, date)) return null;
  const o = toMin(place.open), c = toMin(place.close);
  if (o === 0 && c >= 1439) return null;
  return (c - nowMinutesIST(date) + 1440) % 1440;
}
