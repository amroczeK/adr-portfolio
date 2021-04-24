import React, { useState, createContext, useEffect } from 'react';
import {
  getEducation,
  getExperience,
  getSkills,
  getAwards,
  getCertificates,
  getProjects,
  getBlogs,
} from './firestore';
import appData from './data.json';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

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
