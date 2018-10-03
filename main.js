let fs = require("fs")
var fetch = require("node-fetch");


let categoryOne = fetch("http://jservice.io/api/category?id=42")
    .then(res => res.json())
    .then(data => {
        let newData = data
        console.log(newData)
    })
fs.writeFileSync('categories.json', categoryOne)

let categoryTwo = fetch("http://jservice.io/api/category?id=37")
    .then(res => res.json())
    .then(data => {
        let newData = data
        console.log(newData)
    })
fs.writeFileSync('categories.json', categoryTwo)

let categoryThree = fetch("http://jservice.io/api/category?id=139")
    .then(res => res.json())
    .then(data => {
        let newData = data
        console.log(newData)
    })
fs.writeFileSync('categories.json', categoryThree)

let categoryFour = fetch("http://jservice.io/api/category?id=1079")
    .then(res => res.json())
    .then(data => {
        let newData = data
        console.log(newData)
    })
fs.writeFileSync('categories.json', categoryFour)

let categoryFive = fetch("http://jservice.io/api/category?id=777")
    .then(res => res.json())
    .then(data => {
        let newData = data
        console.log(newData)
    })
fs.writeFileSync('categories.json', categoryFive)

let categorySix = fetch("http://jservice.io/api/category?id=539")
    .then(res => res.json())
    .then(data => {
        let newData = data
        console.log(newData)
    })
fs.writeFileSync('categories.json', categorySix)