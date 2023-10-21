/* Part2: Promises
1. Create a new HTML file with a button and another div element.
2. When the button is clicked, create a promise that simulates a successful asynchronous operation that resolves after 3 second. During this time, display "Loading... in the div" .
3. Once the promise is resolved, update the text in the div to display "Promise resolved after 3 second"*/
const button = document.querySelector(".btn");
button.addEventListener("click",()=>{
     let promiseOne = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },3000)
        division.innerHTML = `Loading...`
     });
     promiseOne.then(function(){
        
        division.innerHTML=`Promise resolved after 3 seconds`;
    })
})


