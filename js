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