import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APPLICATION_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

//export const auth = firebase.auth();
export const db = firebase.firestore();

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
