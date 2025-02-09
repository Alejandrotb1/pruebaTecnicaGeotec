export const getCatFact = async (): Promise<string> => {
    const response = await fetch('https://catfact.ninja/fact');
    if (!response.ok) {
      throw new Error('Error fetching cat fact');
    }
    const data = await response.json();
    return data.fact;
  };
  
  export const getCatImage = async (text: string): Promise<string> => {
    const response = await fetch(
      `https://cataas.com/cat/says/${encodeURIComponent(text)}`
    );
    if (!response.ok) {
      throw new Error('Error fetching cat image');
    }
    // const data = await response.json();
    // return `https://cataas.com${data.url}`;
    return response.url; 
  };
  