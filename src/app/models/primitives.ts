export function getPrimitives() {

// Immutable (can't add properties to them)
// Compared by value (considered equal if they have the same content)

  return [
    0x2A,
    6.022e+23,
    Math.PI,
    'Mrs. Dalloway said she would buy the flowers herself.',
    true,
    null,
    undefined,
    Symbol('demo'),
  ];
  
}