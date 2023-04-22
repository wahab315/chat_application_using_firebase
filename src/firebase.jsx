import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqljFJLqLzZCE6e_9w6yCAR5OtuhQScD8",
  authDomain: "chat-application-learning.firebaseapp.com",
  projectId: "chat-application-learning",
  storageBucket: "chat-application-learning.appspot.com",
  messagingSenderId: "263848478611",
  appId: "1:263848478611:web:ebd29433bbc6b101b7ca66",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
