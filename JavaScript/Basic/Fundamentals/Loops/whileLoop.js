const prompt=require("prompt-sync")();

let n = prompt("Enter n: "); // it is of type 'string'
//console.log(typeof n);

n=Number.parseInt(n); // type casting in to 'number'
//console.log(typeof n);


let i = 1;

/*
while (i <= n) {
    console.log(i);
    i++;
}
*/

/*
0
1
2
3
4
5
6
7
8
*/

// ==============================================

while(i<=10){
    console.log(`${n} x ${i} = ${n*i}`);
    i++;
}

/*
Enter n: 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70

*/
