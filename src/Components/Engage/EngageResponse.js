import React, { useState } from "react";

function EngageResponse({ onMessageReceived }) {
    const [responseText, setResponseText] = useState('');

    const handleResponseClick = () => {
        // Get the response text from the state (responseText) and send it to the parent component
        onMessageReceived(responseText);

        // Clear the response input field by updating responseText state
        setResponseText('');
    };

    return (
        <div>
            <p>Child Component for Responses</p>
            <input
                type="text"
                placeholder='Type your response...'
                value={responseText}
                onChange={(event) => setResponseText(event.target.value)} // Update responseText state
            />
            <button onClick={handleResponseClick}>Send Response</button>
        </div>
    );
}

export default EngageResponse;
