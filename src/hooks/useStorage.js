import { useState, useEffect } from 'react';
import { storage } from '../firebase';

const useStorage = ({ file, folderLocation }) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (file) {
      let fileRef = folderLocation ? `${folderLocation}${file.name}` : file.name;
      const storageRef = storage.ref(fileRef);
      storageRef.put(file).on(
        'state_changed',
        (snapshot) => {
          let progressPercentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressPercentage);
        },
        (error) => {
          setError(error);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          setUrl(url);
        }
      );
    }
    // eslint-disable-next-line
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
