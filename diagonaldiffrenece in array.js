

function diagonalDifference(arr){
   let  leftdiagonal=0;
   let rightdiagonal = 0;
    for (let i = 0; i < arr.length; i++){
        leftdiagonal += arr[i][i];
        rightdiagonal += arr[i][arr.length-1-i]
       
    }
    return Math.abs(leftdiagonal - rightdiagonal);
}