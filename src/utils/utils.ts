export function randomNum(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

export function randomName(array: string[]): string {
  const num = Math.floor(Math.random() * Math.floor(array.length));

  return array[num];
}
