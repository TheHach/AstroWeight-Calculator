// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];
// 1. Populate the dropdown element with the data found in the planets array
//for each planet name call to function   
planets.forEach(function(element) {
    var newOption = document.createElement("option");
    var newText = document.createTextNode(element[0]);
    newOption.appendChild(newText);
    document.getElementById("planets").appendChild(newOption);
});
// 2. write the code to return the correct weight
function calculateWeight(weight, planetName) {
    var planetName = document.getElementById("planets").selectedIndex;
    var weight = document.getElementById("user-weight").value;
    var planetWeight = planets[planetName][1];
    return weight * planetWeight;
}
// 6. Write code to display the message shown in screenshot
function handleClickEvent(e) {
    var userWeight = document.getElementById("user-weight").value;
    var planetName = document.getElementById("planets").selectedIndex;
    var result = calculateWeight();
    document.getElementById("calculate-button").innerHTML = "Calulate";
    document.getElementById("output").innerHTML = "Your weight would be " + result + " lbs.";
}