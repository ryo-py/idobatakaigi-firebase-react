import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCeXY4MEno_eR9fdG7tJ_tBWuCPyS0cZr8",
  authDomain: "kaigiapp-with-ham.firebaseapp.com",
  projectId: "kaigiapp-with-ham",
  storageBucket: "kaigiapp-with-ham.appspot.com",
  messagingSenderId: "1099229865252",
  appId: "1:1099229865252:web:62f37360fa296336db3fb1",
};

// Initialize
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
