export function getObjects() {

  // Mutable (can add properties to them)
  // Compared by reference (considered equal only if they are the same object)

  return [
    {},
    {} === {},
    [],
    () => { },
    isObject(Math.PI),
    isObject('object'),
    isObject({}),
    isObject(null),
    isObject(() => { }),
    isObject({ a: 'string', b: 3 }),
  ];

  function isObject(x: any) {
    // What would this check look like?
    
  }

}










































//return (typeof x === 'object' && x !== null) || typeof x === 'function';