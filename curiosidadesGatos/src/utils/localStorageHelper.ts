interface Curiosity {
    fact: string;
    imageUrl: string;
  }
  
  const LOCAL_STORAGE_KEY = 'cat_curiosities';
  
  export const saveCuriosity = (curiosity: Curiosity) => {
    const current = getSavedCuriosities();
    current.push(curiosity);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(current));
  };
  
  export const getSavedCuriosities = (): Curiosity[] => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Error parsing saved curiosities', error);
        return [];
      }
    }
    return [];
  };
  