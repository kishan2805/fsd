let f1=[1,2,3,4,5]
console.log(f1)

// push
f1.push(6)
console.log(f1)
// pop()
f1.pop()
console.log(f1)

// pushfront
f1.unshift(0)
console.log(f1)

// popfront
f1.shift()
console.log(f1)

//splice
// it removes the old element and insert the new set of elements at that position (start,end,elements to be inserted)
f1.splice(1,3,100,200)
console.log(f1)

// slice
let f2=f1.slice(1,3)
console.log(f1)
console.log(f2)

// concat
let f3=f2.concat(f1)
console.log(f3)

// // foreach
// console.log("for each: ")
// f1.forEach(function(f2))={
    
// }

// find
// console.log(f1.find(f2))

// // sort
// let f4=f1.sort()
// console.log(f4)

