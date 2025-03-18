document.getElementById("userform").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let formData = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        age: document.getElementById("age").value,
        dob: document.getElementById("dateofbirth").value,
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        email: document.getElementById("email").value,
        address1: document.getElementById("address1").value,
        address2: document.getElementById("address2").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        pincode: document.getElementById("pincode").value,
        phone: document.getElementById("phone").value,
        job: document.getElementById("job").value
    };

    
    console.log("Submitted Form Data:", formData);
    document.getElementById("userform").reset();

});

