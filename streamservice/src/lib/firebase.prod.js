import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'

const config = {
  apiKey: "AIzaSyDVXDaBWxVKx88krNvsB5Qko6SH09mNPWw",
  authDomain: "netflix-daebc.firebaseapp.com",
  projectId: "netflix-daebc",
  storageBucket: "netflix-daebc.appspot.com",
  messagingSenderId: "722103250402",
  appId: "1:722103250402:web:71f94238a9137d0e659dbb",
  measurementId: "G-HHE54CGV01"
} ;

const firebase = Firebase.initializeApp(config);

export { firebase };
