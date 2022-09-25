//Back-end complete function Template for javascript


/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number} N
 * @returns {boolean}
*/
class Solution {
    //Function to check if two arrays are equal or not.
    check(A,B,N){
        
        //using a Map to store frequency of elements.
        let mp = new Map();
        
        //incrementing frequencies of elements present in first array in Map.
        for(let i=0;i<N;i++){ 
            if(!mp.has(A[i]))
                mp.set(A[i],0);
            mp.set(A[i],mp.get(A[i])+1);
        }
        
        //decrementing frequencies of elements present in second array in Map.
        for(let i=0;i<N;i++){ 
            if(!mp.has(B[i]))
                mp.set(B[i],0);
            mp.set(B[i],mp.get(B[i])-1);
        }
        
        //iterating over the Map.
        for (let [key, value] of mp) {
            
            //if frequency of any element in Map now is not zero it means that
            //its count in two arrays was not equal so the arrays are not equal.
            if(value!=0) {
            
                //returning false since arrays are not equal.
                return false;
            }
        }
        //returning true if arrays are equal.    
        return true;
    }
    
}