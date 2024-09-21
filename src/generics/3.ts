function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const obj1 = { name: "Alice", age: 30 };
const obj2 = { position: "Developer", country: "USA" };

const mergedObj = merge(obj1, obj2);
console.log(mergedObj);
