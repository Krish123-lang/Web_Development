const obj={
    harry: 98,
    rohan: 70,
    aakash: 7,
    krishna: 99
}

// Using For Loop

/*
for(let i=0; i<Object.keys(obj).length;i++){
    console.log(`the marks of ${Object.keys(obj)[i]} is: ${obj[Object.keys(obj)[i]]}`);
}


console.log(Object.keys(obj)); // [ 'harry', 'rohan', 'aakash', 'krishna' ] 

console.log(Object.keys(obj).length); // 4
*/

/*
the marks of harry is: 98
the marks of rohan is: 70
the marks of aakash is: 7
the marks of krishna is: 99
*/
// --------------------------------------------

// Using For In Loop

/*
for(let a in obj){
    console.log(a, obj[a]);
}
*/

// ------------------------------------------------

let mean=(a,b,c,d,e)=>{
    m=(a+b+c+d+e)/mean.length;
    return m;
}

avg=mean(3,2,4,2,5);
console.log(avg); // 3.2
