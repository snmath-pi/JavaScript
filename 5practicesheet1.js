// chapter 1
// Q1 create variable of type string and add a number
let a = "maths"
let b = 5
console.log(a + b)

// Q2 typeof to find datatype
console.log(typeof a)
console.log(typeof b)
console.log(typeof (a + b))

// Q3 create const can you change it late?
const x = {
  name: "Saksham",
  section: 2,
  topper: "NO"
}
console.log(x)

// Q4 try to add a new key in const
x['friend'] = "Saksham"
// no error because inside values can be changed
console.log(x)

// Q5 word meaning dictionary of 5 words

const dic = {
  water: "melon",
  pine: "apple",
  ninja: "hattori"
}

console.log(dic)
