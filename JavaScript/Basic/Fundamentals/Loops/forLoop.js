const prompt=require("prompt-sync")(); // Must have if asking for prompt

/*
for(let i=0; i<=10; i++)
{
    console.log(i);
}
/*

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
// -----------------------------------------------------

/*
let sum=0;
let n = prompt("Enter the value of n: ");
n=Number.parseInt(n);

for(let i=0; i<=n;i++){
    //console.log(i);
    sum += i;
}
console.log(`The sum of first ${n} natural number is: ${sum}`)
*/

/*
Enter the value of n: 3
6


Enter the value of n: 3
The sum of first 3 natural number is: 6

*/

/*
Enter the value of n: 6
0
1
2
3
4
5
6

*/

// -----------------------------------------------------

// Break and Continue

/*
for(let i=0; i<=10; i++)
{
    console.log(i);
    if(i==3){
        //break //=> loop gets broken
        continue
    }
}
*/

// =========================================================

n=prompt("Enter n: ");
for(let i=1; i<=10; i++){
    console.log(`${n} x ${i} = ${n*i}`);
}

/*
Enter n: 6
6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
6 x 6 = 36
6 x 7 = 42
6 x 8 = 48
6 x 9 = 54
6 x 10 = 60
*/
