import React, { useState } from 'react';

const ImageWithFallback = ({ src, fallback, alt, className, width, height }) => {
  const [current, setCurrent] = useState(src);
  return (
    <img
      src={current}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => {
        if (fallback && current !== fallback) setCurrent(fallback);
      }}
    />
  );
};

export default ImageWithFallback;
