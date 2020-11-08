import {initializeApp} from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyALdOPER3ybFYq_aYu4cCofiHSsTAb13Qo",
    authDomain: "catalogo-filmes-b1b09.firebaseapp.com",
    databaseURL: "https://catalogo-filmes-b1b09.firebaseio.com",
    projectId: "catalogo-filmes-b1b09",
    storageBucket: "catalogo-filmes-b1b09.appspot.com",
    messagingSenderId: "489409423268",
    appId: "1:489409423268:web:d11f1938516d8fa7748331",
    measurementId: "G-SY8NDN4770"

})

export const db = app.database()