    const email = document.getElementById('email-input');
    const error = document.getElementById("error-div");
    const buttonSubmit = document.getElementById("submit-email");

    let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    function testMail(input){
        if(regx.test(input.value)){
            input.style.border = "1px solid #54e6af"
            error.firstElementChild.style.display="none";
            error.lastElementChild.style.display = "block";
        }

        else{
           console.log(error.firstElementChild);
           input.style.border = "1px solid red"
            error.firstElementChild.style.display = "block";
            error.lastElementChild.style.display = "none";
        }
    }

     buttonSubmit.addEventListener('click', (event )=> {
        event.preventDefault();
        testMail(email);
        console.log("Clicked");
     })

    