import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../store/session';

import ChatSidebar from './ChatSidebar';
import ChatActiveWindow from './ChatActiveWindow';

import './Chat.css';

const Chat = () => {

    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    useEffect(async () => {
        dispatch(fetchUsers());
    }, []);
    const allUsers = useSelector((state) => {
        return state.session;
    });

    return (
        <div className='chat-page'>
            <ChatSidebar
                sessionUser={sessionUser} allUsers={allUsers} />
            <ChatActiveWindow />
        </div>
    )
};

export default Chat;
