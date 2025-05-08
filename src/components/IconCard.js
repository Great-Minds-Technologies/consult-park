import React from 'react';
import './IconCard.css'; // Assuming you have a CSS file for styling

function IconCard({ icon, title, description}) {
  return (
    <div className="value-card">
      <div>{icon}</div>
      <div>
        <div className="value-title">{title}</div>
            <p>{description}</p>
      </div>
    </div>
  );
}
export default IconCard;