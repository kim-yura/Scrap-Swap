import { io } from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { loadConvos, loadChats, createChat } from '../../store/chats';
import { fetchUsers } from '../../store/session';

import './Chat.css';

let socket;

const Chat = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { convoId } = useParams();

    const [messages, setMessages] = useState([]);
    const [chatInput, setChatInput] = useState('');
    const [chatInputPlaceholder, setChatInputPlaceholder] = useState('Enter a message...');
    const [renderedChats, setRenderedChats] = useState([]);

    const sessionUser = useSelector(state => state.session.user);

    useEffect(async () => {
        dispatch(loadConvos(sessionUser.id));
        dispatch(loadChats());
        dispatch(fetchUsers());

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
    const allUsers = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        const convosArr = [];
        const convoIdArr = [];
        convos?.forEach(convo => {
            if (convo[0].includes(sessionUser.id)) {
                if (!convoIdArr.includes(convo[0])) {
                    convoIdArr.push(convo[0]);
                    convosArr.push(convo);
                };
            };
        });
        setRenderedChats(convosArr);
    }, [convos]);
    const allChats = useSelector((state) => {
        return Object.values(state.chats);
    });
    const usersChats = [];
    allChats.forEach(chat => {
        if (chat.convo_id?.includes(sessionUser.id)) {
            usersChats.push(chat);
        };
    });

    const currentChatMessages = [];
    usersChats.forEach(chat => {
        if (chat.convo_id === convoId) {
            currentChatMessages.push(chat);
        }
    });

    const updateChatInput = (e) => {
        setChatInput(e.target.value);
    };

    const changeMessageFocus = async (e) => {
        const convoUsername = e.target.innerText;
        let convoId = '';
        usersChats.forEach(chat => {
            if (chat.user.username === convoUsername) {
                convoId = chat.convo_id;
            };
        });
        history.push(`/chats/${convoId}`);
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
                {renderedChats.map((convo) => {
                    const convoParticipants = convo[0].split('-');
                    let convoPartnerId;
                    convoParticipants.forEach((id) => {
                        if (id !== sessionUser.id) {
                            convoPartnerId = id;
                        };
                    });

                    if (allUsers) {

                        const convoPartner = allUsers[convoPartnerId];
                        console.log(convoPartner);
                        console.log(convoPartnerId);
                        return (
                            <div className='chat-sidebar-row'
                                id={convoId === convo[0] ? 'chat-selected' : ''}
                                key={convo[0]}
                                onClick={changeMessageFocus}>
                                <img src={convo[1].profile_pic_url} alt='user profile' />
                                <p id={convo[0]}>{convo[1].username}</p>
                            </div>
                        )
                    }
                })}

            </div>

            <div className='active-chat-window'>
                <div className='active-chat-messages' id='active-window'>
                    {messages.map((message, idx) => (
                        <div key={idx}>{`${message.user}: ${message.msg}`}</div>
                    ))}
                    {currentChatMessages &&
                        currentChatMessages.map((chat, idx) => {
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
                                        <div className='chat-otherUser' key={idx}>
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
