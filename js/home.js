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



// read data from firebase
const rootRef = firebase.database().ref("issues/");
rootRef.on("value",

    (snapshot) => {
        const listtablebody = document.getElementById("news");
        listtablebody.textContent = "";
        snapshot.forEach((child) => {
            issue = child.val();
            console.log(issue.userEmail)
            var post = document.createElement("div")
            post.innerHTML = "<h6>" + issue.userEmail + "</h6> <h3 class='p-2'>" + issue.PostTitle + "</h3> <h5 class='p-2'>" + issue.postBody + "</h5>"
            listtablebody.append(post)
        })

    }
)

// log out

var logout = document.getElementById('logout');

logout.addEventListener('click', e => {
    localStorage.removeItem("UserUID")
    localStorage.removeItem("LOGGEDIN")
    firebase.auth().signOut();
})

// watch any change of auth

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        localStorage.setItem("UserUID", firebaseUser.uid)
        logout.classList.remove('hide')
        hidelogin.classList.add('hide')

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