import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '../../store/comments';
import './CommentsView.css';

const ReplyBox = ({ scrapId, userId, replyId }) => {
    const dispatch = useDispatch();
    const [reply, setReply] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    const handleSubmitReply = async (e) => {
        e.preventDefault();

        const newReply = {
            scrapId,
            userId,
            reply: replyId,
            content: reply
        };

        const errors = [];

        if (!reply) errors.push("You can't leave an empty reply!");

        setValidationErrors(errors);

        if (!errors.length) {
            const submittedComment = await dispatch(createComment(newReply));
            setReply('');
        };
    };

    const handleCancelReply = () => {
        setReply('');
    };

    return (
        <div>
            <form className='new-reply-form'>
                <textarea
                    onChange={(e) => setReply(e.target.value)}
                    value={reply}
                    id='new-reply-textarea'
                    placeholder='Reply to this comment...'
                />
            </form>
            <div className='new-comment-buttons'>
                <button onClick={handleSubmitReply}>Submit</button>
                <button onClick={handleCancelReply}>Cancel</button>
            </div>
        </div>
    )

};

export default ReplyBox;
