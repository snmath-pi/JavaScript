  // N NULL
  // N NUMBER
  // S STRING
  // S SYMBOL
  // B BOOLEAN
  // B BIG INT
  // U undefined

let a = null
let b = 5
let c = true;
let d = BigInt("567") + BigInt("3409238")
let e = "Saksham"
let f = Symbol("I love mathematics")
let g = undefined
let h

console.log(a, b, c, d, e, f, g, h)
console.log(typeof d)
console.log(typeof h)

// objects
// key value pairs 
// non pair data type

const item = {
  "maths": true,
  "Saksham": undefined,
  "Rohan": 3
  
}

console.log(item["maths"])
console.log(item["love"])
