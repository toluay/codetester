function superReduceStrings(s){
    result = [];
    for (var i = 0; i<s.length;1++){
        if (result.length == 0 || result[-1] != s[i]){
            result.push(s[i]);
        }
        else {
            result.pop(); 
        }


    }
    if (result.length == 0){
        return "Empty String";
    }
    else return result.join("");

}
    