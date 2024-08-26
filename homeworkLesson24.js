/*
Înapoi la cele două echipe de gimnastică, Delfinii și Koala! Există o nouă disciplină de gimnastică, care funcționează diferit. Fiecare echipă concurează de 3 ori, iar apoi se calculează media celor 3 scoruri (deci un punctaj mediu pe echipă).
O echipă câștigă NUMAI dacă are cel puțin DUBLUL scorului mediu al celeilalte echipe. Altfel, nicio echipă nu câștigă!
1. Creați o funcție „calcAverage” pentru a calcula media a 3 scoruri
2. Folosiți funcția pentru a calcula media pentru ambele echipe
3. Creați o funcție „checkWinner” care ia ca parametri scorul mediu al fiecărei echipe („avgDolhins” și „avgKoalas”), apoi înregistrează câștigătorul în consolă, împreună cu punctele de victorie, conform regulii de mai sus.Exemplu: „Koalas câștigă (30 vs. 13)”.
4. Utilizați funcția „checkWinner” pentru a determina câștigătorul atât pentru DATA 1, cât și pentru DATA 2.
5. Ignorați remizele de data aceasta.
DATE TESTULUI 1: Delfinii scor 44, 23 și 71. Koalas scor 65, 54 și 49
DATE TESTUL 2: Delfinii scor 85, 54 și 41. Koala scor 23, 34 și 27
*/

function calcAverage(a, b, c) {
    return (a + b + c) / 3;
}
//console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
//console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return (`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        return (`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        return ('No team wins...');
    }
}
//console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
console.log(checkWinner(scoreDolphins, scoreKoalas));