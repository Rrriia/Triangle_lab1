function triangle (element1, type1, element2, type2){
    console.log("Використання функції triangle:");
    console.log("Параметри:");
    console.log("element1, type1 - перший елемент і його тип");
    console.log("element2, type2 - перший елемент і його тип");
}

function toRadians(degrees){
  return degrees*(Math.PI/180);
}

function toDegrees(radians){
  return radians*(180/Math.PI);
}

let a,b,c,alpha,beta;
const types=["leg", "angle","hypotenuse"];

if (!types.includes(type1)||!types.includes(type)){
  console.log("Помилка: невірний тип аргументу. Перечитайте інструкцію ще раз.");
  return "failed";
}

if (element1<=0||element2<=0){
  console.log("Помилка: значення аргументів повинні бути додатнім.");
  return "failed";
}

if ((type1==="leg"&&type2==="hypotenuse"&&element1>=element2)||(type2==="leg"&&type1==="hypotenuse"&&element2>=element1){
  console.log("Помилка: катет не може бути більшим або рівним гіпотенузі.");
  return "failed";
}

switch (type1) {
  case "leg":
    switch (type2) {
      case "leg":
        a = value1;
        b = value2;
        c = Math.sqrt(a * a + b * b);
        alpha = toDegrees(Math.atan(a / b));
        beta = toDegrees(Math.atan(b / a));
        break;
      case "hypotenuse":
        a = value1;
        c = value2;
        b = Math.sqrt(c * c - a * a);
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
        break;
      case "angle":
        a = value1;
        alpha = value2;
        beta = 90 - alpha;
        c = a / Math.sin(toRadians(alpha));
        b = Math.sqrt(c * c - a * a);
        break;
    }
    break;
    case "hypotenuse":
      switch (type2) {
        case "leg":
          c = value1;
          a = value2;
          b = Math.sqrt(c * c - a * a);
          alpha = toDegrees(Math.asin(a / c));
          beta = 90 - alpha;
          break;
    }
    break;
    case "angle":
      switch (type2) {
        case "leg":
          alpha = value1;
          a = value2;
          beta = 90 - alpha;
          c = a / Math.sin(toRadians(alpha));
          b = Math.sqrt(c * c - a * a);
          break;
      }
    break;
    default:
      console.log("Помилка: Невірна комбінація типів аргументів. Перечитайте інструкцію.");
      return "failed";
}

