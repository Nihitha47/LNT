
let n=3;
for(let i=1;i<=n;i++){
    let str="";
    for(let k=1;k<=n-i;k++){
        str+=" ";
    }
    for(let j=1;j<=(2*i-1);j++){
        str+="*";
    }

    console.log(str);
}
//reverse pyramid
for(let i=n;i>=1;i--){
    let str="";
    for(let k=1;k<=n-i;k++){
        str+=" ";
    }
    for(let j=1;j<=(2*i-1);j++){
        str+="*";
    }
    console.log(str);
}
