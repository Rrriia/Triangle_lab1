function showInstructions() {
    console.log("Використання функції triangle (value1, type1, value2, type2)");
    console.log("Параметри:");
    console.log("value1, type1 - перший елемент і його тип");
    console.log("value2, type2 - другий елемент і його тип");
    console.log('Можливі типи записувати у лапках "": leg, hypotenuse, adjacent angle, opposite angle, angle');
    console.log("Тип 'angle' можна використовувати тільки з типом 'hypotenuse'");
    console.log("Значення типу 'leg' і 'hypotenuse' не може бути меншим за 0.001 та більшим за 10 000");
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
 
function toDegrees(radians) {
    return radians * (180 / Math.PI);
}
 
function triangle(value1, type1, value2, type2) {
    const types = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    const MIN_SIDE = 0.0011;
    const MAX_SIDE = 10000.1;

    if (value1 < MIN_SIDE || value1 > MAX_SIDE) {
        console.log("Помилка: значення value1 повинно бути в межах від 0.001 до 10 000.");
        return "failed";
    }

    if (value2 < MIN_SIDE || value2 > MAX_SIDE) {
        console.log("Помилка: значення value2 повинно бути в межах від 0.001 до 10 000.");
        return "failed";
    }
    
    if (!types.includes(type1) || !types.includes(type2)) {
        console.log("Помилка: невірний тип аргументу. Перечитайте інструкцію ще раз.");
        return "failed";
    }
 
    if (value1 <= 0 || value2 <= 0) {
        console.log("Помилка: значення аргументів повинні бути додатніми та не дорінювати нулю.");
        return "failed";
    }

    if (type1.includes("angle") && (value1 < 0 || value1 >= 90)) {
        console.log("Помилка: значення кута повинно бути в межах від 0 до 90 градусів.");
        return "failed";
    }
 
    if (type2.includes("angle") && (value2 < 0 || value2 >= 90)) {
        console.log("Помилка: значення кута повинно бути в межах від 0 до 90 градусів.");
        return "failed";
    }
 
    let a, b, c, alpha, beta;
 
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
                    if (a >= c) {
                        console.log("Помилка: катет не може бути більшим або рівним гіпотенузі.");
                        return "failed";
                    }
                    b = Math.sqrt(c * c - a * a);
                    alpha = toDegrees(Math.asin(a / c));
                    beta = 90 - alpha;
                    break;
                case "adjacent angle":
                    a = value1;
                    alpha = value2;
                    beta = 90 - alpha;
                    c = a / Math.cos(toRadians(alpha));
                    b = Math.sqrt(c * c - a * a);
                    break;
                case "opposite angle":
                    a = value1;
                    alpha = value2;
                    beta = 90 - alpha;
                    c = a / Math.sin(toRadians(alpha));
                    b = Math.sqrt(c * c - a * a);
                    break;
                case "angle":
                    a = value1;
                    alpha = value2;
                    beta = 90 - alpha;
                    c = a / Math.sin(toRadians(alpha));
                    b = Math.sqrt(c * c - a * a);
                    break;
                default:
                    console.log("Помилка: Невірна комбінація типів аргументів. Перечитайте інструкцію.");
                    return "failed";
            }
            break;
        case "hypotenuse":
            switch (type2) {
                case "leg":
                    c = value1;
                    a = value2;
                    if (a >= c) {
                        console.log("Помилка: катет не може бути більшим або рівним гіпотенузі.");
                        return "failed";
                    }
                    b = Math.sqrt(c * c - a * a);
                    alpha = toDegrees(Math.asin(a / c));
                    beta = 90 - alpha;
                    break;
                case "angle":
                    c = value1;
                    alpha = value2;
                    a = c * Math.sin(toRadians(alpha));
                    b = Math.sqrt(c * c - a * a);
                    beta = 90 - alpha;
                    break;
                default:
                    console.log("Помилка: Невірна комбінація типів аргументів. Перечитайте інструкцію.");
                    return "failed";
            }
            break;
        case "adjacent angle":
            switch (type2) {
                case "leg":
                    alpha = value1;
                    a = value2;
                    beta = 90 - alpha;
                    c = a / Math.cos(toRadians(alpha));
                    b = Math.sqrt(c * c - a * a);
                    break;
                default:
                    console.log("Помилка: Невірна комбінація типів аргументів. Перечитайте інструкцію.");
                    return "failed";
            }
            break;
        case "opposite angle":
            switch (type2) {
                case "leg":
                    alpha = value1;
                    a = value2;
                    beta = 90 - alpha;
                    c = a / Math.sin(toRadians(alpha));
                    b = Math.sqrt(c * c - a * a);
                    break;
                default:
                    console.log("Помилка: Невірна комбінація типів аргументів. Перечитайте інструкцію.");
                    return "failed";
            }
            break;
        case "angle":
            switch (type2) {
               case "hypotenuse":
                   alpha = value1;
                   c = value2;
                   a = c * Math.sin(toRadians(alpha));
                   b = Math.sqrt(c * c - a * a);
                   beta = 90 - alpha;
                   break;
                default:
                    console.log("Помилка: Невірна комбінація типів аргументів. Перечитайте інструкцію.");
                    return "failed";
            }
            break;
        default:
            console.log("Помилка: Невірна комбінація типів аргументів. Перечитайте інструкцію.");
            return "failed";
    } 

    console.log(`Результати:`);
    console.log(`a = ${a.toFixed(2)}`);
    console.log(`b = ${b.toFixed(2)}`);
    console.log(`c = ${c.toFixed(2)}`);
    console.log(`alpha = ${alpha.toFixed(2)}°`);
    console.log(`beta = ${beta.toFixed(2)}°`);
 
    return "success";
}

showInstructions();
