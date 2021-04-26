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
