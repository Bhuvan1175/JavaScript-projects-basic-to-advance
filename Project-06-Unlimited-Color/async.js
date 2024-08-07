const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalid;
const startChangeColor = function () {
  if (!intervalid) {
    intervalid = setInterval(ChangeBgColor, 2000);
  }
  function ChangeBgColor() {
    const bhuvi = (document.body.style.backgroundColor = randomColor());
    const colorcode=document.getElementById('colorCode');
    colorcode.innerHTML=bhuvi;

  }
};

const stopChangeColor = function () {
  clearInterval(intervalid);
  intervalid = null;
};
document.getElementById("start").addEventListener("click", startChangeColor);
document.getElementById("stop").addEventListener("click", stopChangeColor);
