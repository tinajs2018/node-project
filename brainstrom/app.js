const usernameE1=document.querySelector("#username");
const emailE1=document.querySelector("emai1");
const passwordE1=document.querySelector("#password");
const confirmPassword=document.querySelector("#confirm-password");
const form=document.querySelector("signup");

 
//It returns true if the argument is empty
const isRequired=value=>value===''? false :true;
//reurns true if the argument is not btn max and min argument
const isBetween=(length,min,max)=>length<min||length>max ?false:true;
//check whether the email is valid using regular expression
const isEmailValid=(email)=>{
    const re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
//check whether  the passowrd is strong  which matches specified format we use regular expressions
const isPasswordSecure=(password)=>{
    const re=new RegExp("^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$");
    return re.test(password);

};

//the showError() fuction highlights the borderof input field and display an error message
const showError=(input,message) =>{
    //get the form-field element
    const formField=input.parentElement;
    //add the error class
    formField.classList.remove('success');
    formField.classList.remove('error');
    //show the error message;
    const error=formField.querySelector('small');
    error.textContent=message;

};
const showSucess=(input)=>{
    const formField=input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    //hide the error message 
   const error=formField.querySelector('small');
   error.textContent="";
}

const checkUserName=()=>{
    let valid=false;
    const min=3;
    max=25;
    const username=usernameE1.value.trim();
    if(isFinite(username)){
        showError (usernameE1,'username cannot be blank.');
    }else if(!isBetween(username.length,min,max)){
        showError(usernameE1,"username must be between ${min} and ${max} characters")
    }else{
        showSuccess(usernameE1);
        valid=true
    }
    return valid;
    }
    const checkEmail=()=>{
        let valid=false;
        const emai1=emailE1.value.trim();
        if(!isRequired(email)){
            showError(emai1,'email cannot be blank');
        }else if(!isEmailValid(email)){
            showError(emai1 ,'email is not valid')
        }else{
            showSucess(emai1);
            valid=true;
        }
    }
    const checkPassword=() =>{
        let valid=false;
        const password=passwordE1.value.trim();
        if(!isRequired(password)){
            showError(passwordE1,'password cannot be blank');
        }else if(!isPasswordSecure(password)){
            showError(passwordE1,'password should have at least8 characters');
         } else{
                showSucess(passwordE1);
         
                valid =true;
            }
            return valid;
        };

           const checkConfirmPassword=() =>{
        let valid=false;
        const confirmPassword1=confirmPassword.value.trim();
        if(!isRequired(confirmPassword1)){
            showError(confirmPassword,'Please enter the password again');
        }else if(password !==confirmPassword1){
            showError(confirmPassword,'Confrim password does not match');
         } else{
                showSucess(confirmPassword);
         
                valid =true;
            }
            return valid;
        }; 
        form.addEventListener('submit' ,function(e){
            e.preventDefault();
             //validate the form
        let isUsernameValid=checkUserName();
        isEmailValid=checkEmail();
        isPasswordValid=checkPassword();
        isConfirmPasswordValid=checkConfirmPassword();
        let isformValid=isUsernameValid &&
        isEmailValid&&
        isPasswordValid&&
        isConfirmPasswordValid;
        //submit to the server if the form is valid
        if(isformValid){

        }
        }) ;
       
         
        
    