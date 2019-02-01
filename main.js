// Lightning Exercise 2: Write a factory function that creates an
// object that represents a pet. The function should accept two arguments.
// Pet name
// Pet breed
// Invoke the factory function 3 times and place
// each animal in an array stored in a variable named BowWowKennels

BowWowKennels = []

const createDog = (name, breed) => {
    return {
        name: name,
        breed: breed,
    }
}

BowWowKennels.push(createDog("Smithy", "Lab"))
BowWowKennels.push(createDog("Gavalar", "Corgi"))
BowWowKennels.push(createDog("Striker", "Poodle"))

console.log(BowWowKennels)


