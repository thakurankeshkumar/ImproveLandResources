<script type="module">
  // Import the functions you need from the SDKs you need
  import {initializeApp} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import {getAuth, createuserwithemailandpassword}
  import {getAnalytics} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD7H3c84D_SJjBERmE6qtSBTxUzIu8bb70",
  authDomain: "resorcehub.firebaseapp.com",
  projectId: "resorcehub",
  storageBucket: "resorcehub.firebasestorage.app",
  messagingSenderId: "193513456832",
  appId: "1:193513456832:web:620e4ba3ddab9d6cdc1925",
  measurementId: "G-8ZYKVD597K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
//inputs
const email = document.getElementById('email').value;
const pass = document.getElementById('password').value;
const name = document.getElementById('full-name').value;
const mobile = document.getElementById('mobile').value;

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()
  alert(5)
})

