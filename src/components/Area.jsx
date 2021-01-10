import React from 'react';
import './Area.css';
import areaData from '../data/area';

function Area({ title }) {
  return (
    <div className="content area">
      <h2>{title}</h2>
      <ul>
        {areaData.map((item) => (
          <li>
            <p>
              <strong classname="title">{item.title}</strong>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Area;
