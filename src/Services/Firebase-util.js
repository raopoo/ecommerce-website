import firestore from "./Firebase";

// Read
export const readAll = async (callback) => {
    const querySnapshot = await firestore.collection("Denim-Collection").get();

    // Create our new array
    const denimArr = [];

    // Loop through our data
    querySnapshot.forEach((doc) => {
        const product = {...doc.data()}
        product.id = doc.id;
        //console.log(doc.id);
        // Push each item's data into our array
        denimArr.push(product);
    });

    // denimArr is now an array that contains all of our collections
    // from the database
    //console.log(denimArr);
    callback(denimArr);
};

export const read = async (id) => {
    const querySnapshot = firestore.collection("Denim-collection");
    const getId = querySnapshot.doc(id)
    const getItem = await getId.get();
    const item = {id: getItem.id, ...getItem.data()}
    return(item);
};

// Update
export const update = (id, info) => {
    firestore.collection("Denim-collection").doc(id).set(info, { merge: true });
};

//Cart

export const createCart = (cart) => {
    firestore.collection("Denim-Cart").add(cart);
};

// Read
export const readCart = async (callback) => {
    const querySnapshot = await firestore.collection("Denim-Cart").get();

    // Create our new array
    const cartData = [];

    // Loop through our data
    querySnapshot.forEach((doc) => {
        //console.log(doc.id);
        const product = {...doc.data()}
        product.id = doc.id;
        // Push each dog's data into our array
        cartData.push(product);
    });


    callback(cartData);
};



// Update
export const updateCart = (id, cart) => {
    firestore.collection("Denim-Cart").doc(id).set(cart, { merge: true });
};

// Delete
export const deleteItem = (id) => {
    firestore.collection("Denim-Cart").doc(id).delete();
};