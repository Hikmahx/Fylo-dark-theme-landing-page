// UI variables
const form = document.getElementById('email-form');
const submitBtn = document.getElementById('submit-btn'); 
const input = document.getElementById('email');
const err = document.querySelector('.err');

// Listen for submit
form.addEventListener('submit', (e)=>{
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(input.value)){  
      e.target.parentElement.style.position = 'relative';
      const p = document.createElement('p');
      p.className = 'error-p';
      p.appendChild(document.createTextNode('Please enter a valid email address'));
      err.appendChild(p);

      setTimeout(clearText, 900000);
    } else{
      form.submit();
    }

    e.preventDefault();
})

function clearText(){
  document.querySelector('.error-p').remove();
}