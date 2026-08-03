const loginButton = document.getElementById("loginButton");

const adminButton = document.getElementById("adminButton");

const bioButton = document.getElementById("bioButton");


const adminModal = document.getElementById("adminModal");

const bioModal = document.getElementById("bioModal");


const verifyBio = document.getElementById("verifyBio");

const bioResult = document.getElementById("bioResult");


const closeButtons = document.querySelectorAll(".closeButton");



loginButton.onclick = function(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;


    if(username === "test" && password === "test"){

        window.location.href="portal.html";

    }

    else{

        document.getElementById("errorMessage").innerHTML =
        "AUTHENTICATION FAILED";

    }

};



adminButton.onclick=function(){

    adminModal.classList.remove("hidden");

};



bioButton.onclick=function(){

    bioModal.classList.remove("hidden");

};



verifyBio.onclick=function(){

    bioResult.innerHTML = `

    <p style="color:red">
    DATA NOT DETECTED
    </p>

    <p>
    Please connect approved DACPC biometric hardware.
    </p>

    <br>

    <b>Instructions:</b>

    <br><br>

    1. Connect fingerprint reader.
    <br>
    2. Place authorized finger on scanner.
    <br>
    3. Align eye with corneal scanner.
    <br>
    4. Await verification.
    <br>
    5. Retry authentication.

    `;

};



closeButtons.forEach(button=>{

    button.onclick=function(){

        adminModal.classList.add("hidden");

        bioModal.classList.add("hidden");

    }

});
