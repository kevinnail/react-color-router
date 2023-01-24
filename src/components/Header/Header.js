import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink className={'left'} to={`/RGB/123/234/142`}>
          RGB: 123/234/142
        </NavLink>
      </li>
      <li>
        <NavLink className={'middle'} to={`/RGB/231/034/022`}>
          RBG: 231/034/022
        </NavLink>
      </li>
      <li>
        <NavLink cto={`/RGB/005/001/452`}>RGB: 005/001/452</NavLink>
      </li>
    </ul>
  );
}
