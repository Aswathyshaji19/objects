var dataset=[
    
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:31},
    {district:"tvm",temparature:29},


]
var weather={}
for(let data of dataset){
    let place_name=data.district
    let cur_temp=data.temparature
    if(place_name in weather){
        let old_temp=weather[place_name]
        if(cur_temp>old_temp){
            weather[place_name]=cur_temp
        }
    }
        else{
            weather[place_name]=cur_temp
        }
    }
    console.log(weather);

