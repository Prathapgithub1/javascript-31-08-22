//this is an multiline function 
const arrow=(a,b) => {
    console.log("iam a arrow function")
    console.log(a+b)
}
arrow(1,3)

const sum=(a,b) => a+b
// functions 
function normal(){
    console.log(this)
}
normal()
