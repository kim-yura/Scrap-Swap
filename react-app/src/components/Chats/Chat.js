import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { loadUsersConversations, loadConversation, createConversation } from '../../store/conversations';
import { loadUsersChats } from '../../store/chats';
import { fetchUsers } from '../../store/users';

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
        dispatch(loadUsersChats(sessionUser.id));
        dispatch(fetchUsers());
    }, []);

    const usersChats = useSelector(state => {
        return state.chats;
    });
    const users = useSelector(state => {
        return Object.values(state.users);
    });

    useEffect(() => {
        const convoNames = [];
        const convos = [];
        Object.values(usersChats).forEach(chat => {
            if (!convoNames.includes(chat.conversationName)) {
                convoNames.push(chat.conversationName);
                const participants = chat.conversationName.split('c');
                let partnerId;
                participants.forEach(ele => {
                    if (ele && parseInt(ele) !== parseInt(sessionUser.id)) {
                        partnerId = ele;
                    };
                });
                let partner;
                if (users) {
                    partner = users[partnerId - 1];
                };
                convos.push([chat, partner]);
            };
        });
        setRenderedConvos(Object.values(convos));
    }, [usersChats])

    // useEffect(() => {
    //     const convoNames = [];
    //     const convos = [];
    //     Object.values(usersConversations).forEach(convo => {
    //         if (!convoNames.includes(convo.conversationName) && convo.user.id !== sessionUser.id) {
    //             convoNames.push(convo.conversationName);
    //             convos.push(convo);
    //         };
    //     });
    //     setRenderedConvos(convos);
    // }, [usersConversations]);

    const handleChatFocus = (e) => {
        history.push(`/inbox/${e.target.id}`);
    };

    return (
        <div className='chat-page'>
            <div className='chat-sidebar'>
                {renderedConvos && renderedConvos.map((convo, idx) => {
                    return (
                        <div
                            key={idx}
                            onClick={handleChatFocus}
                            id={convo[0].conversationName}
                            className={conversationName ?
                                conversationName === convo[0].conversationName ? 'chat-sidebar-selected-row'
                                    : 'chat-sidebar-row'
                                : 'chat-sidebar-row'}>
                            <img src={convo[1].profile_pic_url} alt='user profile' />
                            <p>{convo[1].username}</p>
                        </div>
                    )
                })}
            </div>

            <ChatActive />
        </div>
    )
};

export default Chat;
