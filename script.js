let apple = "apple"
let banana = "banana"
let orange = "orange"

let applePrice = 2
let bananaPrice = 1.5
let orangePrice = 3

let appleCount = 10
let bananaCount = 20
let orangeCount = 5

loop1:
do {
    let result = prompt("Enter Product: ")
    if (result.toLowerCase() === apple) {
        do {
            let count = prompt("Enter the count: ")
            if (count <= appleCount) {
                console.log('odeyeceyiniz mebleg: ', sum(count, applePrice))
                appleCount -= count
                break loop1;
            }
            else {
                console.log("Kifayet qeder mehsul yoxdur")
            }
        } while (true);
    }
    else if (result.toLowerCase() === banana) {
        do {
            let count = prompt("Enter the count: ")
            if (count <= bananaCount) {
                let cost = sum(count, bananaPrice)
                console.log('odeyeceyiniz mebleg: ', cost)
                bananaCount -= count
                break loop1;
            }
            else {
                console.log("Kifayet qeder mehsul yoxdur")
            }
        } while (true);
    }
    else if (result.toLowerCase() === orange) {
        do {
            let count = prompt("Enter the count: ")
            if (count <= orangeCount) {
                console.log('odeyeceyiniz mebleg: ',sum(count, orangePrice))
                orangeCount -= count
                break loop1;
            }
            else {
                console.log("Kifayet qeder mehsul yoxdur")
            }
        } while (true);
    }
    else {
        console.log("Daxil etdiyiniz mehsul movcud deyil")
    }

} while (true);

function sum(count,price)
{
    return count * price
}

console.log('Apple Count: ', appleCount )
console.log('Banana Count: ', bananaCount )
console.log('Orange Count: ', orangeCount )