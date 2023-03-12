import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBHjyfIYHx4XVasVI4AJFoV0STGamPYI-I",
    authDomain: "meet-3b6e8.firebaseapp.com",
    projectId: "meet-3b6e8",
    storageBucket: "meet-3b6e8.appspot.com",
    messagingSenderId: "196054575280",
    appId: "1:196054575280:web:08719f4785e585344a3375",
    measurementId: "G-C2CGD84QC4",
  })
  .auth( )
