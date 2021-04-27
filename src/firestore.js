import { db } from './firebase';

/**
 *  Functions to fetch data from Firestore
 */
export const getEducation = async () => {
  try {
    let data = [];
    const snapshot = await db.collection('education').get();
    snapshot.forEach((doc) => {
      let education = {
        id: doc.id,
        ...doc.data(),
      };
      data.push(education);
    });
    return data;
  } catch (error) {
    console.log('Error getting Education:', error);
  }
};

export const getExperience = async () => {
  try {
    let data = [];
    const snapshot = await db.collection('experience').get();
    snapshot.forEach((doc) => {
      let experience = {
        id: doc.id,
        ...doc.data(),
      };
      data.push(experience);
    });
    return data;
  } catch (error) {
    console.log('Error getting Experience:', error);
  }
};

export const getSkills = async () => {
  try {
    let data = [];
    const snapshot = await db.collection('skills').get();
    snapshot.forEach((doc) => {
      let skills = {
        id: doc.id,
        ...doc.data(),
      };
      data.push(skills);
    });
    return data;
  } catch (error) {
    console.log('Error getting Skills:', error);
  }
};

export const getAwards = async () => {
  try {
    let data = [];
    const snapshot = await db.collection('awards').get();
    snapshot.forEach((doc) => {
      let awards = {
        id: doc.id,
        ...doc.data(),
      };
      data.push(awards);
    });
    return data;
  } catch (error) {
    console.log('Error getting Awards:', error);
  }
};

export const getCertificates = async () => {
  try {
    let data = [];
    const snapshot = await db.collection('certificates').get();
    snapshot.forEach((doc) => {
      let certificates = {
        id: doc.id,
        ...doc.data(),
      };
      data.push(certificates);
    });
    return data;
  } catch (error) {
    console.log('Error getting Certificates:', error);
  }
};

export const getProjects = async () => {
  try {
    let data = [];
    const snapshot = await db.collection('projects').get();
    snapshot.forEach((doc) => {
      let projects = {
        id: doc.id,
        ...doc.data(),
      };
      data.push(projects);
    });
    return data;
  } catch (error) {
    console.log('Error getting Projects:', error);
  }
};

export const getBlogs = async () => {
  try {
    let data = [];
    const snapshot = await db.collection('blogs').get();
    snapshot.forEach((doc) => {
      let blogs = {
        id: doc.id,
        ...doc.data(),
      };
      data.push(blogs);
    });
    return data;
  } catch (error) {
    console.log('Error getting Blogs:', error);
  }
};

/**
 * Functions to add data to firestore
 */
export const createEducation = async ({ data }) => {
  try {
    // Add a new document with a generated id
    let educationRef = db.collection('education').doc();
    console.log('Document written with ID: ', educationRef.id);
    await educationRef.set(data);
  } catch (error) {
    console.log('Error creating education document:', error);
  }
};

export const createExperience = async ({ data }) => {
  try {
    // Add a new document with a generated id
    let experienceRef = db.collection('experience').doc();
    console.log('Document written with ID: ', experienceRef.id);
    await experienceRef.set(data);
  } catch (error) {
    console.log('Error creating experience document:', error);
  }
};

export const createSkill = async ({ data }) => {
  try {
    // Add a new document with a generated id
    let skillsRef = db.collection('skills').doc();
    console.log('Document written with ID: ', skillsRef.id);
    await skillsRef.set(data);
  } catch (error) {
    console.log('Error creating skills document:', error);
  }
};

export const createAward = async ({ data }) => {
  try {
    // Add a new document with a generated id
    let awardsRef = db.collection('awards').doc();
    console.log('Document written with ID: ', awardsRef.id);
    await awardsRef.set(data);
  } catch (error) {
    console.log('Error creating awards document:', error);
  }
};

export const createCertificate = async ({ data }) => {
  try {
    // Add a new document with a generated id
    let certificatesRef = db.collection('certificates').doc();
    console.log('Document written with ID: ', certificatesRef.id);
    await certificatesRef.set(data);
  } catch (error) {
    console.log('Error creating awards document:', error);
  }
};

