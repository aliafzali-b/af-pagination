export function createArray(length: number): number[] {
  return Array.from({ length }, (_v, i) => i + 1);
  //const myArray = createArray(6)
  // Output: [1, 2, 3, 4, 5, 6]
}
