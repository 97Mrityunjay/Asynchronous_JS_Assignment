const message = document.querySelector(".div1");
const button = document.querySelector(".btn");


function callBack()
{
    setTimeout(()=>{
       message.textContent = `callback executed after two second`;
    }, 2000)
   
}
button.addEventListener("click", callBack);
