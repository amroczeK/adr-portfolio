import { db } from './firebase';

/**
 * Controller to get data from specific collection
 *
 * @param {string} collection e.g. 'experience'
 * @returns array of objects
 */
export const getController = async ({ collection }) => {
  try {
    let data = [];
    const snapshot = await db.collection(collection).get();
    snapshot.forEach((doc) => {
      let docs = {
        id: doc.id,
        ...doc.data(),
      };
      data.push(docs);
    });
    return data;
  } catch (error) {
    console.log(`Error getting data from ${collection}: ${error}`);
  }
};

/**
 * Controller to create/add data to firestore
 *
 * @param {object} data e.g. {id:'123', name: 'Adrian'}
 * @param {string} collection e.g. 'experience'
 * @returns array of objects
 */
export const createController = async ({ data, collection }) => {
  try {
    // Add a new document with a generated id
    let docRef = db.collection(collection).doc();
    await docRef.set(data);
    return {
      id: docRef.id,
      ...data,
    };
  } catch (error) {
    console.log(`Error creating ${collection} document: ${error}`);
  }
};

/**
 * Controller to update document in firestore collection
 *
 * @param {object} data e.g. {id:'123', name: 'Adrian'}
 * @param {string} collection e.g. 'experience'
 * @returns array of objects
 */
export const updateController = async ({ data, collection }) => {
  try {
    let { id, ...update } = data; // Exclude ID from data to update
    await db.collection(collection).doc(data.id).update(update);
  } catch (error) {
    console.log(`Error updating ${collection} document ${data.id}: ${error}`);
  }
};

/**
 * Controller to delete document in firestore collection
 *
 * @param {string} id e.g. 'ioIy6qPTGpowgCQqn5Za'
 * @param {string} collection e.g. 'experience'
 * @returns array of objects
 */
export const deleteController = async ({ id, collection }) => {
  try {
    await db.collection(collection).doc(id).delete();
  } catch (error) {
    console.log(`Error deleting ${collection} document ${id}: ${error}`);
  }
};
