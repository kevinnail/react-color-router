import { useEffect, useState } from 'react';

export function useRGB(R, G, B) {
  const [error, setError] = useState('');
  const [rbg, setRbg] = useState('');
  useEffect(() => {
    setRbg(R, B, G);
  });
}
