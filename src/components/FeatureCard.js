// src/components/FeatureCard.jsx
import '../components/FeatureCard.css';

const FeatureCard = ({ name, sub }) => {
  return (
    <div className="feature-card">
    
      <div className="feature-content">
        <h3>{name}</h3>
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
