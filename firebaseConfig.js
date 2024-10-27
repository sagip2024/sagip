import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfWwJizq0LhwamRiC-2-IHT8rjhKj_Y3U",
  authDomain: "sagip-a7258.firebaseapp.com",
  projectId: "sagip-a7258",
  storageBucket: "sagip-a7258.appspot.com",
  messagingSenderId: "21219689240",
  appId: "1:21219689240:web:47f133afefa7773f6a946d",
  measurementId: "G-Z42SM1GW96"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { analytics, storage };
export default app;
