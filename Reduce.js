const arr=[5,7,8,9,10];
//sum or max
function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];

    }
    return sum;
}

console.log(findSum(arr));
const output=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;

},0);
console.log(output);