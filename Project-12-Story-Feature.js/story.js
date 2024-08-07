var arr = [
  {
    dp:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVnnmLM_v2Qr7fv_u_HROiocyrzKNPZB5rQ&s",
    story:
      "https://images.pexels.com/photos/27594192/pexels-photo-27594192/free-photo-of-ao-ngu-than-vietnam.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    dp:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTetRalytRlQJxRH41gQ8DZOUv7p8xEdp1nDg&s",
    story:
      "https://images.pexels.com/photos/27401857/pexels-photo-27401857/free-photo-of-national-palace-of-pena.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    dp:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOTP6wrVUVF3nHctYJkDdPWrsfqFzWF0jhviyuNWE9s3y3_yzzesQKhgC1U0AwlZ8f7g&usqp=CAU",
    story:
      "https://images.pexels.com/photos/27349052/pexels-photo-27349052/free-photo-of-two-chairs-sit-outside-a-storefront-window-with-the-word-brooklyn-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    dp:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7LUGK5m_MY-6EqAIVWbVbHomO5_Q-fXuErKZLLODdEberVtnL8ssXP0mv7V1Gri8WHcg&usqp=CAU",
    story:
      "https://images.pexels.com/photos/27275513/pexels-photo-27275513/free-photo-of-cappadocia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

var storiyan=document.querySelector("#storiyan")

var clutter="";
arr.forEach((e,idx)=>{
    // Template Literals
    clutter+=`<div id="story">
                <img id="${idx}" src="${e.dp}">
            </div>
            `

})
storiyan.innerHTML=clutter;

storiyan.addEventListener("click",(dets)=>{
    // arr[dets.target.id].story
    document.querySelector("#full-scrren").style.display="block"
     document.querySelector("#full-scrren").style.backgroundImage=`url(${ arr[dets.target.id].story})`

     setTimeout(()=>{
         document.querySelector("#full-scrren").style.display="none"
     },3000)
})