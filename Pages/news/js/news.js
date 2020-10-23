var postBtn = document.getElementById("postNow")
var postTitle = document.getElementById("posttitle")
var postBody = document.getElementById("postbody")
    // var editbtn = document.getElementById("edit")




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




//Post Function
postBtn.addEventListener('click', function() {

    if (postTitle.value != "" && postBody.value != "") {
        rootRef.push({
            PostTitle: postTitle.value,
            postBody: postBody.value
        });
        emptyForm();
    } else {
        alert("please Fill All requried Data")
    }
})

// Empty Form Function
function emptyForm() {
    postTitle.value = "";
    postBody.value = "";
}

// log out

var logout = document.getElementById('logout');

logout.addEventListener('click', e => {
    firebase.auth().signOut();
})

// watch any change of auth

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        logout.classList.remove('hide')
        hidelogin.classList.add('hide')

    } else {
        console.log(" NOt Logged in")
        logout.classList.add('hide');
        hidelogin.classList.remove('hide')

    }
});

// var test = document.getElementById("test")
// rootRef.on('value', snap => test.innerText = snap.val());



// Show Data From Firebase
const rootRef = firebase.database().ref("issues/");
rootRef.on("value",

    (snapshot) => {
        const listtablebody = document.getElementById("recent");
        listtablebody.textContent = "";
        snapshot.forEach((child) => {
            issue = child.val();
            // console.log(issue)


            var post = document.createElement("div")
            post.innerHTML = "<h3 class='p-2'>" + issue.PostTitle + "</h3> <h5 class='p-2'>" + issue.postBody + "</h5> <button id='edit' onclick='editpost(\"" + child + "\" )'  class='btn btn-info'>Edit</button> <button id='edit' onclick='deletepost(\"" + child.key + "\" )'  class='btn btn-danger'>Delete</button> "
            listtablebody.append(post)
        })

    }
)


//edit Function


// function showprompt(issueKey) {
//     var recordRef = firebase.database().ref("issues/" + issueKey.postBody);
//     console.log(recordRef)
// }

// Delete Post
function deletepost(issueKey) {
    if (confirm("are You sure")) {
        var recordRef = firebase.database().ref("issues/" + issueKey);
    } else {
        return
    }

    recordRef.remove()
}
// update
function editpost(issueKey) {

    var newPostTitle = prompt("enter Post title")
    var newPostBody = prompt("enter post body")


    var recordRef = firebase.database().ref("issues/" + issueKey);
    console.log(recordRef)
    recordRef.update({
        "PostTitle": newPostTitle,
        "postBody": newPostBody
    });

    // editIssuekey = issueKey
    // editIssuekey
    // console.log(recordRef)
    // alert('update Key ' + issueKey)
}


// var recordRef = firebase.database().ref("issues/" + issueKey);

// recordRef.update({
//     "resolved": "yes"
// });

// function hidePost(issueKey) {
//     editIssuekey = issueKey;

//     console.log(editIssuekey)
// }
// rootRef.push({
//     postBody: "Welcome Form my second firebase Post",
//     PostTitle: "Hello again"
// });

// ------------------------------------------ Adding Multi language --------------------------------------------
$(function() {






})