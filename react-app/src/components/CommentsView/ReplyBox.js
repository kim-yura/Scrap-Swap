import React, { useState } from 'react';
import './CommentsView.css';

const ReplyBox = () => {
    const [comment, setComment] = useState('');

    const handleSubmitReply = () => {

    };

    const handleCancelReply = () => {

    };

    return (
        <div>
            <form className='new-reply-form'>
                <textarea
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
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
