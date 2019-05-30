export function getArrayDestructuring() {

  const continents = [
    'Australia',
    'Africa',
    'South America',
    'Europe',
    'Asia',
    'North America',
    'Antarctica'
  ];

  let [first, , , , , , last] = continents;

  return [
    first,
    last
  ];
}