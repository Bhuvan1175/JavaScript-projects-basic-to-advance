const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (
    (height == "" || height < 0 || isNaN(height)) &&
    (weight == "" || weight < 0 || isNaN(weight))
  ) {
    results.innerHTML = "Please enter a valid number";
    //alert(`Please Enter A Valid Height Or Weight `);
  }else{
    const bmi = (weight / ((height * height)/10000)).toFixed(2);
    //results.innerHTML=`<span>${bmi}</span>`
    if(bmi<18.6){
       message=`<span>Your BMI Is ${bmi} So You Are Underweight</span>`
       results.innerHTML=`<span style="color:blue;">${message}</span>`
      }else if(bmi>=18.6 && bmi<=24.9){
        message=`<span>Your BMI Is ${bmi} So You Are Normal</span>`
        results.innerHTML=`<span style="color:green;">${message}</span>`
      }
      else{
        message=`<span>Your BMI Is ${bmi} So You Are Overweight</span>`
        results.innerHTML=`<span style="color:red;">${message}</span>`
      }
  }

});

