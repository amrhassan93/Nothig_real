// $(function() {






// })

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDE8wIHtR3kBY77emV6ktQHl1Mz9WQMN-k",
    authDomain: "nothing-real.firebaseapp.com",
    databaseURL: "https://nothing-real.firebaseio.com",
    projectId: "nothing-real",
    storageBucket: "nothing-real.appspot.com",
    messagingSenderId: "655794930116",
    appId: "1:655794930116:web:a6d7a1dfd85052a92be491",
    measurementId: "G-9NLPPBLQWL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// var test = document.getElementById("test")
// rootRef.on('value', snap => test.innerText = snap.val());

const rootRef = firebase.database().ref("issues/");
rootRef.on("value",

    (snapshot) => {
        const listtablebody = document.getElementById("news");
        listtablebody.textContent = "";
        snapshot.forEach((child) => {
            issue = child.val();
            console.log(issue)


            var post = document.createElement("div")
            post.innerHTML = "<h3>" + issue.PostTitle + "</h3> <h5>" + issue.postBody + "</h5>"
            listtablebody.append(post)
        })

    }
)


//to send email from contact us
// var inputs = document.getElementsByClassName('form-control')
// var mail = document.getElementById('mailBody');
// var username = document.getElementById('username');
// var email = document.getElementById('email');
// var number = document.getElementById('number');
// var submit = document.getElementById('submit');

// var usernameAlert = document.querySelector(".usernameAlert")
// var emailAlert = document.querySelector(".emailAlert")
// var phoneAlert = document.querySelector(".phoneAlert")
// var messageAlert = document.querySelector(".messageAlert")

// // console.log(mail.value)

// function sendEmail() {

//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "almniproject@gmail.com",
//         Password: "@almni123",
//         To: 'amr_hassan522@yahoo.com',
//         From: "almniproject@gmail.com",
//         Subject: "Contact Us",
//         Body: ` name : ${username.value} <br>
//            mobile number : ${number.value}<br>
//           email : ${email.value}<br>
//           message : ${mail.value}`,

//     }).then(
//         message => alert("mail sent successfully")
//     );
// }

// function clearForm() {
//     for (let i = 0; i < inputs.length; i++) {
//         inputs[i].value = " ";
//     }
// }


// function sendNow() {
//     sendEmail()
//     clearForm()
// }


// // validation 

// username.addEventListener("keyup", function() {
//     var nameRejex = /^[a-z]{3,}$/
//     if (nameRejex.test(username.value) == false) {
//         usernameAlert.style.display = "block";
//         username.classList.add("is-invalid")
//     } else {
//         usernameAlert.style.display = "none";
//         username.classList.add("is-valid")
//         submitCheck()
//     }
// })

// email.addEventListener("keyup", function() {
//     var nameRejex = /^[a-zA-Z]{1,10}?[0-9]*\@[a-z]{3,7}\.com$/
//     if (nameRejex.test(email.value) == false) {
//         emailAlert.style.display = "block";
//         email.classList.add("is-invalid")
//     } else {
//         emailAlert.style.display = "none";
//         email.classList.add("is-valid")
//         submitCheck()

//     }
// })
// number.addEventListener("keyup", function() {
//     var nameRejex = /^(01)(0|1|2)[0-9]{8}$/
//     if (nameRejex.test(number.value) == false) {
//         phoneAlert.style.display = "block";
//         number.classList.add("is-invalid")
//     } else {
//         phoneAlert.style.display = "none";
//         number.classList.add("is-valid")
//         submitCheck()
//     }

// })

// function submitCheck() {
//     if (username.classList.contains("is-valid") && email.classList.contains("is-valid") && number.classList.contains("is-valid")) {
//         submit.removeAttribute("disabled")
//     }
// }