import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '../../store/comments';
import './CommentsView.css';

const CommentBox = ({ scrapId, userId }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    const handleSubmitComment = async (e) => {
        e.preventDefault();

        const newComment = {
            scrapId,
            userId,
            reply: 0,
            content: comment
        };

        const errors = [];

        if (!comment) errors.push("You can't leave an empty comment!");

        setValidationErrors(errors);

        if (!errors.length) {
            const submittedComment = await dispatch(createComment(newComment));
            setComment('');
        };
    };

    const handleCancelComment = () => {

    };

    return (
        <div className='comment-block'>
            <form className='new-comment-form'>
                <textarea
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    id='new-comment-textarea'
                    placeholder='Add a new comment...'
                />
            </form>
            <div className='new-comment-buttons'>
                <button onClick={handleSubmitComment}>Submit</button>
                <button onClick={handleCancelComment}>Cancel</button>
            </div>
        </div>
    )

};

export default CommentBox;
