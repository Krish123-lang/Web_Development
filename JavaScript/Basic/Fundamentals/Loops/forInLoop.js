let items ={
    name: "Apple",
    roll: 10,
    class: 12,
    gpa: 3.35
}

for(let i in items){
    console.log(`The data of ${i} is: ${items[i]}`);
}

/*
The data of name is: Apple
The data of roll is: 10
The data of class is: 12
The data of gpa is: 3.35


=> Here 'i' is the 'key' and the 'items[i]' is the 'value'
*/
