//     statement: check if a string is a valid number
//     description: This problem requires the user to determine if a given string is a valid number or not
//     inputExample: '123'

export function isStringNumber(str) {
  // parse string or if it is bigger than int or double
  // check if every char is number

  // lets assume it is either
  // integer
  // float
  // hexadecimal
  // because these are most common numbers
  // any other mathematical notation could be stored separately

  const fixed = str.replaceAll(/-?[0-9\.a-fA-F]+$/g, '');
  console.log(fixed);
  return fixed === '';
}

export function isStringInteger(str) {
  return str.replace(/-?[0-9]+$/, '') === '';
}

// TODO: allow only one dot... because cant have 1.2.3 as a float :D
// same with hexadecimal
// can maybe count dots and if more than one... then no, or simply find better regex
export function isStringFloat(str) {
  return str.replace(/-?[0-9]+[\.][0-9]+$/, '') === '';
}

export function isStringHexadecimal(str) {
  return str.replace(/-?[0-9a-fA-F]+$/, '') === '';
}
