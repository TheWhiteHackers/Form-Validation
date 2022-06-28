const form = document.getElementById("form");
const myuser = document.getElementById("user");
const myemail = document.getElementById("email");
const myphone = document.getElementById("phone");
const mypass = document.getElementById("pass");



// function error(input, message){
//     input.className="form-control is-invaild"
//     console.log("invaild");
//     var mymessage = input.nextElementSibling;
//     console.log(mymessage);
//     mymessage.innerText= message;
//     mymessage.className="invaild-feedback"
// }

function error(input,message){
    input.className="form-control is-invalid";
    console.log(message);
    const divTag=input.nextElementSibling;
    divTag.innerText=message;
    divTag.className="invalid-feedback";

}


function success(input){
    input.className="form-control is-valid"
}


// form.addEventListener("submit", function(e){
//     e.preventDefault();
// if(myuser.value=" "){
//     error(myuser, "Username is required")
// }
// else{
//     success(myuser)
// }


//});

//regx codes
function validateEmail(email) {
     const re = /^w+([.-]?w+)@w+([.-]?w+)(.w{2,3})+$/
     return re.test(String(email).toLowerCase());
}

// function validatePhoneNumber(input_str) {
//     var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
//     return re.test(input_str);
//   }

form.addEventListener("submit",function(e){
    e.preventDefault();
    //username
    if (myuser.value===""){
       error(myuser,"username is required") 
      } else{
        success(myuser)
      }
      //email
      if (myemail.value===""){
        error(myemail,"email is required") 
        } else if ( !validateEmail(myemail)){
        error(myemail,"please enter the email in a xxxxx@xxx.com format")
    } else{
        success(myemail)
    }
    //phone number
    if (myphone.value===""){
        error(myphone,"phone number is required") 
        // } else if ( !validatePhoneNumber(myphone)){
        // error(myphone,"please enter the phone in a xxx-xxx-xxxx format")
    } else{
        success(myphone)
    }
    //password
    if (mypass.value===""){
        error(mypass,"password is required") 
       } else{
         success(mypass)
       }

    
    
    
    });
