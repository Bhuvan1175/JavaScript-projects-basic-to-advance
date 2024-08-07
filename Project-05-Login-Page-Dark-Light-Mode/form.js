const modeToggle= document.getElementById('modeToggle');
modeToggle.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    
    const sunIcon=document.getElementById('sunIcon');
    const moonIcon=document.getElementById('moonIcon');

    if(document.body.classList.contains('dark-mode')){
        sunIcon.style.display="none";
        moonIcon.style.display="inline";
        this.style.color="yellow";
    }else{
        sunIcon.style.display="inline";
        moonIcon.style.display="none";
        this.style.color="black";
    }
})
const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const email =document.querySelector('#email').value;
    const password=document.querySelector('#password').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        alert('Please enter a valid email address');
    }
    else if(password==""){
        alert('Please enter a valid password');
    }
    else{
        alert('You have successfully logged in');
    }
})