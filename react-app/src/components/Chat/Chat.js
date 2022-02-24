import { io } from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

let socket;

const Chat = () => {

    const [messages, setMessages] = useState([]);
    const [chatInput, setChatInput] = useState('');
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        // create websocket/connect
        socket = io();

        // listen for chat events
        socket.on('chat', (chat) => {
            // when we receive a chat, add it to our messages array in state
            setMessages(messages => [...messages, chat]);
        });

        // when component unmounts, disconnect
        return (() => {
            socket.disconnect();
        })
    }, []);

    const updateChatInput = (e) => {
        setChatInput(e.target.value);
    };

    const sendChat = (e) => {
        e.preventDefault();
        // emit a message
        socket.emit('chat', { user: sessionUser.username, msg: chatInput });
        setChatInput('');
    };

    return (sessionUser && (
        <div>
            <div>
                {messages.map((message, idx) => (
                    <div key={idx}>
                        {`${message.user}: ${message.msg}`}
                    </div>
                ))}
            </div>
            <form onSubmit={sendChat}>
                <input
                    value={chatInput}
                    onChange={updateChatInput}
                />
                <button type='submit'>
                    Send
                </button>
            </form>
        </div>
    ))
};

export default Chat;
