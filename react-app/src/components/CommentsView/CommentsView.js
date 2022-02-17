import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadAllComments, editComment, deleteComment } from '../../store/comments';
import CommentBox from './CommentBox';
import ReplyBox from './ReplyBox';
import EditDeleteBox from './EditDeleteBox';
import './CommentsView.css';

const CommentsView = ({ scrapId }) => {

    const dispatch = useDispatch();

    const userId = useSelector(state => {
        return state.session.user?.id || ''
    });

    useEffect(() => {
        dispatch(loadAllComments());
    }, []);

    const allComments = useSelector(state => {
        return state.comments
    });
    const filteredCommentsArr = Object.values(Object.values(allComments).filter(comment => comment.scrapId === parseInt(scrapId)));

    return (
        <div className='comment-view-body'>
            <h3 className='comment-view-header'>Comments</h3>
            {filteredCommentsArr ?
                // --- Display Comments --- //
                filteredCommentsArr.map((comment, idx) => {
                    // --- Display comments that are not replies --- //
                    if (comment.reply === 0) {
                        const repliesToComment = Object.values(Object.values(allComments).filter(replyComment => replyComment.reply === comment.id));
                        const replyId = comment.id;
                        return (
                            <div className='comment-block' key={idx}>
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
                                        {comment.user.id === userId ?
                                            <EditDeleteBox allComments={allComments} commentId={comment.id} />
                                            : ''}
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
                                                    {reply.user.id === userId ?
                                                        <EditDeleteBox allComments={allComments} commentId={reply.id} />
                                                        : ''}
                                                </div>
                                            </div>
                                        )
                                    })
                                    : 'no replies for this comment'}
                                {userId ?
                                    <ReplyBox scrapId={scrapId} userId={userId} replyId={replyId} />
                                    : ''}
                            </div>
                        )
                    }
                })
                : ''}
            {userId ?
                <CommentBox scrapId={scrapId} userId={userId} />
                : ''}
        </div>
    )

}

export default CommentsView;
