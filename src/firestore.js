import { db, getFirestoreTimestamp } from './firebase';
import { convertUnixTimestampToDate } from './components/Utils';

/**
 * Controller to get document from specific collection by id
 *
 * @param {string} id document id returned for doc from firestore
 * @param {string} collection e.g. 'experience'
 * @returns array of objects
 */
export const getDocumentById = async ({ id, collection }) => {
  try {
    let docRef = await db.collection(collection).doc(id);
    let snapshot = await docRef.get();
    let document = snapshot.data();
    return document;
  } catch (error) {
    console.log(`Error getting data from ${collection}: ${error}`);
  }
};

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
    let timestamp = await getFirestoreTimestamp();
    data.createdAt = timestamp;
    data.updatedAt = '';
    await docRef.set(data);
    data.createdAt = convertUnixTimestampToDate(timestamp); // Convert firestore unix timestamp to DateTime for local state storage
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
    // NOTE: id cannot be included in data being updated because it's not stored in document fields in firestore
    // createdAt and updatedAt are being excluded from update so the converted string timestamp in local state doesn't manipulate
    // their fields in firestore which changes the timestamp field to string.
    let { id, createdAt, updatedAt, ...update } = data; // Exclude ID, createdAt and updatedAt from data to update
    let docRef = await db.collection(collection).doc(data.id);
    let timestamp = await getFirestoreTimestamp();
    update.updatedAt = timestamp;
    await docRef.update(update);
    update.id = id; // Re-add ID into document returned to be stored in local state & session storage
    update.createdAt = createdAt;
    update.updatedAt = convertUnixTimestampToDate(timestamp); // Convert firestore unix timestamp to DateTime for local state storage
    return update;
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
