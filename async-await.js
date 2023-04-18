// Promises Code
console.log('Person1 : shows ticket');
console.log('Person2 : shows ticket');

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Ticket');
    }, 3000)
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('Wife : I have the tickets');
    console.log('Husband : Lets go in');
    console.log('Wife : I am hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log('Husband : I got some popcorn');
    console.log('Husband : Lets go in');
    console.log('Wife : I need butter on my popcorn');
    return new Promise((resolve, reject) => resolve(`${t} butter`));
});

const getColdDrinks = getButter.then((t) => {
    console.log('Husband : I got butter on the popcorn');
    console.log('Husband : Lets go in');
    console.log('Wife : I need cold drinks along with popcorn');
    return new Promise((resolve, reject) => resolve(`${t} cold drinks`));
});

getColdDrinks.then((t) => console.log(t));

console.log('Person4 : shows ticket');
console.log('Person5 : shows ticket');












// Async Await Code
console.log('Person1 : shows ticket');
console.log('Person2 : shows ticket');

const preMovie = async () => {

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Ticket'), 3000);
});

const getPopcorn = new Promise((resolve, reject) => resolve(`Popcorn`));

let ticket = await promiseWifeBringingTicks;

console.log(`Wife : I have the ${ticket}`);
console.log('Husband : Lets go in');
console.log('Wife : I am hungry');

let popcorn = await getPopcorn;

const getButter = new Promise((resolve, reject) => resolve(`Butter`));

console.log(`Husband : I got some ${popcorn}`);
console.log('Husband : Lets go in');
console.log('Wife : I need butter on my popcorn');

let butter = await getButter


const getColdDrinks = new Promise((resolve, reject) => resolve(`Cold Drinks`));

console.log(`Husband : I got ${butter} on the popcorn`);
console.log('Husband : Lets go in');
console.log('Wife : I need cold drinks along with popcorn');

let coldDrinks = await getColdDrinks;

console.log(`Husband : I got ${coldDrinks} along with popcorn`);
console.log('Husband : Anything else darling?');
console.log('Wife : Lets go we are getting late');
console.log('Husband : Thank you for the reminder *grins*');

return ticket;

}

preMovie().then((m) => console.log(`Person3 : shows ${m}`));

console.log('Person4 : shows ticket');
console.log('Person5 : shows ticket');









// Promise.all code
console.log('Person1 : shows ticket');
console.log('Person2 : shows ticket');

const preMovie = async () => {

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Ticket'), 3000);
});

const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

const getCandy = new Promise((resolve, reject) => resolve('candy'));

const getCoke = new Promise((resolve, reject) => resolve('coke'));

let ticket = await promiseWifeBringingTicks;

let [popcorn, candy, coke] = await Promise.all([getPopcorn,getCandy,getCoke]);

console.log(`${popcorn}, ${candy}, ${coke}`);
return ticket;
}

preMovie().then((m) => console.log(`Person3 : shows ${m}`));

console.log('Person4 : shows ticket');
console.log('Person5 : shows ticket');