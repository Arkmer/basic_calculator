// Welcome to your second weekend challenge!

// We are going to be building a calculator application using jQuery, Node, and Express!!

// The logic for the calculator needs to be implemented on the server. The client side will take in the values (in 2 input text fields) and the type of mathematical operation (selected using a button on the DOM). Each of the numerical values and type of mathematical operation will be bundled up in an object and then sent to the server via a POST. So when the object is sent, it should look something like this:

// {
//     x: 3,
//     y: 4,
//     type: "Add"
// }

// Once the server receives it, build out logic to compute the numbers in 1 of 4 different ways. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, it should be sent back down to the client side app where it should be displayed on the DOM.

// NOTE: You can send an object back as a response to a POST request or follow up the POST with a GET request to retrieve the data. Using a GET request to follow up is more common at Prime and will put you in a better position working on the History feature below.

// Finally, build a 'clear' button that resets the whole experience.

// History:
// Keep a historical record of all math operations on the server. Display a list of all previous calculations on the page when it loads. Update the list when a new calculation is made.

let baseReturn = 'Base Returned';
// let baseReturn = require('../public/scripts/client.js');
module.exports = baseReturn;