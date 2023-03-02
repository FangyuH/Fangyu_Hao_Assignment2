/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const doubleItems = (itemsObject) =>
  itemsObject.map((ele) => ({
    quantity: ele.quantity * 2,
    price: ele.price * 2,
  }));
console.log(doubleItems(itemsObject));

const filterItems = (itemsObject) =>
  itemsObject.filter((ele) => {
    return ele.quantity > 2 && ele.price > 300;
  });

console.log(filterItems(itemsObject));

const total = (itemsObject) =>
  itemsObject.reduce((acc, ele) => {
    return acc + ele.quantity * ele.price;
  }, 0);

console.log(total(itemsObject));
/*
  Question 2
  Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
  */

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

// Convert the string to array at first. Rplace all the non-alphabet characters to a space. Remove all extra spaces. Join the array and convert the string to all lowercase.
const removeNonAlphabet = (string) => {
  const toArray = string.split(" ");
  return toArray
    .map((ele) => ele.replace(/[^a-zA-Z ]/g, " "))
    .filter((word) => word !== "")
    .join(" ")
    .toLowerCase();
};

console.log(removeNonAlphabet(string));

/*
  Question 3
  Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
  */

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

const mergeArrays = (first, second) => {
  const map = new Map();

  for (const obj of first) {
    map.set(obj.uuid, { name: obj.name });
  }

  for (const obj of second) {
    const existingObj = map.get(obj.uuid);
    map.set(obj.uuid, { ...existingObj, role: obj.role });
  }

  const merged = Array.from(map, ([uuid, obj]) => ({
    uuid: Number(uuid),
    ...obj,
  })).sort((a, b) => a.uuid - b.uuid);

  for (const obj of merged) {
    obj.role = obj.role || null;
    obj.name = obj.name || null;
  }

  const output = merged.map((obj) => ({
    uuid: obj.uuid,
    role: obj.role,
    name: obj.name,
  }));

  return output;
};

console.log(mergeArrays(first, second));
