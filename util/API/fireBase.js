import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection, doc, setDoc, getDoc, increment, updateDoc } from "firebase/firestore"; 



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  
  // Initialize Firebase
    const app = initializeApp(firebaseConfig);


  // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);




    export const getSliderData = async (quizNumber) => {
        
        try {
            const quizRef =  doc(db, "quizzies", quizNumber);
            const quiz = await getDoc(quizRef);


            let sliderChoise1 = quiz.data().sliderValue.choise1;
            let sliderChoise2 = quiz.data().sliderValue.choise2;
            let sliderChoise3 = quiz.data().sliderValue.choise3; 
            let sliderChoise4 = quiz.data().sliderValue.choise4;
            let sliderChoise5 = quiz.data().sliderValue.choise5;
            
           return [sliderChoise1, sliderChoise2, sliderChoise3, sliderChoise4, sliderChoise5];
            
          } catch (e) {
            console.error("Error updating document : ", e );
          }

    };
    export const getMiltiChoiceData = async (quizNumber) => {
        
        try {
            const quizRef =  doc(db, "quizzies", quizNumber);
            const quiz = await getDoc(quizRef);

            let muiltiChoice1 = quiz.data().muiltichoices.choise1;
            let muiltiChoice2 = quiz.data().muiltichoices.choise2;
            let muiltiChoice3 = quiz.data().muiltichoices.choise3; 
            let muiltiChoice4 = quiz.data().muiltichoices.choise4;
            let muiltiChoice5 = quiz.data().muiltichoices.choise5;
            
           return [muiltiChoice1, muiltiChoice2, muiltiChoice3, muiltiChoice4, muiltiChoice5];
            
          } catch (e) {
            console.error("Error updating document : ", e );
          }

    };





    export const updateSliderData = async (quizNumber, sliderValue) => {
        
        try {
            const quizRef =  doc(db, "quizzies", quizNumber);
            const quiz = await getDoc(quizRef);


            let sliderChoise1 = quiz.data().sliderValue.choise1;
            let sliderChoise2 = quiz.data().sliderValue.choise2;
            let sliderChoise3 = quiz.data().sliderValue.choise3; 
            let sliderChoise4 = quiz.data().sliderValue.choise4;
            let sliderChoise5 = quiz.data().sliderValue.choise5;
            
            switch (sliderValue) {
                case 1: 
                      sliderChoise1 =   quiz.data().sliderValue.choise1 + 1 ;
                      console.log("sliderChoise1 "  + sliderChoise1);
                    break;
                case 2: 
                      sliderChoise2 =   quiz.data().sliderValue.choise2 + 1 ;
                      console.log("sliderChoise2 "  + sliderChoise2);
                    break;
                case 3: 
                      sliderChoise3 =   quiz.data().sliderValue.choise3 + 1 ;
                      console.log("sliderChoise3 "  + sliderChoise3);
                    break;
                case 4: 
                      sliderChoise4 =   quiz.data().sliderValue.choise4 + 1 ;
                      console.log("sliderChoise4 "  + sliderChoise4);
                    break;
                case 5: 
                      sliderChoise5 =   quiz.data().sliderValue.choise5 + 1 ;
                      console.log("sliderChoise5 "  + sliderChoise5);
                    break;
            
                default:
                    break;
            }

            await updateDoc(quizRef, {
                sliderValue: {
                    choise1:  sliderChoise1,
                    choise2:  sliderChoise2,
                    choise3:  sliderChoise3,
                    choise4:  sliderChoise4,
                    choise5:  sliderChoise5,
                  },
                 
            });
          
            
          } catch (e) {
            console.error("Error updating document : ", e );
          }

    };


    export const updateChoicesData = async (quizNumber, choiceValue) => {

        try {
            const quizRef =  doc(db, "quizzies", quizNumber);
            const quiz = await getDoc(quizRef);


            let muiltiChoice1 = quiz.data().muiltichoices.choise1;
            let muiltiChoice2 = quiz.data().muiltichoices.choise2;
            let muiltiChoice3 = quiz.data().muiltichoices.choise3; 
            let muiltiChoice4 = quiz.data().muiltichoices.choise4;
            let muiltiChoice5 = quiz.data().muiltichoices.choise5;
            
            switch (choiceValue) {
                case '1': 
                      muiltiChoice1 =   quiz.data().muiltichoices.choise1 + 1 ;
                      console.log("muiltiChoice1 "  + muiltiChoice1);
                    break;
                case '2': 
                      muiltiChoice2 =   quiz.data().muiltichoices.choise2 + 1 ;
                      console.log("muiltiChoice2 "  + muiltiChoice2);
                    break;
                case '3': 
                      muiltiChoice3 =   quiz.data().muiltichoices.choise3 + 1 ;
                      console.log("muiltiChoice3 "  + muiltiChoice3);
                    break;
                case '4': 
                      muiltiChoice4 =   quiz.data().muiltichoices.choise4 + 1 ;
                      console.log("muiltiChoice4 "  + muiltiChoice4);
                    break;
                case '5': 
                      muiltiChoice5 =   quiz.data().muiltichoices.choise5 + 1 ;
                      console.log("muiltiChoice5 "  + muiltiChoice5);
                    break;
            
                default:
                    console.log('nothing');
                    break;
            }

            await updateDoc(quizRef, {
               
                  muiltichoices: {
                    choise1: muiltiChoice1,
                    choise2: muiltiChoice2,
                    choise3: muiltiChoice3,
                    choise4: muiltiChoice4,
                    choise5: muiltiChoice5,
                  },
            });
          
            
          } catch (e) {
            console.error("Error updating document : ", e );
          }

    };

    

    
