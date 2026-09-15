import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBa6gx-YLPNPHSl00yk_u7kNboCJ6EPdjI",
    authDomain: "zawya-shams-buffet-1ff53.firebaseapp.com",
    projectId: "zawya-shams-buffet-1ff53",
    storageBucket: "zawya-shams-buffet-1ff53.firebasestorage.app",
    messagingSenderId: "687206309313",
    appId: "1:687206309313:web:b3081b0dcaa4428d7b6340"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);