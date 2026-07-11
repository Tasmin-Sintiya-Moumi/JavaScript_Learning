// Write a switch that maps a month number (1–12) to its season in Bangladesh.

let month = 1;

switch(month)
{
    case 4:
    case 5:
        console.log("Summer");
        break;
    
    case 6:
    case 7:
        console.log("Rainy");
        break;

    case 8:
    case 9:
        console.log("Autumn");
        break;

    case 10:
    case 11:
        console.log("Late Autumn");
        break;

    case 12:
    case 1:
        console.log("Winter");
        break;

    case 2:
    case 3:
        console.log("Spring");
        break;

    default:
        console.log("Invalid month number");

}