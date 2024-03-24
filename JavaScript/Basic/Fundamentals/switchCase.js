const prompt=require("prompt-sync");

let day=prompt("Enter the day: ");

day=Number.parseInt(day);

//let day=5;

switch (day)
{
    case 1:
    console.log("sunday");
    break;
    
    case 2:
    console.log("monday");
    break;
    
    
    case 3:
    console.log("tuesday");
    break;
    
    case 4:
    console.log("wednesday");
    break;
    
    case 5:
    console.log("thursday");
    break;
    
    case 6:
    console.log("friday");
    break;
    
    case 7:
    console.log("saturday");
    break;
    
    default:
    console("Invalid input ! please enter from 1 to 7");
    break;
}
