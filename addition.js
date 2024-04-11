const { rejects } = require("assert");
const { resolve } = require("path");
const { Readline } = require("readline/promises");
const readline = require('node:readline');

// const num1= 9;
// const num2 = 10;
// const sum = num1+num2
// console.log(sum)

function input(q){
    let rl= readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve,reject)=>{
        rl.question(q,num=>{
            rl.close()
            resolve(parseInt(num))
        })
    })
}

async function add(){
    try{
        let a = await input("Enter no 1 \n")
        let b = await input("Enter no 2 \n")
        console.log(`sum of ${a},${b} is ${a+b}`)
    }
    catch(e){
        console.log(e)
    }
}
add()