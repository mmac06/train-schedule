// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCQ0jtHUsZ4-7sD5h7Fq1jTmayoPb_Tc9Q",
    authDomain: "train-station2.firebaseapp.com",
    databaseURL: "https://train-station2.firebaseio.com",
    projectId: "train-station2",
    storageBucket: "train-station2.appspot.com",
    messagingSenderId: "261058496983",
    appId: "1:261058496983:web:08d43fe67aeb7f42"
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


// Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var tName = childSnapshot.val().name;
    var tDestination = childSnapshot.val().destination;
    var tTime = childSnapshot.val().time;
    var tFrequency = childSnapshot.val().frequency;
  
    // Train Info
    console.log("tName: " + tName);
    console.log(tDestination);
    console.log(tTime);
    console.log("tFrequency: " + tFrequency);



    var m = moment();
    console.log("m: " + m);
    var m2 = $("#time-input").val().trim();
    var newTime = moment().add(m2).format("HH:mm")
    // console.log("m2: " + m2);

    // var nextTrain = moment().diff((m2), "minutes");
    console.log("newTime: " + newTime);


  
    // Convert format of train time
    // var timeConvert = moment(tTime, "HH:mm");
    
    // unix(tTime).format("HH:mm");
    // console.log("timeConvert: " + timeConvert);

  
    // // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(tName),
      $("<td>").text(tDestination),
      $("<td>").text(tTime),
      $("<td>").text(tFrequency),
      $("<td>").text(newTime),
      $("<td>").text("X")
    );
  
    // Append the new row to the table
    $("#train-table > tbody").append(newRow);
  });
