console.log("Javascript var let const")

// var a = 35
// var b = "Saksham"
// var c = undefined

// var is globally scope and let and const are block scoped 
// block scoped means let's say we give some 
// var can be updated redecleard
// let can only be decleard once but can be updated
// const never changed
let a = 'saksham'
{
  let a = 5
  console.log(a)
}
console.log(a)
// first 5 printed then saksham (content of block first!)
let c = null
let d = undefined
const author = "SAKSHAM NEGI"
console.log(author)
