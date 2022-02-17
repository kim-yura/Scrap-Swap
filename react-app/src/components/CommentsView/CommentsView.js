import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadAllComments } from '../../store/comments';
import './CommentsView.css';

const CommentsView = ({ scrapId }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllComments());
    }, []);

    const allComments = useSelector(state => {
        return state.comments
    });
    const filteredCommentsArr = Object.values(Object.values(allComments).filter(comment => comment.scrapId === parseInt(scrapId)));

    const [showCommentForm, setShowCommentForm] = useState(false);
    const [showReplyForm, setShowReplyForm] = useState(false)
    const [comment, setComment] = useState('');
    const [reply, setReply] = useState('');


    return (
        <div className='comment-view-body'>
            <h3 className='comment-view-header'>Comments</h3>
            {filteredCommentsArr ?
                // --- Display Comments --- //
                filteredCommentsArr.map((comment, idx) => {
                    // --- Display comments that are not replies --- //
                    if (comment.reply === 0) {
                        const repliesToComment = Object.values(Object.values(allComments).filter(replyComment => replyComment.reply === comment.id));
                        return (
                            <div className='comment-block'>
                                <div className='comment'>
                                    <Link to={`/users/${comment.user.id}`}>
                                        <img className='comment-profile-pic' alt='User' src={comment.user.profilePicURL} />
                                    </Link>
                                    <div className='comment-text'>
                                        <div className='comment-user'>
                                            <Link to={`/users/${comment.user.id}`}>{comment.user.username}</Link>
                                        </div>
                                        <div className='comment-content'>
                                            {comment.content}
                                        </div>
                                    </div>
                                </div>
                                {repliesToComment ?
                                    repliesToComment.map((reply, idx) => {
                                        return (
                                            <div className='reply' key={idx}>
                                                <Link to={`/users/${reply.user.id}`}>
                                                    <img className='comment-profile-pic' alt='User' src={reply.user.profilePicURL} />
                                                </Link>
                                                <div className='comment-text'>
                                                    <div className='comment-user'>
                                                        <Link to={`/users/${reply.user.id}`}>{reply.user.username}</Link>
                                                    </div>
                                                    <div className='comment-content'>
                                                        {reply.content}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    : 'no replies for this comment'}
                            </div>
                        )
                    }
                })

                // --- Display Empty Comment Container --- //
                : ''}

        </div>
    )

}

export default CommentsView;
