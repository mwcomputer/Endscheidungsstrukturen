// Entscheidungsstrukturen | control structures

// Deklaration
/*
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;
// Wertzuweisung
ageJohn = 25;
ageMark = 30;
// Logisvhe Aussagen/ Test(s)
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
// Ausgabe
//console.log("isJohnOlder: " + isJohnOlder);
//console.log("isJohnEqual: " + isJohnEqual);
/************ IF ************/
// alternativlos (TINA)
//if (true)
//if (isJohnOlder)
//if (ageJohn > ageMark)
/*
{
    console.log ("John ist älter");
}
*/
























/************ IF - ELSE IF ************/


/*if (isJohnOlder)
{
    // Ja-Zweig / true
    console.log("John ist älter");
}
// 1.Altanative / false
else if (isJohnEqual)
{
    // 1 Alternative /false
    console.log("John ist gleich alt");
}
//ggf. weitere Alternativen
// else if (...)
else
{
        //letzte Alternative false
        console.log("John ist jünger");
}
*/






/************ Fallunterscheidung / CASE| SWITCH 1 ************/
/*    
let firstname, job;
firstname = "Jane";
job = "driver"; // .. fährt TAXI
job = "diver"; //..taucht im Rhein
job = "pilot";
job = "artist"; //.. mahlt ein bild!
job = "teacher"; // unterrichtet!
job = "instructor"; // unterichtet!

switch (job) {
    case "driver":
        console.log(firstname + "fährt TAXI!");
        break;
    case "diver":
        console.log(firstname + "taucht im Rhein!");    
        break;
    case "artist":
        console.log(firstname + "mahlt ein Bild!");
        break;
    case "teacher":
    case "instructor":
        console.log(firstname + " unterichtet!");
        break;
    // für alle nicht bezeichneten Fälle ..

    default:
        console.log(firstname + " macht etwas anderes!");
        break;
}
*/





/************ Fallunterscheidung / CASE| SWITCH 2 ************/

let a = 2;

switch (true) {
    case a == 1:
        console.log("a ist 1");
        break;
    case a == 2:
        console.log("a ist 2");
        break;

    default:
        console.log("a hat einen anderen wert");
        break;
}





















