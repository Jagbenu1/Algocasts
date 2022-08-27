// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let maxCount = 0;
	let maxChar = '';
    const objs = {};

        for(let obj of str){
         if(!objs[obj]){
           objs[obj] = 1;
         }else{
           objs[obj]++;
         }
            for(let item in objs){
                if(objs[item] > maxCount){
                    maxCount = objs[item];
                    maxChar = item;
                }	
            }
    }
    return maxChar;
}


module.exports = maxChar;
