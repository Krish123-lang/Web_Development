// var name = "apple";
// console.log(typeof name); // string

// ---------------------------------
// We can put "" in key. if not then, No problem.

const item = {
    "name": "apple",
    roll: 10,
    laptop: "HP"
};

console.log(item.name, item.roll, item.laptop); // apple 10 HP
console.log(item["name"], item["roll"], item["laptop"]); // apple 10 HP

item["name"] = "aalu";

console.log(item.name, item.roll, item.laptop); // apple 10 HP
console.log(item["name"], item["roll"], item["laptop"]); // apple 10 HP

item["food"] = "meat"; // assigning new key and value

console.log(item["food"]); // meat


/*
apple 10 HP
apple 10 HP
aalu 10 HP
aalu 10 HP
meat
*/