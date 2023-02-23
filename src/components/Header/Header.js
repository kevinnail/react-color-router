import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <ul className="header">
      <li className={'left'}>
        <NavLink to={`/RGB/123/234/142`}>Light Green</NavLink>
      </li>
      <li className={'middle'}>
        <NavLink to={`/RGB/231/034/022`}>Red</NavLink>
      </li>
      <li className={'right'}>
        <NavLink to={`/RGB/005/001/152`}>Dark Blue</NavLink>
      </li>
    </ul>
  );
}
