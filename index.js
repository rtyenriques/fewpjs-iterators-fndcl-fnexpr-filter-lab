// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
// const findMatching = () => {
//     drivers.filter(n => {
//         return n === "Bobby"
//     })
// }

function findMatching(array, arg) {

    let newArray = array.filter(n=> {
    n = n.toLowerCase();
     return n == arg.toLowerCase();
      
         
    })
 
    return newArray
}

// let findMatching = () => drivers.filter(n=> {
//             return n == 'Bobby';
//         })