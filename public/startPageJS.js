function getData() {
    if (localStorage.getItem("Users") === null) {
        var arr = new Array();
        localStorage.setItem("Users", JSON.stringify(arr));
    }
    var newUser = {};
    var obj = {};
    obj["username"] = document.getElementById("UserName").value;
    //obj["UserMobile"]=document.getElementById("UserMobile").value;
    obj["email"] = document.getElementById("email").value;
    newUser["UserCredentials"] = obj;
    var users = [];
    users = JSON.parse(localStorage.getItem("Users"));
    users.push(newUser);

    /*
    var xhr=new XMLHttpRequest();   
    xhr.open('POST','https://localhost:3000/login',true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(JSON.stringify(users));
    */
    localStorage.setItem("Users", JSON.stringify(users));
    window.location.href = "https://localhost:3000/frontend.html";
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var newUser = {};
    var obj = {};
    obj["username"] = profile.getName();
    //obj["UserMobile"]=document.getElementById("UserMobile").value;
    obj["email"] = profile.getEmail();
    newUser["UserCredentials"] = obj;
    var users = [];
    users = JSON.parse(localStorage.getItem("Users"));


    users.push(JSON.stringify(newUser));
    localStorage.setItem("Users", JSON.stringify(users));
    //window.location.href = "https://localhost:3000/quizPage";
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

window.onload = function () {
    var submitButton = document.getElementById("Start");
    var confirmSubmitButtonModal=document.getElementById("confirmStartQuiz");
    confirmSubmitButtonModal.onclick = function () {
        getData();
    }
}
