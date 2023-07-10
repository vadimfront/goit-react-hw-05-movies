const isEmptyObject = obj => {
  return Object.keys(obj).length === 0;
};

const truncateText = (maxLength, text) => {
  if (!text.length) return;
  if (text.length > maxLength) {
    const truncatedText = text.substring(0, maxLength) + '...';
    return truncatedText;
  }
};

export { isEmptyObject, truncateText };
