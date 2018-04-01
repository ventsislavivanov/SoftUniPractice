function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyCheckbox = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');
    let submit = $('#submit');
    let valid = $('#valid');

    let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    let emailRegex = /@.*\./;
    let passwordRegex = /^\w{5,15}$/;
    let companyNumberRegex = /^[1-9]{1}[0-9]{3}$/;
    let isValid = true;
  
    companyCheckbox.on('change', function (params) {
        if (companyCheckbox.is(':checked')) {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        } 
    });

    submit.on('click',function (e) {
        e.preventDefault();

        if(username.val().match(usernameRegex)){
            username.css('border', 'none');
        } else {
            username.css('border-color', 'red');
            isValid = false;
        }

        if(email.val().match(emailRegex)){
            email.css('border', 'none');
        } else {
            email.css('border-color', 'red');
            isValid = false;
        }

        if(password.val() === confirmPassword.val() && password.val().match(passwordRegex))  {
            password.css('border', 'none');
            confirmPassword.css('border', 'none');
        } else {
            password.css('border-color', 'red');
            confirmPassword.css('border-color', 'red');
            isValid = false;
        }

        if($('#company').is(':checked')){
            if(companyNumber.val().match(companyNumberRegex)){
                companyNumber.css('border', 'none');
            } else {
                companyNumber.css('border-color', 'red');
                isValid = false;
            }
        }

        if(isValid) {
            valid.css('display', 'block');
        } else {
            valid.css('display', 'none');
        }
    });
}