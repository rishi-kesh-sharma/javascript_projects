//listen for the form submit
var  Config = {
    apiKey: "AIzaSyCLclYEkzuJL3KtYfn6zlnGJYwN-qbaXfg",
    authDomain: "contact-form-66436.firebaseapp.com",
    projectId: "contact-form-66436",
    storageBucket: "contact-form-66436.appspot.com",
    messagingSenderId: "565022426984",
    appId: "1:565022426984:web:845f8b91704010874af8dd",
    measurementId: "G-Y02B7T25C4"
  };
  // Initialize Firebase
  firebase.initializeApp( Config);
//   console.log(firebase.database());
  firebase.analytics();
// var messagesRef=firebase.database().ref();
document.getElementById('contactForm').addEventListener('submit',submitForm);
console.log(firebase);
function submitForm(e){
    e.preventDefault();
    // get values
    var name=getInputVal("name");
    var company=getInputVal("company");
    var email=getInputVal("email");
    var phone=getInputVal("phone");
    var message=getInputVal("message");
    
saveMessage(name,company,phone,email,message);
}


// save message


//FUNCTION TO GET FORM VALUES
    function getInputVal(id){
        return document.getElementById(id).value;
    }
 
    //save message to firebase
    function saveMessage(name,company,email,phone,message){
        // var newMessageRef=messagesRef.push();k
        console.log(newMessageRef);

        newMessageRef.set({
            name:name,
            company:company,
            email:email,
            phone:phone,
            message:message
        });
    };