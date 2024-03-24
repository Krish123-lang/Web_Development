const prompt=require("prompt-sync")();

let n=prompt("Enter n: ");
n=Number.parseInt(n);

let i = 1;

/*
do {
    console.log(i);
    i++;
} while (i <= n);
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
9
10
*/
// =======================================

do{
    console.log(`${n} x ${i} = ${n*i}`);
    i++;
}while(i<=10);


/*
Enter n: 8
8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80

*/
