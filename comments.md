vue init webpack vue-exercise-five

npm install firebase --save

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAbkLGzPZUaJ9szDKtNZr3Uh1H08cGnj5I",
    authDomain: "phoenixchat-youchat.firebaseapp.com",
    databaseURL: "https://phoenixchat-youchat.firebaseio.com",
    projectId: "phoenixchat-youchat",
    storageBucket: "phoenixchat-youchat.appspot.com",
    messagingSenderId: "71483402724",
    appId: "1:71483402724:web:cec7110a27d5c02d757ff1",
    measurementId: "G-LBPSZJYJFF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

npm run dev