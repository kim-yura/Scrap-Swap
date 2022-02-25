import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ChatSidebar = ({ renderedConvos }) => {

    const dispatch = useDispatch();

    const sessionUser = useSelector(state => {
        return state.session.user;
    });

    return (
        <div className='chat-sidebar'>
            {renderedConvos &&
                renderedConvos.map((convo, idx) => {
                    return (
                        <>
                            {convo.conversationName}
                        </>
                    )
                })}

            SIDEBAR
        </div>
    )
};

export default ChatSidebar;
