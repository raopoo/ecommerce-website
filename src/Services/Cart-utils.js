import firestore from "./firebase";

// Create
export const create = (cart) => {
    firestore.collection("Denim-Cart").add(cart);
};

// Read
export const readAll = async (callback) => {
    const querySnapshot = await firestore.collection("Denim-Cart").get();

    // Create our new array
    const cartData = [];

    // Loop through our data
    querySnapshot.forEach((doc) => {
        console.log(doc.id);
        // Push each dog's data into our array
        cartData.push(doc.data());
    });

    // coolDogs is now an array that contains all of our dogs
    // from the database

    callback(cartData);
};

export const read = async (id, callback) => {
    const querySnapshot = await firestore.collection("Denim-Cart").doc(id).get();

    callback(querySnapshot.data());
};

// Update
export const update = (id, cart) => {
    firestore.collection("Denim-Cart").doc(id).set(cart, { merge: true });
};

// Delete
export const deleteDoc = (id) => {
    firestore.collection("Denim-Cart").doc(id).delete();
};