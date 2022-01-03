import firestore from "./Firebase";

// Read
export const readAll = async (callback) => {
    const querySnapshot = await firestore.collection("Denim-Collection").get();

    // Create our new array
    const denimArr = [];

    // Loop through our data
    querySnapshot.forEach((doc) => {
        console.log(doc.id);
        // Push each dog's data into our array
        denimArr.push(doc.data());
    });

    // denimArr is now an array that contains all of our collections
    // from the database
    //console.log(denimArr);
    callback(denimArr);
};

export const read = async (id, callback) => {
    const querySnapshot = await firestore.collection("Denim-collection").doc(id).get();

    callback(querySnapshot.data());
};