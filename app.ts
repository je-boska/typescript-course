let userInput: unknown
let userName: string

userInput = 5
userInput = "Jon Eirik"

// WITH A TYPE CHECK, A VARIABLE CAN BE ASSIGNED TO VARIABLE OF TYPE UNKNOWN
if (typeof userInput === "string") {
    userName = userInput
}

// FUNCTION OF TYPE NEVER, WOULD IMPLICITLY BE VOID
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code }

    // Another example of a function of type never:
    
    // while (true) {}
}

generateError("An error occured", 500)
