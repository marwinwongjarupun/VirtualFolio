const firebaseConfig = {
    apiKey: "AIzaSyCGMA88fUw3tRvw-IPaZn6aoG6GfxevUDM",
    authDomain: "virtual-folio-212c2.firebaseapp.com",
    databaseURL: "https://virtual-folio-212c2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "virtual-folio-212c2",
    storageBucket: "virtual-folio-212c2.appspot.com",
    messagingSenderId: "243149484747",
    appId: "1:243149484747:web:160e963951e2ae025ea14e",
    measurementId: "G-F4YG2QY3CQ"
};

// intialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    
    // Validate form inputs
     if (!validateForm()) {
    return;
    }

  var name = getElementVal("name");
  var email = getElementVal("email");
  var subject = getElementVal("subject");
  var message = getElementVal("message");
  //console.log(name, email, subject, message);
  saveMessages(name, email, subject, message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);


  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, subject, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    subject: subject,
    message: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
