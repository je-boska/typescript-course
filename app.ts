// ASSIGNING TYPES TO AN OBJECT
// const person: {
//     name: string
//     age: number
//     hobbies: string[]
//     role: [number, string]
// } = {
//     name: "Jon Eirik",
//     age: 34,
//     hobbies: [ "Cooking", "Eating" ],
//     role: [2, "author"]
// }

// PUSHING IS ALLOWED ON TUPLES
// person.role.push("admin")
// person.role[1] = 10

enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
    name: "Jon Eirik",
    age: 34,
    hobbies: [ "Cooking", "Eating" ],
    role: Role.ADMIN
}

let favoriteActivities: string[]
favoriteActivities = ["Sports"]

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
    console.log("is admin")
}