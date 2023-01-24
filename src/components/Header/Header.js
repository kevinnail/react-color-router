import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
export default function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink to={`/RGB/123/234/142`}>123/234/142</NavLink>
      </li>
      <li>
        {' '}
        <NavLink to={`/RGB/231/034/022`}>231/034/022</NavLink>
      </li>
      <li>
        {' '}
        <NavLink to={`/RGB/005/001/452`}>005/001/452</NavLink>
      </li>
    </ul>
  );
}
