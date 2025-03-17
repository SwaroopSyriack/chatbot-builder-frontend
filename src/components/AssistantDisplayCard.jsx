import React from 'react';

const AssistantDisplayCard = (props) =>{
    return(
    <div className="recent-bot-item">
        <div className="bot-details-section">
            <div className="bot-info">
                <h3 className="bot-title">{props.assistant.name}</h3>
                    <p className="bot-meta">Created {props.assistant.createdAt} / Updated {props.assistant.updatedAt} by {props.assistant.author}</p>
            </div>
        </div>
        <div className="bot-stats">
            <div className="stat-group">
                    <span className="stat-label">Chats</span>
                    <span className="stat-value">{props.assistant.chats}</span>
            </div>
            <div className="stat-group">
                <span className="stat-label">Finished</span>
                <span className="stat-value">{props.assistant.finished}</span>
            </div>
            <div className="bot-actions">
                <button className="action-button stats"><i className="stats-icon"></i></button>
                <button className="action-button share"><i className="share-icon"></i></button>
                <button className="action-button edit"><i className="edit-icon"></i></button>
            </div>
        </div>
    </div>
    )
}

export default AssistantDisplayCard;