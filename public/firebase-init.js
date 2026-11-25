// Firebase Web App config is a public client-side identifier, not a server credential.
const firebaseConfig = {
  apiKey: "AIzaSyCLwywWjjtyViNZrDYkpps2umBBUoRLF88",
  authDomain: "artbygoonjon.firebaseapp.com",
  projectId: "artbygoonjon",
  storageBucket: "artbygoonjon.firebasestorage.app",
  messagingSenderId: "385537070511",
  appId: "1:385537070511:web:6c39aa2f202ed077070b5a",
  measurementId: "G-PZ3J5EBMJB"
};

// Load analytics independently of gallery and enquiry functionality.
// Do not send names, phone numbers, email addresses or enquiry content.
async function startFirebase() {
  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js");
    const app = initializeApp(firebaseConfig);
    const { getAnalytics, isSupported } = await import("https://www.gstatic.com/firebasejs/13.4.0/firebase-analytics.js");
    if (await isSupported()) getAnalytics(app);
  } catch (error) {
    console.warn("Firebase Analytics is unavailable in this session.");
  }
}
if (document.readyState === "complete") {
  startFirebase();
} else {
  window.addEventListener("load", startFirebase, { once: true });
}
