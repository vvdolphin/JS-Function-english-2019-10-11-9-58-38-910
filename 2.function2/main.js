function palindrome(message){
    var result = message.split("").reverse().join("");
    if (result==message){
        return true;
    }else{
        return false;
    }


}
palindrome('hello');
palindrome('abcba');