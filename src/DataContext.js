import React, { useState, createContext, useEffect } from 'react';
import {
  getEducation,
  getExperience,
  getSkills,
  getAwards,
  getCertificates,
  getProjects,
  getBlogs,
} from './firebase';
import appData from './data.json';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  // const educationRef = db.collection('education');
  // const experienceRef = db.collection('experience');
  // const skillsRef = db.collection('skills');
  // const certificatesRef = db.collection('certificates');
  // const awardsRef = db.collection('awards');
  // const projectsRef = db.collection('projects');
  // const blogsRef = db.collection('blogs');

  // const query = educationRef.limit(25);
  // const [education] = useCollectionData(query, { idField: 'course' });

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const education = await getEducation();
    //     const experience = await getExperience();
    //     const skills = await getSkills();
    //     const awards = await getAwards();
    //     const certificates = await getCertificates();
    //     const projects = await getProjects();
    //     const blogs = await getBlogs();
    //     let appData = {
    //       education,
    //       experience,
    //       skills,
    //       awards,
    //       certificates,
    //       projects,
    //       blogs,
    //     };
    //     console.log(appData);
    //     setData(appData);
    //   } catch (error) {
    //     console.log('Fetch data error:', error);
    //   }
    // };
    // fetchData();
    setData(appData);
  }, []);

  return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
};
