import React, {useState} from "react";
import {Button, Input, MessageList} from "react-chat-elements";
import 'react-chat-elements/dist/main.css';
import './Engage.css'

function Engage() {

    const receiveMessageFromParent = (messageText) => {
        // Create a new message object received from the child component
        const newMessage = {
            position: 'left', // Assuming messages from the child are on the left
            type: 'text',
            text: messageText,
            date: new Date(),
        };

        // Update the messages state with the new message
        setMessages([...messages, newMessage]);
    };


    const [messages, setMessages] = useState([
        {
            position: 'right',
            type: 'text',
            text: 'Hello, I\'m Shivam,and I\'m looking for a mentor in backend software development',
            date: new Date(),
        }, {
            position: 'right',
            type: 'text',
            text: 'I have some experience with HTML, CSS, and JavaScript, but I want to deepen my knowledge and build enterprise-world projects',
            date: new Date(),
        },
        {
            position: 'right',
            type: 'text',
            text: 'Looking forward to your mentorship',
            date: new Date(),
        },
        {
            position: 'left',
            type: 'text',
            text: 'Hello Shivam, I\'m Sahil ,I have 7+ years experience of backend development.',
            date: new Date(),
        }, {
            position: 'left',
            type: 'text',
            text: 'I\'d be happy to mentor you and help you with your web development journey.',
            date: new Date(),
        },
        {
            position: 'left',
            type: 'text',
            text: 'I\'ll guide you with a sample project, please go through the requirements once.',
            date: new Date(),
        },
        {
            position: 'left',
            type: 'text',
            text: 'https://www.drive.google.com/sahil_445/initialSetup.docx',
            date: new Date(),
        }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSendClick = () => {
        // Get the input value from the state (inputValue) and send the message
        const messageText = inputValue;

        // Create a new message object
        const newMessage = {
            position: 'right',
            type: 'text',
            text: messageText,
            date: new Date(),
        };

        // Update the messages state with the new message
        setMessages([...messages, newMessage]);

        // Clear the input field by updating inputValue state
        setInputValue('');

        // Pass the message to the EngageResponse component
        receiveMessageFromParent(messageText);
    };

    const receiveMessageFromChild = (messageText) => {
        // Create a new message object received from the child component
        const newMessage = {
            position: 'left', // Assuming messages from the child are on the left
            type: 'text',
            text: messageText,
            date: new Date(),
        };

        // Update the messages state with the new message
        setMessages([...messages, newMessage]);
    };

    return (
        <div>
            <h2>Demo Engagement Page</h2>
            <MessageList
                className="message-list"
                lockable={true}
                toBottomHeight={'100%'}
                dataSource={messages}
            />
            <div className="input-container">
                <Input
                    placeholder='Type here...'
                    multiline={true}
                    value={inputValue}
                    rightButtons={
                        <Button
                            color='white'
                            backgroundColor='black'
                            text='Send'
                            onClick={handleSendClick} // Handle the send button click
                        />
                    }
                    onChange={(event) => setInputValue(event.target.value)} // Update inputValue state
                />
            </div>
            {/* Pass the callback function to the child component */}
            {/*<EngageResponse onMessageReceived={receiveMessageFromChild} />*/}
        </div>
    );
}

export default Engage;
