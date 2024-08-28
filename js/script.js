function promptfun() {
  let person = prompt("Hello coffee lover,whats your name?");
  if (person != null) {
    alert("Hello "+person+", Welcome to your new addiction! :) ")
    document.getElementById("prompttext").innerHTML=" Lets discover your new addiction, "+person+"!!";
    var timeInterval = 2000;

  setTimeout(function() {
    goToMenuPage(); 
  }, timeInterval);
  }
}
function goToMenuPage(){
  var newURL="menu.html";
  window.location.href=newURL;
}
function validatePass(){
        var pass=document.getElementById("password1").value;
        var isvalid=true;
            // Minimum length of 8 characters
            const minLength = 8;
            // At least one uppercase letter
            const uppercaseRegex = /[A-Z]/;
            // At least one lowercase letter
            const lowercaseRegex = /[a-z]/;
            // At least one digit
            const digitRegex = /\d/;
            // At least one special character (you can customize this pattern)
            const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
            // Check the minimum length
            if (pass.length < minLength) {
                isvalid= false;
            }
            // Check for at least one uppercase letter
            if (!uppercaseRegex.test(pass)) {
                isvalid= false;
            }
            // Check for at least one lowercase letter
            if (!lowercaseRegex.test(pass)) {
                isvalid= false;
            }
            // Check for at least one digit
            if (!digitRegex.test(pass)) {
                isvalid= false;
            }
            // Check for at least one special character
            if (!specialCharRegex.test(pass)) {
                isvalid= false;
            }

        const validationMessage = document.getElementById('validationMessage');

            if (isvalid) {
                validationMessage.textContent = '';
            } else {
                validationMessage.textContent = 'Password must have at least 8 characters, including uppercase and lowercase letters, a digit, and a special character.';
            }
    }
    
function MatchPass(){
        var pass1=document.getElementById("password1").value;
        var pass2=document.getElementById("password2").value;
        var ismatch=true;
        if(pass1!==pass2){
             ismatch=false;
        }
        const matchmess=document.getElementById("matchMessage");
        if (ismatch) {
            matchmess.textContent = '';
        } else {
            matchmess.textContent = "Passwords dont match";
        }
    }
function validateEmail(email){
        const validationMessage = document.getElementById('validationMessage2');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if(emailRegex.test(email)){
            validationMessage.textContent = '';
          }
          else{
            validationMessage.textContent = 'Email is invalid';
          }

    }

    
function goToBeveregesPage(){
        var beverageURL="bevereges.html";
        window.location.href=beverageURL;
    }
function goToBakeriesPage(){
        var beverageURL="bakeries.html";
        window.location.href=beverageURL;
    }
function goToSandwichesPage(){
        var beverageURL="sandwiches.html";
        window.location.href=beverageURL;
    }
// MenuPage
function setupMenuLayer(element) {
        var h3Element = element.querySelector('h3');
    
        if (h3Element) {
            h3Element.style.bottom = '49%';
            h3Element.style.opacity = '1';
        }
    
        element.style.background = 'rgba(207, 145, 52, 0.7)';
        element.style.cursor = 'pointer';
    }
function setupMenuLayer2(element) {
        var h3Element = element.querySelector('h3');
    
        if (h3Element) {
            h3Element.style.bottom = '0%';
            h3Element.style.opacity = '0';
        }
    
        element.style.background = 'transparent';
        element.style.cursor = 'default';
    }
  //end menu page  
function validateForm() {
    var inputs = document.querySelectorAll('#myForm input');
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type !== 'submit' && inputs[i].value === '') {
        alert('Please fill in all fields');
        return false; 
      }
      else{
        alert('Submitted Successfully!');
        return true;
      }
    }

  }
function validateLoginForm() {
    var inputs = document.querySelectorAll('#loginForm input');
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type !== 'submit' && inputs[i].value === '') {
        alert('Please fill in all fields');
        return false; 
      }
      else{
        alert('Submitted');
        window.location.assign("menu.html");
        return true;
       
      }
    }
  }
  function aboutContentHover(){
    var ele=document.getElementById('about-content');
    ele.style.transform="scale(1.1)";
    ele.style.cursor="default";
    ele.style.transition="0.5s ease";
 

  }
  function hide(){
    var ele=document.getElementById('about-content');
    ele.style.transform="scale(1.0)";
    
  }
  function aboutContentHover2(){
    var ele=document.getElementById('about-content2');
    ele.style.transform="scale(1.1)";
    ele.style.cursor="default";
    ele.style.transition="0.5s ease";

  }
  function hide2(){
    var ele=document.getElementById('about-content2');
    ele.style.transform="scale(1.0)";
  }
  function gotosocial(){
    var ele=document.getElementById("soc");
    ele.style.background="rgba(244, 206, 170, 0.847)"
    ele.style.borderRadius="10px"
  }
  function hide3(){
    var ele=document.getElementById("soc");
    ele.style.background="none"
  }
  function change(){
    var newl = document.getElementById("imag");
    newl.src='images/cozy-coffee-shop.jpg';
    var timeInterval = 1000;

  setTimeout(function() {
    newl.src='images/fed9c0f70bbe90d9ac8fd14b55a4551c.jpg';
  }, timeInterval);

  
  
  }
  function change2(){
    var newl = document.getElementById("imag1");
    newl.src='images/bbbb.jpg';
    var timeInterval = 1000;

  setTimeout(function() {
    newl.src='images/cccc.jpg';
  }, timeInterval);
  }
  
  