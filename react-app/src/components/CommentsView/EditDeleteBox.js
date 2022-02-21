import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { editComment, deleteComment, loadAllComments } from '../../store/comments';
import './CommentsView.css';

const EditDeleteBox = ({ scrapId, allComments, commentId }) => {
    const dispatch = useDispatch();
    const thisComment = (Object.values(allComments).filter(theComment => theComment.id === commentId))[0].content;
    const [comment, setComment] = useState(thisComment);
    const [showForm, setShowForm] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        dispatch(loadAllComments());
    }, [dispatch]);

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
        setComment(comment);
    };

    const handleDelete = async () => {
        const deletedComment = {
            id: commentId
        };
        const yeetedComment = await dispatch(deleteComment(deletedComment));
        setComment('');
        setShowForm(false);
    };

    const handleCancelEdit = () => {
        setShowForm(false);
    };

    return (
        <div>
            {showForm ?
                <>
                    <form className='edit-comment-textarea'>
                        <textarea
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                            id='edit-comment-textarea'
                            placeholder={validationErrors[0] ? validationErrors[0] : 'Reply to this comment...'}
                        />
                    </form>
                    <div className='new-comment-buttons'>
                        <button onClick={handleSubmitEdit}>Submit</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                    </div></>
                :
                <div className='edit-delete-buttons'>
                    <button onClick={handleToggleForm}>Edit Comment</button>
                    <button onClick={handleDelete}>Delete Comment</button>
                </div>
            }
        </div>
    )
};

export default EditDeleteBox;
