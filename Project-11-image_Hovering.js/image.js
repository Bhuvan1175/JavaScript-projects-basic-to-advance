let elem=document.querySelectorAll(".elem")

elem.forEach((i)=>{


    
    i.addEventListener('mouseenter',()=>{
        i.childNodes[3].style.opacity="1"

    })
    i.addEventListener('mouseleave',()=>{
        i.childNodes[3].style.opacity="0"
    })
    i.addEventListener('mousemove',(e)=>{
        i.childNodes[3].style.left=e.x+"px"
        i.childNodes[3].style.top=e.y+"px"
    })
})