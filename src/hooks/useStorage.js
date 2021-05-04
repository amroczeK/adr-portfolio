import { useState, useEffect } from 'react';
import { storage } from '../firebase';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (file) {
      const storageRef = storage.ref(file.name);
      storageRef.put(file).on(
        'state_changed',
        (snapshot) => {
          let progressPercentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progressPercentage);
          setProgress(progressPercentage);
        },
        (error) => {
          setError(error);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          console.log('url', url);
          setUrl(url);
        }
      );
    }
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
