import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.Config';

const initializeAuthentication=()=>{
    initializeApp(firebaseConfig)
}
export default initializeAuthentication