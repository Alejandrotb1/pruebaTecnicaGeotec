export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error('Error al copiar: ', err);
    });
  };
  