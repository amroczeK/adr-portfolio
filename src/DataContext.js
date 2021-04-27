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

  const fetchData = async () => {
    try {
      const education = await getEducation();
      const experience = await getExperience();
      const skills = await getSkills();
      const awards = await getAwards();
      const certificates = await getCertificates();
      const projects = await getProjects();
      const blogs = await getBlogs();
      let appData = {
        education,
        experience,
        skills,
        awards,
        certificates,
        projects,
        blogs,
      };
      console.log(appData);
      return appData;
    } catch (error) {
      throw error;
    }
  };

  const onDelete = () => {
    fetchData()
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return <DataContext.Provider value={{ data, onDelete }}>{children}</DataContext.Provider>;
};