export const createProject = async ({ data }) => {
  try {
    // Add a new document with a generated id
    let projectsRef = db.collection('projects').doc();
    console.log('Document written with ID: ', projectsRef.id);
    await projectsRef.set(data);
  } catch (error) {
    console.log('Error creating awards document:', error);
  }
};

export const createBlog = async ({ data }) => {
  try {
    // Add a new document with a generated id
    let blogsRef = db.collection('projects').doc();
    console.log('Document written with ID: ', blogsRef.id);
    await blogsRef.set(data);
  } catch (error) {
    console.log('Error creating awards document:', error);
  }
};

/**
 * Functions to update document in firestore collection
 */
export const updateEducation = async ({ data }) => {
  try {
    let { id, ...update } = data; // Exclude ID from data to update
    await db.collection('education').doc(data.id).update(update);
  } catch (error) {
    console.log(`Error updating education document ${data.id}: ${error}`);
  }
};

export const updateExperience = async ({ data }) => {
  try {
    let { id, ...update } = data; // Exclude ID from data to update
    await db.collection('experience').doc(data.id).update(update);
  } catch (error) {
    console.log(`Error updating experience document ${data.id}: ${error}`);
  }
};

export const updateSkills = async ({ data }) => {
  try {
    let { id, ...update } = data; // Exclude ID from data to update
    await db.collection('skills').doc(data.id).update(update);
  } catch (error) {
    console.log(`Error updating skills document ${data.id}: ${error}`);
  }
};

export const updateAwards = async ({ data }) => {
  try {
    let { id, ...update } = data; // Exclude ID from data to update
    await db.collection('awards').doc(data.id).update(update);
  } catch (error) {
    console.log(`Error updating awards document ${data.id}: ${error}`);
  }
};

export const updateCertificates = async ({ data }) => {
  try {
    let { id, ...update } = data; // Exclude ID from data to update
    await db.collection('certificates').doc(data.id).update(update);
  } catch (error) {
    console.log(`Error updating certificates document ${data.id}: ${error}`);
  }
};

export const updateProjects = async ({ data }) => {
  try {
    let { id, ...update } = data; // Exclude ID from data to update
    await db.collection('projects').doc(data.id).update(update);
  } catch (error) {
    console.log(`Error updating projects document ${data.id}: ${error}`);
  }
};

export const updateBlogs = async ({ data }) => {
  try {
    let { id, ...update } = data; // Exclude ID from data to update
    await db.collection('blogs').doc(data.id).update(update);
  } catch (error) {
    console.log(`Error updating blogs document ${data.id}: ${error}`);
  }
};

/**
 * Functions to delete document in firestore collection
 */
export const deleteEducation = async ({ id }) => {
  try {
    await db.collection('education').doc(id).delete();
  } catch (error) {
    console.log(`Error deleting education document ${id}: ${error}`);
  }
};

export const deleteExperience = async ({ id }) => {
  try {
    await db.collection('experience').doc(id).delete();
  } catch (error) {
    console.log(`Error deleting experience document ${id}: ${error}`);
  }
};

export const deleteSkill = async ({ id }) => {
  try {
    await db.collection('skills').doc(id).delete();
  } catch (error) {
    console.log(`Error deleting skills document ${id}: ${error}`);
  }
};

export const deleteAward = async ({ id }) => {
  try {
    await db.collection('awards').doc(id).delete();
  } catch (error) {
    console.log(`Error deleting award document ${id}: ${error}`);
  }
};

export const deleteCertificate = async ({ id }) => {
  try {
    await db.collection('certificates').doc(id).delete();
  } catch (error) {
    console.log(`Error deleting certificate document ${id}: ${error}`);
  }
};

export const deleteProjects = async ({ id }) => {
  try {
    await db.collection('projects').doc(id).delete();
  } catch (error) {
    console.log(`Error deleting project document ${id}: ${error}`);
  }
};

export const deleteBlogs = async ({ id }) => {
  try {
    await db.collection('blogs').doc(id).delete();
  } catch (error) {
    console.log(`Error deleting blog document ${id}: ${error}`);
  }
};
