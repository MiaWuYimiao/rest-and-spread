//Rewrite function filterOutOdds() in an ES2015 Version
const filterOutOdds = (...arguments) => arguments.filter(num => num%2 ===0);


//find min
const findMin = (...nums) => Math.min(...nums);

//mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => ([...arr, ...(args.map(n => n*2))]);

// remove a random element in the items array and return a new array without that items.
const removeRandom = items => {
    let num = Math.floor(Math.random() * items.length);
    return [...items.slice(0,num), ...items.slice(num+1)];
}

// return a new array with every item in array1 and array2
const extend = (array1, array2) => [...array1, ...array2];

//return a new object with all the keys and values from obj and a new key/value pair
const addKeyVal = (obj, key, val) => ({...obj, [key]:val});

//return a new object with a key removed
const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

//conbine two objects and return a new object
const combine = (obj1, obj2) => ({...obj1, ...obj2});

//return a new object with a modified key and value
const update = (obj, key, val) => ({...obj, [key] : val});

