import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';

function Followings() {
    const [user, setUser] = useState({});
    const [followingsArr, setFollowingsArr] = useState([]);
    const { userId } = useParams();
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!userId) {
            return;
        };
        (async () => {
            const response = await fetch(`/api/users/${userId}`);
            const user = await response.json();
            setUser(user);
            setFollowingsArr(Object.values(user.following));
        })();
    }, [userId]);

    const handleBack = () => {
        history.push(`/users/${userId}`);
    };

    if (user.user === '') {
        return <Redirect to='/page-not-found' />
    };

    return (
        <div className='follow-body'>
            <div className='follow-content'>
                <h1>Users {user.username} Follows</h1>
                {followingsArr.length ?
                    followingsArr.map((follower, idx) => {
                        return (
                            <div className='follow-single-user' key={idx}>
                                <Link to={`/users/${follower.id}`}>
                                    <img className='follower-profile-pic' src={follower.profile_pic_url} alt='Follower profile' />
                                </Link>
                                <div className='follow-text'>
                                    <Link to={`/users/${follower.id}`}>
                                        <p className='follow-text'>{follower.username}</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                    : <div className='follow-none-found'>
                        This user isn't following anyone!
                    </div>
                }
                <button onClick={handleBack}>Back to User</button>
            </div>
        </div>
    )

};

export default Followings;
