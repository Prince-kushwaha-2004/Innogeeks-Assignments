body=document.querySelector("body")
button=document.querySelector("button")
button.addEventListener("click",()=>{
    color=document.querySelector("input").value;
    body.style.backgroundColor=color;
})