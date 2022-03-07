const arr=[4,5,8,10,8,5];
//filter odd numbers

function is0dd(x){
    return x % 2;
}
const output= arr.filter(is0dd);

console.log(output);