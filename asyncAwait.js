/* Part 4: Async/Await

1. Create a new HTML file with a button and a div element
2. When the button is clicked, create an asynchronous function that simulates a network request using setTimeout. This function should pause for 4 seconds and then return a message like "Data received successfully.
3. Use the await keyword withn an async function to call this asynchronous function and update the text in the div with the message once the operation is complete"*/

const button = document.querySelector(".btn");
// console.log(button);
const division = document.querySelector(".division");
// console.log(division);
function fun(){
    return new Promise((resolve, reject)=>{
        let error = false;
        setTimeout(()=>{
            if(!error){
                resolve(`Data received successfully`);
            }
            else{
                reject(`error`);
            }

        },4000)
    })
}
button.onclick = function(){
   
async function getData(){
    try{
     let data = await fun();
     division.innerHTML= data
    }
    catch{
     console.log(await fun());
    }
 }
getData() ;

}
