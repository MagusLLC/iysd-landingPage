const firebaseConfig = {
    apiKey: "AIzaSyCuKc81YtOx-dJnWyQ0qjCZggQjmJCfV6Q",
    authDomain: "iysd-web.firebaseapp.com",
    projectId: "iysd-web",
    storageBucket: "iysd-web.appspot.com",
    messagingSenderId: "113725570166",
    appId: "1:113725570166:web:d9a866af869eb9052f7357",
    measurementId: "G-VT5FF48BVL"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const db = firebase.firestore();
var now = new Date();
var msg = document.getElementById("msg");

function hide() {
    msg.style.display = "none";
}

function show() {
    msg.style.display = "flex";
}

function accountCreated() {
    show();
    msg.innerText = "You are now registered.";
    setTimeout(() => {
        hide();
    }, 7000);
    msg.style.borderColor = "lawngreen";
    msg.style.backgroundColor = 'rgba(' + [126, 252, 0, 0.3].join(',') + ')';
}

function alreadyExist() {
    show();
    msg.innerText = "This record already exist.";
    setTimeout(() => {
        hide();
    }, 7000);
    msg.style.borderColor = "gold";
    msg.style.backgroundColor = 'rgba(' + [218, 165, 32, 0.3].join(',') + ')';
}

function cannotCreate() {
    show();
    msg.innerText = error;
    setTimeout(() => {
        hide();
    }, 7000);
    msg.style.borderColor = "red";
    msg.style.backgroundColor = 'rgba(' + [255, 0, 0, 0.3].join(',') + ')';
}

function subMe() {
    event.preventDefault();
    var email = document.getElementById("email").value;

    var docRef = db.collection("subscribers").doc(email);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("email", email, "is already registered...");
            alreadyExist();
        } else {
            docRef.set({
                email: email,
                iKEY: "########",
                timestamp: now.toUTCString()
            });

            console.log("Congratulations, you are now registered for our website.");
            accountCreated();
        }
    }).catch((error) => {
        console.log("We faced an error please retry:", error);
        cannotCreate();
    });

}