// reverse an array in groups of size 
function reverse(arr, n, k){

 for (let i = 0; i <n ; i += k ){
    let left = i;
    let right = Math.min(i+k-1, n-1);
    let temp;

    while (left <right){
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left +=1;
        right -= 1
    }
 }
 return arr ;
}

///driver code 

let arr = new Array(1,2,3,4,5,6,7,8);
let k = 3;
let n =  arr.length;
let arr1 = reverse(arr, n, k);

