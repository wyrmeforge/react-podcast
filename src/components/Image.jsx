import React from 'react';

const baseUrl = 'http://localhost:1337';

const Image = ({ src, alt, className }) => {
  const url = src.startsWith('/src') ? src : `${baseUrl}${src}`;

  return <img className={className} src={url} alt={alt} />;
};

export default Image;
