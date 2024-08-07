const clock = document.querySelector("#clock");
setInterval(function () {
  let date = new Date();
  let options={
    hour12:false,
    hour:"numeric",
    minute:"numeric",
    second:"numeric"
  };
  clock.innerHTML = date.toLocaleTimeString('en-US',options);
}, 1000);
