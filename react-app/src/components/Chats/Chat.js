import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { loadUsersConversations, loadConversation, createConversation } from '../../store/conversations';
import { loadChats, createChat } from '../../store/chats';

import ChatSidebar from './ChatSidebar';
import ChatActive from './ChatActive';

import './Chat.css';

const Chat = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { conversationName } = useParams();

    const [renderedConvos, setRenderedConvos] = useState([]);
    const [focus, setFocus] = useState('');

    const sessionUser = useSelector(state => {
        return state.session.user;
    });

    useEffect(() => {
        dispatch(loadUsersConversations(sessionUser.id));
    }, [dispatch]);

    const usersConversations = useSelector(state => {
        return state.conversations;
    });

    useEffect(() => {
        const convoNames = [];
        const convos = [];
        Object.values(usersConversations).forEach(convo => {
            if (!convoNames.includes(convo.conversationName) && convo.user.id !== sessionUser.id) {
                convoNames.push(convo.conversationName);
                convos.push(convo);
            };
        });
        setRenderedConvos(convos);
    }, [usersConversations]);

    const handleChatFocus = (e) => {
        history.push(`/inbox/${e.target.id}`);
    };

    return (
        <div className='chat-page'>
            <div className='chat-sidebar'>
                {renderedConvos && renderedConvos.map((convo, idx) => {
                    return (
                        <div
                            onClick={handleChatFocus}
                            id={convo.conversationName}
                            className={conversationName ?
                                conversationName === convo.conversationName ? 'chat-sidebar-selected-row'
                                    : 'chat-sidebar-row'
                                : 'chat-sidebar-row'}>
                            <img src={convo.user.profile_pic_url} alt='user profile' />
                            <p>{convo.user.username}</p>
                        </div>
                    )
                })}
            </div>

            <ChatActive />
        </div>
    )
};

export default Chat;