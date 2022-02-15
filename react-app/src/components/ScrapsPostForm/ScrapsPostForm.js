import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createScrap } from '../../store/scraps';

import './ScrapsPostForm.css';

const ScrapsPostForm = () => {
    window.scrollTo(0,0);

    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state.session.user.id);

    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState('');
    const [imageStatus, setImageStatus] = useState('Upload');
    const [yarnWeightId, setYarnWeightId] = useState(1);
    const [fiberContent, setFiberContent] = useState('');
    const [yardage, setYardage] = useState(0);
    const [allergens, setAllergens] = useState('');
    const [swapTargetId, setSwapTargetId] = useState(1);
    const [textContent, setTextContent] = useState('');

    const [validationErrors, setValidationErrors] = useState([]);

    // --------------- //

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

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div className='new-scrap-background'>
            <form className='new-scrap-form' onSubmit={handleSubmit}>

                <div className='form-errors'>
                    {validationErrors.length > 0 &&
                        validationErrors.map(error =>
                            <p className='form-error' key={error}>
                                {error}
                            </p>)}
                </div>

                <div className='form-inputs'>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        id='title'
                        type='text'
                        placeholder='Enter a title for your Scrap'
                    />
                    <label>
                        Scrap image
                        {imageURL ? <img src={imageURL} alt='Scrap' /> : ''}
                        <input
                            type='file'
                            accept='image/*'
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        <button onClick={(e) => uploadImage(e, image, setImageURL, setImageStatus)}>
                            {imageStatus}
                        </button>
                    </label>
                </div>
            </form>
        </div>
    )

};

export default ScrapsPostForm;
