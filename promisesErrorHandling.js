/*Part 3: Promises with error handling

1. Modify the previous HTML file to handle errors using Promises.
2. If the Promise takes longer than 5 seconds to resolve, reject it with a message like "Operation timed out"
3. Display the error message in the div if the Promise is rejected */

const button = document.querySelector(".btn");
const division = document.querySelector(".division")
button.addEventListener("click",()=>{
     let promiseOne = new Promise(function(resolve,reject){
        let timer = 5000;
        setTimeout(function(){
           if(timer>5000)
           {
             reject("Operation timed out");
           }
           else{
             resolve(`Promise resolved after 5 seconds`);
           }
        },timer)
        division.innerHTML = `Loading...`
     });
     promiseOne.then(function(resolveMessage){
        
        division.innerHTML=resolveMessage;
    })
    promiseOne.catch((error)=>{
        division.innerHTML= error;
    })
})