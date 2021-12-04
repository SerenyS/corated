// import firebase from 'firebase/app'
import * as firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyACNyzw6mAw_5CrFFGIBRTwk54xwoCEYEI",
    authDomain: "jsfinal-4a327.firebaseapp.com",
    projectId: "jsfinal-4a327",
    storageBucket: "jsfinal-4a327.appspot.com",
    messagingSenderId: "147466836060",
    appId: "1:147466836060:web:b6c15c1c93c2535ef7ae99"
}

// firebase.initializeApp(firebaseConfig);


// const db = firebase.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage().ref();

// export {firebase, db, auth, storage};
class Firebase {
    constructor(){
    firebase.initializeApp(config);
    this.firestore = firebase.firestore();
    this.storage = firebase.storage();}

    getAllPosts(){
        return firebase.firestore().collection("posts").get();
    }

    getCurrentPost(postid){
        return firebase.firestore().collection("posts").doc(postid).get();
        }
    createPost(postObj){
        return firebase.firestore().collection("posts").add(postObj);
        }

    updatePost (postid, updatedData){
            return firebase.firestore().collection("posts").doc(postid).set(updatedData, {merge: true});
            }

     async deletePost(postid, fileref){
            const storageRef = firebase.storage().ref();
            await firebase.firestore().collection("posts").doc(postid).delete().catch(err => {
            console.log(err);
            });
            
            console.log("Post Deleted");
            await storageRef.child(fileref).delete().catch(err=> {
            console.log(err);
            });
            console.log("Image Deleted");
           
         }

    async handleFileUpload(file){
            let d;
            const storageRef = firebase.storage().ref();
            const storageChild = storageRef.child(file.name);
            const postCover = storageChild.put(file);

            await new Promise(resolve => {
            postCover.on("state_changed", (snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(Math.trunc(progress));
            }, (error)=> {
            console.log(error + "error with promise");
            }, async()=>{
            const downloadUrl = await storageChild.getDownloadURL();
            d = downloadUrl;
            resolve();
            });
        });
        return d;
        }
}

export default new Firebase();

