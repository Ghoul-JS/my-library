//forEach
// const jose = {}
// jose.each = (array, callback) => {
//     for(let i = 0; i < array.length; i++) {
//         callback(array[i]);
//     }
// }


//filter
// const jose = {} 
// jose.filter = (array, callback) => {
//     const newArray = [];
//     for(let i = 0; i < array.length; i++ ) {
//         if(callback(array[i]) === true) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }



//Map
// const jose = {};
// jose.map = (array, callback) => {
//     let newArray = [];
//     for(let i = 0; i < array.length; i++) {
//         callback(array[i]);
//         newArray.push(array[i]);
//     }
// }



// Find
// const jose = {}
// jose.find = (array, callback) => {
//     let newArray = [];
//     for(let i = 0; i < array.length; i++) {
//         if(callback(array[i]) === true) {
//             newArray = array[i];
//             break;
//         } 
//     }
//     return newArray;
// }



//findIndex
// const jose = {}
// jose.findIndex = (array, callback) => {
//     let i, position;
//     for(i = 0; i < array.length; i++ ) {
//         if(callback(array[i]) === true) {
//             position = array[i];
//             break;
//         } 
//     }
//     return position, i;
// }



//contains 
// const jose = {};
// jose.contains = (array, value ) => {
//    for(let i = 0; i < array.length; i++) {
//        if(array[i] == value)
//             return true;
//    }
//    return false;
// }



//pluck
// const jose = {};
// jose.pluck = (list, prop) => {
//     let newArr = [];
//     for(let i = 0; i < list.length; i++) {
//         newArr.push(list[i][prop]);
//     }
//     return newArr;  
// }




// const jose = {};
// jose.without = (array, item) => {
//     for( let i = 0; i < array.length; i++){
//       if(array[i] == item) {
//         array.splice(array.indexOf(item), 1);
//       }
//     }
//     return array;
// }

export default jose