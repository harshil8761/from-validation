const btn = document.querySelector('.Submit');
btn.addEventListener('click', event => {
    event.preventDefault();
    let isValid = true;

    const a = document.getElementById('name');
    const a1 = document.getElementById('nameError');
    if (!/^[A-Za-z\s]+$/.test(a.value.trim())) {
        a1.textContent = 'Name is Required';
        isValid = false;
    } else {
        a1.textContent = "";
    }

    const b = document.getElementById('email');
    const b1 = document.getElementById('emailError');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.value.trim())){
        b1.textContent = 'Invalid email..';
        isValid = false;
    }else{
        b1.textContent = '';
    }

    const c = document.getElementById('contact').value;
    const c1 = document.getElementById('contactError');
    if (c.length !== 10) {
        c1.textContent = 'Enter 10 Digit Number';
        isValid = false;
    }else{
        c1.textContent = '';
    }

    const d = document.getElementById('password').value;
    const d1 = document.getElementById('passwordError');
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(d)) {
       d1.textContent = 'Password must be at least 8 characters, contain one uppercase letter, one number, and one special character.'; 
       isValid = false;
    }else{
        d1.textContent = '';
    }

    const e = document.getElementById('cpassword').value;
    const e1 = document.getElementById('cpasswordError');
    if (d !== e) {
        e1.textContent = 'Password not a match';
        isValid = false;
    }else{
        e1.textContent = '';
    }


    if (isValid) {
        alert("From Submit Successfully");
    }
});

