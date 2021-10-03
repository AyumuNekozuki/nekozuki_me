import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import analytics from 'firebase/analytics';

const fb_config = {
  apiKey: "AIzaSyCbAXWi2lL-Sks6QlSWXJkEvBFO4B6HtCU",
  authDomain: "nekozuki-me.firebaseapp.com",
  projectId: "nekozuki-me",
  storageBucket: "nekozuki-me.appspot.com",
  messagingSenderId: "330168009163",
  appId: "1:330168009163:web:ee57e276d708c84d06f64e",
  measurementId: "G-FL4ZD7VFLW"
}

if(!firebase.apps.length) {
  firebase.initializeApp(fb_config);
  firebase.analytics();
}else{
  firebase.app();
}

export default firebase