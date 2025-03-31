export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [list, value] of map.entries()) {
    if (value === 1) {
      map.set(list, 100);
    }
  }
}
