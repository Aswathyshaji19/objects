var pattern="ABAC"// it will changes to a pattern=[A,B,A,C]
var finder={} // {A:1,B:1}
for(let char of pattern){
    // char=A
if(char in finder){
    console.log(char,"first recursive character");
    break;
}
else{
    finder[char]=1
}
}