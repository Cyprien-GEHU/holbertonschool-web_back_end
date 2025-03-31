export default function cleanset(set, start) {
  if (!start || typeof start !== 'string') {
    return '';
  }

  return Array.from(set)
    .filter((val) => typeof val === 'string' && val.startsWith(start))
    .map((val) => val.slice(start.length))
    .join('-');
}
