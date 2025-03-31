export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const look = new DataView(buffer);
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  look.setInt8(position, value);
  return look;
}
