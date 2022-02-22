import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UsersFollows({ user }) {

    const [followersArr, setFollowersArr] = useState([]);
    console.log(user.followers);




    // user.followers?.forEach(async (followerId) => {
    //     const response = await fetch(`/api/users/${followerId}`);
    //     const user = await response.json();
    //     console.log(user);
    //     setFollowersArr([...followersArr, user]);
    // })
    // console.log(followersArr);

    return (
        <div className='follows-sections'>
            <div className='follows-section'>
                Users I Follow
            </div>
            <div className='follows-section'>
                My Followers
                <div className='follows-gallery'>
                    {user.followers?.map((follower, idx) => {
                        return (
                            <div className='follows-user'>
                                <Link to={`/users/${follower.id}`}>
                                    <img className='follows-user-profile' alt='User' src={follower.profile_pic_url ? follower.profile_pic_url : 'https://scrapswap.s3.amazonaws.com/logo_whitespace.png'} />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

};

export default UsersFollows;
