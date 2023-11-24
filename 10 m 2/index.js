let x = '1'

switch (typeof x !== 'symbol' && (isFinite(x) || typeof(x) === "string") && typeof(x)) {
  case "number":
    console.log ( 'x - число' );
    break;
  case "string":
    console.log ( 'x - строка' );
    break;
  case "boolean":
    console.log ( 'x - логичесикй тип' );
    break;
  default:
    console.log ( 'Тип x не определён' );
}
console.log(x)
