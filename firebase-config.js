/* ============================================================
   firebase-config.js
   بيانات مشروع zawya-shams-buffet-1ff53 على Firebase.
   ده المكان الوحيد اللي فيه البيانات دي — كل الملفات التانية بتاخدها من هنا.
   ============================================================ */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBa6gx-YLPNPHSlOOyk_u7kNboCJ6EPDjI",
  authDomain: "zawya-shams-buffet-1ff53.firebaseapp.com",
  projectId: "zawya-shams-buffet-1ff53",
  storageBucket: "zawya-shams-buffet-1ff53.firebasestorage.app",
  messagingSenderId: "687206309313",
  appId: "1:687206309313:web:b3081b0dcaa4428d7b6340"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
