 /*
 Name: Yug Patel
Name of File: hw4.js
Date Created: 12/3/24
Date last edited: 12/3/2024
Version: 1.2
Description: Medical Patient Registration Form
*/
 /////////// DATE //////////////
 const d = new Date();
 let doutput = d.toLocaleDateString();
 document.getElementById("today").innerHTML = doutput;
 
 ///////////// SLIDER //////////////////
 let slider = document.getElementById("range");
 let output = document.getElementById("range-scale");
 output.innerHTML = slider.value;
 
 slider.oninput = function(){
     output.innerHTML = this.value;
 };
 
 ////////////// First Name Validation //////////////
 function fnameValidation()
 {
     fname = document.getElementById("fname").value.trim();
     var namePattern = /^[A-Za-z'-]+$/;
 
 // Check if name is empty //
     if(fname == "")
     {
         document.getElementById("fname-error").innerHTML = 
         "First name must not be empty";
         return false;
     }else if(fname !=""){
          //Check if name match pattern
      if(!fname.match(namePattern)){                   
         document.getElementById("fname-error").innerHTML = 
         "Letters, apostrophes, and dashed only";
         return false;
      }else if(fname.length < 2){
         //Check if name is at least 2 characters 
         document.getElementById("fname-error").innerHTML = 
         "First name must be at least 2 characters";
         return false;
      }else if(fname.length > 30){
         //Check if name is at most 30 characters 
         document.getElementById("fname-error").innerHTML = 
         "First name must not exceed 30 characters";
         return false;
      }else{
         document.getElementById("fname-error").innerHTML = "";
         return true;
      }
     }
 
 }
 
 /////////////////////// Lastname Validation ////////////////////////
 function lnameValidation(){
     lname = document.getElementById("lname").value.trim();
     var namePattern = /^[A-Za-z2-5'-]+$/;
 
 // Check if name is empty //
     if(lname == "")
     {
         document.getElementById("lname-error").innerHTML = 
         "Last name must not be empty";
         return false;
     }else if(lname !=""){
          //Check if name match pattern
      if(!lname.match(namePattern)){                   
         document.getElementById("lname-error").innerHTML = 
         "Letters, apostrophes, and dashed only";
         return false;
      }else if(lname.length < 2){
         //Check if name is at least 2 characters 
         document.getElementById("lname-error").innerHTML = 
         "Last name must be at least 2 characters";
         return false;
      }else if(lname.length > 30){
         //Check if name is at most 30 characters 
         document.getElementById("lname-error").innerHTML = 
         "Last name must not exceed 30 characters";
         return false;
      }else{
         document.getElementById("lname-error").innerHTML = "";
         return true;
      }
     }
 }
 
 
 ////////////////// Middle Initial Validation ///////////////////
 function mnameValidation(){
     mname = document.getElementById("mname").value;
     var namePattern = /^[A-Z]/;
 
     mname = mname.toUpperCase();
     document.getElementById("mname").value = mname;
 
     if(mname.length > 0){
         if(!mname.match(namePattern)){
             document.getElementById("mname-error").innerHTML = 
             "Invalid Middle Initial";
             return false;
         }else{
             document.getElementById("mname-error").innerHTML = "";
             return false;
         }
     }
     return true;
 }
 
 
 function emailValidation()
 {
     email = document.getElementById("email").value;
     var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     
     if(email == "")
     {
         document.getElementById("email-error").innerHTML = "Email address must not be empty";
         return false;
     } else if(!email.match(emailPattern)){
         document.getElementById("email-error").innerHTML = "Please enter a valid email address";
         return false;
     }else{
         document.getElementById("email-error").innerHTML = "";
         return true;
     }
 }
 
 ///////// DOB ////////
 function validateDob() 
 {
     dob = document.getElementById("dob");
     let date = new Date(dob.value);
     let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);
 
     if(date > new Date())
     {
         document.getElementById("dob-error").innerHTML=
         "Date can not be in the future";
         dob.value = "";
         return false;
     } 
     else if(date < new Date(maxDate))
     {
         document.getElementById("dob-error").innerHTML = 
         "Date can not be more than 120 years ago";
         dob.value = "";
         return false;
     }
     else
     {
         document.getElementById("dob-error").innerHTML = ""; 
         return true;
     }
 }
 
 
 /////////// SSN /////////////
 function validateSSN()
 {
     var ssn = document.getElementById("ssn").value;
 
     /// Insert a hyphen after every 3 and 5 digits 
     ssn = ssn.replace(/(\d{3})(\d{2})/g, "$1-$2-");
     document.getElementById("ssn").value = ssn;
 
     // Regular expression to validate ssn////
     const ssnRegex = /^(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
 
     if(!ssnRegex.test(ssn))
     {
         document.getElementById("ssn-error").innerHTML = 
         "Please enter a valid Social Security Number (e.g 123-45-6789)";
         return false;
     }
     else 
     {
         document.getElementById("ssn-error").innerHTML = "";
         return true;
     }
 }
 
 
 
 
 /////// PHONE //////////
 
 function validatePhone()
 {
     const phoneInput = document.getElementById("phone");
     const phone = phoneInput.value.replace(/\D/g, "") //Remove all non-digit characters
 
     if(phone.length !== 10)
     {
         document.getElementById("phone-error").innerHTML = "Invalid Phone Number";
         return false;
     }
 
     const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6);
     phoneInput.value = formattedPhone;
     document.getElementById("phone-error").innerHTML = "";
     return true;
 }
 
 
 /////////// Address Validation /////////////////
 
 function addressValidation()
 {
     address = document.getElementById("address1").value.trim();
 
     if(!address){
         document.getElementById("address-error").innerHTML = "Address is required";
         return false;
     }else {
         document.getElementById("address-error").innerHTML = "";
         return true;
     }
 }
 
 
 //////////// City Validation //////////////////
 function cityValidation()
 {
     city = document.getElementById("city").value.trim();
 
     if(!city){
         document.getElementById("city-error").innerHTML = "City is required";
         return false;
     }else {
         document.getElementById("city-error").innerHTML = "";
         return true;
     }
 }
 
 ///// ZIP CODE /////////
 
 function validateZIP()
 {
     const zipInput = document.getElementById("zip");
     let zip = zipInput.value.replace(/[^\d-]/g, "") // Remove all non-digit and non-hyphen characters
 
     if(!zip)
     {
         document.getElementById("zip-error").innerHTML = "Zip code is required";
         return false;
     }
 
     if(zip.length > 5)
     {
         zip = zip.slice(0,5); //Only keeps first 5 digits of the ZIP code
     }
     
     zipInput.value = zip;
     document.getElementById("zip-error").innerHTML = "";
     return true;
 }
 
 
 
 //////// USER ID ////////
 
 
 function validateUserId()
 {
     userId = document.getElementById("userid").value;
 
     userId = userId.toLowerCase(); //Converting the UserId to lowercase//
 
    document.getElementById("userid").value = userId; //Redisplay the userId in lowercase//
 
    if(userId.length == 0)
    {
     document.getElementById("userid-error").innerHTML = "User ID can not be empty";
     return false;
    } 
    
    // Check that User ID does not start with a number ??
    if(!isNaN(userId.charAt(0)))
    {
     document.getElementById("userid-error").innerHTML = "User ID can not start with a number";
     return false;
    }
 
    //// Check that User ID only contains letters, numbers or underscores ///////////
    let regex = /^[a-zA-Z0-9_]+$/;
    if(!regex.test(userId))
    {
     document.getElementById("userid-error").innerHTML = "User ID can only contains letters, numbers, or underscores";
     return false;
    }
    else if(userId.length < 5)
    {
     document.getElementById("userid-error").innerHTML = "User ID must be at least 5 characters";
     return false;
    }
    else if(userId.length > 30)
    {
     document.getElementById("userid-error").innerHTML = "User ID must not exceed 30 characters";
     return false;
    }
    else
    {
     ///// If all checks pass, User ID is valid //////
     document.getElementById("userid-error").innerHTML = "";
     return true;
    }
 }
 
 
 
 ///////// PASSWORD ////////////
 function validatePassword()
 {
     const pwd = document.getElementById("pwd").value;
     const user = document.getElementById("userid").value;
     
     // Initialize an array 
     const errorMessages = [];
 
     /// Check for lower case letter ///
     if(!pwd.match(/[a-z]/))
     {
         errorMessages.push("Enter at least 1 lowercase");
         errorFlag = 1;
     }
 
     /// Check for Capital letters ///
 
     if(!pwd.match(/[A-Z]/))
     {
         errorMessages.push("Enter at least 1 capital letter");
     }
 
     /// Check for numbers ///
    
     if(!pwd.match(/[0-9]/))
     {
         errorMessages.push("Enter at least 1 number");
     }
 
     /// Check for Special Characters /// 
     
     if(!pwd.match(/[!\@#\$%&*\-_\\.+\(\)]/))
     {
         errorMessages.push("Enter at least 1 special character");
     }
 
   /// Check for length ///
 
   if(pwd.length < 8)
   {
     errorMessages.push("Enter a minimum of 8 characters");
     }
 
   /// Checks that password and UserID do not match ///
     
   if(pwd == user || pwd.includes(user))
   {
     errorMessages.push("Password cannot equal UserID");
     }
     
     // Display Error Message if there are any
     const errorContainer = document.querySelector(".pwd-message");
     errorContainer.innerHTML = errorMessages
     .map((message) => `<span>${message}</span><br/>`)
     .join("");
    
     //Return true if no error
     return errorMessages.length === 0;
 }
 
 //////// CONFIRM PASSWORD //////////
 
 function confirmPassword()
 {
     pwd1 = document.getElementById("pwd").value;
     pwd2 = document.getElementById("pwd2").value;
 
     if(pwd2 != pwd1)
     {
         document.getElementById("pwd2-error").innerHTML  = "Passwords do not match";
         return false;
     }else{
         document.getElementById("pwd2-error").innerHTML = "";
         return true;
     }
 }
 
 
 //////////// Re-display user input ///////////////
 function reviewInput()
 {
     var formcontnet = document.getElementById("signup");
     var formoutput;
     var datatype;
     var i;
     formoutput = "<table class='output'><th colspan = '3'> Your Information</th>";
     for(i = 0; i < formcontnet.length; i++)
     {
         if(formcontnet.elements[i].value != "")
         {
             datatype = formcontnet.elements[i].type;
             switch(datatype)
             {
                 case "checkbox":
                     if(formcontnet.elements[i].checked)
                     {
                         formoutput = formoutput + "<tr><td align= 'right'>" + formcontnet.elements[i].name + "</td>";
                         formoutput = formoutput + "<td class= 'outputdata'>&#x2713;</td></tr>";
                     }
                     break;
                 case "radio":
                     if(formcontnet.elements[i].checked)
                     {
                         formoutput = formoutput + "<tr><td align= 'right'>" + formcontnet.elements[i].name + "</td>";
                         formoutput = formoutput + "<td class= 'outputdata'>" + formcontnet.elements[i].value + "</td></tr>";
 
                     }
                     break;
                 case "button":
                 case "submit":
                 case "reset":
                     break;
                     default:
                         formoutput = formoutput + "<tr><td align='right'>" + formcontnet.elements[i].name + "</td>";
                         formoutput = formoutput + "<td class= 'outputdata'>" + formcontnet.elements[i].value + "</td></tr>";
 
 
             }
         }
     }
     if(formoutput.length > 0)
     {
         formoutput = formoutput + "</table>";
         document.getElementById("showinput").innerHTML = formoutput;
     }
 }
 
 //// REMOVE USER INPUT ///////
 function removeReview()
 {
     document.getElementById("showinput").innerHTML = "";
 }
 
 function showAlert(){
     var alertBox = document.getElementById("alert-box");
     var closeBtn = document.getElementById("close-alert");
     alertBox.style.display = "block";
     closeBtn.onclick = function () {
         alertBox.style.display = "none";
     };
 }
 
 function validateAll(){
 let valid = true;
 
 if (!fnameValidation()){
     valid = false;
 }
 if (!lnameValidation()){
     valid = false;
 }
 if (!mnameValidation()){
     valid = false;
 }
 if (!emailValidation()){
     valid = false;
 }
 if (!validateDob()){
     valid = false;
 }
 if (!validateSSN()){
     valid = false;
 }
 if (!validatePhone()){
     valid = false;
 }
 if (!addressValidation()){
     valid = false;
 }
 if (!cityValidation()){
     valid = false;
 }
 if (!validateZIP()){
     valid = false;
 }
 if (!validateUserId()){
     valid = false;
 }
 if (!validatePassword()){
     valid = false;
 }
 if(!confirmPassword()){
     valid = false;
 }
 if(valid) {
     document.getElementById("submit").disabled = false;
 } else {
     showAlert();
 }
 
 }
 // Function to handle the remember me checkbox
 /*function RememberMe(){
     const rememberMeCheckbox = document.getElementById("remember-me");
     const nameCookieName = "firstName";
 
     rememberMeCheckbox.addEventListener("change", function (){
         if(!rememberMeCheckbox.checked){
 
             setCookie(nameCookieName,"", -1); //Expire cookie in the
 
 
         } else {
 
             const nameInput = domain.getElementById("fname");
             if (nameInput.value !== ""){
                 setCookie(nameCookieName, nameInput.value, 30); //Set cookie for 30 days
             }
 
         }
     });
 }*/  
 
 ////////////////////// STICKY HEADER /////////////
 document.addEventListener("scroll", () => {
     const header = document.querySelector("header");
 
     if (window.scrollY > 0) {
         header.classList.add("scrolled");
     } else{
         header.classList.remove("scrolled");
     }
     });
 
     document.addEventListener("DOMContentLoaded", function () {
         // Check for existing cookie
         const firstName = getCookie("firstName");
         if (firstName) {
           document.getElementById(
             "welcome-message"
           ).innerText = `Welcome back, ${firstName}`;
         } else {
           document.getElementById("welcome-message").innerText = "Welcome New User";
         }
       
         // Dynamic check box for new user
         const dynamicCheckbox = document.getElementById("dynamic-checkbox");
         if (firstName) {
           dynamicCheckbox.innerHTML = `Not ${firstName}, click <a href="#" id='new-user' onclick="resetForm()">HERE</a> to start as a NEW USER.`;
       
           document.getElementById("new-user").addEventListener("click", function () {
             inputs.forEach(function (input) {
               setCookie(input.cookieName, "", -1);
             });
             location.reload();
           });
         }
       
         // Remember Me checkbox
         const rememberMeCheckbox = document.getElementById("remember-me");
         rememberMeCheckbox.addEventListener("change", function () {
           if (rememberMeCheckbox.checked) {
             setCookie("firstName", document.getElementById("fname").value, 2);
           } else {
             deleteCookie("firstName");
             // Clear local data if needed
           }
         });
       });
       
       function resetForm() {
         document.getElementById("signup").reset();
         deleteCookie("firstName");
       }
       
       function setCookie(name, value, days) {
         let expires = "";
         if (days) {
           const date = new Date();
           date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
           expires = "; expires=" + date.toUTCString();
         }
         document.cookie = name + "=" + (value || "") + expires + "; path=/";
       }
       
       function getCookie(name) {
         const nameEQ = name + "=";
         const ca = document.cookie.split(";");
         for (let i = 0; i < ca.length; i++) {
           let c = ca[i];
           while (c.charAt(0) == " ") c = c.substring(1, c.length);
           if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
         }
         return "";
       }
       
       function deleteCookie(name) {
         document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
       }
       
       var inputs = [
         { id: "fname", cookieName: "firstName" },
         { id: "mname", cookieName: "middleName" },
         { id: "lname", cookieName: "lastName" },
         { id: "dob", cookieName: "DateofBirth" },
         { id: "address1", cookieName: "address1" },
         { id: "address2", cookieName: "address2" },
         { id: "city", cookieName: "city" },
         { id: "zip", cookieName: "zipCode" },
         { id: "email", cookieName: "email" },
         { id: "phone", cookieName: "phone" },
         { id: "userid", cookieName: "userid" },
         // add more input fields here
       ];
       
       inputs.forEach(function (input) {
         var inputElement = document.getElementById(input.id);
       
         // Prefill the input field with the value stored in the corresponding cookie
         var cookieValue = getCookie(input.cookieName);
         if (cookieValue !== "") {
           inputElement.value = cookieValue;
         }
       
         // Set a cookie with the value of the input field whenever it is changed
         inputElement.addEventListener("input", function () {
           setCookie(input.cookieName, inputElement.value, 30);
         });
       });
       
       function clearCookie() {
         document.cookie =
           "firstName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
         // Add more cookie clearing for other fields if needed
       }
       
