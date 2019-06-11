// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDbAOdKBJeNNyuxSHBTHJDlva--BDMgN_I",
    authDomain: "bootcamp-train-station.firebaseapp.com",
    databaseURL: "https://bootcamp-train-station.firebaseio.com",
    projectId: "bootcamp-train-station",
    storageBucket: "bootcamp-train-station.appspot.com",
    messagingSenderId: "1048074352466",
    appId: "1:1048074352466:web:0f5108f63c93a3e5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

console.log(firebase);


// pull information from the input boxes into the table
$("#submit-btn").on("click", function (e) {
    // prevents page from refreshing upon button click    
    e.preventDefault();

    // put user inputs into variables
    var tName = $("#train-name-input").val().trim();
    var tDestination = $("#destination-input").val().trim();
    var tTime = $("#time-input").val().trim();
    var tFrequency = $("#frequency-input").val().trim();

    // log the new variables
    console.log("name: " + tName);
    console.log("dest: " + tDestination);
    console.log("time: " + tTime);
    console.log("freq: " + tFrequency);



    var newEntry = {
        name: tName,
        destination: tDestination,
        time: tTime,
        frequency: tFrequency,
    };


    database.ref().push(newEntry);



    // log the new push object
    console.log("newEntry.name: " + newEntry.name);
    console.log("newEntry.destination: " + newEntry.destination);
    console.log("newEntry.time: " + newEntry.time);
    console.log("newEntry.frequency: " + newEntry.frequency);

    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");

});
