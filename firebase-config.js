const firebaseConfig = {
  apiKey: "AIzaSyBa6gx-YLPNPHSlOOyk_u7kNboCJ6EPDjI",
  authDomain: "zawya-shams-buffet-1ff53.firebaseapp.com",
  projectId: "zawya-shams-buffet-1ff53",
  storageBucket: "zawya-shams-buffet-1ff53.firebasestorage.app",
  messagingSenderId: "687206309313",
  appId: "1:687206309313:web:b3081b0dcaa4428d7b6340"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
