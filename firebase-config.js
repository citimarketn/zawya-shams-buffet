/* ============================================================
   firebase-config.js
   ⚠️ حط هنا بيانات مشروعك الحقيقية من Firebase Console:
   Project settings → عام (General) → أسفل الصفحة "SDK setup and configuration"
   ده المكان الوحيد اللي هتغيّر فيه البيانات دي — كل الملفات التانية بتاخدها من هنا.
   ============================================================ */

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
