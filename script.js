    let email = document.querySelector('input[type = "email"]');
    let submitButton = document.querySelector(".submitButton");

    let successCard = document.querySelector(".success");
    let signCard = document.querySelector(".sign-up");

    let submittedEmail = document.querySelector(".emailJs")
    let dismissButton = document.querySelector(".dismissBtn")

    let errorMess = document.querySelector(".error-message");

/*---------------------------------------------------------*/

submitButton.addEventListener("click", submitForm);
dismissButton.addEventListener("click", toggleCards);

// put the input element to its original color when the user types again
email.addEventListener("input", e => {
    email.classList.remove("error");

  });

function toggleCards() {
    successCard.classList.toggle("hidden");
    signCard.classList.toggle("hidden");
 }


 function validateEmail(email) {
    return email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
};

function showError() {
    errorMess.classList.remove("hidden");
    email.classList.add("error");   
}


function submitForm(e) {
    e.preventDefault();
    
    if(validateEmail(email.value)) {
        submittedEmail.innerHTML = email.value;
        toggleCards();

        errorMess.classList.add("hidden");
        email.classList.remove("error");
        email.value = "";
    }
    else{
         showError();
    }
} 
