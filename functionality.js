const firebaseConfig = {
    apiKey: "AIzaSyDH08KSK7G8wi62H3O0vVTzgB6cfAytoYk",
    authDomain: "portfoliodb-722b1.firebaseapp.com",
    databaseURL: "https://portfoliodb-722b1-default-rtdb.firebaseio.com",
    projectId: "portfoliodb-722b1",
    storageBucket: "portfoliodb-722b1.appspot.com",
    messagingSenderId: "729279993424",
    appId: "1:729279993424:web:41567b284fdaec02446355"
  };

  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('messages');

  // Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('nameField');
    var email = getInputVal('emailField');
    var message = getInputVal('msgField');
  
    // Save message
    saveMessage(name, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }

  
// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }
