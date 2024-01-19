// Object1
// const me = {
//   firstName: "Sultonqul",
//   lastName: "Nortoyloqov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// for (const property in me) {
//     console.log(`${property}: ${me[property]}`);
// }


// Object2 ****
// let name = prompt('n=')
// function createDagree(name) {
//     const Degree = {}
//     for (let i=1; i<=name; i++) {
//         Degree[i] = i*i
//     }
//     return {
//         Degree    
//     };
// }
// console.log(createDagree(name));


// Object3
// let name = prompt('n=')
// let values = 0
// let properties = 0
// function createDagree(name) {
//     const Degree = {}
//     for (let i=1; i<=name; i++) {
//         Degree[i] = i*i
//     }
//     for (let i=1; i<=name; i++) {
//         values += Degree[i]
//         properties += i
//     }
//     return {
//         Degree, values, properties
//     };
// }
// console.log(createDagree(name));


// Object4
// let str = ["Sultonqul", "Safarmurod", "O’rol", "Jahongir"]
// function StrLength(name) {
//     let Obj = {}
//     for (let i=0; i<name.length; i++) {
//         Obj[name[i]] = name[i].length
//     }
//     return Obj
// }
// let x = StrLength(str) 
// console.log(x);


// Object5
// let Obj = {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000}
// function Summ (obj) {
//     let s = 0
//     for (let i in obj) {
//         s += obj[i]
//     }
//     return s
// }
// let x = Summ(Obj)
// console.log(x);


// Object6
// let obj = {abc: 1, 123: 2, d: 5}
// function isSting (param) {
//     let isStr = true
//     for (let i in param) {
//         if (!Number.isInteger(i)) {
//             isStr = false
//         }
//     }
//     return isStr
// }
// let x = isSting(obj)
// console.log(x);