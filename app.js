


var config = {
   apiKey: "AIzaSyDMP_eY7gzyhID57TwHQXBAhZSTSEXF38Y",
   authDomain: "project-b69b1.firebaseapp.com",
   databaseURL: "https://project-b69b1.firebaseio.com",
   projectId: "project-b69b1",
   storageBucket: "",
   messagingSenderId: "340912358863"
 };
 firebase.initializeApp(config);




// const login= document.getElementById('login');
// const signup=document.getElementById('signup');
const account = document.getElementById('account');
const auth = firebase.auth();
const logout = document.getElementById('logout');

account.addEventListener('click', e =>{
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
e.preventDefault();

const promise = auth.createUserWithEmailAndPassword(email,password);
promise.catch(console.log(e.message));


});
