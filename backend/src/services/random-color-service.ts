const colors: string[] = [
  'blue',
  'green',
  'yellow',
  'red',
  'pink',
  'orange',
  'purple',
];

export function pickRandomColor(): string {
  const color = colors[Math.floor(Math.random() * 7)];
  return color;
}
