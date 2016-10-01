/**
 * @author Johnson, Anne (johnson.anne07@gmail.com)
 * @version 0.0.3
 * @summary HomeCostCalculator || created: 09.19.2016
 * @todo
 */

"use strict";
const PROMPT = require(`readline-sync`);

const BASE_PRICE = 50000;
const BEDROOM_PRICE = 17000;
const BATHROOM_PRICE = 12500;
const GARAGE_CAR_PRICE = 6000;

let numBedrooms, numBathrooms, numGarageCars, numLot, totalCost;

function main(){
    setNumBedrooms();
    setNumBathrooms();
    setNumGarageCars();
    setNumLot();
    setTotalCost();
    printTotalCost();
}

main();

function setNumBedrooms() {
    numBedrooms = Number(PROMPT.question(`\nPlease enter the number of bedrooms: `));
}

function setNumBathrooms() {
    numBathrooms = Number(PROMPT.question(`\nPlease enter the number of bathrooms: `));
}

function setNumGarageCars() {
    numGarageCars = Number(PROMPT.question(`\nPlease enter the number of cars that fit in the garage: `));
}

function setNumLot() {
    numLot = PROMPT.question(`\nPlease enter the lot number: `);
}

function setTotalCost(){
    totalCost = BASE_PRICE + BEDROOM_PRICE * numBedrooms + BATHROOM_PRICE * numBathrooms + GARAGE_CAR_PRICE * numGarageCars;
}

function printTotalCost (){
    console.log(`\nThe total cost of lot ${numLot} is ${totalCost}`);
}