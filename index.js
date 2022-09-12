let roomclean = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Room is Cleaned")
    }, 2000);
})

let removeGarbage = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve("Garbage is remove")
    }, 3000);
})

let getThePrize = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve("Got the prize")
    }, 4000);
})


//lets used chaining mechanism
roomclean.then(function(result){
    console.log(result)
    return removeGarbage
}).then(function(result){
    console.log(result)
    return getThePrize
}).then(function(result){
    console.log(result)
})