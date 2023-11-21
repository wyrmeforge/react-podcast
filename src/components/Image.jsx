import React from 'react';

const Image = ({ src, alt, className }) => {
  const baseUrl = 'http://localhost:1337';
  const url = src.startsWith('/src') ? src : `${baseUrl}${src}`;

  return <img className={className} src={url} alt={alt} />;
};

export default Image;
