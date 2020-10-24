var postBtn = document.getElementById("postNow")
var postTitle = document.getElementById("posttitle")
var postBody = document.getElementById("postbody")
var updateBtn = document.getElementById('updateBtn')
var cancelBtn = document.getElementById('cancelBtn')

var thisissueKey;

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

// Show Data From Firebase
const rootRef = firebase.database().ref("issues/");

rootRef.on("value",

    (snapshot) => {

        const listtablebody = document.getElementById("recent");
        listtablebody.textContent = "";
        snapshot.forEach((child) => {
            issue = child.val();

            // console.log(issue)
            var userInfo = localStorage.getItem("UserUID")

            if (userInfo == issue.userInfo) {
                var post = document.createElement("div")
                post.innerHTML = "<h6>" + issue.userEmail + "</h6> <h3 class='p-2'>" + issue.PostTitle + "</h3> <h5 class='p-2'>" + issue.postBody + "</h5>  <i id='editbtn' class='fas fa-pen-square text-info fa-2x editbtn' onclick='editpost(\"" + child.key + "\" )'></i> <i class='fas fa-trash-alt text-danger fa-2x delbtn' id='delbtn' onclick='deletepost(\"" + child.key + "\" )'></i>"
                listtablebody.append(post)

            } else {
                var post = document.createElement("div")
                post.innerHTML = "<h6>" + issue.userEmail + "</h6> <h3 class='p-2'>" + issue.PostTitle + "</h3> <h5 class='p-2'>" + issue.postBody + "</h5>  "
                listtablebody.append(post)
            }
        })
    }
)

// <button id='delbtn' onclick='deletepost(\"" + child.key + "\" )' key='DELETE'  class=' delbtn btn btn-danger lang'>Delete</button> 
//<button id='editbtn' onclick='editpost(\"" + child.key + "\" )'  class=' editbtn btn btn-info'>Edit</button> 
// log out

var logout = document.getElementById('logout');

logout.addEventListener('click', e => {
        localStorage.removeItem("UserUID")
        localStorage.removeItem("LOGGEDIN")
        firebase.auth().signOut();
    })
    // console.log(localStorage.getItem("UserEmail"))

//Post Function
postBtn.addEventListener('click', function() {

    var userloggedin = localStorage.getItem("LOGGEDIN")
    var userInfo = localStorage.getItem("UserUID")
    var userEmail = localStorage.getItem("UserEmail")
        // console.log(userInfo)
    if (userloggedin) {
        if (postTitle.value != "" && postBody.value != "") {
            rootRef.push({
                userInfo: userInfo,
                PostTitle: postTitle.value,
                postBody: postBody.value,
                userEmail: userEmail
            });
            emptyForm();
        } else {
            alert("please Fill All requried Data")
        }
    } else {
        alert("You should login first")
        window.location.href = "http://127.0.0.1:5500/Pages/login/register.html"

    }
})

// Empty Form Function
function emptyForm() {
    postTitle.value = "";
    postBody.value = "";
}

// Delete Post
function deletepost(issueKey) {
    if (confirm("are You sure")) {
        var recordRef = firebase.database().ref("issues/" + issueKey);
        recordRef.remove()

    } else {
        return
    }
}

//edit Function
function editpost(issueKey) {
    thisissueKey = issueKey
    const rootRef = firebase.database().ref("issues/" + issueKey);
    rootRef.on("value", (snapshot) => {
        const listtablebody = document.getElementById("recent");
        listtablebody.textContent = "";
        postTitle.value = snapshot.val().PostTitle
        postBody.value = snapshot.val().postBody
        postBtn.classList.add('hide')
        updateBtn.classList.remove('hide')
        cancelBtn.classList.remove('hide')

    })
}
// update

cancelBtn.addEventListener('click', () => {
    location.reload();
})

updateBtn.addEventListener('click', function() {
    var userID = localStorage.getItem("UserUID")
    var userEmail = localStorage.getItem("UserEmail")
        // console.log(userID)

    var recordRef = firebase.database().ref("issues/" + thisissueKey);
    // console.log(recordRef)
    recordRef.update({
        "PostTitle": postTitle.value,
        "postBody": postBody.value,
        "userInfo": userID,
        "userEmail": userEmail

    });

    thisissueKey = "";
    postBtn.classList.remove('hide')
    updateBtn.classList.add('hide')
    cancelBtn.classList.add('hide')

    emptyForm();


})