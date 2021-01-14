import React from 'react';
import './Office.css';
import officeData from '../data/office';

function Office({ title }) {
  return (
    <div className="content office">
      <h2>{title}</h2>
      <ul>
        {officeData.map((item) => (
          <li>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Office;
