/*Q1*/
function showRating (rating) {
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratings += "* ";
        if (Math.floor(rating) - 1) {
            ratings += " ";
        }
    }

    if (!Number.isInteger(rating)) {
        ratings += ".";
    }
    return ratings;

}

console.log(showRating(4.5));

/*Q2*/
function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => a - b);
}

console.log(sortLowToHigh([1, 5, 0, 10, 4]));

/*Q3*/
function sortHighToLow(numbers) {
    return numbers.sort((a, b) => b.price - a.price);
}

console.log(
    sortHighToLow([
    { id: 5, price: 50 },
    { id: 5, price: 0 },
    { id: 5, price: 500 },
    ])
);

/*Q5*/
async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    const result = await promise.json()

    const posts = result.filter(element => element.userId === userId)
    
    console.log(posts);
}

postsByUser(4);

/*Q6*/
async function firstSixIncomplete(usedId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const result = await promise.json()

    const incompleteTasks = result.filter(element => !element.completed).slice(0, 6);

    console.log(incompleteTasks);
}

firstSixIncomplete(6);
