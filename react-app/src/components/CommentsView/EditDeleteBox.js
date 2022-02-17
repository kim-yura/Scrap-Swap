import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editComment, deleteComment } from '../../store/comments';
import './CommentsView.css';

const EditDeleteBox = ({ allComments, commentId }) => {
    const dispatch = useDispatch();
    const thisComment = (Object.values(allComments).filter(theComment => theComment.id === commentId))[0].content;
    const [comment, setComment] = useState(thisComment);
    const [showForm, setShowForm] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);

    const handleToggleForm = () => {
        setShowForm(true);
    };

    const handleSubmitEdit = async () => {
        const editedComment = {
            id: commentId,
            content: comment
        };

        const errors = [];

        if (!comment) errors.push("You can't leave an empty comment!");

        setValidationErrors(errors);

        if (!errors.length) {
            const submittedComment = await dispatch(editComment(editedComment));
            setComment('');
            setShowForm(false);
        };

    };

    const handleCancelEdit = () => {
        setShowForm(false);
    };

    return (
        <div>
            {showForm ?
                <>
                    <form className='edit-comment-form'>
                        <textarea
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                            id='new-reply-textarea'
                            placeholder='Reply to this comment...'
                        />
                    </form>
                    <div className='new-comment-buttons'>
                        <button onClick={handleSubmitEdit}>Submit</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                    </div></>
                :
                <div className='edit-delete-buttons'>
                    <button onClick={handleToggleForm}>Edit Comment</button>
                    <button>Delete Comment</button>
                </div>
            }
        </div>
    )
};

export default EditDeleteBox;
