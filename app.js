var userInput;
var userName;
userInput = 5;
userInput = "Jon Eirik";
// WITH A TYPE CHECK, A VARIABLE CAN BE ASSIGNED TO VARIABLE OF TYPE UNKNOWN
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occured", 500);
console.log(result);
