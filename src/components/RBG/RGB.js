import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound.js';
import './RGB.css';

export default function RGB() {
  const { R, G, B } = useParams();

  if (
    isNaN(R) ||
    isNaN(G) ||
    isNaN(B) ||
    R < 0 ||
    R > 255 ||
    G < 0 ||
    G > 255 ||
    B < 0 ||
    B > 255 ||
    R.includes('.') ||
    G.includes('.') ||
    B.includes('.')
  ) {
    return <NotFound />;
  }

  return (
    <div className="RGB" style={{ backgroundColor: `rgb(${R},${G},${B})` }}>
      {`RGB(${R}, ${G}, ${B})`}
    </div>
  );
}
