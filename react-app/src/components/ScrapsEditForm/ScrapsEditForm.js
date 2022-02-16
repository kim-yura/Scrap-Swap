import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { loadAllScraps } from '../../store/scraps';

import { editScrap } from '../../store/scraps';

import './ScrapsEditForm.css';

const ScrapsEditForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(loadAllScraps());
        window.scrollTo(0, 0);
    }, []);

    const sessionUserId = useSelector(state => state.session.user.id);
    const { scrapId } = useParams();

    const allScraps = useSelector(state => {
        return state.scraps
    });

    const selectedScrap = Object.values(Object.values(allScraps).filter(scrap => scrap.id === parseInt(scrapId)))[0];
    console.log(selectedScrap);

    const [title, setTitle] = useState(selectedScrap ? selectedScrap.title : '');
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState(selectedScrap ? selectedScrap.imageURL : '');
    const [imageStatus, setImageStatus] = useState('Upload');
    const [yarnWeightId, setYarnWeightId] = useState(selectedScrap ? selectedScrap.yarnWeightId : '');
    const [fiberContent, setFiberContent] = useState(selectedScrap ? selectedScrap.fiberContent : '');
    const [yardage, setYardage] = useState(selectedScrap ? selectedScrap.yardage : '');
    const [allergens, setAllergens] = useState(selectedScrap ? selectedScrap.allergens : '');
    const [swapTargetId, setSwapTargetId] = useState(selectedScrap ? selectedScrap.swapTargetId : 0);
    const [textContent, setTextContent] = useState(selectedScrap ? selectedScrap.textContent : '');

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

        const editedScrap = {
            id: scrapId,
            title,
            imageURL,
            yarnWeightId,
            fiberContent,
            yardage,
            allergens,
            swapTargetId,
            textContent
        };
        console.log(editedScrap);

        const errors = [];

        if (!title) errors.push('Please enter a title.');
        if (title.length > 50) errors.push('Titles cannot be longer than 50 characters.');

        if (!imageURL) errors.push('Scraps need an image.');

        if (yarnWeightId === 0) errors.push('Please select a yarn weight category.');

        if (!fiberContent) errors.push('Please enter the fiber content of your Scrap.');

        if (!yardage) errors.push('Please enter the yardage of your Scrap.');
        if (yardage == 0) errors.push('You cannot swap 0 yards of yarn!');
        if (yardage < 0) errors.push('You cannot swap negative amounts of yarn!');

        if (swapTargetId === 0) errors.push('Please select a swap target.');

        setValidationErrors(errors);

        if (!errors.length) {
            const updatedScap = await dispatch(editScrap(editedScrap));
            history.push(`/scraps/${updatedScap.id}`);
        };
    }

    return (
        <div className='edit-scrap-background'>
            <form className='new-scrap-form' onSubmit={handleSubmit}>

                {validationErrors.length ?
                    <div className='form-errors'>
                        {validationErrors.length > 0 &&
                            validationErrors.map(error =>
                                <p className='form-error' key={error}>
                                    {error}
                                </p>)}
                    </div>
                    : ''}

                <div className='form-inputs'>
                    <div className='image-form'>
                        {imageURL ? 'Image successfully uploaded!' : 'Upload an image for your Scrap'}
                        {imageURL ? <img className='image' src={imageURL} alt='Scrap' /> : ''}
                        <input
                            type='file'
                            accept='image/*'
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        <button id='image-upload-button' onClick={(e) => uploadImage(e, image, setImageURL, setImageStatus)}>
                            {imageStatus}
                        </button>
                    </div>

                    <div className='form-fields'>
                        <h2>Edit Your Scrap!</h2>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            id='title'
                            type='text'
                            placeholder='Enter a title for your Scrap'
                        />
                        <select defaultValue={yarnWeightId} onChange={(e) => setYarnWeightId(e.target.value)}>
                            <option value={0}>Choose a yarn weight for your Scrap</option>
                            <option value={1} required>Thread</option>
                            <option value={2} required>Lace</option>
                            <option value={3} required>Light Fingering</option>
                            <option value={4} required>Fingering</option>
                            <option value={5} required>Sport</option>
                            <option value={6} required>DK</option>
                            <option value={7} required>Worsted</option>
                            <option value={8} required>Aran</option>
                            <option value={9} required>Bulky</option>
                            <option value={10} required>Super Bulky</option>
                            <option value={11} required>Jumbo</option>
                        </select>
                        <input
                            onChange={(e) => setFiberContent(e.target.value)}
                            value={fiberContent}
                            id='fiberContent'
                            type='text'
                            placeholder='Enter the fiber content of your Scrap'
                        />
                        <input
                            onChange={(e) => setYardage(e.target.value)}
                            value={yardage}
                            id='yardage'
                            type='number'
                            placeholder='Enter the yardage of your Scrap'
                        />
                        <input
                            onChange={(e) => setAllergens(e.target.value)}
                            value={allergens}
                            id='allergens'
                            type='text'
                            placeholder='Are there any allergens to consider? (e.g.: cat-friendly home)'
                        />
                        <select defaultValue={swapTargetId} onChange={(e) => setSwapTargetId(e.target.value)}>
                            <option value={0}>What are you swapping for?</option>
                            <option value={1} required>Trade</option>
                            <option value={2} required>Sending in exchange for postage</option>
                            <option value={3} required>Sending for free!</option>
                        </select>
                        <textarea
                            onChange={(e) => setTextContent(e.target.value)}
                            value={textContent}
                            id='textContent'
                            placeholder='Please enter any details of the Scrap swap. (e.g.: looking for specific colors, yarn weights, fiber content, allergen considerations)'
                        />
                        <button className='submit-button' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )

};

export default ScrapsEditForm;
