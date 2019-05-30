type MyUnionType = number | string;

export function getUnions() {

  let firstValue: MyUnionType;
  let secondValue: MyUnionType;

  return [
    firstValue = 42,
    secondValue = '42'
  ];
  
}