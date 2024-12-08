const form = document.getElementById('form')
const FirstNameinp = document.getElementById('FirstNameinp')
const Emailinp = document.getElementById('Emailinp')
const Passwordinp = document.getElementById('Passwordinp')
const ConfirmPasswordinp = document.getElementById('ConfirmPasswordinp')
const error_message = document.getElementById('error_message');
const Usernameinp = document.getElementById('Usernameinp');
form.addEventListener('submit', (e) => {

    let errors = []
    if (FirstNameinp) {
        errors = getSignupFormErrors(FirstNameinp.value, Emailinp.value, Passwordinp.value, ConfirmPasswordinp.value)
    } else {
        errors = getLoginFormErrors(Usernameinp.value, Passwordinp.value)
    }
    if (errors.length > 0) {
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})
function getSignupFormErrors(firstName, email, password, confirmPassword) {
    let errors = []
    if (firstName === '' || firstName == null) {
        errors.push('First Name is required')
        FirstNameinp.parentElement.classList.add('incorrect')
    }
    if (email === '' || email == null) {
        errors.push('Email is required')
        Emailinp.parentElement.classList.add('incorrect')
    }
    if (password === '' || password == null) {
        errors.push('Password is required')
        Passwordinp.parentElement.classList.add('incorrect')
    }
    if(password !==confirmPassword) {
        errors.push('Passwords do not match')
        ConfirmPasswordinp.parentElement.classList.add('incorrect')
    }
    return errors
}
const Allvalues = [FirstNameinp, Emailinp, Passwordinp, ConfirmPasswordinp , Usernameinp].filter(input => input != null)
Allvalues.forEach(input => {
    input.addEventListener('input', () => {
      if(input.parentElement.classList.contains('incorrect')){ 
        input.parentElement.classList.remove('incorrect')
        error_message.innerText = ''
    }
 })

    
})

function getLoginFormErrors(username, email , password) {
    let errors =[]
    if (username === '' || username == null) {
        errors.push('Username is required')
        Usernameinp.parentElement.classList.add('incorrect')
    }
    if (email === '' || email == null) {
        errors.push('Email is required')
        Emailinp.parentElement.classList.add('incorrect')
    }
    
    return errors
}