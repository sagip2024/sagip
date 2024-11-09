import React, { createContext, useContext } from 'react';
import { getStorage, ref, listAll } from 'firebase/storage';
import firebaseApp from '../../firebaseConfig';


const FirebaseStorageContext = createContext();

export const FirebaseStorageProvider = ({ children }) => {
  const storage = getStorage(firebaseApp);

  const listFilesInFolder = async (folderPath) => {
    const folderRef = ref(storage, folderPath);
    try {
      const fileList = await listAll(folderRef);
      return fileList.items.map(item => item.fullPath);
    } catch (error) {
      console.error("Error listing folder:", error);
      return [];
    }
  };

  return (
    <FirebaseStorageContext.Provider value={{ listFilesInFolder }}>
      {children}
    </FirebaseStorageContext.Provider>
  );
};

// Custom hook for easy access to the context
export const useFirebaseStorage = () => useContext(FirebaseStorageContext);
