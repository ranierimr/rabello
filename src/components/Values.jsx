import React from 'react';
import './Values.css';
import valuesData from '../data/values';

function Values({ title }) {
  return (
    <div className="content values">
      <h2>{title}</h2>
      <ul>
        {valuesData.map((item) => (
          <li>
            <p>
              <strong className="title">{item.title}</strong>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Values;
