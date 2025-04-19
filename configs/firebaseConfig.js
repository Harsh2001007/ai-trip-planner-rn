import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBk3B0JTBLOdrFn83FAGNDI1_uRlREKKAg",
  authDomain: "ai-trip-planner-rn.firebaseapp.com",
  projectId: "ai-trip-planner-rn",
  storageBucket: "ai-trip-planner-rn.firebasestorage.app",
  messagingSenderId: "838491500608",
  appId: "1:838491500608:web:35ec533ea1f507c18a6fa5",
  measurementId: "G-QR1E4YVCX5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
