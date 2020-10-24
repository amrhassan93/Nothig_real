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

// watch any change of auth

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        // console.log(firebaseUser);
        localStorage.setItem("UserUID", firebaseUser.uid)
        logout.classList.remove('hide')
        hidelogin.classList.add('hide')

    } else {
        console.log(" NOt Logged in")
        logout.classList.add('hide');
        hidelogin.classList.remove('hide')

    }
});

// log out

var logout = document.getElementById('logout');

logout.addEventListener('click', e => {
    localStorage.removeItem("UserUID")
    localStorage.removeItem("LOGGEDIN")
    firebase.auth().signOut();
})



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