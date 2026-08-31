// Data Fetching

fetch("https://randomuser.me/api/")
.then(function(rawdata){
    return rawdata.json();
})
.then (data => {
    console.log(data.results[0].name.firstname);  
})
.catch ( (err)=>{
    console.log(err);
});