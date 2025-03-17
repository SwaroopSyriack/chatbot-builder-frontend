import React from 'react';

const FeatureCard = (props) =>{
    return(
        <div 
            className="feature-card"
            style={{ 
                    backgroundImage: props.feature.bgGradient,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                >
            <h3 className="feature-title">{props.feature.title}</h3>
        </div>

    )
};

export default FeatureCard;