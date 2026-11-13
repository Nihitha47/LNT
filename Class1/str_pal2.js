let str = "1001";
let flag = 0;

for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) {
        console.log("It's not a palindrome");
        break;
    } else {
        flag++;
    }
}

if (flag == str.length / 2) {
    console.log("It's a palindrome");
}