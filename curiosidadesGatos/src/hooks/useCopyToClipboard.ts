export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error('Error al copiar: ', err);
    });
  };
  


// import { useState } from 'react';

// const useCopyToClipboard = () => {
//   const [isCopied, setIsCopied] = useState(false);

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text)
//       .then(() => {
//         setIsCopied(true);
//       })
//       .catch((err) => {
//         console.error('Error al copiar: ', err);
//         setIsCopied(false); // O manejar el error de alguna otra forma
//       });
//   };

//   return { isCopied, copyToClipboard };
// };

// export default useCopyToClipboard;
