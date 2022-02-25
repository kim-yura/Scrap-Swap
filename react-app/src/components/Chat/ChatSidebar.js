import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { loadConvos } from '../../store/chats';

const ChatSidebar = ({ sessionUser, allUsers }) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { convoId } = useParams();

    const [renderedChats, setRenderedChats] = useState([]);

    useEffect(() => {
        dispatch(loadConvos(sessionUser.id));
    }, [dispatch]);

    const convos = useSelector((state) => {
        return state.chats.usersConvos;
    });

    useEffect(() => {
        if (convos) {
            const convosArr = [];
            const convoIdArr = [];
            convos.forEach(convo => {
                if (!convoIdArr.includes(convo[0])) {
                    convoIdArr.push(convo[0]);
                    convosArr.push(convo);
                };
            });
            setRenderedChats(convosArr);
        };
    }, [convos]);

    const changeMessageFocus = async (e) => {
        // DO THIS!
    };

    return (
        <div className='chat-sidebar-container'>
            {renderedChats.map((convo) => {
                console.log(convo);
                const convoParticipants = convo[0].split('-');
                let convoPartnerId;
                convoParticipants.forEach((id) => {
                    if (id !== sessionUser.id) {
                        convoPartnerId = id;
                    };
                });


                console.log(allUsers)
                const convoPartner = (allUsers)[convoPartnerId];

                console.log(convoPartner)

                return (
                    <div className='chat-sidebar-row'
                        id={convoId ?
                            convoId.includes(`%${convoPartner.id}%`) ? 'chat-selected' : ''
                            : ''}
                        key={convo[0]}
                        onClick={changeMessageFocus}>
                        <img src={convoPartner?.profile_pic_url} alt='user profile' />
                    </div>
                )
            })}
        </div>

    )
};

export default ChatSidebar;
