//Reverse a string
let str="Wow";
str= str.toLowerCase();
let strRev="";
for(let i=str.length-1;i>=0;i--){
    strRev+=str[i];
    //strRev+=str.charAt(i);
}
console.log(strRev);
if(str==strRev){
    console.log("It is a palindrome");
}
else{
    console.log("It's not a palindrome");
}
let flag=0;
for(let i=0;i<str.length/2;i++){
    if(str[i]==str[str.length-1-i]){
        flag=1;
    }

}
if(flag==1){
    console.log("It's a palindrome");
}
else{
    console.log("It's not a palindrome");
}