// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while(index < array.length){
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//     //step #1: create empty array to hold chunks
//     const chunked = [];
//     //step #2: for each all elements in the array
//     for(let element of array){
//         //step #3: retrieve last elemnt in chunked
//         const last = chunked[chunked.length-1];
//         //step #4: if !last or last.length is equal to size 
//         if(!last || last.length === size){
//             //step #4.1: push new chunk with current element (only if here)
//             chunked.push([element])
//         }else{
//             //step #4.2: else add current element into chunk
//             last.push(element);
//         }
//     }
//     return chunked;
// }