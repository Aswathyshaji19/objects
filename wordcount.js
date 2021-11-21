// print word count
//hello -1 time hai- 1 time
var text="hello hai hello hai"
var words=text.split(" ")
// here word becomes the key
var word_count={}
for(let word of words){
    if(word in word_count ){
        word_count[word]+=1
    }
    else{
        word_count[word]=1
    }
}
console.log(word_count);


// another method

text.split(" ").map(word=>word in word_count?word_count[word]+=1:word_count[word]=1)





