import React, { useState, createContext, useEffect } from 'react';
import { getController, updateController, deleteController, createController } from '../firestore';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [appData, setAppData] = useState({});

  const fetchData = async () => {
    try {
      const education = await getController({ collection: 'education' });
      const experience = await getController({ collection: 'experience' });
      const skills = await getController({ collection: 'skills' });
      const awards = await getController({ collection: 'awards' });
      const certificates = await getController({ collection: 'certificates' });
      const projects = await getController({ collection: 'projects' });
      const blogs = await getController({ collection: 'blogs' });
      let appData = {
        education,
        experience,
        skills,
        awards,
        certificates,
        projects,
        blogs,
      };
      sessionStorage.setItem('app_data', JSON.stringify(appData));
      return appData;
    } catch (error) {
      throw error;
    }
  };

  /**
   * Update state with newly created document and then update appData state and session storage
   * This is to reduce the number of GET requests to Firestore.
   * @param {object} data e.g. {univeristy: 'Curtin', major: 'Engineering', course: 'Software'}
   * @param {string} collection e.g. 'education'
   */
  const onCreate = async ({ data, collection }) => {
    try {
      let newDoc = await createController({ data, collection });
      let newData = {
        ...appData,
        [collection]: [...appData[collection], newDoc],
      };
      setAppData(newData);
      sessionStorage.setItem('app_data', JSON.stringify(newData));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  /**
   * Update state with deleted document and then update appData state and session storage
   * This is to reduce the number of GET requests to Firestore.
   * @param {object} data e.g. {id:'123', name: 'Adrian'}
   * @param {string} collection e.g. 'education'
   */
  const onUpdate = async ({ data, collection }) => {
    try {
      let updatedDoc = await updateController({ data, collection });
      let updatedData = appData[collection].map((el) =>
        el.id === updatedDoc.id ? updatedDoc : el
      );
      let newData = {
        ...appData,
        [collection]: [...updatedData],
      };
      setAppData(newData);
      sessionStorage.setItem('app_data', JSON.stringify(newData));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  /**
   * Update state with deleted document and then update appData state and session storage
   * This is to reduce the number of GET requests to Firestore.
   * @param {object} data e.g. {id:'123', name: 'Adrian'}
   * @param {string} collection e.g. 'education'
   */
  const onDelete = async ({ data, collection }) => {
    try {
      await deleteController({ id: data.id, collection, fileLoc: data.fileLocation });
      let array = appData[collection].filter((item) => item.id !== data.id);
      let newData = {
        ...appData,
        [collection]: [...array],
      };
      setAppData(newData);
      sessionStorage.setItem('app_data', JSON.stringify(newData));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    // If app data in session storage, no need to fetch data from Firestore again until session
    // storage is cleared on session closure. This minimizes the number of GET requests to Firestore
    // because website data isn't updated regularly.
    let appData = sessionStorage.getItem('app_data');
    if (!appData) {
      fetchData()
        .then((data) => setAppData(data))
        .catch((error) => {
          console.error(error);
        });
    } else {
      setAppData(JSON.parse(appData));
    }
  }, []);

  return (
    <DataContext.Provider value={{ appData, onDelete, onUpdate, onCreate }}>
      {children}
    </DataContext.Provider>
  );
};
