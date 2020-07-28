let car = "GM";

switch (car) {
    case "Ford", "GM":
        console.log("You've got an American car!")
        break;
    case "Peugeot", "Citreon":
        console.log("You've got a French boy!");
        break;
    case "Honda", "Toyota", "Suzuki":
        console.log("Japanese cars are dead quiet!");
        break;
    default:
        console.log("Your car is not in the top ten companies in the world!");
        break;
}