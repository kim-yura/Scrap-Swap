import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';


import './UserEdit.css';

const UserEdit = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [username, setUsername] = useState(sessionUser ? sessionUser.username : '');
    const [profilePicURL, setProfilePicURL] = useState(sessionUser ? sessionUser.profile_pic_url : '');
    const [image, setImage] = useState(null);
    const [imageStatus, setImageStatus] = useState('Upload');
    const [bio, setBio] = useState('');

    const [validationErrors, setValidationErrors] = useState([]);

    const uploadImage = async (e, image, setter, statusSetter) => {
        e.preventDefault();
        statusSetter("Loading...");
        const formData = new FormData();
        formData.append("image", image);
        const res = await fetch('/api/images', {
            method: "POST",
            body: formData
        });
        statusSetter("Uploaded!");
        if (res.ok) {
            let data = await res.json();
            setter(data.url);
        }
    };

    const handleCancel = () => {
        history.push(`/users/${sessionUser.id}`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div className='edit-profile-background'>
            <form className='edit-profile-form' onSubmit={handleSubmit}>

                {validationErrors.length ?
                    <div className='form-errors'>
                        {validationErrors.length > 0 &&
                            validationErrors.map(error =>
                                <p className='form-error' key={error}>
                                    {error}
                                </p>)}
                    </div>
                    : ''}

                <div className='profile-image-form'>
                    <h2>Editing User Profile</h2>
                    <div className='user-form-inputs'>
                        <div className='user-image-inputs'>
                            {profilePicURL ? <img className='image' src={profilePicURL} alt='Scrap' /> : ''}
                            <input
                                type='file'
                                accept='image/*'
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                            <button id='image-upload-button' onClick={(e) => uploadImage(e, image, setProfilePicURL, setImageStatus)}>
                                {imageStatus}
                            </button>
                        </div>

                        <div className='user-text-inputs'>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                id='username'
                                type='text'
                                placeholder={sessionUser ? sessionUser.username : 'Enter a new username'}
                            />
                            <textarea
                                onChange={(e) => setBio(e.target.value)}
                                value={bio}
                                id='bio'
                                placeholder='Enter a fun bio!'
                            />
                            <button className='submit-button'>Submit</button>
                            <button className='submit-button' onClick={() => handleCancel()}>Cancel</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )

};

export default UserEdit;
