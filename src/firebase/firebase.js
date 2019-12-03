import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB0V8GVem8I_Koata-3_vpqC4QVYGx7ey8",
    authDomain: "budget-fa2bb.firebaseapp.com",
    databaseURL: "https://budget-fa2bb.firebaseio.com",
    projectId: "budget-fa2bb",
    storageBucket: "budget-fa2bb.appspot.com",
    messagingSenderId: "912504864777",
    appId: "1:912504864777:web:f2b55990fe0eece368f8d8"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
 export { firebase, database as default};
// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
// });

// database.ref('expenses').push({
//     description: 'Phone Bill',
//     note: '',
//     amount: 5900,
//     createdAt: 976123498763
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 976123498763
// });

//const database = firebase.database();

// database.ref().set({
//     name: 'Dorcas Chepkoech',
//     location: {
//         city: 'Bangkok',
//         country: 'Thailand'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('Failed to Save!')
// });
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// });

// database.ref().update({
//     'location/city': 'Chiang Mai'
// });