import React from 'react';
import { useParams } from 'react-router-dom';
import './RGB.css';

export default function RGB() {
  const { R, G, B } = useParams();
  console.log('RGB', R, G, B);

  return (
    <div className="RGB" style={{ backgroundColor: `rgb(${R},${G},${B})` }}>
      {`RGB(${R}, ${G}, ${B})`}
    </div>
  );
}
