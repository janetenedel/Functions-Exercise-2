"use strict"; {

    let position = 0;

    console.log(`You are an one dimensional being, walking on a tightrope. You are starting in position ${position}.`);
    console.log(`LET'S START MOVING!`);
    console.log("");


    function printLocation(move, positiveDirection) {
        if (move > 0 && positiveDirection == true) {
            console.log(`You are facing right. Move ${move} steps forward.`);
            console.log(`Your location is ${position += move}.`);

        } if (move < 0 && positiveDirection == true) {
            console.log(`You are facing right. Move ${move} steps backward.`);
            console.log(`Your location is ${position += move}.`);

        } if (move > 0 && positiveDirection == false) {
            console.log(`You are facing left. Move ${move} steps forward.`);
            console.log(`Your location is ${position -= move}.`);

        } if (move < 0 && positiveDirection == false) {
            console.log(`You are facing left. Move ${move} steps backward.`);
            console.log(`Your location is ${position -= move}.`);
        }

    }
    printLocation(5, true);
    printLocation(-3, true);
    printLocation(10, false);
    printLocation(-5, false);
}

