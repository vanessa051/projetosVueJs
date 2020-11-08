import {initializeApp} from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyCgxokq3LRsk7H8uxiygivmqiy5odGSAnc",
    authDomain: "vuenotes-e6318.firebaseapp.com",
    databaseURL: "https://vuenotes-e6318.firebaseio.com",
    projectId: "vuenotes-e6318",
    storageBucket: "vuenotes-e6318.appspot.com",
    messagingSenderId: "721343230698",
    appId: "1:721343230698:web:f178d031612d3dbfef5d93",
    measurementId: "G-7HKJKPMP2C"

})

export const db = app.database()