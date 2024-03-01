// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Function to display the result
function displayResult(area) {
    console.log("The area of the rectangle is: " + area);
}

// Define the dimensions of the rectangle
var length = 5;
var width = 3;

// Calculate the area of the rectangle
var area = calculateRectangleArea(length, width);

// Display the result
displayResult(area);
