import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyA5cS4vZe9jF9hVIhHR99g8KQri0JSge-Q",
  authDomain: "makeeazy-main-website.firebaseapp.com",
  projectId: "makeeazy-main-website",
  storageBucket: "makeeazy-main-website.firebasestorage.app",
  messagingSenderId: "507428167571",
  appId: "1:507428167571:web:0cff98e15dace16cdb5266",
};

const app = initializeApp(config);
const db = getFirestore(app);

async function clearData() {
  await setDoc(doc(db, "makeeazy", "portal_data"), {
    employees: [],
    timesheets: [],
    leaves: [],
    expenses: [],
    tasks: []
  });
  console.log("Cleared portal data!");
  process.exit(0);
}

clearData().catch(e => {
  console.error(e);
  process.exit(1);
});
