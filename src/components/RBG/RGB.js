import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound.js';
import './RGB.css';

export default function RGB() {
  const { R, G, B } = useParams();

  if (isNaN(R) || isNaN(G) || isNaN(B)) {
    return <NotFound />;
  }

  return (
    <div className="RGB" style={{ backgroundColor: `rgb(${R},${G},${B})` }}>
      {`RGB(${R}, ${G}, ${B})`}
    </div>
  );
}
