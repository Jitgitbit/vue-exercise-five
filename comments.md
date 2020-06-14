vue init webpack vue-exercise-five

npm install firebase --save

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js"></script>

____________________________________________________________________
NOTE:
for making sure all is well protecting the environments folder:
add a line in .gitignore saying: environments/
git rm -r --cached src/environments
git add .
git commit -m 'Removed the now ignored directory "environments"'
git push origin master
_____________________________________________________________________

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "###############################",
    authDomain: "phoenixchat-youchat.firebaseapp.com",
    databaseURL: "https://phoenixchat-youchat.firebaseio.com",
    projectId: "phoenixchat-youchat",
    storageBucket: "phoenixchat-youchat.appspot.com",
    messagingSenderId: "##########",
    appId: "#:#########:###:##############",
    measurementId: "#-########"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

npm run dev

npm install moment --save

npm install vue-chat-scroll --save

firebase login
firebase init

npm run build

firebase deploy

npm install slugify