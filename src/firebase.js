import firebase from 'firebase';


  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyASbV60TKJ85o-2eHyOqw6HlCz957Ofc0Y",
    authDomain: "react-todo-app-e5d41.firebaseapp.com",
    databaseURL: "https://react-todo-app-e5d41.firebaseio.com",
    projectId: "react-todo-app-e5d41",
    storageBucket: "react-todo-app-e5d41.appspot.com",
    messagingSenderId: "874499996875",
    appId: "1:874499996875:web:7303cb3b6ddf863e906f4e",
    measurementId: "G-DBDEMVD2X4"
  });

  const db = firebaseApp.firestore();

  export default db;