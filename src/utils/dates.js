export const formatTimestamp = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return new Date(timestamp).toLocaleDateString('en-US', options);
};
