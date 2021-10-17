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

function subMe() {
    event.preventDefault();
    var email = document.getElementById("email").value;

    var docRef = db.collection("subscribers").doc(email);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("email", email, "is already registered...");
        } else {
            docRef.set({
                email: email,
                iKEY: "########",
                timestamp: now.toUTCString()
            });
            console.log("Congratulations, you are now registered for our website.");
        }
    }).catch((error) => {
        console.log("We faced an error please retry:", error);
    });

}