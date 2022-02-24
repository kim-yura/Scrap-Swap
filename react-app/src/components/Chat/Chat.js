import { io } from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadConvos, loadChats, createChat } from '../../store/chats';

import './Chat.css';

let socket;

const Chat = () => {

    const dispatch = useDispatch();

    const { convoId } = useParams();

    const [messages, setMessages] = useState([]);
    const [chatInput, setChatInput] = useState('');
    const [chatInputPlaceholder, setChatInputPlaceholder] = useState('Enter a message...');
    const [renderedChats, setRenderedChats] = useState([]);

    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(loadConvos(sessionUser.id));
        dispatch(loadChats(convoId));

        const activeWindow = document.getElementById('active-window');
        activeWindow.scrollTop = activeWindow.scrollHeight;

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


    const convos = useSelector((state) => {
        return state.chats.usersConvos;
    });
    console.log(convos);

    // useEffect(() => {
    //     const uniqueConvos = [];
    //     convos.forEach(convo => {
    //         const convoId = convo[0];
    //         if (!uniqueConvos.includes(convoId)) {
    //             uniqueConvos.push([convoId, convo[1]])
    //         }
    //     })
    //     console.log(uniqueConvos);
    // })

    const chats = useSelector((state) => {
        return Object.values(state.chats);
    });

    const updateChatInput = (e) => {
        setChatInput(e.target.value);
    };

    const sendChat = async (e) => {
        e.preventDefault();

        if (!chatInput.length) {
            setChatInputPlaceholder("You can't send an empty message!");
        } else {
            socket.emit('chat', { user: sessionUser.username, msg: chatInput });
            setChatInput('');

            await dispatch(createChat({
                convoId,
                userId: sessionUser.id,
                message: chatInput
            }))
                .then(dispatch(loadChats(convoId)));
        };
    };

    return (sessionUser && (
        <div className='chat-page'>
            <div className='chat-sidebar-container'>


                {convos &&
                    convos.map((convo) => {
                        <>{convo[0]}</>
                    })
                }
            </div>

            <div className='active-chat-window'>
                <div className='active-chat-messages' id='active-window'>
                    {messages.map((message, idx) => (
                        <div key={idx}>{`${message.user}: ${message.msg}`}</div>
                    ))}
                    {chats &&
                        chats.map((chat, idx) => {
                            if (chat.convo_id) {
                                if (chat.user_id === sessionUser.id) {
                                    return (
                                        <div
                                            className='chat-sessionUser'
                                            key={idx}>
                                            {`${chat.message}`}
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className='chat-otherUser'>
                                            <img
                                                src={chat.user.profile_pic_url}
                                                className='chat-user-pic' />
                                            <div
                                                className='chat-otherUser-message'
                                                key={idx}>
                                                {`${chat.message}`}
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        })}
                </div>
                <form onSubmit={sendChat}>
                    <textarea
                        value={chatInput}
                        onChange={updateChatInput}
                        placeholder={chatInputPlaceholder}
                    />
                    <button type='submit'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    ))
};

export default Chat;
