// configure Fire base 

var email = document.getElementById('email');
var userName = document.getElementById('name');
var password = document.getElementById('password');
var mobileNumber = document.getElementById('mobileNumber')

var regbtn = document.getElementById('regbtn');
var login = document.getElementById('login');
var logout = document.getElementById('logout');
var hidelogin = document.getElementById('hidelogin')



// FireBase Config
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





// log out
logout.addEventListener('click', e => {
    localStorage.removeItem("UserUID")
    firebase.auth().signOut();
})



//register 
regbtn.addEventListener('click', e => {
    var rootRef = firebase.database().ref("profiles/");
    var emailinput = email.value;
    var passwordinput = password.value;
    var auth = firebase.auth()



    var promise = auth.createUserWithEmailAndPassword(emailinput, passwordinput);
    rootRef.push({
        email: email.value,
        password: password.value,
        mobileNumber: mobileNumber.value,
        userName: userName.value
    });

    promise
    // .then(user => console.log(user))
        .catch(e => console.log(e.message));
})

// watch any change of auth


firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        localStorage.setItem("UserUID", firebaseUser.uid);
        localStorage.setItem("UserEmail", firebaseUser.email)
        localStorage.setItem("LOGGEDIN", "You Are Logged In")

        logout.classList.remove('hide')
        hidelogin.classList.add('hide');
        window.location.replace("http://127.0.0.1:5500/index.html");


    } else {
        console.log(" NOt Logged in")
        logout.classList.add('hide');
        hidelogin.classList.remove('hide')

    }
});


/*
                  _  
   /\     /\/\   |_| 
__/--\__ /    \  |  \

*/

/*

 <*)
  ||______
   (______}
     |  |
     ^  ^

*/