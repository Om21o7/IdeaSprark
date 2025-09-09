export const generateIdeaResponse = async (idea) => {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          tagline: `${idea} – The Ultimate Experience!`,
          improvement: `Consider adding a unique twist to ${idea}`,
        });
      }, 500); 
    });
  };
  