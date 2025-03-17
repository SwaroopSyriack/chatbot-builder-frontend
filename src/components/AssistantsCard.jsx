import React from 'react';
import { useNavigate } from 'react-router-dom';


const AssistantsCard = ({assistant,renderAssistant}) =>{
  const navigate = useNavigate();

   const handleClick = () => {
    switch (assistant.name) {
      case 'FAQs':
        navigate(`/create/faq`);
        break;
      case 'Lead Gen':
        navigate(`/create/lead`);
        break;
      case 'Appointments':
        navigate(`/create/appointment`);
        break;
      default:
        // Handle default case or log an error
        console.log(`Unknown assistant type: ${assistant.type}`);
    }
  };

    return(
        
                <div  className="assistant-card"
                onClick={handleClick}>
                  {renderAssistant(assistant)}
                  <p className="assistant-name">{assistant.name}</p>
                </div>
    )
};

export default AssistantsCard;