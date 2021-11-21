// function smartAdd(...args){
//     //here args is array
// return args.reduce((n1,n2)=>n1+n2)
// }
// console.log(smartAdd(10,20,30));
// console.log(smartAdd(10,20));


function smartMax(...args){

    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(smartMax(30,20,50));