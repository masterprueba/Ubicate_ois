import firestore from '@react-native-firebase/firestore'
import Config from '../common/Config'
// import '@firebase/messaging'; 

const firebase = require('firebase');


if (!firebase.apps.length) {

    firebase.initializeApp({
        apiKey: Config.API_KEY,
        authDomain: Config.AUTH_DOMAIN,
        databaseURL: Config.DATABASE_URL,
        projectId: Config.PROJECT_ID,
        storageBucket: Config.STORAGE_BUCKET,
        messagingSenderId: Config.MESSAGING_SENDER_ID,
    });

    // firebase.initializeApp({
    //     'messagingSenderId': 'BHTHoafsYtgNA71aoimZfbZxkwRlU_0o14uCBDUzmtP6EdaSPttV5E72C_VS5aCfci57X3cdx9IfBS3UGIKNhwU'
    // });
    // const messaging = firebase.messaging();


    // messaging.requestPermission()
    // .then(function () {
    //   console.log('Se han aceptado las notificaciones');
    // })
    // .catch(function (err) {
    //   mensajeFeedback(err);
    //   console.log('No se ha recibido permiso / token: ', err);
    // });

    
    // const messaging = firebase.messaging();    
    
    // firebase.auth().onAuthStateChanged(user => {
    //     if (user) {
    //         this.props.loginSuccess(user);
    //     }
    // });
    // var testLogin = firebase.auth().signInWithEmailAndPassword("victoregmovil@gmail.com", "123456").catch(function (error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ...
    //     console.log("errorCode::: ", errorCode);
    //     console.log("errorMessage::: ", errorMessage);
    // });

    // console.log("testLogin::: ", testLogin);
} 


export default firebase;