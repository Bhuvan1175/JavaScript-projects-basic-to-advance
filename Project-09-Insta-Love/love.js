let cont=document.querySelector("#container")
let love2=document.querySelector("#norm")
let love=document.querySelector("#darkLove")

cont.addEventListener("dblclick",()=>{
    love.style.transform="translate(-50%,-50%) scale(2)"
    love.style.color="Red"  
    love.style.opacity=0.8;
    setTimeout(()=>{
        love.style.transform="translate(-50%,-50%) scale(0)"
        love.style.transition="all 0.7s"
   },1500)
})

love2.addEventListener("click",()=>{
    love.style.transform="translate(-50%,-50%) scale(2)"
    love.style.color="Red"  
    love.style.opacity=0.8;
    love2.style.color="Red"
    setTimeout(()=>{
        love.style.transform="translate(-50%,-50%) scale(0)"
        love.style.transition="all 0.7s"
        love2.style.color="rgb(156, 0, 107)"
   },1500)
})