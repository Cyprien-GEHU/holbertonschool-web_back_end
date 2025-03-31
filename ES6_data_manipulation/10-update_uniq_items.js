export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (let [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}
