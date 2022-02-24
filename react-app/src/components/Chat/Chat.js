import { io } from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadConvos, loadChats, createChat } from '../../store/chats';

let socket;

const Chat = () => {

    const dispatch = useDispatch();

    const { convoId } = useParams();

    const [messages, setMessages] = useState([]);
    const [chatInput, setChatInput] = useState('');
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(loadChats(convoId));

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
    }, [dispatch]);

    const chats = useSelector((state) => {
        return Object.values(state.chats);
    });

    const updateChatInput = (e) => {
        setChatInput(e.target.value);
    };

    const sendChat = (e) => {
        e.preventDefault();
        // emit a message
        socket.emit('chat', { user: sessionUser.username, msg: chatInput });
        setChatInput('');
        dispatch(createChat({
            convoId,
            userId: sessionUser.id,
            message: chatInput
        }));
        dispatch(loadChats(convoId));
    };

    return (sessionUser && (
        <div>
            <div>
                {chats &&
                    chats.map((chat, idx) => (
                        <div key={idx}>
                            {`${chat.user_id}: ${chat.message}`}
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
